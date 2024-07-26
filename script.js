const tempoElement = document.getElementById('tempo');
const dataFinal = new Date('2024-12-31T23:59:59').getTime(); // Data final da contagem

function atualizarTempo() {
  const agora = new Date().getTime();
  const distancia = dataFinal - agora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  tempoElement.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

// Atualiza o tempo a cada segundo
setInterval(atualizarTempo, 1000);
