const mobileNav = () => {
    const headerBars = document.querySelector('.header__bars');
    const navMenu = document.querySelector('.nav__menu');
    const navLink = document.querySelectorAll('.nav__link');

    let mobileNavOpen = false;

    headerBars.addEventListener('click', () => {
        mobileNavOpen = !mobileNavOpen;
        
        if(mobileNavOpen){
            navMenu.classList.add('active');
            document.body.style.overflowY = 'hidden';
        } else{
            navMenu.classList.remove('active');
            document.body.style.overflowY = 'auto';
        };
    });

    navLink.forEach(links => {
        links.addEventListener('click', () => {
            mobileNavOpen = false;
            navMenu.classList.remove('active');
            document.body.style.overflowY = 'auto';
        });
    });
    
};

export default mobileNav;