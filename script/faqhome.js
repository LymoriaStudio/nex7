document.querySelectorAll('.faq-pergunta').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const aberto = item.classList.contains('ativo');

        // fecha todos
        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('ativo');
            i.querySelector('.faq-pergunta').setAttribute('aria-expanded', 'false');
        });

        // abre o clicado (se estava fechado)
        if (!aberto) {
            item.classList.add('ativo');
            btn.setAttribute('aria-expanded', 'true');
        }
    });
});