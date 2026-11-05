// Número do WhatsApp da clínica configurado para receber os agendamentos
const numeroWhatsapp = "5583981742623";

// Seleciona todos os cards de procedimentos
const cardsProcedimentos = document.querySelectorAll(".card-procedimento");

cardsProcedimentos.forEach(card => {
    card.addEventListener("click", () => {
        // Pega o nome do serviço correspondente ao card clicado
        const nomeServico = card.getAttribute("data-servico");
        
        // Formata a mensagem com codificação URL para evitar erros de caracteres especiais
        const mensagem = encodeURIComponent(`Olá! Gostaria de obter mais informações e agendar o procedimento: ${nomeServico}.`);
        
        // Gera o link oficial do WhatsApp
        const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagem}`;
        
        // Abre o link diretamente em uma nova aba do navegador
        window.open(urlWhatsapp, "_blank");
    });
});