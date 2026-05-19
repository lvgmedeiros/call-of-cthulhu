const scenes = {
  start: {
    act: "Ato I",
    tag: "Boston, 1926",
    pulse: "o ar cheira a papel úmido",
    title: "A caixa trancada",
    animation: "box",
    text: "Você herdou os papéis do professor George Gammell Angell. Dentro de uma caixa marcada como CULTO DE CTHULHU há recortes, notas febris e um baixo-relevo de argila ainda úmido demais para ser antigo. A madrugada parece escutar sua respiração.",
    choices: [
      { label: "Examinar o baixo-relevo", hint: "+pista, -sanidade", next: "relief", effects: { clues: 1, sanity: -8 }, item: "Baixo-relevo de argila" },
      { label: "Ler os recortes primeiro", hint: "+pista, +perigo", next: "clippings", effects: { clues: 1, danger: 8 }, item: "Recortes de histeria mundial" },
      { label: "Queimar a caixa", hint: "talvez sobreviva", next: "coward", effects: { sanity: 4 } }
    ]
  },
  relief: {
    act: "Ato I",
    tag: "Providence",
    pulse: "algo sonha atrás dos olhos",
    title: "O escultor Wilcox",
    animation: "relief",
    text: "As linhas da argila formam uma cabeça tentacular, asas estreitas e símbolos que seu pensamento se recusa a organizar. O nome de Henry Wilcox aparece nas notas de Angell. Ele sonhou com uma cidade verde, impossível, e acordou moldando o monstro.",
    choices: [
      { label: "Visitar Wilcox", hint: "+pista, -sanidade", next: "wilcox", effects: { clues: 1, sanity: -10 }, item: "Relato dos sonhos de Wilcox" },
      { label: "Comparar os símbolos", hint: "+pista", next: "legrasse", effects: { clues: 1 }, item: "Símbolos de R'lyeh" },
      { label: "Contar tudo à polícia", hint: "+perigo", next: "society", effects: { danger: 20 } }
    ]
  },
  clippings: {
    act: "Ato I",
    tag: "Jornais do mundo",
    pulse: "as datas se alinham",
    title: "Sonhos na mesma noite",
    animation: "papers",
    text: "Londres, Haiti, Califórnia, Índia: surtos, suicídios, cultos, artistas delirando. Tudo converge entre 23 de março e 2 de abril de 1925. Não é prova. É pior: é padrão.",
    choices: [
      { label: "Montar um mapa de datas", hint: "+pista", next: "legrasse", effects: { clues: 1 }, item: "Mapa das datas impossíveis" },
      { label: "Mandar cartas aos envolvidos", hint: "+perigo", next: "society", effects: { danger: 18 } },
      { label: "Dormir um pouco", hint: "-sanidade", next: "dream", effects: { sanity: -16 } }
    ]
  },
  wilcox: {
    act: "Ato II",
    tag: "Fleur-de-Lys",
    pulse: "a geometria geme",
    title: "A cidade que não cabe no mundo",
    animation: "city",
    text: "Wilcox fala de blocos ciclópicos, limo verde e ângulos que mudam quando você pisca. Ao repetir Cthulhu fhtagn, sua voz deixa de parecer voz. Você sai com uma certeza terrível: ele não inventou nada.",
    choices: [
      { label: "Seguir para Nova Orleans", hint: "encontrar Legrasse", next: "legrasse", effects: { danger: 7 } },
      { label: "Ficar e estudar os sonhos", hint: "-sanidade, +pista", next: "dream", effects: { sanity: -12, clues: 1 }, item: "Diário de pesadelos" },
      { label: "Confrontar Wilcox", hint: "+perigo", next: "society", effects: { danger: 15 } }
    ]
  },
  dream: {
    act: "Ato II",
    tag: "Sono febril",
    pulse: "a água sobe sem ruído",
    title: "R'lyeh chama",
    animation: "dream",
    text: "Você dorme e caminha por escadas que sobem para baixo. Uma porta do tamanho de uma colina respira no escuro. Quando acorda, há sal na sua boca e uma palavra nova rabiscada no lençol: R'lyeh.",
    choices: [
      { label: "Aceitar a visão", hint: "-sanidade, +pista", next: "sydney", effects: { sanity: -18, clues: 1 }, item: "Coordenadas sonhadas" },
      { label: "Tomar láudano", hint: "+sanidade, +perigo", next: "legrasse", effects: { sanity: 8, danger: 10 } },
      { label: "Responder ao chamado", hint: "risco extremo", next: "madness", effects: { sanity: -50 } }
    ]
  },
  legrasse: {
    act: "Ato II",
    tag: "Nova Orleans, 1907",
    pulse: "tambores sob o pântano",
    title: "A batida no brejo",
    animation: "cult",
    text: "O inspetor Legrasse descreve uma incursão policial nos pântanos: monólito, corpos, adoradores em círculo e um ídolo de pedra negra. O cântico coincide com as palavras de Wilcox. Agora o culto sabe que você sabe.",
    choices: [
      { label: "Interrogar os sobreviventes", hint: "+pista, +perigo", next: "castro", effects: { clues: 1, danger: 14 }, item: "Depoimento do velho Castro" },
      { label: "Roubar o ídolo por uma noite", hint: "+pista, perigo alto", next: "idol", effects: { clues: 1, danger: 24 }, item: "Ídolo de pedra verde-negra" },
      { label: "Voltar para Boston", hint: "o culto segue você", next: "society", effects: { danger: 18 } }
    ]
  },
  castro: {
    act: "Ato III",
    tag: "Segredos antigos",
    pulse: "as estrelas calculam",
    title: "Quando as estrelas estiverem certas",
    animation: "stars",
    text: "Castro fala dos Grandes Antigos: vieram das estrelas, dormem sob o mar e enviam pensamentos aos sensíveis. O centro do culto estaria em desertos distantes, mas a próxima pista vem de um jornal australiano.",
    choices: [
      { label: "Procurar o jornal de Sydney", hint: "+pista", next: "sydney", effects: { clues: 1 }, item: "Notícia do iate Alert" },
      { label: "Publicar a descoberta", hint: "perigo mortal", next: "society", effects: { danger: 35 } },
      { label: "Abandonar a investigação", hint: "talvez tarde demais", next: "hunted", effects: { sanity: 5, danger: 10 } }
    ]
  },
  idol: {
    act: "Ato III",
    tag: "Museu às escuras",
    pulse: "a pedra está morna",
    title: "A coisa na vitrine",
    animation: "idol",
    text: "Ao tocar o ídolo, você sente mares sobre cidades mortas e uma gargalhada sem garganta. O zelador encontra você no chão, desenhando uma porta colossal com as unhas.",
    choices: [
      { label: "Fugir antes do amanhecer", hint: "+perigo", next: "sydney", effects: { danger: 12 } },
      { label: "Dormir segurando o ídolo", hint: "loucura provável", next: "madness", effects: { sanity: -45 } },
      { label: "Devolver e fingir normalidade", hint: "+sanidade", next: "castro", effects: { sanity: 6 } }
    ]
  },
  sydney: {
    act: "Ato III",
    tag: "Sydney / Oslo",
    pulse: "o mar tem memória",
    title: "O único sobrevivente",
    animation: "sea",
    text: "A notícia fala do iate Alert, achado à deriva com Gustaf Johansen vivo e um ídolo a bordo. Em Oslo, sua viúva entrega o manuscrito. R'lyeh realmente emergiu. Johansen viu a porta abrir.",
    choices: [
      { label: "Ler o manuscrito até o fim", hint: "-sanidade, final verdadeiro", next: "rlyeh", effects: { sanity: -22, clues: 1 }, item: "Manuscrito de Johansen" },
      { label: "Entregar tudo ao consulado", hint: "o culto intercepta", next: "society", effects: { danger: 28 } },
      { label: "Esconder-se em um navio", hint: "fuga incerta", next: "hunted", effects: { danger: 12 } }
    ]
  },
  rlyeh: {
    act: "Ato IV",
    tag: "R'lyeh",
    pulse: "a porta range no fundo do mundo",
    title: "A montanha acorda",
    animation: "cthulhu",
    text: "Johansen escreveu que a tripulação abriu por acidente uma porta impossível. Cthulhu emergiu como uma montanha viva. O iate o atingiu, e a forma se recompôs nas águas enquanto a cidade afundava outra vez.",
    choices: [
      { label: "Selar os papéis e sobreviver", hint: "final cauteloso", next: "survive", effects: { sanity: -5 } },
      { label: "Tentar avisar o mundo", hint: "perigo mortal", next: "society", effects: { danger: 30 } },
      { label: "Voltar ao mar", hint: "final cósmico", next: "madness", effects: { sanity: -35 } }
    ]
  },
  society: {
    act: "Fim",
    tag: "Rua estreita",
    pulse: "passos atrás de você",
    title: "A sociedade secreta",
    animation: "knife",
    ending: true,
    text: "Você falou alto demais. Uma figura de casaco naval o esbarra numa ladeira molhada. A dor é mínima; o veneno é antigo. Seus papéis desaparecem antes da polícia chegar.",
    choices: [{ label: "Recomeçar", hint: "a caixa espera", next: "start", reset: true }]
  },
  madness: {
    act: "Fim",
    tag: "Sanatório",
    pulse: "Cthulhu fhtagn",
    title: "A mente se parte",
    animation: "madness",
    ending: true,
    text: "Você correlacionou demais. As paredes agora têm ângulos vivos, e toda água parada reflete estrelas erradas. Os médicos chamam de delírio. Você chama de lucidez.",
    choices: [{ label: "Recomeçar", hint: "sem olhar para o mar", next: "start", reset: true }]
  },
  hunted: {
    act: "Fim",
    tag: "Lugar nenhum",
    pulse: "os sonhos encontram você",
    title: "Fuga incompleta",
    animation: "hunted",
    ending: true,
    text: "Você some antes de publicar qualquer coisa. Por algumas semanas há paz. Então os sonhos retornam, e uma noite alguém canta sob sua janela numa língua que nenhum humano deveria lembrar.",
    choices: [{ label: "Recomeçar", hint: "abrir a caixa de novo", next: "start", reset: true }]
  },
  survive: {
    act: "Fim",
    tag: "Boston",
    pulse: "a tampa fecha",
    title: "Cautela antes da audácia",
    animation: "survive",
    ending: true,
    text: "Você sela o manuscrito numa caixa de metal e deixa uma nota: não correlacionem. A sanidade que resta é frágil, mas sua respiração continua. Sob o mar, algo espera e sonha.",
    choices: [{ label: "Jogar novamente", hint: "as estrelas giram", next: "start", reset: true }]
  },
  coward: {
    act: "Fim",
    tag: "Cinzas frias",
    pulse: "ignorância misericordiosa",
    title: "A verdade queimada",
    animation: "survive",
    ending: true,
    text: "Você queima a caixa inteira. Por anos, isso parece sabedoria. Ainda assim, em noites de tempestade, uma palavra sem significado bate dentro do seu crânio como um sino submerso.",
    choices: [{ label: "Recomeçar", hint: "desta vez, olhar", next: "start", reset: true }]
  }
};

