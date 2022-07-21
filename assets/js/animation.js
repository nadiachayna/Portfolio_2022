/*==============Animación================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2600,
    delay: 600,
    // reset: true
})

sr.reveal('.home__content')
sr.reveal(`.about__animation`, {interval: 100})
sr.reveal('.contact_animation', {origin: 'left'})
sr.reveal('.portfolio_animation', {origin: 'right'})

//sr.reveal(`.about__img, .discount__data`,{origin: 'right'})