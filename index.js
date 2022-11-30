const sections = document.querySelectorAll('.hero-bg');

window.onscroll = () => {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    for (let s in sections)
        if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
            const id = sections[s].id;
            document.querySelector('.active').classList.remove('active');
            document.querySelector(`a[href*=${id}]`).parentNode.classList.add('active');
        }
}