const state = {
  scene: "start",
  sanity: 70,
  danger: 15,
  clues: 0,
  inventory: [],
  sound: false
};

const canvas = document.getElementById("sceneCanvas");
const ctx = canvas.getContext("2d");
const storyText = document.getElementById("sceneText");
const sceneTitle = document.getElementById("sceneTitle");
const choiceList = document.getElementById("choiceList");
const actLabel = document.getElementById("actLabel");
const pulseLabel = document.getElementById("pulseLabel");
const chapterTag = document.getElementById("chapterTag");
const rankLabel = document.getElementById("rankLabel");
const inventoryList = document.getElementById("inventoryList");
const sanityValue = document.getElementById("sanityValue");
const dangerValue = document.getElementById("dangerValue");
const clueValue = document.getElementById("clueValue");
const sanityBar = document.getElementById("sanityBar");
const dangerBar = document.getElementById("dangerBar");
const clueBar = document.getElementById("clueBar");
const soundToggle = document.getElementById("soundToggle");
const soundIcon = document.getElementById("soundIcon");

let audioContext;
let drone;
let musicTimer;
let chordStep = 0;
let tick = 0;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function resetGame() {
  state.scene = "start";
  state.sanity = 70;
  state.danger = 15;
  state.clues = 0;
  state.inventory = [];
}

