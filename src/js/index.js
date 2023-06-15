const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
botaoAlterarTema.addEventListener("click", () => {    
    const darkModeOn = body.classList.contains("dark-Mode");  
    if(darkModeOn) {
        body.classList.remove("dark-Mode")
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/img/lunatone.png");
    }
       else{
            body.classList.add("dark-Mode");
            imagemBotaoTrocaDeTema.setAttribute("src", "./src/img/solrock.png");
        }
} );