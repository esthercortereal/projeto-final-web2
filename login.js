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