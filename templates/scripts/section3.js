// Isi lengkap untuk file script/section3.js

document.addEventListener("DOMContentLoaded", () => {
  // Memilih semua tombol dan semua blok konten
  const filterButtons = document.querySelectorAll(".division__btn");
  const divisionBlocks = document.querySelectorAll(".division__block");

  // Fungsi untuk menyembunyikan semua blok, lalu menampilkan satu yang dipilih

  const filterBlocks = (filterValue) => {
    divisionBlocks.forEach((block) => {
      // Cek apakah ID blok cocok dengan filterValue
      if (block.id === filterValue) {
        block.classList.remove("hide"); // Tampilkan blok ini
      } else {
        block.classList.add("hide"); // Sembunyikan blok lainnya
      }
    });
  };

  // Memberi 'event listener' pada setiap tombol
  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault(); // Mencegah link '#' menggulir halaman

      // Hapus kelas 'active' dari semua tombol
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Tambahkan kelas 'active' ke tombol yang baru saja diklik
      e.currentTarget.classList.add("active");

      // Ambil ID target dari atribut href (misal: "manajemen")
      const filterValue = e.currentTarget.getAttribute("href").substring(1);

      // Jalankan fungsi filter
      filterBlocks(filterValue);
    });
  });

  // --- Mengatur Tampilan Awal ---
  // Ini akan berjalan saat halaman pertama kali dimuat
  // untuk page pacil:
  const pacilFilter = "manajemen";
  const pacilButton = document.querySelector(
    `.division__btn[href="#${pacilFilter}"]`
  );

  if (pacilButton) {
    pacilButton.classList.add("active"); // Buat tombol Manajemen aktif
    filterBlocks(pacilFilter); // Sembunyikan semua blok KECUALI blok Manajemen
  }

  // untuk page about us:
  const aboutUsFilter = "bph";
  const aboutUsButton = document.querySelector(
    `.division__btn[href="#${aboutUsFilter}"]`
  );

  if (aboutUsButton) {
    aboutUsButton.classList.add("active"); // Buat tombol bph aktif
    filterBlocks(aboutUsFilter); // Sembunyikan semua blok KECUALI blok Manajemen
  }
});
