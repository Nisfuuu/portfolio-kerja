// nav
const navMenu = document.querySelector("#nav-menu");
// Hamburger
const hamburger = document.querySelector("#hamburger");

// ketika di click emnjalankan fungsi toggle hamburger-active
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  hamburger.classList.toggle("hamburger-active");
});

//navbar fixed
window.onscroll = () => {
  // ambil elemen html header
  const header = document.querySelector("header");
  //   membaca pergerakan hedaer ofsset waktu di scroll (header yg kita punya memiliki top-0)
  const fixedNav = header.offsetTop;
  // tombol to top
  const toTop = document.querySelector("#to-top");

  //   falidasi ketika layar di scroll apakah nilai fixNav lebih besar dari fixedNav, yg kita tahu fixedNav mempunyai top-0 ketika di scroll otomatis window nilainya akan bertambah alias lebih besar
  if (window.pageYOffset > fixedNav) {
    // dan menambahkan class navbar-fixed
    header.classList.add("navbar-fixed");
    // to top class
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");

    // jika tidak hapus kelas navbar-fixed
  } else {
    header.classList.remove("navbar-fixed");
    // jika tidak
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai mode

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