function applyEffects(choice) {
  if (choice.reset) {
    resetGame();
    return;
  }
  const effects = choice.effects || {};
  state.sanity = clamp(state.sanity + (effects.sanity || 0), 0, 100);
  state.danger = clamp(state.danger + (effects.danger || 0), 0, 100);
  state.clues = clamp(state.clues + (effects.clues || 0), 0, 6);
  if (choice.item && !state.inventory.includes(choice.item)) {
    state.inventory.push(choice.item);
  }
}

function choose(choice) {
  applyEffects(choice);
  if (!choice.reset && state.sanity <= 0) {
    state.scene = "madness";
  } else if (!choice.reset && state.danger >= 100) {
    state.scene = "society";
  } else {
    state.scene = choice.next;
  }
  render();
}

function render() {
  const scene = scenes[state.scene];
  document.body.classList.toggle("ending", Boolean(scene.ending));
  actLabel.textContent = scene.act;
  pulseLabel.textContent = scene.pulse;
  chapterTag.textContent = scene.tag;
  sceneTitle.textContent = scene.title;
  storyText.textContent = scene.text;
  rankLabel.textContent = state.clues >= 5 ? "Guardião de verdades proibidas" : state.clues >= 3 ? "Investigador obcecado" : "Executor dos papéis de Angell";

  sanityValue.textContent = state.sanity;
  dangerValue.textContent = state.danger;
  clueValue.textContent = state.clues;
  sanityBar.style.width = `${state.sanity}%`;
  dangerBar.style.width = `${state.danger}%`;
  clueBar.style.width = `${(state.clues / 6) * 100}%`;

  inventoryList.innerHTML = "";
  const items = state.inventory.length ? state.inventory : ["Nenhum achado ainda"];
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    inventoryList.appendChild(li);
  });

  choiceList.innerHTML = "";
  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.innerHTML = `${choice.label}<small>${choice.hint}</small>`;
    button.addEventListener("click", () => choose(choice));
    choiceList.appendChild(button);
  });
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(640, Math.floor(rect.width * ratio));
  canvas.height = Math.max(360, Math.floor(rect.height * ratio));
}

