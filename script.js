// const daftarTamu = {
//     "andi": "Andi Nugroho",
//     "siti": "Ibu Siti",
//     "riko": "Riko Wahyudi",
//     // tambahin tamu lain di sini
//   };

//   const param = new URLSearchParams(location.search).get("to");
//   const nama = daftarTamu[param];

//   if (nama) {
//     document.getElementById("guest-name").textContent = nama;
//   } else {
//     document.body.innerHTML = "<h1>Maaf, Halaman tidak ditemukan.</h1>";
//   }

const daftarTamu = {
  "dicky": "Dicky Wardhana & Keluarga",
  "ridho": "Ridho Dedi & Partner",
  "irwandy": "Irwandy Sembiring & Partner",
  "bang-romi": "Bang Romi & Keluarga",
  "bang-afri": "Bang Afri & Keluarga",
  "nazli": "Nazli Qodri & Keluarga",
  "farhan": "Tengku Ahmad Farhan & Keluarga",
  "rian": "Rian Aulia",
  "shofia": "Shofia Nurul",
  "pria": "Pria Kesuma",
  "nurman": "Nurman & Keluarga",
  "domi": "Domi & Keluarga",
  "bang-jaka": "Bang Jaka & Keluarga",
  "fikri": "Fikri Ikhlasul Amal & Partner",
  "ega-teddy": "Ega & Teddy",
  "zaky": "Zaky & Keluarga",
  "sayogi": "Sayogi Majid & Keluarga",
  "habil": "Habil Arsyiddik & Keluarga",
  "novia": "Novia Moullina & Keluarga",
  "mas-tom": "Mas Tom & Keluarga",
  "bang-deni": "Bang Deni",
  "ampalu-kopi": "Ampalu Kopi",
  "bang-agus": "Bang Agus & Keluarga",
  "mak-wi": "Mak Wi & Keluarga",
  "bang-tony": "Bang Tony Prayetno",
  "bang-dedekes": "Bang Dedekes",
  "fira-dandy": "Fira & Dandy",
  "kak-nisa": "Kak Nisa & ust. Rusdi",
  "kak-dilla": "Kak Dilla & suami",
  "dwi": "Dwi Nurmala Sari & Partner",
  "azrida": "Azrida & Partner",
  "zaza": "Zaza & Partner",
  "uci": "Uci & Partner",
  "wiya": "Wiya & Partner",
  "nurul": "Nurul Mahfuza & Partner",
  "amel": "Amel & Partner",
  "piaw": "Piaw & Partner",
  "titi": "Titi & Partner",
  "yossi": "Yossi & Partner",
  "citra": "Citra & Partner",
  "kak-rahmayatul": "Kak Rahmayatul Husna & Keluarga",
  "kak-nur": "Kak Nur Hidayah & Keluarga",
  "nabila": "Nabila & Partner",
  "nana": "Nana & Partner",
  "irham": "Irham & Partner",
  "acen": "Acen & Partner",
  "rolly": "Rolly & Partner",
  "ramzi": "Ramzi & Partner",
  "nadia": "Nadia & Partner",
  "latifah": "Latifah & Partner",
  "firda": "Firda & Partner",
  "siti": "Siti & Partner",
  "helma": "Helma Winda & Partner",
  "aidil": "Aidil Anshori & Partner",
  "bg-adey": "Bg Adey & Partner",
  "febi": "Febi & Partner",
  "uti": "Uti & Partner",
  "kak-sulis": "Kak Sulis & Partner",
  "elsa-rafi": "Elsa & Rafi",
  "gilang": "Gilang & Partner",
  "rani": "Rani Permatasari & Partner",
  "geng-kos": "Geng Kos Bima",
  "regina": "Regina & Partner",
  "regini": "Regini & Partner",
  "siska": "Siska & Partner",
  "kak-resti": "Kak Resti & Partner",
  "rohana": "Rohana & Partner",
  "mami": "Mami/ Bunda & Keluarga",
  "teman-kosbima":"Teman Kos Bima",
  "agres": "Agres & Partner"
  //tambah tamu disini
};


const param = new URLSearchParams(location.search).get("to");
const namaDefault = "Tamu Undangan"; // nama default
const nama = daftarTamu[param] || namaDefault;

document.getElementById("guest-name").textContent = nama;
document.getElementById("guest-nama").textContent = nama;

// ===============Ucapan==========

// Fungsi untuk hapus tag HTML
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function kirimUcapan() {
  const nama = document.getElementById('nama').value.trim();
  const pesan = document.getElementById('pesan').value.trim();

  if (!nama || !pesan) {
    alert("Isi nama dan ucapan dulu ya!");
    return;
  }

  // Sanitasi input
  const safeNama = escapeHTML(nama);
  const safePesan = escapeHTML(pesan);

  db.ref('ucapan').push({
    nama: safeNama,
    pesan: safePesan,
    waktu: Date.now()
  });

  document.getElementById('nama').value = '';
  document.getElementById('pesan').value = '';
}

function formatWaktu(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

// Tampilkan hanya 20 ucapan terbaru
db.ref('ucapan')
  .orderByChild('waktu')
  .limitToLast(20) // cuma ambil 20 terakhir
  .on('child_added', function (snapshot) {
    const data = snapshot.val();
    const waktuFormatted = formatWaktu(data.waktu);
    const ucapanHTML = `
        <div class="ucapan-item">
          <b>${data.nama}</b> <small>${waktuFormatted}</small>
          <p>${data.pesan}</p>
        </div>
      `;
    const listUcapan = document.getElementById('list-ucapan');
    listUcapan.innerHTML = ucapanHTML + listUcapan.innerHTML; // terbaru di atas
  });

// Gift Tab


document.querySelectorAll('.tabs ul li').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tabs ul li').forEach(li => li.classList.remove('is-active'));
    tab.classList.add('is-active');

    const target = tab.getAttribute('data-tab');
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('is-active'));
    document.getElementById(target).classList.add('is-active');
  });
});




