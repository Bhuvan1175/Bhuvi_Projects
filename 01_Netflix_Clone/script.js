    const carouselList = document.querySelector('.carousel-list');
    const carouselItems = document.querySelectorAll('.carousel-item');
    
    let currentIndex = 0;
    function showCurrentItem(index) {
        carouselItems.forEach((item, i) => {
            if (i === index) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    showCurrentItem(currentIndex);
    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showCurrentItem(currentIndex);
    }
    setInterval(nextSlide, 3000);

