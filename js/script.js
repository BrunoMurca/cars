let currentIndex = 0; // Índice do slide atual
const slides = document.querySelectorAll('.slide'); // Seleciona todos os slides
const totalSlides = slides.length; // Total de slides

function showSlide(index) {
    // Atualiza o índice do slide atual
    currentIndex = index;

    // Calcula a nova posição para o slides
    const offset = -currentIndex * 100; // Ajusta a posição
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Função para avançar automaticamente os slides
function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Avança o índice, reinicia se necessário
    showSlide(currentIndex);
}

// Inicia o auto slider a cada 5 segundos (5000 milissegundos)
setInterval(autoSlide, 5000);
