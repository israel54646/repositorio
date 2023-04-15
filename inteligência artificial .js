
const voz = window.speechSynthesis;

let leitura = null;

function lerTexto() {
  if (voz.speaking) {
    console.error('Ainda falando...');
    return;
  }

  const texto = document.getElementById('texto').value;
  if (texto !== '') {
    const velocidade = document.getElementById('velocidade').value;
    const personagem = document.getElementById('personagem').value;
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.voiceURI = personagem;
    utterance.rate = velocidade;
    voz.speak(utterance);
    leitura = utterance;
  }
}

function pararLeitura() {
  if (leitura !== null) {
    voz.cancel(leitura);
  }
}

function baixarAudio() {
  if (leitura !== null) {
