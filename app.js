const scenes = [
  {
    title: "Las aventuras de Zacarías",
    mood: "warm",
    image: "assets/illustrations/scene-1.webp.png",
    text: [
      "Autora: Claudia Oliva.",
      "Editado por Roberto Bustos.",
      "Adaptado de una historia real.",
      "Para nuestro amado hijo Samu."
    ],
    duration: 12000
  },
  {
    title: "La puerta se abrió",
    mood: "warm",
    image: "assets/illustrations/scene-2.webp.png",
    text: [
      "Zacarías era un gato, que en su hermoso hogar vivía, amarillo su pelaje y suave como melodía.",
      "Esta es una corta historia que contarte debería; si me acompañas hasta el final, te divertirás con un gatito y su valentía.",
      "Todo comenzó un frío día, cuando las hojas de los árboles se movían.",
      "Entre soplo y soplo del viento, la puerta de una casa sin querer se abría.",
      "Nadie se había dado cuenta, ya que mucho movimiento había; los miembros de la casa se mudaban a una linda región vecina.",
      "Mucho desorden existía; las cajas, los bolsos y maletas distraían de la sutil huida del gatito Zacarías.",
      "Silencioso se escabullía hacia la libertad que se le ofrecía."
    ],
    duration: 42000
  },
  {
    title: "El camión se aleja",
    mood: "adventure",
    image: "assets/illustrations/scene-3.webp.png",
    text: [
      "El exterior era un misterio, que en su mente despertaba alegría.",
      "Sin mirar atrás, a la calle se dirigía; sus bigotes le temblaban, pero su alma se encendía.",
      "Los sonidos, los aromas, todo nuevo le sorprendía; cada hojita que volaba era una danza que lo entretenía.",
      "Sus ojitos le brillaban. No sabía a dónde iría, pero su corazón insistía: una gran aventura sería.",
      "Fue así como, distraído, todo sucedió muy de prisa, y sin darse cuenta entonces, su familia desaparecía.",
      "Un camión gigante fue lo último que de su hogar vería, pero los pajaritos y arbolitos más diversión le ofrecían."
    ],
    duration: 38000
  },
  {
    title: "El gorrión de la frutería",
    mood: "playful",
    image: "assets/illustrations/scene-4.webp.png",
    text: [
      "La mirada levantó hacia el tejado de una frutería; un gorrión cantor fue su objetivo: perseguirlo y cazarlo quería.",
      "Calles y calles recorrió, hasta que perdido se vería. Él no estaba acostumbrado a la dificultad que la calle le ofrecía.",
      "El hambre apretaba fuerte y el frío lo perseguía, hasta que de un hábil zarpazo, al gorrión atraparía.",
      "No me comas, dijo el ave, que mucho susto ya tenía. Si me consigues un gusanito, un trozo de jamón a cambio yo te daría.",
      "Zacarías lo pensó, pues mucha hambre ya tenía; y acostumbrado a la buena comida, las plumas y un pájaro parlante poco le apetecía."
    ],
    duration: 40000
  },
  {
    title: "El gusano travieso",
    mood: "playful",
    image: "assets/illustrations/scene-5.webp.png",
    text: [
      "Entonces comenzó la búsqueda, y entre árboles se introducía, rogando por algo de suerte: su nuevo objetivo conseguiría.",
      "Él pensaba que era buen cazador y que muchas capacidades tenía, pero cuando de atrapar gusanos hablamos, habilidades no poseía.",
      "Cansado y hambriento, por plazas y calles corría; días y noches enteras, sin tregua caminaría.",
      "Siempre buscando refugio, un lugar donde dormiría, soñando con un hogar amable, donde el frío no se sentiría.",
      "El gran día ya llegó, y fuera de una barbería, un gusano travieso y juguetón, bajo una piedrecita vivía.",
      "Entre sus garritas lo atrapó, para arrancarlo de la guarida.",
      "No me comas, gritó el gusano, con grandes ojos llorosos le decía."
    ],
    duration: 46000
  },
  {
    title: "La pista del ratón",
    mood: "mystery",
    image: "assets/illustrations/scene-6.webp.png",
    text: [
      "Porque un mal sabor en la boca de seguro te dejaría, y además que un gran cazador como tú, a un gusanito no se comería.",
      "Aunque proteínas yo obtendría, tu sabor no me convencería; muy flaquito tú te encuentras, comentó el gato Zacarías.",
      "Tú serás el bocadillo del gorrión de la frutería.",
      "¿Estás seguro?, dijo el gusano. ¿A cuál gorrión acudirías? Te aseguro que, después de todo lo que recorriste, ya ni siquiera lo reconocerías.",
      "Impactado Zacarías, en la cuenta caería: que engañado había sido, por el gorrión de la frutería.",
      "Una idea te puedo dar, el gusano respondía. Si sigues a aquel ratón que nos mira, más diversión tú tendrías.",
      "Entusiasmado Zacarías con audacia se movía, persiguiendo aquel ratón hasta la calle de la panadería."
    ],
    duration: 50000
  },
  {
    title: "Zacarías se arrepiente",
    mood: "sad",
    image: "assets/illustrations/scene-7.webp.png",
    text: [
      "La cacería no fue fácil; el ratón de él se reía, escondido entre los desagües, muy rápido escaparía.",
      "Muy pequeño y peludo era, de agilidad no carecía; en nada se parecía a los ratones de juguete, que en su casa perseguía.",
      "Decepcionado, Zacarías ya nada le divertía. El cansancio, el sueño y miedo el cuerpo le recorrían.",
      "Yo no estoy acostumbrado a esta vida, de dificultades y cacerías.",
      "Mi familia ya no está, y eran los que me protegían.",
      "Muy arrepentido estoy de escaparme ese día. No sabía de los peligros y las consecuencias que me traería.",
      "Triste caminaba, por las calles y veredas; a los perros y los autos como enemigos rehuía.",
      "Ya sucio y más flaquito, a las personas acudía: un miau miau de vez en cuando, pero nadie le entendía."
    ],
    duration: 56000
  },
  {
    title: "Una familia cuidadosa",
    mood: "hope",
    image: "assets/illustrations/scene-8.webp.png",
    text: [
      "Todo cambió un día, cuando en un auto llegaría una pareja cuidadosa, que su cabecita acariciaría.",
      "Temeroso Zacarías se acercaba a la familia; con mordiscos y rasguños, sus límites imponía.",
      "No nos muerdas, Zacarías. Bien te has de portar; aquí eres un invitado, y te queremos ayudar.",
      "Los arañazos nos duelen, eso lo debes aprender; aquí nadie te hará daño, no te debes defender.",
      "Mostrándole mucho amor, poco a poco se acercarían, y las largas jornadas de frío en calor se convertirían."
    ],
    duration: 42000
  },
  {
    title: "Un nuevo hogar",
    mood: "happy",
    image: "assets/illustrations/scene-9.webp.png",
    text: [
      "Aunque los dueños no sabían, él en las noches se escabullía: entraba por el patio de la casa, y calentito en el living dormía.",
      "Una noche lo pillaron, y mucho asombro causaría: divertida situación, la del gato Zacarías.",
      "Fue así como lo adoptaron, y de a poco se acostumbraría a su nuevo hogar, con mucho amor y sin falta de comida.",
      "Desde esa aventura, la vida al gato le cambiaría: la puerta de la casa era límite de lo que se le permitía.",
      "Era mejor no salir y hacer caso a sus humanos; todo era por su seguridad y por la mejor compañía, ya que junto a dos gatitas más, su vida compartiría.",
      "Fin."
    ],
    duration: 48000
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
