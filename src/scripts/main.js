document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function (evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-max').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        alert(numeroAleatorio);

        document.getElementById('resultado-valor').innerText = numeroAleatorio
    })
})