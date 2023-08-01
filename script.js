function switchActiveButton(event) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active-btn');
        item.classList.remove('active');
    }, );

    const clickedButton = event.currentTarget;
    clickedButton.classList.add('active-btn');
    clickedButton.classList.add('active');
    clickedButton.classList.add('animate');
    setTimeout(() => {
        clickedButton.classList.remove('animate');
    }, 1000);

    const targetSectionID = clickedButton.querySelector('a').getAttribute('href');

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.transform = 'translateY(-100%) scale(0)';
        section.classList.remove('active');
    });
    

    const targetSection = document.querySelector(targetSectionID);
    targetSection.classList.add('active');

    targetSection.scrollIntoView({ behavior: 'smooth' });
    targetSection.style.transform = 'translateY(0) scale(1)';
}

const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', switchActiveButton);
});

const download=document.querySelector('.btn-text');
download.textContent="Download CV";

document.addEventListener("DOMContentLoaded", function() {
    const scrollUpButton = document.getElementById("scroll-up");

    scrollUpButton.addEventListener("click", function() {
        // Scroll smoothly to the top of the page
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


setTimeout(function() {
    window.location.href = "thankYou.html";
  }, 30000);



