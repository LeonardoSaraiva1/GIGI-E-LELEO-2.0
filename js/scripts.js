function validacao(){
    var email = document.querySelector('#email').value;
    var senha = document.querySelector('#senha').value;
    if(email === "Minha Loirinha" && senha === "210423"){
        window.location.href ="Pagina.html"
    } else {
        alert("Usuário ou senha incorretos");
    }
}
function mostrar() {
    var inputpass = document.getElementById('senha')
    var btnshowpass = document.getElementById('btn-mostrar')
    if(inputpass.type === 'password'){
        inputpass.setAttribute('type' , 'text')
        btnshowpass.classList.replace('bx-hide', 'bx-show')
    }else{
        inputpass.setAttribute('type' , 'password')
        btnshowpass.classList.replace('bx-show', 'bx-hide')

    }
}