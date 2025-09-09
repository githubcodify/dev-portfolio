const button = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");
const icon = document.getElementById("menu-icon");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const submenus = document.querySelectorAll(".mobileMenu");

button.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;

    // nav toggle
    nav.classList.toggle("bg-transparent");
    nav.classList.toggle("bg-white/70");
    nav.classList.toggle("backdrop-blur-lg");
    nav.classList.toggle("shadow-lg");

    // icon toggle
    icon.classList.toggle("pt-[5px]");

    // 1. çizgi
    line1.classList.toggle("w-5");
    line1.classList.toggle("rotate-[48deg]");
    line1.classList.toggle("-translate-y-1")

    // 2. çizgi
    line2.classList.toggle("translate-y-1");

    submenus.forEach((menu) => {
        menu.classList.toggle("max-h-0");
        menu.classList.toggle("opacity-0");
        menu.classList.toggle("max-h-64");
        menu.classList.toggle("opacity-100");
    });

    applyNavStyle();
});

// Scroll event
// window.addEventListener("scroll", () => {
//     if (window.innerWidth < 768) { // sadece mobil için (md altı)
//       if (window.scrollY > 10) {
//         nav.classList.remove("bg-transparent");
//         nav.classList.add("bg-white/70", "backdrop-blur-lg", "shadow-lg");
//       } else {
//         nav.classList.add("bg-transparent");
//         nav.classList.remove("bg-white/70", "backdrop-blur-lg", "shadow-lg");
//       }
//     }
//   });

let isMenuOpen = false; // butonla açılıp kapanan durum

function applyNavStyle() {
    const isMobile  = window.innerWidth < 768;    // md altı
    const scrolled  = window.scrollY > 10;
    const solidNav  = isMobile ? (scrolled || isMenuOpen) : scrolled;
    // Mobilde: sayfa aşağıdaysa **veya** menü açıksa solid kalsın
    // Desktopta: sadece scroll'a göre değiştir

    if (solidNav) {
        nav.classList.remove("bg-transparent");
        nav.classList.add("bg-white/70", "backdrop-blur-lg", "shadow-lg");
    } else {
        nav.classList.add("bg-transparent");
        nav.classList.remove("bg-white/70", "backdrop-blur-lg", "shadow-lg");
    }
}

// SCROLL: her kaydırmada görünümü güncelle
window.addEventListener("scroll", applyNavStyle);

// Ekran boyutu değişirse tekrar hesapla
window.addEventListener("resize", applyNavStyle);

// İlk yüklemede doğru hali uygula
document.addEventListener("DOMContentLoaded", applyNavStyle);

document.getElementById("projects-link").addEventListener("click", (e) => {
    e.preventDefault(); // linkin sayfa yenilemesini engeller
  
    const target = document.getElementById("featured-projects");

    target.scrollIntoView({
        behavior: "smooth", // yumuşak kaydırma
        block: "start"
    });
});

document.getElementById("projects-link-mobile").addEventListener("click", (e) => {
    e.preventDefault(); // linkin sayfa yenilemesini engeller
  
    const target = document.getElementById("featured-projects");

    target.scrollIntoView({
        behavior: "smooth", // yumuşak kaydırma
        block: "start"
    });

    // Menü otomatik kapansın (butona tıklamış gibi)
    setTimeout(() => {
        button.click();
    }, 400); // scroll başlamasından biraz sonra tetiklenir
});

document.getElementById("contact-link").addEventListener("click", (e) => {
    e.preventDefault(); // linkin sayfa yenilemesini engeller
  
    const target = document.getElementById("lets-connect");
    
    target.scrollIntoView({
        behavior: "smooth", // yumuşak kaydırma
        block: "start"
    });
});

document.getElementById("contact-link-mobile").addEventListener("click", (e) => {
    e.preventDefault(); // linkin sayfa yenilemesini engeller
  
    const target = document.getElementById("lets-connect");
    
    target.scrollIntoView({
        behavior: "smooth", // yumuşak kaydırma
        block: "start"
    });
});
  
document.getElementById("skills-link").addEventListener("click", (e) => {
    e.preventDefault(); // linkin sayfa yenilemesini engeller
  
    const target = document.getElementById("skills-and-tech");
    
    target.scrollIntoView({
        behavior: "smooth", // yumuşak kaydırma
        block: "start"
    });

    setTimeout(() => {
        button.click();
    }, 400);
});
