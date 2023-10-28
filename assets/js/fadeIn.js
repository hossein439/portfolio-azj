console.log('animation')
function checkFadeIn() {
    console.log('animation client')
    const fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach(fade => {

        const rect = fade.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top >= 0 && rect.top <= windowHeight) {
            if (!fade.classList.contains('active')) {
                fade.classList.add('active');
            }
        }
    })
}

window.addEventListener('scroll', checkFadeIn);
window.addEventListener('resize', checkFadeIn);
checkFadeIn();