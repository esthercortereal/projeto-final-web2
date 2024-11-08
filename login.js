function mostrar(){

    var inputPass = document.querySelector('#input2')
    var btnShowPass = document.querySelector('#eye')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')

        btnShowPass.classList.replace('bi-eye', 'bi-eye-slash')
    }
    else{
        inputPass.setAttribute('type', 'password')

        btnShowPass.classList.replace('bi-eye-slash', 'bi-eye')
    }
}

// senha correta ou incorreta


const usuarios = [
    { email: "erick@lasalle.com", senha: "senha123" },
    { email: "esther@lasalle.com", senha: "senha456" },
    { email: "thereza@lasalle.com", senha: "senha789" }
];


document.querySelector('.form1').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário para não recarregar a página

    const email = document.getElementById('input1').value;
    const senha = document.getElementById('input2').value;

    
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    const mensagemDiv = document.getElementById('texto-e');
    if (usuario) {
        mensagemDiv.textContent = 'Login bem-sucedido!';
        mensagemDiv.style.color = 'green';
    } else {
        mensagemDiv.textContent = 'Email ou senha inválidos.';
        mensagemDiv.style.color = 'red';
    }
});