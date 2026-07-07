const scenes = [
  {
    title: "Un hogar lleno de vida",
    mood: "warm",
    image: "assets/pages/page-1.webp",
    text: [
      "Autora: Claudia Oliva.",
      "Editado por Roberto Bustos.",
      "Para Samu."
    ],
    duration: 9000
  },
  {
    title: "La puerta se abrió",
    mood: "warm",
    image: "assets/pages/page-2.webp",
    text: [
      "Zacarías era un gato que en su hermoso hogar vivía, amarillo su pelaje y suave como melodía.",
      "Todo comenzó un frío día, cuando las hojas de los árboles se movían y la puerta de una casa sin querer se abría."
    ],
    duration: 18000
  },
  {
    title: "La gran aventura",
    mood: "adventure",
    image: "assets/pages/page-3.webp",
    text: [
      "El exterior era un misterio que en su mente despertaba alegría.",
      "Sin mirar atrás, a la calle se dirigía. Sus bigotes le temblaban, pero su alma se encendía.",
      "Un camión gigante fue lo último que de su hogar vería."
    ],
    duration: 21000
  },
  {
    title: "El gorrión de la frutería",
    mood: "playful",
    image: "assets/pages/page-4.webp",
    text: [
      "La mirada levantó hacia el tejado de una frutería.",
      "Un gorrión cantor fue su objetivo: perseguirlo y cazarlo quería.",
      "No me comas, dijo el ave. Si me consigues un gusanito, un trozo de jamón a cambio yo te daría."
    ],
    duration: 23000
  },
  {
    title: "El gusano travieso",
    mood: "playful",
    image: "assets/pages/page-5.webp",
    text: [
      "Entonces comenzó la búsqueda, y entre árboles se introducía, rogando por algo de suerte.",
      "Fuera de una barbería, un gusano travieso y juguetón bajo una piedrecita vivía.",
      "No me comas, gritó el gusano con grandes ojos llorosos."
    ],
    duration: 23000
  },
  {
    title: "Una nueva pista",
    mood: "mystery",
    image: "assets/pages/page-6.webp",
    text: [
      "Impactado Zacarías, en la cuenta caería: había sido engañado por el gorrión de la frutería.",
      "Una idea te puedo dar, el gusano respondía. Si sigues a aquel ratón que nos mira, más diversión tendrías."
    ],
    duration: 21000
  },
  {
    title: "El cansancio de Zacarías",
    mood: "sad",
    image: "assets/pages/page-7.webp",
    text: [
      "Decepcionado, Zacarías ya nada le divertía.",
      "El cansancio, el sueño y el miedo el cuerpo le recorrían.",
      "Muy arrepentido estaba de escaparse ese día. No sabía de los peligros y las consecuencias que le traería."
    ],
    duration: 24000
  },
  {
    title: "Una familia cuidadosa",
    mood: "hope",
    image: "assets/pages/page-8.webp",
    text: [
      "Todo cambió un día, cuando en un auto llegaría una pareja cuidadosa que su cabecita acariciaría.",
      "Mostrándole mucho amor, poco a poco se acercarían, y las largas jornadas de frío en calor se convertirían."
    ],
    duration: 21000
  },
  {
    title: "Un nuevo hogar",
    mood: "happy",
    image: "assets/pages/page-9.webp",
    text: [
      "Fue así como lo adoptaron, y de a poco se acostumbraría a su nuevo hogar, con mucho amor y sin falta de comida.",
      "Desde esa aventura, la vida al gato le cambiaría.",
      "Era mejor no salir y hacer caso a sus humanos, porque todo era por su seguridad y por la mejor compañía."
    ],
    duration: 24000
  }
];

const cover = document.getElementById("cover");
const reader = document.getElementById("reader");
const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const narrationBtn = document.getElementById("narrationBtn");
const musicBtn = document.getElementById("musicBtn");

const sceneLabel = document.getElementById("sceneLabel");
const sceneTitle = document.getElementById("sceneTitle");
const sceneText = document.getElementById("sceneText");
const sceneImage = document.getElementById("sceneImage");

let currentScene = 0;
let narrationEnabled = true;
let musicEnabled = true;
let autoTimer = null;
let audioContext = null;
let musicInterval = null;
let activeOscillators = [];

