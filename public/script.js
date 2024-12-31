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
            gerarFaq()
        }, 3000)
    }

    //funçao pra gerar as FAQ la q eu falei no html, se tu tivesse prestado atençao saberia ne INSETO
    function gerarFaq() {
        const faqContainer = document.getElementById('faq-container')
        const faqs = [
            { pergunta: "Vocês fazem decoração com pedras?", resposta: "Sim! Pedrarias incríveis para deixar suas unhas únicas. 💎", classificacao: "servico" },
            { pergunta: "Quais serviços vocês tem?", resposta: "Manicure, pedicure, nail art, lixamento, alongamento, e muito mais!🤩" , classificacao: "servico" },
            { pergunta: "Quais tipos de decoração vocês oferecem?", resposta: "Oferecemos artistica, minimalista, tematica(eventos) e muito mais!💓" , classificacao: "servico"},
            { pergunta: "Fazem unhas para eventos, como casamento?", resposta: "Sim, realizamos unhas especiais para eventos como casamentos, formaturas e festas.", classificacao: "servico" },
            { pergunta: "Quais são os tipos de esmaltação disponíveis?", resposta: "Trabalhamos com esmaltação tradicional, gel, semi-permanente e efeito degradê." },
            { pergunta: "Voces fazem atendimento a domicilio?", resposta: "Nao! No momento estamos so com o studio🏠 ❌" },
            { pergunta: "Vocês aceitam cartões de crédito, debito ou Pix?", resposta: "Sim, aceitamos cartões de crédito, débito e PIX." },
            { pergunta: "Vocês oferecem consultoria sobre o melhor estilo de unha para mim?", resposta: "Sim, temos profissionais que irão te orientar sobre o melhor formato, cor e estilo de unha para sua personalidade e ocasião." },
            { pergunta: "O atendimento é apenas presencial ou também online?", resposta: "O agendamento pode ser feito online, mas o atendimento é presencial no studio." },
            { pergunta: "Quais marcas de esmaltes vocês usam?", resposta: "Trabalhamos com marcas premium como Risqué, Colorama, OPI e Dailus.", },
            { pergunta: "Os equipamentos são esterilizados?", resposta: "Sim, todos os nossos equipamentos passam por um rigoroso processo de esterilização para garantir sua segurança."},
            { pergunta: "Vocês têm esmaltes hipoalergênicos?", resposta: "Sim, temos uma linha de esmaltes hipoalergênicos para clientes com pele sensível ou alergias."},
            { pergunta: ""}

        ]

        const perguntasAleatorias = faqs.sort(() => 0.5 - Math.random()).slice(0, 3)

        faqContainer.innerHTML = ""

        perguntasAleatorias.forEach((faq, index) => {
            const faqElement = document.createElement('div');

            faqElement.className = 'faq';

            faqElement.innerHTML = `
        <p class="faq-question">${faq.pergunta}</p>
        <p class="faq-answer" style="display: none;">${faq.resposta}</p>
    `;

            faqElement.style.animationDelay = `${index * 0.2}s`;

            faqContainer.appendChild(faqElement);

            faqElement.querySelector('.faq-question').addEventListener('click', function () {
                // Limpa todo o container, removendo as outras perguntas e respostas
                faqContainer.innerHTML = '';

                // Cria um elemento apenas para a resposta da pergunta clicada
                const respostaElement = document.createElement('div');
                respostaElement.className = 'faq-resposta-final';

                respostaElement.innerHTML = `
            <p class="faq-question">${faq.pergunta}</p>
        `;
                textoModalMivy.textContent = faq.resposta

                if (faq.classificacao === "servico") {
                    memoji.src = 'image/Untitled image.png'
                }

                    // Adiciona a resposta ao container
                    faqContainer.appendChild(respostaElement);
            });
        });


    }

}
