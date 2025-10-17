document.addEventListener('DOMContentLoaded', () => {

    // === OUVERTURE / FERMETURE DE LA MODALE ===
    const openImg = document.getElementById('openImg');
    const closeImg = document.getElementById('closeImg');
    const imgModal = document.getElementById('imgModal');

    openImg.addEventListener('click', (e) => {
        e.preventDefault();
        imgModal.classList.remove('hidden');
    });

    closeImg.addEventListener('click', () => {
        imgModal.classList.add('hidden');
    });

    // Fermer en cliquant sur le fond noir
    imgModal.addEventListener('click', (e) => {
        if (e.target === imgModal) {
            imgModal.classList.add('hidden');
        }
    });


    // === CARROUSEL ===
    const images = [
        "../images/deals-section/avoir-afaire/rando-1.jpg",
        "../images/deals-section/avoir-afaire/rando-2.jpg",
        "../images/deals-section/avoir-afaire/rando-3.jpg"
    ];

    let currentIndex = 0;
    const carouselImage = document.getElementById("carouselImage");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    // Fonction d’affichage avec fondu
    const showImage = (index) => {
        carouselImage.style.opacity = 0;
        setTimeout(() => {
            carouselImage.src = images[index];
            carouselImage.style.opacity = 1;
        }, 150);
    };

    // Bouton suivant
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Bouton précédent
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

});
