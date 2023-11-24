/*scroll = efeito de rolagem*/
window.addEventListener("scroll", function() {
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0) /*pode ser 500 ou do tamanho da imagem*/
}) 