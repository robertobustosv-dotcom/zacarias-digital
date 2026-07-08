const APP_VERSION = "v0.1.0";

const scenes = [
  {
    title: "Zacarías en su hogar",
    image: "",
    text: [
      "Zacarías era un gato,",
      "que en su hermoso hogar vivía."
    ]
  },
  {
    title: "Suave como melodía",
    image: "",
    text: [
      "Amarillo su pelaje",
      "y suave como melodía."
    ]
  },
  {
    title: "Una historia para contar",
    image: "",
    text: [
      "Esta es una corta historia",
      "que contarte debería."
    ]
  },
  {
    title: "Una gran aventura",
    image: "",
    text: [
      "Si me acompañas hasta el final,",
      "te divertirás con un gatito y su valentía."
    ]
  }
];

const cover = document.getElementById("cover");
const reader = document.getElementById("reader");
const startBtn = document.getElementById("startBtn");
const catButton = document.getElementById("catButton");
const purrText = document.getElementById("purrText");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const musicBtn = document.getElementById("musicBtn");
const narrationBtn = document.getElementById("narrationBtn");

const sceneCounter = document.getElementById("sceneCounter");
const sceneTitle = document.getElementById("sceneTitle");
const sceneText = document.getElementById("sceneText");
const sceneImage = document.getElementById("sceneImage");
const placeholderScene = document.getElementById("placeholderScene");

let currentScene = 0;
let isPurring = false;

function renderScene(index) {
  currentScene = Math.max(0, Math.min(index, scenes.length - 1));
  const scene = scenes[currentScene];

  sceneCounter.textContent = `Escena ${currentScene + 1} de ${scenes.length} · ${APP_VERSION}`;
  sceneTitle.textContent = scene.title;
  sceneText.innerHTML = scene.text.map(line => `<p>${line}</p>`).join("");

  if (scene.image) {
    sceneImage.src = scene.image;
    sceneImage.classList.remove("hidden");
    placeholderScene.classList.add("hidden");
  } else {
    sceneImage.classList.add("hidden");
    placeholderScene.classList.remove("hidden");
  }

  prevBtn.style.visibility = currentScene === 0 ? "hidden" : "visible";
  nextBtn.style.visibility = currentScene === scenes.length - 1 ? "hidden" : "visible";
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

renderScene(0);
