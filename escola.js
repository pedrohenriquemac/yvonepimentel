document.addEventListener('DOMContentLoaded', function() {
    var images = ['juri.jpg', 'juri2.jpg', 'juri3.jpg']; // Substitua com os nomes das suas imagens
    var currentIndex = 0;
    var banner = document.getElementById('banner');

    function changeBackground() {
        banner.style.backgroundImage = 'url(' + images[currentIndex] + ')';
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 3000); // Troca a imagem a cada 3 segundos (3000 milissegundos)
});
