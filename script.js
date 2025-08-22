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
function decodeHtmlEntities(str) {
  if (!str) return "";
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}

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
  "ima": "Ima & Partner",
  "ima-andista": "Ima Andista & Partner",
  "suci": "Suci & Keluarga",
  "mak-inal": "Mak Inal & Keluarga",
  "mak-dodi": "Mak Dodi & Keluarga",
  "kak-gesha": "Kak Gesha & Keluarga",
  "barry": "Barry & Partner",
  "mak-wara": "Mak Wara & Keluarga",
  "kak-ordah-keluarga": "Kak Ordah & Keluarga",
  "ante-linda": "Ante Linda & Keluarga",
  "bg-willy": "Bg Willy & Partner",
  "bg-jefri": "Bg Jefri & Partner",
  "hajrul-aswadi-keluarga": "Hajrul Aswadi & Keluarga",
  "yarman-zuhurdi-keluarga": "Yarman Zuhurdi & Keluarga",
  "winda-rizanti": "Winda Rizanti",
  "surya-ainun-susanti": "Surya Ainun Susanti",
  "hajrun-keluarga": "Hajrun & Keluarga",
  "pandra-keluarga": "Pandra & Keluarga",
  "sagimin-keluarga": "Sagimin & Keluarga",
  "tri-sumantri-keluarga": "Tri Sumantri & Keluarga",
  "mujiyono-keluarga": "Mujiyono & Keluarga",
  "rita-indah-keluarga": "Rita Indah & Keluarga",
  "surat-keluarga": "Surat & Keluarga",
  "nando": "Nakan Nando & Keluarga",
  "ricko": "Nakan Ricko & Keluarga",
  "dede": "Nakan Dede & Keluarga",
  "dwima": "Dwima & Keluarga",
  "rani-keluarga": "Rani & Keluarga",
  "astri-partner": "Astriana Rahmah & Partner",
  "ulya-partner": "Ulya Afifah & Partner",
  "khanif-keluarga": "Khanif Ikhsanudin & Keluarga",
  "intan-kumala-saridri"  : "Intan Kumala Sari & Partner",
  "nanik-suami": "Wigati Nanik Nurima & Suami",
  "pak-andri": "Pak Andri & Keluarga",
  "yth-bupati-siak": "Yth. Dr. Afni Z, M.Si",
  "yth-wakil-bupati-siak": "Yth. Syamsurizal, S.Ag, M.Si",
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

const LAST_SEND_KEY = 'ucapan:lastSend';
const THROTTLE_MS = 15000; // 15 detik

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.style.display = 'block';
  toast.style.opacity = '1';

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => { toast.style.display = 'none'; }, 500);
  }, 3000);
}

function kirimUcapan() {
  const btn = document.getElementById('btn-kirim'); // untuk debounce
  const nama = document.getElementById('nama').value.trim();
  const pesan = document.getElementById('pesan').value.trim();

  // Kehadiran (opsional)
  const r = document.querySelector('input[name="kehadiran"]:checked');
  const status = r ? r.value : null;

  // Jumlah (opsional; hanya kirim bila status ada)
  const hiddenJumlah = document.getElementById('jumlah');
  const jumlah = hiddenJumlah && hiddenJumlah.value ? parseInt(hiddenJumlah.value, 10) : null;

  // Honeypot (opsional—tambahkan input #hp di HTML jika mau)
  const hp = (document.getElementById('hp')?.value || '').trim();
  if (hp) { console.warn('Honeypot terisi, abaikan.'); return; }

  if (!nama || !pesan) {
    alert("Isi nama dan ucapan dulu ya!");
    return;
  }

  // Throttle lokal: minimal 15 detik antar submit per perangkat
  const now = Date.now();
  const last = parseInt(localStorage.getItem(LAST_SEND_KEY) || '0', 10);
  if (now - last < THROTTLE_MS) {
    const sisa = Math.ceil((THROTTLE_MS - (now - last)) / 1000);
    alert(`Terlalu cepat. Coba lagi dalam ${sisa} detik.`);
    return;
  }

  // Debounce tombol (antisipasi double click)
  if (btn) btn.disabled = true;

  // Sanitasi
  const safeNama = escapeHTML(nama);
  const safePesan = escapeHTML(pesan);

  db.ref('ucapan').push({
    nama: safeNama,
    pesan: safePesan,
    waktu: now,
    status: status || null,
    jumlah: status ? (Number.isFinite(jumlah) ? jumlah : 1) : null,
    hp: "" // biarkan kosong kalau kamu pakai honeypot
  })
    .then(() => {
      localStorage.setItem(LAST_SEND_KEY, String(now));

      // ✅ Tambahkan alert sukses di sini
      showToast("Ucapan berhasil dikirim!");
      // Reset field
      document.getElementById('nama').value = '';
      document.getElementById('pesan').value = '';
      document.querySelectorAll('input[name="kehadiran"]').forEach(r => r.checked = false);

      // Reset stepper ke KOSONG (tampilan "—")
      if (hiddenJumlah) {
        hiddenJumlah.value = '';
        const view = document.getElementById('kh-jumlah-view');
        if (view) view.textContent = '—';
      }
    })
    .catch(err => {
      
      alert('Gagal mengirim. Coba lagi ya.');
    })
    .finally(() => {
      // Re-enable tombol setelah jeda singkat
      if (btn) setTimeout(() => { btn.disabled = false; }, 1200);
    });
}

