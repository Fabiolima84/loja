const login = "fabio@gmail.com"
const senha = "fabio"


const botao = document.getElementById("entrar");

botao.addEventListener("click", function logar(){
    let usuario = document.getElementById("email").value;
    let pass = document.getElementById("senha").value;

    if(usuario == login && pass == senha){
        location.href= 'lista_de_produtos.html';
    }else{
        alert("Login ou senha invalido");
}
});