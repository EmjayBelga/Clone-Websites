const navObserver = () => {
    const heroSection = document.querySelector('.hero');
    const header = document.querySelector('.header');
    const headerBg = document.querySelector('.header__nav-bg');
    const navLink = document.querySelectorAll('.header__nav-link');

    const heroSectionOption = {
        rootMargin: '-110px',
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                header.classList.add('nav-scroll');
                headerBg.classList.add('nav-scroll');
                navLink.forEach(link => {
                    link.classList.add('nav-scroll');
                });
            }else{
                header.classList.remove('nav-scroll');
                headerBg.classList.remove('nav-scroll');
                navLink.forEach(link => {
                    link.classList.remove('nav-scroll');
                });
            };
        })
    },heroSectionOption);
    
    observer.observe(heroSection);
};

export default navObserver;