// === Format waktu untuk label & tooltip
function fmtWaktuLabel(date) {
  const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = bulan[date.getMonth()];
  const yy = date.getFullYear();
  const hh = String(date.getHours()).padStart(2, '0');
  const mi = String(date.getMinutes()).padStart(2, '0');
  return `${dd} ${mm} ${yy} • ${hh}.${mi}`;
}
function fmtWaktuTooltip(date) {
  return date.toLocaleString('id-ID', {
    weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
}

// ===== Interaksi pills & stepper =====
(function initKehadiranUI() {
  // Stepper jumlah (optional)
  const hiddenJumlah = document.getElementById('jumlah');
  const jumlahView = document.getElementById('kh-jumlah-view');
  if (!hiddenJumlah || !jumlahView) return;

  // --- default: EMPTY ---
  function showEmpty() {
    hiddenJumlah.value = "";        // not submitted if untouched
    jumlahView.textContent = "—";   // visual placeholder
    jumlahView.classList.add('is-placeholder');
  }
  function showValue(n) {
    hiddenJumlah.value = String(n);
    jumlahView.textContent = n;
    jumlahView.classList.remove('is-placeholder');
  }
  showEmpty();

  document.querySelectorAll('.stepper').forEach(btn => {
    btn.addEventListener('click', () => {
      const step = parseInt(btn.dataset.step, 10);

      if (!hiddenJumlah.value) {
        // Kalau masih kosong → set ke 1 dulu
        showValue(1);
        return;
      }

      let val = parseInt(hiddenJumlah.value, 10) + step;

      // Jika hasil kurang dari 1 → reset kosong
      if (val < 1) {
        showEmpty();
      } else {
        showValue(val);
      }
    });
  });

  // Optional: clicking on the number toggles clear (easy way to reset)
  jumlahView.addEventListener('click', () => {
    if (hiddenJumlah.value) showEmpty();
  });

  // Clear status button (unchanged)
  const clearBtn = document.getElementById('kh-clear');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      document.querySelectorAll('input[name="kehadiran"]').forEach(r => r.checked = false);
    });
  }
})();

function kelasTagStatus(status) {
  const s = (status || '').toLowerCase();
  if (s === 'hadir') return 'tag--hadir';
  if (s === 'belum_pasti') return 'tag--belum';
  if (s === 'tidak_hadir') return 'tag--tidak';
  return '';
}

function labelStatus(status) {
  const s = (status || '').toLowerCase();
  if (s === 'hadir') return '<i class="ri-calendar-check-line"></i>Hadir';
  if (s === 'belum_pasti') return '<i class="ri-question-line"></i>Belum Pasti';
  if (s === 'tidak_hadir') return '<i class="ri-close-circle-line"></i>Tidak Hadir';
  return '';
}

// Tampilkan hanya 20 ucapan terbaru, dengan <time> + clamp teks panjang
// ===============Ucapan========== (DROP-IN, FINAL)

