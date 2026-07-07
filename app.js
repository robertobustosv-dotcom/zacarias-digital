const scenes = [
  {
    title: 'Portada', image: 'assets/scenes/scene-1.png', mood: 'warm', hotspot: [50, 62],
    mission: 'Toca a Zacarías para comenzar',
    bubble: 'Zacarías está listo para contarte su aventura.',
    audio: 'assets/audio/narration/page-1.mp3', duration: 9000,
    text: ['Autora: Claudia Oliva', 'Editado: Roberto Bustos', 'Adaptado de una historia real.'], fx: 'spark'
  },
  {
    title: 'La mudanza', image: 'assets/scenes/scene-2.png', mood: 'happy', hotspot: [46, 55],
    mission: 'Toca a Zacarías',
    bubble: 'En medio de cajas y maletas, Zacarías vio una oportunidad de aventura.',
    audio: 'assets/audio/narration/page-2.mp3', duration: 62000,
    text: ['Zacarías era un gato, que en su hermoso hogar vivía, amarillo su pelaje y suave como melodía.', 'Todo comenzó un frío día, cuando la puerta de una casa sin querer se abría.', 'Nadie se había dado cuenta, ya que mucho movimiento había: cajas, bolsos y maletas distraían.', 'Silencioso se escabullía hacia la libertad que se le ofrecía.'], fx: 'home'
  },
  {
    title: 'El camión se aleja', image: 'assets/scenes/scene-3.png', mood: 'curious', hotspot: [72, 38],
    mission: 'Toca el camión de mudanzas',
    bubble: 'El camión se aleja… pero Zacarías todavía cree que todo será diversión.',
    audio: 'assets/audio/narration/page-3.mp3', duration: 56000,
    text: ['El exterior era un misterio que en su mente despertaba alegría.', 'Sin mirar atrás, a la calle se dirigía; sus bigotes le temblaban, pero su alma se encendía.', 'Los sonidos, los aromas, todo nuevo le sorprendía.', 'Fue así como, distraído, su familia desaparecía.', 'Un camión gigante fue lo último que de su hogar vería.'], fx: 'truck'
  },
  {
    title: 'El gorrión cantor', image: 'assets/scenes/scene-4.png', mood: 'playful', hotspot: [28, 70],
    mission: 'Toca al gorrión',
    bubble: '¡No me comas! —dijo el gorrión—. Si me consigues un gusanito, te daré jamón.',
    audio: 'assets/audio/narration/page-4.mp3', duration: 60000,
    text: ['La mirada levantó hacia el tejado de una frutería; un gorrión cantor fue su objetivo.', 'Calles y calles recorrió, hasta que perdido se vería.', 'El hambre apretaba fuerte y el frío lo perseguía.', 'De un hábil zarpazo, al gorrión atraparía.', 'Pero el ave le propuso un trato inesperado.'], fx: 'bird'
  },
  {
    title: 'El gusano', image: 'assets/scenes/scene-5.png', mood: 'playful', hotspot: [28, 73],
    mission: 'Toca al gusano',
    bubble: '¡No me comas! —gritó el gusano—. Soy muy flaquito y tengo una mejor idea.',
    audio: 'assets/audio/narration/page-5.mp3', duration: 65000,
    text: ['Entonces comenzó la búsqueda, y entre árboles se introducía.', 'Zacarías pensaba que era buen cazador, pero atrapar gusanos no era su habilidad.', 'Cansado y hambriento, por plazas y calles corría.', 'Hasta que fuera de una barbería encontró un gusano travieso bajo una piedra.', 'Entre sus garritas lo atrapó para sacarlo de la guarida.'], fx: 'leaf'
  },
  {
    title: 'La panadería', image: 'assets/scenes/scene-6.png', mood: 'chase', hotspot: [23, 83],
    mission: 'Toca al ratón que escapa',
    bubble: '¡El ratón corrió hacia la panadería! Zacarías sale tras él.',
    audio: 'assets/audio/narration/page-6.mp3', duration: 74000,
    text: ['El gusano le hizo ver que el gorrión lo había engañado.', '—Si sigues a aquel ratón que nos mira, más diversión tú tendrías.', 'Entusiasmado, Zacarías con audacia se movía.', 'Persiguió al ratón hasta la calle de la panadería.'], fx: 'mouse'
  },
  {
    title: 'Solo en la calle', image: 'assets/scenes/scene-7.png', mood: 'sad', hotspot: [50, 62],
    mission: 'Acompaña a Zacarías',
    bubble: 'Zacarías tiene frío, miedo y necesita un hogar seguro.',
    audio: 'assets/audio/narration/page-7.mp3', duration: 72000,
    text: ['La cacería no fue fácil; el ratón de él se reía y muy rápido escaparía.', 'Decepcionado, Zacarías ya nada le divertía.', 'El cansancio, el sueño y el miedo el cuerpo le recorrían.', '—Muy arrepentido estoy de escaparme ese día.', 'Triste caminaba por las calles y veredas, pero nadie le entendía.'], fx: 'rain'
  },
  {
    title: 'Una nueva familia', image: 'assets/scenes/scene-8.png', mood: 'hope', hotspot: [51, 58],
    mission: 'Toca a la familia',
    bubble: 'Con paciencia y amor, Zacarías comenzó a confiar.',
    audio: 'assets/audio/narration/page-8.mp3', duration: 52000,
    text: ['Todo cambió un día, cuando en un auto llegaría una pareja cuidadosa.', 'Temeroso, Zacarías se acercaba a la familia.', '—Aquí nadie te hará daño, no te debes defender.', 'Mostrándole mucho amor, las largas jornadas de frío en calor se convertirían.'], fx: 'heart'
  },
  {
    title: 'Hogar feliz', image: 'assets/scenes/scene-8.png', mood: 'warm', hotspot: [62, 56],
    mission: 'Toca la chimenea',
    bubble: 'Zacarías aprendió que su hogar era un lugar seguro. Fin.',
    audio: 'assets/audio/narration/page-9.mp3', duration: 60000,
    text: ['Fue así como lo adoptaron, y de a poco se acostumbraría a su nuevo hogar.', 'Desde esa aventura, la puerta de la casa fue el límite de lo permitido.', 'Era mejor hacer caso a sus humanos: todo era por su seguridad.', 'Junto a dos gatitas más, su vida compartiría.', 'FIN.'], fx: 'homeEnd'
  }
];

