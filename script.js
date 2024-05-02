document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById('cadastroForm');

form.addEventListener('submit', function(event){ 
    event.preventDefault();

    const placa = document.getElementById("placa").value;
    const nome = document.getElementById("nome").value;
    const numero = document.getElementById("numero").value;
    const bloco = document.getElementById("bloco").value;
    const modelo = document.getElementById("modelo").value;
    const cor = document.getElementById("cor").value;
    const vaga = document.getElementById("vaga").value;

    const novoCadastro ={
        placa: placa,
        nome: nome,
        numero: numero,
        bloco: bloco,
        modelo: modelo,
        cor: cor,
        vaga: vaga
    };

    let listaCadastro = JSON.parse(localStorage.getItem('cadastros')) || [];

    listaCadastro.push(novoCadastro);

    localStorage.setItem('cadastro', JSON.stringify(listaCadastro));

    form.reset();
});

});