// ===============================
  // BURGER MENU (untuk mobile nav)
  // ===============================
  document.addEventListener("DOMContentLoaded", function () {
    const $navbarBurgers = Array.from(document.querySelectorAll(".navbar-burger"));

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener("click", function () {
          const target = $el.dataset.target;
          const $target = document.getElementById(target);

          $el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });

  // =========================================
  // SMOOTH SCROLL untuk anchor (#section)
  // =========================================
  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();
    const target = $($.attr(this, "href"));
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        200
      );
    }
  });

  // ========================================
  // TO-TOP BUTTON SHOW / HIDE + ANIMASI
  // ========================================
  function scrollFunction() {
    if (window.scrollY > 20) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  }

  window.addEventListener("scroll", scrollFunction);

  

  // ========================================
  // PRELOADER + AOS (Satu Kali Jalan)
  // ========================================
  window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader-wrapper");
  const home = document.getElementById("home");
  const openButton = document.getElementById("open-button");

  // Inisialisasi AOS sejak awal agar preloader bisa animasi
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: false,     // ulangi animasi
    mirror: true,    // animasi saat scroll naik
    offset: 100,
  });

  // Saat tombol dibuka
  openButton.addEventListener('click', function () {
  const preloader = document.querySelector(".preloader-wrapper");

  // Tambahkan kelas animasi warp
  preloader.classList.add("warp-out");

  // Aktifkan scroll
  document.body.classList.remove('noscroll');

  // Hapus dari tampilan setelah animasi selesai
  setTimeout(() => {
    preloader.style.display = "none";

    // Segarkan AOS dan layout
    AOS.refreshHard();
    window.dispatchEvent(new Event("resize"));
    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }, 1000); // delay sesuai durasi animasi CSS
});
 
});



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__expand-link');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');

    const linkTarget = document.querySelector('.nav__expand-link[href*="#' + sectionId + '"]');

    if (linkTarget) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        // Hapus semua active-link terlebih dahulu
        navLinks.forEach(link => link.classList.remove('active-link'));
        // Tambahkan active-link hanya di link yang tepat
        linkTarget.classList.add('active-link');
      }
    }
  });
};

window.addEventListener('scroll', scrollActive);




// Slider galeri otomatis===================

const slider = document.querySelector('.slider');

setInterval(() => {
  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
    slider.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
  }
}, 4000);


// Salin ke clipboard nomor

function copyToClipboard(elementId, button) {
  const text = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(text).then(() => {
    const original = button.innerHTML;
    button.innerHTML = '<i class="ri-check-line"></i> &nbsp; Tersalin!';
    setTimeout(() => {
      button.innerHTML = original;
    }, 1500);
  });
}