let index = Number(localStorage.getItem('zacarias_scene') || 0);
let auto = false;
let musicOn = false;
let audioCtx = null;
let musicTimer = null;
let musicNodes = [];
let narration = null;
let idleTimer = null;
let fallbackTimer = null;

const $ = id => document.getElementById(id);
const cover = $('cover');
const reader = $('reader');
const storybook = $('storybook');
const sceneImage = $('sceneImage');
const titleEl = $('title');
const textEl = $('text');
const counterEl = $('counter');
const missionEl = $('mission');
const effectsEl = $('effects');
const bubbleEl = $('bubble');
const hotspotEl = $('hotspot');

function startReader(){
  cover.classList.add('hidden');
  reader.classList.remove('hidden');
  render();
  showControlsTemporarily();
}

function render(){
  const s = scenes[index];
  localStorage.setItem('zacarias_scene', index);
  sceneImage.src = s.image;
  titleEl.textContent = s.title;
  counterEl.textContent = `${index + 1} / ${scenes.length}`;
  textEl.innerHTML = s.text.map((p, n) => `<p data-line="${n}">${p}</p>`).join('');
  missionEl.textContent = s.mission;
  hotspotEl.style.left = s.hotspot[0] + '%';
  hotspotEl.style.top = s.hotspot[1] + '%';
  $('prevBtn').disabled = index === 0;
  $('nextBtn').disabled = index === scenes.length - 1;
  bubbleEl.classList.remove('show');
  effects(s.fx);
  if (musicOn) startMusicForScene();
}

function next(){ stopNarration(); if(index < scenes.length - 1){ index++; render(); if(auto) playNarrationThenNext(); } }
function prev(){ stopNarration(); if(index > 0){ index--; render(); if(auto) playNarrationThenNext(); } }

function showBubble(){
  bubbleEl.textContent = scenes[index].bubble;
  bubbleEl.classList.add('show');
  setTimeout(()=>bubbleEl.classList.remove('show'), 4200);
}

function effects(type){
  effectsEl.innerHTML = '';
  if(type === 'truck' || type === 'leaf' || type === 'home') addMany('leaf','🍂',14);
  if(type === 'bird') addMany('bird','🐦',4);
  if(type === 'mouse') addMany('mouse','🐭',4);
  if(type === 'rain') for(let n=0;n<45;n++) add('rain','',Math.random()*100,Math.random()*-100,n*.03);
  if(type === 'heart') { addMany('heart','💛',10); addMany('spark','✨',6); }
  if(type === 'homeEnd') { addMany('spark','✨',8); for(let n=0;n<9;n++) add('smoke','☁️',50+Math.random()*24,55+Math.random()*12,n*.25); }
  if(type === 'spark') addMany('spark','✨',12);
  if(type === 'home') addMany('wind','〰️',4);
}
function addMany(cls,content,num){ for(let n=0;n<num;n++) add(cls,content,Math.random()*100,Math.random()*88,n*.25); }
function add(cls,content,left,top,delay){
  const e = document.createElement('span');
  e.className = cls; e.textContent = content;
  e.style.left = left + '%'; e.style.top = top + '%'; e.style.animationDelay = delay + 's';
  effectsEl.appendChild(e);
}

