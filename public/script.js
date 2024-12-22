function chamarAssistente() {
    const mivy = document.getElementById('mivy')
    const app = document.getElementById('app')
    const textoModalMivy = document.getElementById('textoModalMivy')
    const modalMivyAssistente = document.getElementById('modalMivyAssistente')
    const memoji = document.getElementById('memoji')

    modalMivyAssistente.style.display = 'block'


    setTimeout(() => {
        textoModalMivy.textContent = "Eu sou a Assistente Mivy"
        falaMivy2()
    }, 3000);

    function falaMivy2() {
        setTimeout(() => {
        memoji.src = 'image/Untitled image.png'
        textoModalMivy.textContent = "Estou aqui para tirar suas duvidas e te ajudar ficar mais linda✨"
    }, 3000);
    }
    
}
