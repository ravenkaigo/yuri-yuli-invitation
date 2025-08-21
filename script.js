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
  "surat-keluarga": "Surat & Keluarga"
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
      console.error('Gagal kirim:', err);
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
  if (s === 'hadir') return 'Hadir';
  if (s === 'belum_pasti') return 'Belum Pasti';
  if (s === 'tidak_hadir') return 'Tidak Hadir';
  return '';
}

// Tampilkan hanya 20 ucapan terbaru, dengan <time> + clamp teks panjang
db.ref('ucapan')
  .orderByChild('waktu')
  .limitToLast(20)
  .on('child_added', function (snapshot) {
    const data = snapshot.val() || {};
    const d = new Date(data.waktu || Date.now());

    // (opsional) mapping status -> tag (pakai fungsi kamu kalau sudah ada)
    const kelasTagStatus = typeof window.kelasTagStatus === 'function'
      ? window.kelasTagStatus
      : () => '';
    const labelStatus = typeof window.labelStatus === 'function'
      ? window.labelStatus
      : () => '';

    const kelas = kelasTagStatus(data.status);
    const badgeStatus = kelas
      ? `<span class="tag ${kelas}"><i class="ri-calendar-check-line"></i> ${labelStatus(data.status)}</span>`
      : '';
    const badgeJumlah = (data.jumlah && data.jumlah > 0)
      ? `<span class="tag tag--jumlah"><i class="ri-user-2-line"></i> ${data.jumlah}</span>`
      : '';

    const html = `
      <div class="ucapan-item">
        <div class="ucapan-head">
          <b>${data.nama || '(Tanpa nama)'}</b>
          <time class="ucapan-time"
                datetime="${d.toISOString()}"
                title="${fmtWaktuTooltip(d)}">${fmtWaktuLabel(d)}</time>
        </div>
        <div class="ucapan-body"><p>${data.pesan || ''}</p></div>
        ${badgeStatus || badgeJumlah ? `<div class="ucapan-foot">${badgeStatus} ${badgeJumlah}</div>` : ''}
      </div>
    `;

    const list = document.getElementById('list-ucapan');
    list.insertAdjacentHTML('afterbegin', html);

    // ===== Clamp stabil: wrap <p> ke .ucapan-text, tombol di luar wrapper
    const item = list.firstElementChild;
    const body = item.querySelector('.ucapan-body');
    if (body) {
      // 1) Pastikan ada wrapper .ucapan-text berisi <p>
      let textWrap = body.querySelector('.ucapan-text');
      const p = body.querySelector('p');
      if (!textWrap && p) {
        textWrap = document.createElement('div');
        textWrap.className = 'ucapan-text';
        body.insertBefore(textWrap, p); // letakkan wrapper sebelum <p>
        textWrap.appendChild(p);        // pindahkan <p> ke dalam wrapper
      }

      // 2) Pastikan ada tombol di luar wrapper (sebagai sibling)
      let more = body.querySelector('.ucapan-more');
      if (!more) {
        more = document.createElement('button');
        more.type = 'button';
        more.className = 'ucapan-more';
        more.textContent = 'Lihat selengkapnya';
        body.appendChild(more);
      }

      // 3) Aktifkan clamp di wrapper, cek overflow nyata, lalu toggle
      textWrap.classList.add('is-clamp');

      requestAnimationFrame(() => {
        const needMore = textWrap.scrollHeight > textWrap.clientHeight + 2; // toleransi 2px
        if (!needMore) {
          textWrap.classList.remove('is-clamp'); // tidak kepotong → tidak perlu tombol
          more.style.display = 'none';
          return;
        }

        more.addEventListener('click', () => {
          const clamped = textWrap.classList.toggle('is-clamp');
          more.textContent = clamped ? 'Lihat selengkapnya' : 'Tutup';
        });
      });
    }
    // ===== end clamp
  }, function (err) {
    console.error('DB error:', err);
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