async function playNarrationThenNext(){
  const s = scenes[index];
  $('narrationBtn').textContent = '⏸';
  await playNarration(s);
  $('narrationBtn').textContent = '🔊';
  if(auto && index < scenes.length - 1){
    setTimeout(()=>{ if(auto){ index++; render(); playNarrationThenNext(); } }, 900);
  } else if(index === scenes.length - 1) {
    auto = false; $('autoBtn').textContent = '▶';
  }
}

function playNarration(scene){
  stopNarration(false);
  highlightByTime(scene.duration);
  return new Promise(resolve => {
    narration = new Audio(scene.audio);
    narration.onended = resolve;
    narration.onerror = () => {
      // Fallback: mantiene los tiempos de escena aunque no exista MP3 todavía.
      fallbackTimer = setTimeout(resolve, scene.duration);
    };
    narration.play().catch(()=>{
      fallbackTimer = setTimeout(resolve, scene.duration);
    });
  });
}

function stopNarration(resetButton = true){
  if(narration){ narration.pause(); narration.currentTime = 0; narration = null; }
  clearTimeout(fallbackTimer);
  document.querySelectorAll('.active-line').forEach(e=>e.classList.remove('active-line'));
  if(resetButton) $('narrationBtn').textContent = '🔊';
}

function highlightByTime(total){
  const lines = [...textEl.querySelectorAll('p')];
  lines.forEach(l=>l.classList.remove('active-line'));
  if(!lines.length) return;
  const step = Math.max(1800, total / lines.length);
  lines.forEach((line,n)=> setTimeout(()=>{
    lines.forEach(l=>l.classList.remove('active-line'));
    line.classList.add('active-line');
  }, n*step));
}

function toggleNarration(){
  if(narration && !narration.paused){ stopNarration(); return; }
  playNarrationThenNext();
}
function toggleAuto(){
  auto = !auto;
  $('autoBtn').textContent = auto ? '⏸' : '▶';
  if(auto) playNarrationThenNext(); else stopNarration();
}

function ensureAudio(){
  audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
  if(audioCtx.state === 'suspended') audioCtx.resume();
}
function stopMusic(){
  clearTimeout(musicTimer);
  musicNodes.forEach(n=>{ try{ n.stop?.(); n.disconnect?.(); }catch(e){} });
  musicNodes = []; musicOn = false; $('musicBtn').textContent = '♫';
}
function tone(freq,start,dur,vol){
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'triangle'; osc.frequency.value = freq;
  gain.gain.setValueAtTime(0,start);
  gain.gain.linearRampToValueAtTime(vol,start+.08);
  gain.gain.exponentialRampToValueAtTime(.0001,start+dur);
  osc.connect(gain); gain.connect(audioCtx.destination);
  osc.start(start); osc.stop(start+dur+.1); musicNodes.push(osc,gain);
}
function startMusicForScene(){
  clearTimeout(musicTimer); musicNodes.forEach(n=>{try{n.stop?.();n.disconnect?.()}catch(e){}}); musicNodes=[];
  ensureAudio(); musicOn = true; $('musicBtn').textContent = '♬';
  const sad = scenes[index].mood === 'sad';
  const notes = sad ? [220,261.6,329.6,392,329.6,261.6] : [261.6,329.6,392,523.2,392,329.6];
  const step = sad ? .74 : .55;
  const vol = sad ? .010 : .014;
  const now = audioCtx.currentTime + .05;
  notes.forEach((f,n)=> tone(f, now + n*step, step*.92, vol));
  musicTimer = setTimeout(()=>{ if(musicOn) startMusicForScene(); }, notes.length*step*1000);
}
function toggleMusic(){ musicOn ? stopMusic() : startMusicForScene(); }

function showControlsTemporarily(){
  storybook.classList.remove('idle');
  clearTimeout(idleTimer);
  idleTimer = setTimeout(()=>storybook.classList.add('idle'), 3200);
}

$('startBtn').onclick = startReader;
$('nextBtn').onclick = next;
$('prevBtn').onclick = prev;
$('hotspot').onclick = showBubble;
$('mission').onclick = showBubble;
$('narrationBtn').onclick = toggleNarration;
$('autoBtn').onclick = toggleAuto;
$('musicBtn').onclick = toggleMusic;
$('fullBtn').onclick = () => document.documentElement.requestFullscreen?.();
storybook.addEventListener('mousemove', showControlsTemporarily);
storybook.addEventListener('touchstart', showControlsTemporarily, {passive:true});
window.addEventListener('keydown', e=>{ if(e.key==='ArrowRight') next(); if(e.key==='ArrowLeft') prev(); if(e.key===' ') toggleAuto(); });
if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
