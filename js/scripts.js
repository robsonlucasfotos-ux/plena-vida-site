document.addEventListener('DOMContentLoaded', () => {
    console.log('Plena Vida site loaded');

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navList = document.getElementById('nav-list');

    if (mobileMenuBtn && navList) {
        mobileMenuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
});
