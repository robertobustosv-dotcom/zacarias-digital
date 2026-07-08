const APP_VERSION = "v0.2.0";

let story = null;
let scenes = [];
let currentScene = 0;
let isPurring = false;
let completedInteractions = new Set();

const cover = document.getElementById("cover");
const reader = document.getElementById("reader");
const startBtn = document.getElementById("startBtn");
const catButton = document.getElementById("catButton");
const purrText = document.getElementById("purrText");
const dedication = document.getElementById("dedication");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const musicBtn = document.getElementById("musicBtn");
const narrationBtn = document.getElementById("narrationBtn");

const sceneCounter = document.getElementById("sceneCounter");
const sceneTitle = document.getElementById("sceneTitle");
const sceneText = document.getElementById("sceneText");
const sceneHint = document.getElementById("sceneHint");
const rewardText = document.getElementById("rewardText");
const sceneImage = document.getElementById("sceneImage");
const placeholderScene = document.getElementById("placeholderScene");
const imagePanel = document.getElementById("imagePanel");
const hiddenObject = document.getElementById("hiddenObject");
const particleLayer = document.getElementById("particleLayer");
const versionText = document.getElementById("versionText");

async function init() {
  try {
    const response = await fetch("stories/cuento-zacarias.json");
    story = await response.json();
    scenes = story.scenes;
    dedication.textContent = story.meta.dedication;
    versionText.textContent = `Motor Zacarías ${story.meta.version}`;
  } catch (error) {
    console.error("No se pudo cargar el cuento:", error);
    scenes = [
      {
        id: "001",
        title: "Zacarías",
        text: ["No se pudo cargar el cuento.", "Revisa el archivo stories/cuento-zacarias.json"],
        image: "",
        interaction: "touch_cat",
        hint: "Toca a Zacarías."
      }
    ];
  }

  renderScene(0);
}

function renderScene(index) {
  currentScene = Math.max(0, Math.min(index, scenes.length - 1));
  const scene = scenes[currentScene];

  sceneCounter.textContent = `Escena ${currentScene + 1} de ${scenes.length} · ${APP_VERSION}`;
  sceneTitle.textContent = scene.title;
  sceneText.innerHTML = scene.text.map(line => `<p>${line}</p>`).join("");
  sceneHint.textContent = scene.hint || "";
  rewardText.textContent = completedInteractions.has(scene.id) ? "⭐ Descubrimiento logrado" : "";

  if (scene.image) {
    sceneImage.src = `assets/backgrounds/${scene.image}`;
    sceneImage.classList.remove("hidden");
    placeholderScene.classList.add("hidden");
  } else {
    sceneImage.classList.add("hidden");
    placeholderScene.classList.remove("hidden");
  }

  prevBtn.style.visibility = currentScene === 0 ? "hidden" : "visible";
  nextBtn.style.visibility = currentScene === scenes.length - 1 ? "hidden" : "visible";

  setupInteraction(scene);
}

