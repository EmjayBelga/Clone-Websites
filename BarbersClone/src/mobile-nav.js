const mobileNavigaton = () => {
    const headerBars = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLink = document.querySelectorAll('.mobile-nav__link');

    let mobileNavOpen = false;

    headerBars.addEventListener('click', () => {
        mobileNavOpen = !mobileNavOpen;
        
        if(mobileNavOpen){
            mobileNav.classList.add('active');
            document.body.style.overflowY = 'hidden';
        } else{
            mobileNav.classList.remove('active');
            document.body.style.overflowY = 'auto';
        };
    });

    mobileNavLink.forEach(links => {
        links.addEventListener('click', () => {
            mobileNavOpen = false;
            mobileNav.classList.remove('active');
            document.body.style.overflowY = 'auto';
        });
    });


    // const headerBars = document.querySelector('.header__bars');
    // const mobileNav = document.querySelector('.mobile-nav');
    // const mobileNavLink = document.querySelectorAll('.mobile-nav__link');
    
    // let mobileNavOpen = false;
    
    // headerBars.addEventListener('click', () => {
    //     mobileNavOpen = !mobileNavOpen;
    //     if(mobileNavOpen){
    //         mobileNav.style.display = 'block';
    //         document.body.style.overflowY = 'hidden';
    //     }else{
    //         mobileNav.style.display = 'none';
    //         document.body.style.overflowY = 'auto';
    //     };
    // });
    
    // mobileNavLink.forEach(links => {
    //     links.addEventListener('click', () => {
    //         mobileNavOpen = false;
    //         mobileNav.style.display = 'none';
    //         document.body.style.overflowY = 'auto';
    //     });
    // });
};

export default mobileNavigaton;