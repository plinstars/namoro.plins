document.addEventListener("DOMContentLoaded", function() {
    iniciarContador();
});

function iniciarContador() {
    const dataAlvo = new Date("2025-02-23T00:00:00");
    atualizarContador(dataAlvo);
    setInterval(() => atualizarContador(dataAlvo), 1000);
}

function atualizarContador(dataAlvo) {
    const agora = new Date();
    const diferenca = dataAlvo - agora;
    
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
    document.getElementById("contador").innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

function irPara(pagina) {
    window.location.href = pagina;
}