// --- util aman HTML
function escapeHTML(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// --- format waktu (pakai punyamu kalau sudah ada)
if (typeof fmtWaktuLabel !== "function") {
  window.fmtWaktuLabel = function (date) {
    const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = bulan[date.getMonth()];
    const yy = date.getFullYear();
    const hh = String(date.getHours()).padStart(2, '0');
    const mi = String(date.getMinutes()).padStart(2, '0');
    return `${dd} ${mm} ${yy} • ${hh}.${mi}`;
  };
}
if (typeof fmtWaktuTooltip !== "function") {
  window.fmtWaktuTooltip = function (date) {
    return date.toLocaleString('id-ID', {
      weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };
}
if (typeof kelasTagStatus !== "function") {
  window.kelasTagStatus = function (status) {
    const s = (status || '').toLowerCase();
    if (s === 'hadir') return 'tag--hadir';
    if (s === 'belum_pasti') return 'tag--belum';
    if (s === 'tidak_hadir') return 'tag--tidak';
    return '';
  };
}
if (typeof labelStatus !== "function") {
  window.labelStatus = function (status) {
    const s = (status || '').toLowerCase();
    if (s === 'hadir') return 'Hadir';
    if (s === 'belum_pasti') return 'Belum Pasti';
    if (s === 'tidak_hadir') return 'Tidak Hadir';
    return '';
  };
}

// --- bikin 1 item ucapan (TANPA ketergantungan CSS khusus)
function createUcapanItem(data = {}) {
  const d = new Date(data.waktu || Date.now());
  const wrap = document.createElement('div');
  wrap.className = 'ucapan-item';
  wrap.style.padding = '12px';
  wrap.style.borderBottom = '1px solid rgba(0,0,0,.06)';

  const statusKelas = kelasTagStatus(data.status);
  const badgeStatus = statusKelas
    ? `<span class="tag ${statusKelas}" style="margin-right:8px"> ${labelStatus(data.status)}</span>`
    : '';
  const badgeJumlah = (data.jumlah && data.jumlah > 0)
    ? `<span class="tag tag--jumlah" style="margin-right:8px"><i class="ri-user-2-line"></i>${data.jumlah}</span>`
    : '';

  wrap.innerHTML = `
    <div class="ucapan-head" style="display:flex;justify-content:space-between;gap:12px;align-items:center">
      <b>${decodeHtmlEntities(data.nama || '(Tanpa nama)')}</b>
      <time class="ucapan-time" datetime="${d.toISOString()}" title="${fmtWaktuTooltip(d)}" style="opacity:.7;font-size:12px">
        ${fmtWaktuLabel(d)}
      </time>
    </div>
    <div class="ucapan-body" style="margin-top:6px">
      <div class="ucapan-text is-clamp" style="display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;">
        <p style="margin:0;white-space:pre-wrap">${escapeHTML(data.pesan || '')}</p>
      </div>
      <button type="button" class="ucapan-more" style="margin-top:6px;background:none;border:none;color:#c29165;cursor:pointer;padding:0">
        Lihat selengkapnya
      </button>
    </div>
    ${(badgeStatus || badgeJumlah) ? `<div class="ucapan-foot" style="margin-top:6px">${badgeStatus}${badgeJumlah}</div>` : ''}
  `;

  // toggle clamp jika memang overflow
  const textWrap = wrap.querySelector('.ucapan-text');
  const moreBtn = wrap.querySelector('.ucapan-more');
  requestAnimationFrame(() => {
    const needMore = textWrap.scrollHeight > textWrap.clientHeight + 2;
    if (!needMore) {
      moreBtn.style.display = 'none';
      textWrap.classList.remove('is-clamp');
    } else {
      moreBtn.addEventListener('click', () => {
        const clamped = textWrap.classList.toggle('is-clamp');
        if (clamped) {
          textWrap.style.display = '-webkit-box';
          textWrap.style.webkitLineClamp = '3';
        } else {
          textWrap.style.display = 'block';
          textWrap.style.webkitLineClamp = 'unset';
        }
        moreBtn.textContent = clamped ? 'Lihat selengkapnya' : 'Tutup';
      });
    }
  });

  return wrap;
}

// --- kirim ucapan (pakai yang sudah ada di filemu? kalau belum, ini fallback)
if (typeof window.kirimUcapan !== 'function') {
  const LAST_SEND_KEY = 'ucapan:lastSend';
  const THROTTLE_MS = 15000; // 15s
  window.kirimUcapan = function () {
    const btn = document.getElementById('btn-kirim');
    const nama = (document.getElementById('nama')?.value || '').trim();
    const pesan = (document.getElementById('pesan')?.value || '').trim();
    const r = document.querySelector('input[name="kehadiran"]:checked');
    const status = r ? r.value : null;
    const hiddenJumlah = document.getElementById('jumlah');
    const jumlah = hiddenJumlah && hiddenJumlah.value ? parseInt(hiddenJumlah.value, 10) : null;
    const hp = (document.getElementById('hp')?.value || '').trim();

    if (hp) return; // honeypot
    if (!nama || !pesan) { alert('Isi nama dan ucapan ya 🙂'); return; }

    const now = Date.now();
    const last = parseInt(localStorage.getItem(LAST_SEND_KEY) || '0', 10);
    if (now - last < THROTTLE_MS) {
      const sisa = Math.ceil((THROTTLE_MS - (now - last)) / 1000);
      alert(`Terlalu cepat. Coba lagi ${sisa} detik.`);
      return;
    }
    if (btn) btn.disabled = true;

    const payload = {
      nama: escapeHTML(nama),
      pesan: escapeHTML(pesan),
      waktu: now,
      status: status || null,
      jumlah: status ? (Number.isFinite(jumlah) ? jumlah : 1) : null,
      hp: ""
    };

    const root = db.ref();
    const key = db.ref('ucapan').push().key;
    const updates = {};
    updates['/ucapan/' + key] = payload;

    root.update(updates)
      .then(() => {
        localStorage.setItem(LAST_SEND_KEY, String(now));
        document.getElementById('nama').value = '';
        document.getElementById('pesan').value = '';
        document.querySelectorAll('input[name="kehadiran"]').forEach(x => x.checked = false);
        if (hiddenJumlah) {
          hiddenJumlah.value = '';
          const view = document.getElementById('kh-jumlah-view');
          if (view) view.textContent = '—';
        }
        // refresh ke halaman terbaru
        if (typeof loadLatestPage === 'function') loadLatestPage();
      })
      .catch(e => {
        
        alert('Gagal mengirim. Coba lagi ya.');
      })
      .finally(() => {
        if (btn) setTimeout(() => btn.disabled = false, 900);
      });
  };
}

/* ================= FLATTEN PAGINATION (client-side) ================= */
// TOMBOL di HTML: #btn-older, #btn-newer, #page-info
// WADAH LIST: #list-ucapan

const PAGE_SIZE = 20;   // ubah sesuai kebutuhan
let ALL_ITEMS = [];     // hasil flatten: [{key, nama, pesan, waktu, ...}]
let page = 1;
let TOTAL_PAGES = 1;

function getListUcapan() {
  return document.getElementById('list-ucapan');
}

function renderPageClient(items) {
  const list = getListUcapan();
  if (!list) { console.warn('[ucapan] #list-ucapan tidak ditemukan'); return; }
  const frag = document.createDocumentFragment();
  items.forEach(it => frag.appendChild(createUcapanItem(it)));
  list.innerHTML = '';
  list.appendChild(frag);
}

function setPagerUIClient() {
  const pageInfo = document.getElementById('page-info');
  const btnNewer = document.getElementById('btn-newer');
  const btnOlder = document.getElementById('btn-older');

  if (pageInfo) pageInfo.textContent = `Hal ${page}`;
  if (btnNewer) btnNewer.disabled = page <= 1;
  if (btnOlder) btnOlder.disabled = page >= TOTAL_PAGES;
  
}

function pageSlice(p) {
  const start = (p - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  return ALL_ITEMS.slice(start, end);
}

function loadOlderPage_client() {
  if (page >= TOTAL_PAGES) return;
  page += 1;
  renderPageClient(pageSlice(page));
  setPagerUIClient();
}

function loadNewerPage_client() {
  if (page <= 1) return;
  page -= 1;
  renderPageClient(pageSlice(page));
  setPagerUIClient();
}

// 🔽🔽 FLATTEN: ambil semua anak level-1 dan juga cucunya (bucket)
async function loadAllUcapanFlatten() {
  const snap = await db.ref('ucapan').once('value');
  const flat = [];

  snap.forEach(l1 => {
    const v = l1.val();

    // Leaf langsung (punya waktu & pesan)
    if (v && typeof v === 'object' && 'pesan' in v && 'waktu' in v) {
      flat.push({ key: l1.key, ...v });

      // Bucket: telusuri cucu
    } else if (v && typeof v === 'object') {
      Object.keys(v).forEach(k2 => {
        const vv = v[k2];
        if (vv && typeof vv === 'object' && 'pesan' in vv && 'waktu' in vv) {
          flat.push({ key: k2, ...vv });
        }
      });
    }
    // selain itu: di-skip
  });

  // Normalisasi dan urut terbaru di atas
  ALL_ITEMS = flat.map(it => ({
    ...it,
    waktu: Number(it.waktu) || 0,      // pastikan numeric
    nama: (it.nama ?? '').toString(),
    pesan: (it.pesan ?? '').toString()
  })).sort((a, b) => (b.waktu) - (a.waktu));

  page = 1;
  TOTAL_PAGES = Math.max(1, Math.ceil(ALL_ITEMS.length / PAGE_SIZE));

  renderPageClient(pageSlice(page));
  setPagerUIClient();
}

function wirePagerClient() {
  const older = document.getElementById('btn-older');
  const newer = document.getElementById('btn-newer');
  const pager = document.getElementById('ucapan-pager');

  // lepas listener lama biar gak dobel (kalau sebelumnya pernah diikat)
  if (older?._handler) older.removeEventListener('click', older._handler);
  if (newer?._handler) newer.removeEventListener('click', newer._handler);

  const onOlder = () => {
    loadOlderPage_client();
    // scroll setelah render frame berikutnya
    requestAnimationFrame(() => {
      pager?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
  };
  const onNewer = () => {
    loadNewerPage_client();
    requestAnimationFrame(() => {
      pager?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
  };

  if (older) {
    older.addEventListener('click', onOlder);
    older._handler = onOlder;
  }
  if (newer) {
    newer.addEventListener('click', onNewer);
    newer._handler = onNewer;
  }
}

// INIT: panggil saat DOM siap
document.addEventListener('DOMContentLoaded', async () => {
  wirePagerClient();
  await loadAllUcapanFlatten();   // load semua, paginate di client
});

function decodeHtmlEntities(str) {
  if (!str) return "";
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}
/* ================= END FLATTEN PAGINATION ================= */

/* ===== End Pagination by KEY ===== */

// =============== END Ucapan ==========

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

/* ====== PAGER WIRING (sesuai script.js kamu) ====== */
(function wirePagerToExisting() {
  function pick(fnNames) {
    for (const n of fnNames) {
      if (typeof window[n] === 'function') return window[n];
    }
    return null;
  }

  function get(el) { return document.getElementById(el); }

  // deteksi fungsi pagination yang ada di file kamu
  const goOlder = pick(['loadOlderPage_client','loadOlderPage_flat','loadOlderPage','loadOlderPage_byTime','loadOlderPageKey']);
  const goNewer = pick(['loadNewerPage_client','loadNewerPage_flat','loadNewerPage','loadNewerPage_byTime','loadNewerPageKey']);
  const goLatest = pick(['loadLatestPage','loadLatestPage_flat','loadAllUcapanFlatten']); // untuk refresh ke halaman terbaru

  // ambil tombol dari HTML
  const olderBtn = get('btn-older');
  const newerBtn = get('btn-newer');
  const pageInfo = get('page-info');

  // guard: tunggu DOM siap
  if (!olderBtn || !newerBtn || !pageInfo) {
    document.addEventListener('DOMContentLoaded', wirePagerToExisting);
    return;
  }

  // pasang handler sekali saja
  if (!olderBtn._wired && goOlder) {
    olderBtn.addEventListener('click', () => { goOlder(); });
    olderBtn._wired = true;
  }
  if (!newerBtn._wired && goNewer) {
    newerBtn.addEventListener('click', () => { goNewer(); });
    newerBtn._wired = true;
  }

  // helper: sinkron teks & disabled (menggunakan variabel `page` dan, bila flatten, `TOTAL_PAGES`)
  window.syncPagerUI = function syncPagerUI() {
    try {
      if (typeof page !== 'undefined' && pageInfo) pageInfo.textContent = `Hal ${page}`;
      if (typeof FLATTEN_MODE !== 'undefined' && FLATTEN_MODE === true) {
        // flatten mode (client-side)
        if (typeof TOTAL_PAGES === 'number') {
          if (newerBtn) newerBtn.disabled = page <= 1;
          if (olderBtn) olderBtn.disabled = page >= TOTAL_PAGES;
        }
      } else {
        // mode server-side — biarkan fungsi setPagerUI kamu yang men-disable tombol.
        // Di sini hanya sync teks halamannya.
        if (newerBtn && typeof page !== 'undefined') newerBtn.disabled = page <= 1;
      }
    } catch(e) {
      // tidak apa-apa, hanya UI sync
    }
  };

  // panggil sekali saat start (kalau kamu panggil loadLatestPage sendiri, biarkan)
  if (goLatest && !window._pagerBootstrapped) {
    window._pagerBootstrapped = true;
    // jangan ganggu init kamu jika sudah memanggil loadLatestPage di tempat lain
    // kita hanya pastikan tombol sudah terhubung:
    // sync pertama:
    window.syncPagerUI();
  }
})();