function renderScene(index) {
  currentScene = Math.max(0, Math.min(index, scenes.length - 1));
  const scene = scenes[currentScene];

  clearTimeout(autoTimer);
  stopBrowserNarration();

  reader.classList.toggle("is-sad", scene.mood === "sad");

  sceneLabel.textContent = `Escena ${currentScene + 1} de ${scenes.length}`;
  sceneTitle.textContent = scene.title;
  sceneText.innerHTML = scene.text.map(paragraph => `<p>${paragraph}</p>`).join("");
  sceneImage.src = scene.image;

  prevBtn.style.visibility = currentScene === 0 ? "hidden" : "visible";
  nextBtn.style.visibility = currentScene === scenes.length - 1 ? "hidden" : "visible";

  if (narrationEnabled) {
    playNarration(scene);
  }

  if (musicEnabled) {
    startMusic(scene.mood);
  }

  autoTimer = setTimeout(() => {
    if (currentScene < scenes.length - 1) {
      renderScene(currentScene + 1);
    }
  }, scene.duration);
}

function playNarration(scene) {
  const mp3 = new Audio(`assets/audio/narration/page-${currentScene + 1}.mp3`);

  mp3.onloadeddata = () => {
    mp3.play().catch(() => fallbackNarration(scene));
    mp3.onended = () => {
      if (currentScene < scenes.length - 1) {
        renderScene(currentScene + 1);
      }
    };
  };

  mp3.onerror = () => {
    fallbackNarration(scene);
  };

  mp3.load();
}

function fallbackNarration(scene) {
  if (!("speechSynthesis" in window)) return;

  const text = `${scene.title}. ${scene.text.join(" ")}`;
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();

  const preferredVoice =
    voices.find(v => v.lang.startsWith("es") && /female|mujer|paulina|monica|google/i.test(v.name)) ||
    voices.find(v => v.lang.startsWith("es")) ||
    voices[0];

  if (preferredVoice) utterance.voice = preferredVoice;

  utterance.lang = "es-CL";
  utterance.rate = scene.mood === "sad" ? 0.72 : 0.82;
  utterance.pitch = scene.mood === "sad" ? 0.82 : 1.05;
  utterance.volume = 0.95;

  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function stopBrowserNarration() {
  if ("speechSynthesis" in window) {
    speechSynthesis.cancel();
  }
}

function startMusic(mood) {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  stopMusic();

  const notesByMood = {
    warm: [261.63, 329.63, 392.0, 523.25],
    adventure: [293.66, 369.99, 440.0, 587.33],
    playful: [329.63, 392.0, 493.88, 659.25],
    mystery: [246.94, 293.66, 369.99, 493.88],
    sad: [220.0, 261.63, 329.63, 440.0],
    hope: [261.63, 349.23, 392.0, 523.25],
    happy: [261.63, 329.63, 392.0, 659.25]
  };

  const notes = notesByMood[mood] || notesByMood.warm;
  let step = 0;

  musicInterval = setInterval(() => {
    playSoftNote(notes[step % notes.length], mood === "sad" ? 0.035 : 0.05);
    step += 1;
  }, mood === "sad" ? 1450 : 1150);
}

function playSoftNote(frequency, volume) {
  if (!audioContext) return;

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = frequency;

  gain.gain.setValueAtTime(0, audioContext.currentTime);
  gain.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1.3);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 1.35);

  activeOscillators.push(oscillator);
}

function stopMusic() {
  if (musicInterval) {
    clearInterval(musicInterval);
    musicInterval = null;
  }

  activeOscillators.forEach(oscillator => {
    try {
      oscillator.stop();
    } catch (error) {}
  });

  activeOscillators = [];
}

startBtn.addEventListener("click", () => {
  cover.classList.add("hidden");
  reader.classList.remove("hidden");
  renderScene(0);
});

prevBtn.addEventListener("click", () => {
  renderScene(currentScene - 1);
});

nextBtn.addEventListener("click", () => {
  renderScene(currentScene + 1);
});

narrationBtn.addEventListener("click", () => {
  narrationEnabled = !narrationEnabled;
  narrationBtn.textContent = narrationEnabled ? "🔊" : "🔇";

  if (narrationEnabled) {
    playNarration(scenes[currentScene]);
  } else {
    stopBrowserNarration();
  }
});

musicBtn.addEventListener("click", () => {
  musicEnabled = !musicEnabled;
  musicBtn.textContent = musicEnabled ? "🎵" : "🔕";

  if (musicEnabled) {
    startMusic(scenes[currentScene].mood);
  } else {
    stopMusic();
  }
});

window.addEventListener("beforeunload", () => {
  stopBrowserNarration();
  stopMusic();
});