function beginPath(points) {
  ctx.beginPath();
  points.forEach(([x, y], index) => {
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
}

function drawBackground(w, h, time) {
  const gradient = ctx.createLinearGradient(0, 0, w, h);
  gradient.addColorStop(0, "#071010");
  gradient.addColorStop(0.45, "#10211f");
  gradient.addColorStop(1, "#030505");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "rgba(150, 215, 180, 0.06)";
  for (let i = 0; i < 44; i += 1) {
    const x = (i * 181 + time * 16) % (w + 80) - 40;
    const y = (Math.sin(i * 1.8 + time) * 0.5 + 0.5) * h;
    ctx.beginPath();
    ctx.arc(x, y, 1.2 + (i % 4), 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawBox(w, h, time) {
  drawBackground(w, h, time);
  ctx.save();
  ctx.translate(w * 0.5, h * 0.57);
  ctx.rotate(Math.sin(time) * 0.025);
  ctx.fillStyle = "#31271e";
  ctx.strokeStyle = "#9a805c";
  ctx.lineWidth = 3;
  ctx.fillRect(-170, -72, 340, 144);
  ctx.strokeRect(-170, -72, 340, 144);
  ctx.fillStyle = "#111";
  ctx.fillRect(-25, -16, 50, 38);
  ctx.strokeRect(-25, -16, 50, 38);
  ctx.strokeStyle = "rgba(225,185,109,.8)";
  ctx.beginPath();
  ctx.arc(0, 2, 8, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawRelief(w, h, time) {
  drawBackground(w, h, time);
  ctx.save();
  ctx.translate(w * 0.5, h * 0.54);
  ctx.fillStyle = "#6d6659";
  ctx.strokeStyle = "#b0a386";
  ctx.lineWidth = 4;
  ctx.fillRect(-165, -120, 330, 240);
  ctx.strokeRect(-165, -120, 330, 240);
  ctx.strokeStyle = "rgba(20,30,26,.8)";
  ctx.lineWidth = 5;
  for (let i = -90; i <= 90; i += 36) {
    ctx.beginPath();
    ctx.moveTo(i, -18);
    ctx.quadraticCurveTo(i + Math.sin(time + i) * 30, 42, i - 10, 92);
    ctx.stroke();
  }
  ctx.fillStyle = "#17211f";
  ctx.beginPath();
  ctx.ellipse(0, -28, 62, 48, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#1f302d";
  for (let i = 0; i < 12; i += 1) {
    const x = -130 + i * 24;
    ctx.strokeRect(x, -98, 12, 20 + (i % 3) * 8);
  }
  ctx.restore();
}

function drawPapers(w, h, time) {
  drawBackground(w, h, time);
  for (let i = 0; i < 9; i += 1) {
    const x = w * (0.22 + (i % 3) * 0.19) + Math.sin(time + i) * 8;
    const y = h * (0.28 + Math.floor(i / 3) * 0.17) + Math.cos(time * 0.8 + i) * 8;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((i - 4) * 0.08);
    ctx.fillStyle = "rgba(218, 209, 181, 0.82)";
    ctx.fillRect(-54, -34, 108, 68);
    ctx.fillStyle = "rgba(20, 25, 24, 0.5)";
    for (let line = 0; line < 5; line += 1) ctx.fillRect(-38, -20 + line * 10, 76, 3);
    ctx.restore();
  }
}

function drawCity(w, h, time) {
  drawBackground(w, h, time);
  ctx.strokeStyle = "rgba(114, 214, 160, 0.55)";
  ctx.lineWidth = 3;
  for (let i = 0; i < 10; i += 1) {
    const x = w * 0.18 + i * w * 0.075;
    const top = h * (0.72 - ((i % 4) + 1) * 0.09);
    beginPath([[x, h * 0.78], [x + 38, top], [x + 92, h * 0.8], [x + 14, h * 0.84]]);
    ctx.stroke();
  }
  ctx.fillStyle = "rgba(8, 17, 16, 0.62)";
  ctx.fillRect(0, h * 0.72, w, h * 0.28);
}

function drawCult(w, h, time) {
  drawBackground(w, h, time);
  const cx = w * 0.5;
  const cy = h * 0.62;
  ctx.fillStyle = "rgba(223, 106, 102, 0.2)";
  ctx.beginPath();
  ctx.arc(cx, cy, 82 + Math.sin(time * 5) * 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#df6a66";
  for (let i = 0; i < 18; i += 1) {
    const a = time * 0.9 + i * Math.PI * 2 / 18;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(a) * 145, cy + Math.sin(a) * 74, 8, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = "#111";
  ctx.fillRect(cx - 18, cy - 132, 36, 132);
  ctx.fillStyle = "#72d6a0";
  ctx.beginPath();
  ctx.arc(cx, cy - 146, 20, 0, Math.PI * 2);
  ctx.fill();
}

function drawStars(w, h, time) {
  drawBackground(w, h, time);
  ctx.strokeStyle = "rgba(225, 185, 109, 0.72)";
  ctx.lineWidth = 2;
  for (let i = 0; i < 7; i += 1) {
    const radius = 58 + i * 28 + Math.sin(time + i) * 4;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.52, radius, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.fillStyle = "#e1b96d";
  ctx.beginPath();
  ctx.arc(w * 0.5 + Math.cos(time) * 140, h * 0.52 + Math.sin(time) * 80, 7, 0, Math.PI * 2);
  ctx.fill();
}

function drawSea(w, h, time) {
  drawBackground(w, h, time);
  ctx.fillStyle = "rgba(13, 43, 49, 0.9)";
  ctx.fillRect(0, h * 0.58, w, h * 0.42);
  ctx.strokeStyle = "rgba(136, 202, 194, 0.55)";
  ctx.lineWidth = 3;
  for (let y = h * 0.62; y < h; y += 34) {
    ctx.beginPath();
    for (let x = 0; x <= w; x += 22) {
      const yy = y + Math.sin(x * 0.03 + time * 2) * 8;
      if (x === 0) ctx.moveTo(x, yy);
      else ctx.lineTo(x, yy);
    }
    ctx.stroke();
  }
  ctx.fillStyle = "#17211f";
  beginPath([[w * 0.48, h * 0.2], [w * 0.56, h * 0.58], [w * 0.39, h * 0.58]]);
  ctx.fill();
}

function drawCthulhu(w, h, time) {
  drawSea(w, h, time);
  const cx = w * 0.52;
  const cy = h * 0.46;
  ctx.fillStyle = "rgba(70, 125, 96, 0.88)";
  ctx.beginPath();
  ctx.ellipse(cx, cy, 88, 118, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(cx, cy - 118, 82, 64, 0, 0, Math.PI * 2);
  ctx.fill();
  for (let i = -3; i <= 3; i += 1) {
    ctx.beginPath();
    ctx.moveTo(cx + i * 18, cy - 75);
    ctx.quadraticCurveTo(cx + i * 32 + Math.sin(time * 3 + i) * 30, cy - 2, cx + i * 28, cy + 80);
    ctx.lineWidth = 13;
    ctx.strokeStyle = "rgba(70, 125, 96, 0.88)";
    ctx.stroke();
  }
  ctx.fillStyle = "#dff5c7";
  ctx.beginPath();
  ctx.arc(cx - 28, cy - 126, 8, 0, Math.PI * 2);
  ctx.arc(cx + 28, cy - 126, 8, 0, Math.PI * 2);
  ctx.fill();
}

function drawKnife(w, h, time) {
  drawBackground(w, h, time);
  ctx.save();
  ctx.translate(w * 0.52, h * 0.52);
  ctx.rotate(-0.8 + Math.sin(time * 7) * 0.03);
  ctx.fillStyle = "#cfd7d2";
  beginPath([[-18, -180], [24, 30], [-18, 190], [-42, 28]]);
  ctx.fill();
  ctx.fillStyle = "#33231d";
  ctx.fillRect(-70, 36, 108, 28);
  ctx.restore();
  ctx.fillStyle = "rgba(223, 106, 102, 0.34)";
  ctx.beginPath();
  ctx.arc(w * 0.55, h * 0.62, 80 + Math.sin(time * 4) * 10, 0, Math.PI * 2);
  ctx.fill();
}

function drawMadness(w, h, time) {
  drawBackground(w, h, time);
  ctx.strokeStyle = "rgba(223, 106, 102, 0.55)";
  for (let i = 0; i < 28; i += 1) {
    ctx.lineWidth = 1 + (i % 5);
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.5);
    ctx.lineTo(w * 0.5 + Math.cos(time * 2 + i) * w, h * 0.5 + Math.sin(time * 1.7 + i) * h);
    ctx.stroke();
  }
}

function drawSurvive(w, h, time) {
  drawBox(w, h, time);
  ctx.fillStyle = "rgba(114, 214, 160, 0.16)";
  ctx.fillRect(w * 0.5 - 190, h * 0.57 - 96, 380, 26);
}

function drawHunted(w, h, time) {
  drawBackground(w, h, time);
  ctx.fillStyle = "rgba(0,0,0,.55)";
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 6; i += 1) {
    ctx.fillStyle = `rgba(225,185,109,${0.18 + i * 0.06})`;
    ctx.beginPath();
    ctx.ellipse(w * (0.18 + i * 0.12), h * (0.45 + Math.sin(time + i) * 0.06), 18, 42, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}

function animate() {
  tick += 0.016;
  const w = canvas.width;
  const h = canvas.height;
  const scene = scenes[state.scene];
  const map = {
    box: drawBox,
    relief: drawRelief,
    papers: drawPapers,
    city: drawCity,
    dream: drawCity,
    cult: drawCult,
    stars: drawStars,
    idol: drawRelief,
    sea: drawSea,
    cthulhu: drawCthulhu,
    knife: drawKnife,
    madness: drawMadness,
    hunted: drawHunted,
    survive: drawSurvive
  };
  const draw = map[scene.animation] || drawBox;
  draw(w, h, tick);
  requestAnimationFrame(animate);
}

function startAudio() {
  if (!audioContext) {
    audioContext = new AudioContext();
    drone = audioContext.createGain();
    drone.gain.value = 0;
    drone.connect(audioContext.destination);
  }
  audioContext.resume();
  scheduleMusic();
}

function makeVoice(frequency, start, duration, volume, type = "sine", destination = drone) {
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();

  osc.type = type;
  osc.frequency.setValueAtTime(frequency, start);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(820, start);
  filter.Q.setValueAtTime(0.7, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.45);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(destination);
  osc.start(start);
  osc.stop(start + duration + 0.08);
}

function makeBell(frequency, start, volume) {
  const bellGain = audioContext.createGain();
  const delay = audioContext.createDelay();
  const feedback = audioContext.createGain();

  delay.delayTime.setValueAtTime(0.42, start);
  feedback.gain.setValueAtTime(0.22, start);
  bellGain.connect(delay);
  delay.connect(feedback);
  feedback.connect(delay);
  delay.connect(drone);

  [1, 2.01, 2.97].forEach((partial, index) => {
    makeVoice(frequency * partial, start + index * 0.015, 2.8, volume / (index + 1.4), "triangle", bellGain);
  });
}

function playChord(root, quality, start) {
  const intervals = quality === "dim" ? [1, 1.189, 1.414] : [1, 1.189, 1.498];
  makeVoice(root / 2, start, 4.8, 0.045, "sine");
  intervals.forEach((ratio, index) => {
    makeVoice(root * ratio, start + index * 0.06, 4.6, 0.024, index === 0 ? "sine" : "triangle");
  });
}

function scheduleMusic() {
  if (musicTimer || !audioContext) return;
  const progression = [
    { root: 55.0, quality: "min", melody: 220.0 },
    { root: 51.91, quality: "min", melody: 207.65 },
    { root: 46.25, quality: "dim", melody: 185.0 },
    { root: 41.2, quality: "min", melody: 164.81 }
  ];

  const playNext = () => {
    if (!state.sound || !audioContext) return;
    const now = audioContext.currentTime + 0.04;
    const chord = progression[chordStep % progression.length];
    playChord(chord.root, chord.quality, now);
    makeVoice(chord.melody, now + 1.2, 2.2, 0.018, "triangle");
    makeVoice(chord.melody * 0.75, now + 3.1, 1.6, 0.012, "sine");
    if (chordStep % 2 === 0) makeBell(chord.melody * 1.5, now + 2.25, 0.022);
    chordStep += 1;
  };

  playNext();
  musicTimer = setInterval(playNext, 4800);
}

soundToggle.addEventListener("click", () => {
  state.sound = !state.sound;
  soundToggle.classList.toggle("active", state.sound);
  soundIcon.textContent = state.sound ? "■" : "♪";
  soundToggle.setAttribute("aria-label", state.sound ? "Desativar trilha sonora" : "Ativar trilha sonora");
  if (state.sound) {
    startAudio();
    if (drone && audioContext) {
      drone.gain.cancelScheduledValues(audioContext.currentTime);
      drone.gain.setTargetAtTime(0.42, audioContext.currentTime, 0.7);
    }
  } else if (drone) {
    drone.gain.cancelScheduledValues(audioContext.currentTime);
    drone.gain.setTargetAtTime(0.0001, audioContext.currentTime, 0.35);
  }
});

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
render();
animate();
