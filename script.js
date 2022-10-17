// https://github.com/awsmPuff/interactive-pricing-component
const changeValue = () => {
    switch (slider.value) {
        case "0":
            views.innerHTML = "10K PAGEVIEWS"
            if (check.checked) {
                price.innerHTML = "$6"
            } else {
                price.innerHTML = "$8"
            }
            break;
        case "1":
            views.innerHTML = "50K PAGEVIEWS"
            if (check.checked) {
                price.innerHTML = "$9"
            } else {
                price.innerHTML = "$12"
            }
            break;
        case "2":
            views.innerHTML = "100K PAGEVIEWS"
            if (check.checked) {
                price.innerHTML = "$12"
            } else {
                price.innerHTML = "$16"
            }
            break;
        case "3":
            views.innerHTML = "500K PAGEVIEWS"
            if (check.checked) {
                price.innerHTML = "$18"
            } else {
                price.innerHTML = "$24"
            }
            break;
        case "4":
            views.innerHTML = "1M PAGEVIEWS"
            if (check.checked) {
                price.innerHTML = "$27"
            } else {
                price.innerHTML = "$36"
            }
            break;
    }
}
// Slider color change
const slider = document.querySelector('input[type="range"]')
slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, hsl(224, 65%, 95%) ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, hsl(224, 65%, 95%) 100%)`;

slider.addEventListener('input', () => {
    slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, hsl(224, 65%, 95%) ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, hsl(224, 65%, 95%) 100%)`;
})
// Checkbox animation
const ball = document.querySelector('.ball')
const check = document.querySelector('input[type="checkbox"]')
check.checked = false
check.addEventListener('click', () => {
    if (check.checked) {
        ball.style.left = "55%"
        check.style.backgroundColor = "hsl(174, 86%, 45%)"
    } else {
        ball.style.left = "5%"
        check.style.backgroundColor = "hsl(223, 50%, 87%)"
    }
    changeValue()
})
// Page func logic
const views = document.querySelector('#page-views')
const price = document.querySelector('.price h1')
slider.addEventListener('input', () => {
    changeValue()
})
