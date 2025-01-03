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
            setTimeout(() => {
                memoji.src = 'image/Untitled image.png'
                textoModalMivy.textContent = "Qual a sua duvida?"
                gerarFaq()
            }, 3000)
        }, 3000)
    }

    //funçao pra gerar as FAQ la q eu falei no html, se tu tivesse prestado atençao saberia ne INSETO
    function gerarFaq() {
        const faqContainer = document.getElementById('faq-container')
        const faqs = [
            { image: "image/memoji1.png", pergunta: "Vocês fazem decoração com pedras?", resposta: "Sim! Pedrarias incríveis para deixar suas unhas únicas. 💎", classificacao: "servico" },
            { image: "image/test.png", pergunta: "Quais serviços vocês tem?", resposta: "Manicure, pedicure, nail art, lixamento, alongamento, e muito mais!🤩" , classificacao: "servico" },
            { image: "image/memoji2.png", pergunta: "Quais tipos de decoração vocês oferecem?", resposta: "Oferecemos artistica, minimalista, tematica(eventos) e muito mais!💓" , classificacao: "servico"},
            { image: "image/memoji4.png", pergunta: "Fazem unhas para eventos, como casamento?", resposta: "Sim! Realizamos unhas especiais para eventos como casamentos, formaturas e festas.", classificacao: "servico" },
            { image: "image/memoji5.png", pergunta: "Quais são os tipos de esmaltação disponíveis?", resposta: "Trabalhamos com esmaltação tradicional, gel, semi-permanente e efeito degradê." },
            { image: "image/memoji6.png", pergunta: "Voces fazem atendimento a domicilio?", resposta: "Nao! No momento estamos so com o studio🏠 ❌", classificacao: "atendimento"},
            { image: "image/memoji7.png", pergunta: "Vocês aceitam cartões de crédito, debito ou Pix?", resposta: "Sim, aceitamos cartões de crédito, débito e PIX.", classificacao: "atendimento"},
            { image: "image/memoji8.png", pergunta: "Vocês oferecem consultoria sobre o melhor estilo de unha para mim?", resposta: "Sim, temos profissionais que irão te orientar sobre o melhor formato, cor e estilo de unha para sua personalidade e ocasião.", classificacao: "atendimento"},
            { image: "image/memoji9.png", pergunta: "O atendimento é apenas presencial ou também online?", resposta: "O agendamento pode ser feito online, mas o atendimento é presencial no studio.", classificacao: "atendimento"},
            { image: "image/memoji10.png", pergunta: "Quais marcas de esmaltes vocês usam?", resposta: "Trabalhamos com marcas premium como Risqué, OPI e Dailus." , classificacao: "equipamentos"},
            { image: "image/memoji11.png", pergunta: "Os equipamentos são esterilizados?", resposta: "Sim, todos os nossos equipamentos passam por um rigoroso processo de esterilização para garantir sua segurança.", classificacao: "equipamentos"},
            { image: "image/memoji12.png", pergunta: "Vocês têm esmaltes hipoalergênicos?", resposta: "Sim, temos uma linha de esmaltes hipoalergênicos para clientes com pele sensível ou alergias.", classificacao: "equipamentos"},
            { image: "image/memoji13.png", pergunta: "Qual o horario de funcionamento?", resposta: "Nos funcionamos das 8h a 17h", classificacao: "equipamentos"},
            { image: "image/memoji14.png", pergunta: "Preciso marca um horario. Como faço?", resposta: `Entre em contato com nosso atendimento, ou, clique em "agendar" no final do site`, classificacao: "funcionamento"},
            { image: "image/memoji15.png", pergunta: "Quais são os dias de funcionamento?", resposta: "Funcionamos de segunda a sábado.", classificacao: "funcionamento"},
            { image: "image/memoji.png", pergunta: "Qual é o horário mais tranquilo para agendar?", resposta: "Geralmente, os horários da manhã, entre 9h e 11h, são mais tranquilos.", classificacao: "funcionamento"},
            { image: "image/memoji.png", pergunta: "O studio abre aos domingos?", resposta: "Não, mas podemos atender em casos especiais com agendamento antecipado.", classificacao: "funcionamento"},
            { image: "image/memoji.png", pergunta: "Posso marcar um horário de última hora?", resposta: "Sim. Mas recomendamos marcar com antecedencia", classificacao: "funcionamento"},
            { image: "image/memoji.png", pergunta: "Qual é o endereço do studio?", resposta: "R. João Benedito de Camargo, 186 - Sumaré, SP", classificacao: "studio"},
            { image: "image/memoji.png", pergunta: "Vocês têm estacionamento?", resposta: "Nao, infelizmente nao temos", classificacao: "studio"},
            { image: "image/memoji.png", pergunta: "O ambiente é climatizado?", resposta: "Sim, o ambiente e completo para o conforto dos nossos clientes", classificacao: "studio"},
            { image: "image/memoji.png", pergunta: "Tem música ambiente ou é silencioso?", resposta: "Temos sim, as musicas depende do gosto dos nossos clientes", classificacao: "studio"},
            { image: "image/memoji.png", pergunta: "Vocês atendem crianças?", resposta: "Sim, temos serviços específicos para crianças, como esmaltação delicada e decorações divertidas.", classificacao: "publico"},
            { image: "image/memoji.png", pergunta: "Quais decorações são mais populares para meninas?", resposta: "Decorações com desenhos de personagens, adesivos temáticos e glitter são muito populares entre as meninas.", classificacao: "publico"},
            { image: "image/memoji.png", pergunta: "Crianças precisam de agendamento prévio?", resposta: "Sim, recomendamos agendamento prévio para atender da melhor forma.", classificacao: "publico"},
            { image: "image/memoji.png", pergunta: "Tem algum desconto para idosas?", resposta: "Sim, oferecemos descontos especiais para idosas acima de 60 anos.", classificacao: "publico"}
        ]

        

        // const perguntasAleatorias = faqs.sort(() => 0.5 - Math.random()).slice(0, 3)
        const perguntasAleatorias = faqs.slice(12, 15)
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
                respostaElement.innerHTML = `<p class="faq-question">${faq.pergunta}</p>`;
                textoModalMivy.textContent = faq.resposta

                const image = faq.image;
                if (image) {
                    memoji.src = image
                }

                    // Adiciona a resposta ao container
                    faqContainer.appendChild(respostaElement);
            });
        });


        
    }

}
