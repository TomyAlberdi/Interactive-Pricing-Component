// https://github.com/awsmPuff/interactive-pricing-component
// Slider color change
const slider = document.querySelector('input[type="range"]')
slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, hsl(224, 65%, 95%) ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, hsl(224, 65%, 95%) 100%)`;

slider.addEventListener('input', () => {
    slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, hsl(224, 65%, 95%) ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, hsl(224, 65%, 95%) 100%)`;
})
// Checkbox animation
const ball = document.querySelector('.ball')
const check = document.querySelector('input[type="checkbox"]')
let ballChange = (c) => {
    c.checked ? (ball.style.left = "55%", check.style.backgroundColor = "hsl(174, 86%, 45%)") : (ball.style.left = "5%", check.style.backgroundColor = "hsl(223, 50%, 87%)")
}
check.addEventListener('click', () => {
    ballChange(check)
})
ball.addEventListener('click', () => {
    check.checked = !check.checked
    ballChange(check)
})