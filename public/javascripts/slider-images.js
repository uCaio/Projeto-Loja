document.querySelectorAll('.slider-container').forEach(container => {
    const slider = container.querySelector('.slider');
    const prev = container.querySelector('.prev');
    const next = container.querySelector('.next');

    let currentIndex = 0;

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slider.children.length - 1;
        updateSlider(slider, currentIndex);
    });

    next.addEventListener('click', () => {
        currentIndex = (currentIndex < slider.children.length - 1) ? currentIndex + 1 : 0;
        updateSlider(slider, currentIndex);
    });

    function updateSlider(slider, index) {
        const slideWidth = slider.children[0].offsetWidth;
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }
});
