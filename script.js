const CONFIG = {
    // 🔥 IMPORTANTE: Coloque o número do WhatsApp com o DDI (55) e o DDD (12). Ex: 5512999999999
    fone: "5512991917447", 
    nome: "Lupe Cred"
};

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Roteamento Inteligente de WhatsApp (Rastreia de onde o clique veio)
    document.querySelectorAll('[data-wa]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Previne comportamentos inesperados do botão
            const context = btn.getAttribute('data-wa');
            
            // Mensagem persuasiva já pré-escrita para facilitar a vida do Lead
            const msg = encodeURIComponent(`Olá, equipe ${CONFIG.nome}! Tudo bem? \n\n Gostaria de uma *Simulação de Crédito Personalizada*. \n\n`);
            
            // Abre em nova aba direto no Whats
            window.open(`https://wa.me/${CONFIG.fone}?text=${msg}`, '_blank');
        });
    });

    // 2. FAQ Accordion Suave
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            const ans = item.querySelector('.faq-answer');
            const icon = item.querySelector('span');
            
            // Fecha os outros se quiser (opcional, aqui mantemos independente)
            ans.classList.toggle('hidden');
            
            if (ans.classList.contains('hidden')) {
                icon.textContent = '+';
                icon.classList.remove('bg-[#C49A45]', 'text-[#050C17]');
                icon.classList.add('bg-[#1B365D]/30', 'text-[#C49A45]');
            } else {
                icon.textContent = '-';
                icon.classList.remove('bg-[#1B365D]/30', 'text-[#C49A45]');
                icon.classList.add('bg-[#C49A45]', 'text-[#050C17]');
            }
        });
    });

    // 3. Navbar Scroll Effect Avançado (Muda a cor da navbar ao rolar)
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    console.log("🚀 Lupe Cred Growth Engine v3.0 Ativado!");
});
