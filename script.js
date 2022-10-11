const slider = document.querySelector('input[type="range"]')
slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, hsl(224, 65%, 95%) ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, hsl(224, 65%, 95%) 100%)`;

slider.addEventListener('input', () => {
    slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, hsl(224, 65%, 95%) ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, hsl(224, 65%, 95%) 100%)`;
})

// https://github.com/awsmPuff/interactive-pricing-component