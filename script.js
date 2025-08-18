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
  "teman-kosbima": "Teman Kos Bima",
  "agres": "Agres & Partner",
  "laskar": "Laskar",
  "teman-kuliah-tika": "Teman Kuliah Tika",
  "kawan-tika": "Kawan Kawan Tika",
  "nur-safina": "Nur Safina",
  "nonop": "Nonop & Partner",
  "jami": "Jami & Partner",
  "ridho-baru": "Ridho & Keluarga",
  "fransisca": "Fransisca & Partner",
  "indah-kevin": "Indah & Kevin",
  "revi": "Revi & Partner",
  "nurul-baru": "Nurul & Partner",
  "ecik": "Ecik & Partner",
  "rina": "Rina Ramadhana & Partner",
  "pak-eka": "Pak Eka & Keluarga",
  "ibu-salwa": "Ibu Salwa & Keluarga",
  "zakir": "Zakir & Partner",
  "wildan": "Wildan & Partner",
  "auli": "Auli & Partner",
  "vivi": "Vivi & Partner",
  "awlia": "Awlia & Partner",
  "salwa-sabila": "Salwa Sabila",
  "diva-meilani": "Diva Meilani",
  "siti-fatimah": "Siti Fatimah",
  "insan-khairani": "Insan Khairani",
  "maisaroh": "Maisaroh",
  "bihuri": "Bihuri",
  "aurel": "Aurel",
  "fhania": "Fhania",
  "assyifa": "Assyifa Syauqiyah",
  "bunda-luthfia": "Bunda Luthfia & Keluarga",
  "anak-ngaji": "Anak Ngaji Comel Szah",
  "alumni-96": "Alumni Kelas 9.6",
  "dafa-antoni": "Dafa Antoni",
  "andre": "Andre",
  "verdiansyah": "Verdiansyah",
  "iswandi": "Iswandi & Partner",
  "ustd-imron": "Ustd Imron & Keluarga",
  "arga": "Arga & Istri",
  "naufal": "Naufal & Bunda",
  "abdurrahman": "Abdurrahman",
  "mantan-74": "Mantan Kelas 7.4",
  "dinda": "Dinda & Keluarga",
  "helvi": "Helvi & Patner",
  "aida": "Aida & Partner",
  "euis": "Euis & Bg Ejak",
  "lipi": "Lipi & Bunda",
  "mamat": "Mamat & Partner",
  "divanya": "Divanya & Bunda",
  "ufairah": "Ufairah & Bunda",
  "shendy": "Shendy & Bunda",
  "adrian": "Adrian & Partner",
  "airin": "Airin & Bunda",
  "bunda-amel": "Bunda Amel & Keluarga",
  "kak-syifa": "Kak Syifa & Partner",
  "kak-aini": "Kak Aini & Suami",
  "siti-keluarga": "Siti & Keluarga",
  "adri": "Adri & Partner",
  "nanda": "Nanda & Keluarga",
  "sari": "Sari & Partner",
  "finna": "Finna & Keluarga",
  "finni": "Finni & Keluarga",
  "wawan": "Wawan & Partner",
  "udin": "Jalaludin & Keluarga",
  "ustd-asmadi": "Ustd Asmadi & Istri",
  "ica": "Ica & Keluarga",
  "ustd-rusdi": "Ustd rusdi & istri",
  "habib": "Habib & partner",
  "fairus": "Fairus & partner",
  "avrio": "Avrio & keluarga",
  "bg-rido": "Bg Rido & partner",
  "awin": "Awin & partner",
  "adit": "Adit & partner",
  "rizal": "Rizal & partner",
  "putri-bojan": "Putri/bojan & partner",
  "yuda": "Yuda & partner",
  "annisa-hurriyah": "Annisa Hurriyah & Partner",
  "nisa": "Nisa & partner",
  "fani": "Fani & partner",
  "amii": "Amii & partner",
  "riska": "Riska & partner",
  "diana": "Diana & Partner",
  "sonia": "Sonia & Partner",
  "kak-shady": "Kak Shady & Partner",
  "ai": "Ai & Partner",
  "ranti": "Ranti & Partner",
  "alip": "Alip & Partner",
  "obi-ami": "Obi & Ami",
  "fadzil": "Fadzil & partner",
  "mak-ari": "Mak Ari",
  "putri": "Putri & partner",
  "siti-sandi": "Siti & Sandi",
  "nia": "Nia & Partner",
  "zava-zavi": "Zava, Zavi & Bunda",
  "bunda-alwi": "Bunda Alwi",
  "devy-safira": "Devy Safira & Keluarga",
  "sella-satrio": "Sella & Satrio",
  "mantri": "Mantri & Keluarga",
  "bang-roni": "Bang Roni & Keluarga",
  "sawir-abdullah": "Sawir Abdullah & Keluarga",
  "udin-suratin": "Udin Suratin & Keluarga",
  "keluarga-besar": "Keluarga Besar",
  "tsaqif": "Tsaqif & Keluarga",
  "rafa": "Rafa & Keluarga",
  "anak-dai": "Anak Dai",
  "hanjani-vanessa": "Hanjani, Vanessa& Keluarga",
  "umi-nova": "Umi Nova& Keluarga",
  "ustd-afdal": "Ustd Afdal & Keluarga",
  "kak-ordah": "Kak Ordah",
  "erik": "Erik & Istri",
  "hamdi": "Hamdi & Partner",
  "abiyyu": "Abiyyu & Partner",
  "bg-fikri": "Bg Fikri & Keluarga",
  "zahra-qamila": "Zahra Qamila & Bunda",
  "rahmat-zuliaji": "Rahmat Zuliaji",
  "bg-roni-baru": "Bg Roni & Keluarga",
  "ais": "Ais & Bunda",
  "dara-parlina": "Dara Parlina, Salsa & Bunda",
  "shopia": "Shopia & Bunda",
  "fathena": "Fathena & Bunda",
  "anida-risma": "Anida Risma & Keluarga",
  "azhar-jas": "Azhar Jas & Keluarga",
  "guru-sdn12": "Kepala Sekolah & Majelis Guru SDN 12 Pinggir",
  "guru-sdn1": "Kepala Sekolah & Dewan Guru SDN 1 Pinggir",
  "guru-sdn23": "Kepala Sekolah & Majelis Guru SDN 23 Pinggir",
  "huzaini": "Huzaini & Keluarga",
  "sapriedi": "Sapriedi & Keluarga",
  "suwardi": "Suwardi & Keluarga",
  "astar-family": "Astar Family",
  "zulpiter": "Zulpiter & Keluarga",
  "jhon-peri": "Jhon Peri & Keluarga",
  "toni": "Toni & Keluarga",
  "devi-suami": "Devi & Suami",

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




