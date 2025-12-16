    async function loadComponent(id, file) {
      const res = await fetch(file);
      const html = await res.text();
      document.getElementById(id).innerHTML = html;
    }

    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");


//swiper star
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
      // Optional parameters
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      speed: 500,
      
      // Pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
//swiper end
//counter star
  function animateCounter(element, target, duration) {
    let start = 0;
    let increment = target / (duration / 16); // 60fps approx
    let counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      element.textContent = Math.floor(start);
    }, 16);
  }
   document.addEventListener("DOMContentLoaded", function () {
    // Select all counter elements
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      animateCounter(counter, target, 2000); // 2000ms = 2 sec
    });
  });

  //counter end
  


      //this is a revive slider js
      const slider = document.getElementById('testimonialSlider');
const slides = Array.from(slider.children);
let speed = 1;

// Calculate total width of original slides including gap
const slideWidth = slides.reduce((total, slide) => total + slide.offsetWidth + 24, 0);

// Determine how many times to clone to ensure infinite scroll
const totalClones = Math.ceil(window.innerWidth / slideWidth) + 2;

// Clone slides multiple times
for (let i = 0; i < totalClones; i++) {
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
  });
}

function animateSlider() {
  slider.scrollLeft += speed;

  // Reset scrollLeft seamlessly
  if (slider.scrollLeft >= slider.scrollWidth / 2) {
    slider.scrollLeft = 0;
  }

  requestAnimationFrame(animateSlider);
}

animateSlider();

slider.addEventListener('mouseenter', () => speed = 0);
slider.addEventListener('mouseleave', () => speed = 1);

//toggle
async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;

  // If header loaded, initialize toggle
  if (id === "header") {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }
  }
}

loadComponent("header", "header.html");
loadComponent("footer", "footer.html");


//toggle


 // hero section switch //
 const heroImages = document.querySelectorAll(".hero-img");
  let currentIndex = 0;

  setInterval(() => {
    heroImages[currentIndex].classList.remove("opacity-100");
    heroImages[currentIndex].classList.add("opacity-0");

    currentIndex = (currentIndex + 1) % heroImages.length;

    heroImages[currentIndex].classList.remove("opacity-0");
    heroImages[currentIndex].classList.add("opacity-100");
  }, 5000); // every 5s