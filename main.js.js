const navBar = document.querySelector(".nav-bar");
const hamburger = document.querySelector(".mini-hamburger");

// const navBar = document.querySelector('navbar');
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");

  window.addEventListener("scroll", () => {
    const scrollPositon = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPositon >= sectionTop &&
        scrollPositon < sectionTop + sectionHeight
      ) {
        links.forEach((link) => {
          link.classList.remove("active");
        });
        const activeLink=document.querySelector(`a[href="#${section.id}"]`);
        activeLink.classList.add('active');
      }
    });
  });
});