function setupInteraction(scene) {
  hiddenObject.classList.add("hidden");
  hiddenObject.classList.remove("found");
  particleLayer.innerHTML = "";
  placeholderScene.classList.remove("cat-rub");

  imagePanel.onclick = null;
  hiddenObject.onclick = null;

  if (completedInteractions.has(scene.id)) return;

  if (scene.interaction === "touch_cat") {
    imagePanel.onclick = () => {
      placeholderScene.classList.add("cat-rub");
      playPurr();
      completeInteraction(scene.id);
      setTimeout(() => placeholderScene.classList.remove("cat-rub"), 1800);
    };
  }

  if (scene.interaction === "find_yarn") {
    hiddenObject.textContent = "🧶";
    hiddenObject.style.left = "18%";
    hiddenObject.style.top = "68%";
    hiddenObject.classList.remove("hidden");
    hiddenObject.onclick = (event) => {
      event.stopPropagation();
      hiddenObject.classList.add("found");
      completeInteraction(scene.id);
    };
  }

  if (scene.interaction === "touch_star") {
    hiddenObject.textContent = "⭐";
    hiddenObject.style.left = "74%";
    hiddenObject.style.top = "24%";
    hiddenObject.classList.remove("hidden");
    hiddenObject.onclick = (event) => {
      event.stopPropagation();
      hiddenObject.classList.add("found");
      completeInteraction(scene.id);
    };
  }

  if (scene.interaction === "falling_leaves") {
    imagePanel.onclick = () => {
      createLeaves();
      completeInteraction(scene.id);
    };
  }

  if (scene.interaction === "tap_door") {
    hiddenObject.textContent = "🚪";
    hiddenObject.style.left = "70%";
    hiddenObject.style.top = "50%";
    hiddenObject.classList.remove("hidden");
    hiddenObject.onclick = (event) => {
      event.stopPropagation();
      hiddenObject.classList.add("found");
      completeInteraction(scene.id);
    };
  }

  if (scene.interaction === "tap_truck") {
    hiddenObject.textContent = "🚚";
    hiddenObject.style.left = "60%";
    hiddenObject.style.top = "56%";
    hiddenObject.classList.remove("hidden");
    hiddenObject.onclick = (event) => {
      event.stopPropagation();
      beep();
      completeInteraction(scene.id);
    };
  }
}

function completeInteraction(sceneId) {
  completedInteractions.add(sceneId);
  rewardText.textContent = "⭐ ¡Muy bien!";

  imagePanel.classList.add("success");

  setTimeout(() => {
    imagePanel.classList.remove("success");
  }, 800);
}

function playPurr() {
  if (isPurring) return;
  isPurring = true;

  catButton.classList.add("rub");
  purrText.textContent = "Prrrrrrrr...";

  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(70, audioContext.currentTime);
    oscillator.frequency.linearRampToValueAtTime(95, audioContext.currentTime + 0.5);

    gain.gain.setValueAtTime(0.001, audioContext.currentTime);
    gain.gain.linearRampToValueAtTime(0.08, audioContext.currentTime + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1.5);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 1.6);
  } catch (error) {}

  setTimeout(() => {
    catButton.classList.remove("rub");
    purrText.textContent = "";
    isPurring = false;
  }, 1900);
}

function beep() {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(430, audioContext.currentTime);
    oscillator.frequency.linearRampToValueAtTime(520, audioContext.currentTime + 0.18);

    gain.gain.setValueAtTime(0.001, audioContext.currentTime);
    gain.gain.linearRampToValueAtTime(0.06, audioContext.currentTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.32);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.34);
  } catch (error) {}
}

function createLeaves() {
  const leaves = ["🍂", "🍁", "🍃"];
  for (let i = 0; i < 10; i++) {
    const leaf = document.createElement("span");
    leaf.className = "particle";
    leaf.textContent = leaves[i % leaves.length];
    leaf.style.left = `${10 + Math.random() * 80}%`;
    leaf.style.top = `${Math.random() * 10}%`;
    leaf.style.animationDelay = `${Math.random() * 0.6}s`;
    particleLayer.appendChild(leaf);
  }

  setTimeout(() => {
    particleLayer.innerHTML = "";
  }, 2400);
}

catButton.addEventListener("click", playPurr);

startBtn.addEventListener("click", () => {
  cover.classList.add("hidden");
  reader.classList.remove("hidden");
  renderScene(0);
});

prevBtn.addEventListener("click", () => renderScene(currentScene - 1));
nextBtn.addEventListener("click", () => renderScene(currentScene + 1));

musicBtn.addEventListener("click", () => {
  musicBtn.textContent = musicBtn.textContent === "🎵" ? "🔕" : "🎵";
});

narrationBtn.addEventListener("click", () => {
  narrationBtn.textContent = narrationBtn.textContent === "🔊" ? "🔇" : "🔊";
});

init();
