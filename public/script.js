function chamarAssistente() {
    const mivy = document.getElementById('mivy')
    const app = document.getElementById('app')
    const textoModalMivy = document.getElementById('textoModalMivy')
    const modalMivyAssistente = document.getElementById('modalMivyAssistente')
    const memoji = document.getElementById('memoji')

    modalMivyAssistente.style.display = 'block'


    setTimeout(() => {
        textoModalMivy.textContent = "Eu sou a Assistente Mivy🙋‍♀️"
        falaMivy2()
    }, 2000);

    function falaMivy2() {
        setTimeout(() => {
        memoji.src = 'image/Untitled image.png'
        textoModalMivy.textContent = "Estou aqui para tirar suas duvidas e te ajudar ficar mais linda✨"
        falaMivy3()
    }, 2000);
    }

    function falaMivy3() {
        setTimeout(() => {
            memoji.src = 'image/memoji3.png'
            textoModalMivy.textContent = "Na MV preservamos a beleza, cuidado e manutençao da unhas de nossas clientes💅" 
        }, 3000)
    }

    //funçao pra gerar as FAQ la q eu falei no html, se tu tivesse prestado atençao saberia ne INSETO
    function gerarFaq() {
        const faqContainer = document.getElementById('faq-container')
        const faqsServicios = [
            { pergunta: "Vocês fazem decoração com pedras?", resposta: "Sim! Pedrarias incríveis para deixar suas unhas únicas. 💎"},
            { pergunta: ""}
        ]
    }
    
}
