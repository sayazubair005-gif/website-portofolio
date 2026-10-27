// Portofolio Zubair — interaksi halaman
console.log("Website Zubair berhasil dimuat!");

// Animasi mengetik
const typingElement = document.getElementById("typing");
const daftarTeks = ["Pelajar", "Programmer", "Web Developer", "App Developer"];
let indeksTeks = 0;
let indeksHuruf = 0;
let sedangMenghapus = false;

function efekMengetik() {
    if (!typingElement) return;
    const teksSekarang = daftarTeks[indeksTeks];
    indeksHuruf += sedangMenghapus ? -1 : 1;
    typingElement.textContent = teksSekarang.substring(0, indeksHuruf);
    let kecepatan = sedangMenghapus ? 45 : 95;
    if (!sedangMenghapus && indeksHuruf === teksSekarang.length) {
        sedangMenghapus = true;
        kecepatan = 1300;
    } else if (sedangMenghapus && indeksHuruf === 0) {
        sedangMenghapus = false;
        indeksTeks = (indeksTeks + 1) % daftarTeks.length;
        kecepatan = 250;
    }
    setTimeout(efekMengetik, kecepatan);
}
efekMengetik();

// Animasi saat scroll
const elemenReveal = document.querySelectorAll(".reveal");
function cekReveal() {
    elemenReveal.forEach((elemen) => {
        if (elemen.getBoundingClientRect().top < window.innerHeight - 60) {
            elemen.classList.add("active");
        }
    });
}
window.addEventListener("scroll", cekReveal, { passive: true });
window.addEventListener("load", cekReveal);

// Tema gelap/terang
const themeToggle = document.getElementById("themeToggle");
if (localStorage.getItem("tema-zubair") === "terang") document.body.classList.add("light-theme");
function perbaruiIkonTema() {
    if (themeToggle) themeToggle.textContent = document.body.classList.contains("light-theme") ? "🌙" : "☀️";
}
perbaruiIkonTema();
if (themeToggle) themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    localStorage.setItem("tema-zubair", document.body.classList.contains("light-theme") ? "terang" : "gelap");
    perbaruiIkonTema();
});

// Menu mobile
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const terbuka = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(terbuka));
        menuToggle.textContent = terbuka ? "✕" : "☰";
    });
    navLinks.querySelectorAll("a").forEach((tautan) => tautan.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    }));
}

// Form kontak — ganti emailTujuan dengan alamat emailmu
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
if (contactForm) contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nama = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("message").value.trim();
    const emailTujuan = ""; // Isi, misalnya: nama@email.com
    if (!nama || !email || !pesan) {
        if (formNote) formNote.textContent = "Lengkapi semua kolom terlebih dahulu.";
        return;
    }
    if (!emailTujuan) {
        if (formNote) formNote.textContent = "Formulir siap. Tambahkan email tujuan pada script.js agar aplikasi email dapat dibuka.";
        return;
    }
    const subjek = encodeURIComponent("Pesan dari portofolio — " + nama);
    const isi = encodeURIComponent("Nama: " + nama + "\nEmail: " + email + "\n\nPesan:\n" + pesan);
    window.location.href = `mailto:${emailTujuan}?subject=${subjek}&body=${isi}`;
});

// Tahun otomatis di footer
const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();
