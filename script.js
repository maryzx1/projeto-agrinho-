document.addEventListener('DOMContentLoaded', () => {
    const btnSaibaMais = document.getElementById('btnSaibaMais');

    // Evento de clique no botão
    btnSaibaMais.addEventListener('click', () => {
        const pilaresSection = document.getElementById('pilares');
        
        // Rolagem suave para a seção de pilares
        pilaresSection.scrollIntoView({ behavior: 'smooth' });
        
        console.log("Usuário navegou para os pilares de sustentabilidade.");
    });

    // Efeito de mudança de cor no Header ao rolar a página
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#1b3d17';
            header.style.padding = '0.5rem 5%';
        } else {
            header.style.backgroundColor = '#2d5a27';
            header.style.padding = '1rem 5%';
        }
    });
});
