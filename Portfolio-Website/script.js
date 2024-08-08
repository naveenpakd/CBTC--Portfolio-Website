document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


var typed = new Typed('#typed-text', {
    strings: ['Python Full Stack Developer', 'Web Developer', 'Frontend Developer', 'Backend Developer', 'Problem Solver'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});


var controller = new ScrollMagic.Controller();

document.querySelectorAll('.section').forEach(section => {
    new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.8,
        reverse: false
    })
    .setClassToggle(section, 'visible')
    .addTo(controller);
});


function animateProgressBars() {
    document.querySelectorAll('.progress-bar').forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
}

new ScrollMagic.Scene({
    triggerElement: "#skills",
    triggerHook: 0.8,
    reverse: false
})
.on('start', animateProgressBars)
.addTo(controller);