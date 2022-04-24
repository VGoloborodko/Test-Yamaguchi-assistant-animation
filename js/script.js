const animated = document.querySelector('.main-assistant__robot-img');

animated.addEventListener('animationend', () => {
    animated.classList.add('levitation')
});