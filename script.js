/* ============================================================
   AI LAB — Misi Menjadi AI Engineer
   script.js (VERSI FINAL) — vanilla JS, tanpa dependensi
   ============================================================ */

'use strict';

/* ------------------------------------------------------------
   1. DATA MATERI (AI Academy)
   ------------------------------------------------------------ */
const MODULES = [
  { id:'m1', icon:'🧠', title:'Misi 1 — Apa Itu Kecerdasan Artifisial?',
    desc:'Mengenal AI, machine learning, dan cara komputer "belajar".', unlockAfter:null },
  { id:'m2', icon:'📊', title:'Misi 2 — Data: Bahan Bakar AI',
    desc:'Jenis data, kualitas data, dan mengapa data sampah menghasilkan AI sampah.', unlockAfter:'m1' },
  { id:'m3', icon:'🎓', title:'Misi 3 — Cara AI Belajar',
    desc:'Supervised, unsupervised, dan reinforcement learning secara sederhana.', unlockAfter:'m2' },
  { id:'m4', icon:'⚖️', title:'Misi 4 — Etika & Bias AI',
    desc:'Bias data, privasi, dan tanggung jawab seorang AI Engineer.', unlockAfter:'m3' },
  { id:'m5', icon:'🚀', title:'Misi 5 — Alur Kerja AI Engineer',
    desc:'Dari masalah nyata sampai model yang siap dipakai.', unlockAfter:'m4' }
];

/* ------------------------------------------------------------
   2. DATA KUIS + PEMBAHASAN
   ------------------------------------------------------------ */
const QUIZZES = {
  m1: {
    badge:'Challenge · Misi 1', title:'Kuis: Dasar Kecerdasan Artifisial',
    passScore:70, xpPerCorrect:10,
    questions:[
      { q:'Apa pengertian paling tepat dari Kecerdasan Artifisial (AI)?',
        options:['Program yang hanya bisa menyimpan file',
                 'Sistem komputer yang mampu meniru kemampuan berpikir dan mengambil keputusan seperti manusia',
                 'Perangkat keras yang membuat komputer lebih cepat',
                 'Aplikasi chatting biasa'],
        answer:1,
        explain:'AI adalah sistem komputer yang dirancang untuk meniru kemampuan manusia seperti mengenali gambar, memahami bahasa, dan mengambil keputusan.' },
      { q:'Manakah yang termasuk contoh penerapan AI di kehidupan sehari-hari?',
        options:['Kalkulator biasa yang menjumlahkan angka',
                 'Lampu yang dinyalakan dengan saklar manual',
                 'Fitur pengenalan wajah untuk membuka ponsel',
                 'Jam dinding yang berputar otomatis'],
        answer:2,
        explain:'Pengenalan wajah (face recognition) memakai model AI untuk mengenali pola wajah. Kalkulator dan saklar bekerja dengan aturan tetap, bukan belajar dari data.' },
      { q:'Apa perbedaan utama AI dengan program komputer biasa?',
        options:['Program biasa selalu lebih cepat',
                 'AI butuh listrik, program biasa tidak',
                 'AI belajar dari data, sedangkan program biasa mengikuti aturan yang sudah ditulis manusia',
                 'AI hanya ada di internet'],
        answer:2,
        explain:'Ini inti perbedaannya. Program biasa: "jika A maka B" yang ditulis manusia. AI: aturan/polanya ditemukan sendiri dari data latih.' },
      { q:'Istilah "machine learning" paling dekat artinya dengan…',
        options:['Mesin yang bisa belajar sendiri dari data',
                 'Mesin yang perlu dibongkar setiap hari',
                 'Aplikasi pembelajaran daring',
                 'Robot yang bergerak otomatis'],
        answer:0,
        explain:'Machine learning adalah cabang AI di mana model "belajar" dari contoh data, bukan diprogram aturan satu per satu.' },
      { q:'Seorang AI Engineer terutama bertugas untuk…',
        options:['Menjual komputer ke toko',
                 'Merancang, melatih, menguji, dan merawat sistem AI agar berguna bagi pengguna',
                 'Mengganti kabel jaringan kantor',
                 'Menulis berita tentang teknologi'],
        answer:1,
        explain:'AI Engineer bekerja dari memahami masalah, menyiapkan data, melatih model, menguji, lalu menerapkan dan memantau performanya.' }
    ]
  },

  m2: {
    badge:'Challenge · Misi 2', title:'Kuis: Data dan Kualitasnya',
    passScore:70, xpPerCorrect:10,
    questions:[
      { q:'Apa yang dimaksud dengan data latih (training data)?',
        options:['Data yang dipakai untuk mengompilasi program',
                 'Kumpulan contoh yang dipakai model untuk belajar pola',
                 'Data hasil penilaian guru',
                 'Daftar nama pengguna aplikasi'],
        answer:1,
        explain:'Model belajar dari contoh-contoh pada data latih. Kualitas dan jumlahnya sangat menentukan hasil akhirnya.' },
      { q:'Jika kamu membuat model pengenal buah tetapi semua foto apel diambil di meja putih, apa risikonya?',
        options:['Model jadi lebih cepat',
                 'Model mungkin salah mengenali apel di latar belakang berbeda karena data kurang beragam',
                 'Tidak ada risiko, model selalu benar',
                 'Model bisa mengenali semua benda'],
        answer:1,
        explain:'Data yang tidak beragam membuat model menghafal latar belakang, bukan ciri buah. Ini disebut overfitting pada latar tertentu.' },
      { q:'Manakah data yang paling BURUK untuk melatih model pengenalan tulisan tangan?',
        options:['1.000 tulisan dari banyak orang berbeda',
                 '500 tulisan yang terlihat jelas',
                 '10 tulisan yang semuanya sama persis',
                 '2.000 tulisan dengan variasi alat tulis'],
        answer:2,
        explain:'Sepuluh sampel yang identik berarti model tidak pernah melihat variasi. Data sedikit dan seragam membuat model tidak bisa menggeneralisasi.' },
      { q:'Apa fungsi data uji (test data) yang dipisahkan dari data latih?',
        options:['Untuk mempercepat pelatihan',
                 'Untuk mengukur seberapa baik model pada data yang belum pernah dilihatnya',
                 'Untuk menambah ukuran file',
                 'Untuk menghias tampilan aplikasi'],
        answer:1,
        explain:'Data uji memberi gambaran jujur tentang performa model di dunia nyata, karena model belum pernah melihatnya saat belajar.' },
      { q:'Label pada data berarti…',
        options:['Merek komputer yang dipakai',
                 'Keterangan jawaban benar pada setiap contoh, misalnya "kucing" atau "anjing"',
                 'Ukuran besar file gambar',
                 'Nama pembuat dataset'],
        answer:1,
        explain:'Label adalah "kunci jawaban" untuk setiap contoh. Pelatihan dengan label disebut supervised learning.' }
    ]
  },

  m3: {
    badge:'Challenge · Misi 3', title:'Kuis: Cara AI Belajar',
    passScore:70, xpPerCorrect:10,
    questions:[
      { q:'Supervised learning adalah model yang belajar dari…',
        options:['Data tanpa label sama sekali',
                 'Data berlabel, yaitu contoh beserta jawaban benarnya',
                 'Hadiah dan hukuman',
                 'Kode program yang sudah jadi'],
        answer:1,
        explain:'Supervised learning memakai pasangan input–output. Contoh: foto apel diberi label "apel".' },
      { q:'Contoh paling tepat untuk unsupervised learning adalah…',
        options:['Mengelompokkan pelanggan menjadi beberapa segmen tanpa kategori yang sudah ditentukan',
                 'Mengenali wajah dari foto yang sudah diberi nama',
                 'Menghitung total belanja',
                 'Mengurutkan nama siswa berdasarkan abjad'],
        answer:0,
        explain:'Unsupervised learning mencari pola atau kelompok sendiri, tanpa label yang diberikan manusia. Ini disebut clustering.' },
      { q:'Reinforcement learning paling cocok digambarkan sebagai…',
        options:['Belajar dari buku pelajaran',
                 'Belajar dengan mencoba, mendapat hadiah jika benar dan hukuman jika salah',
                 'Belajar menyalin jawaban teman',
                 'Belajar dari data berlabel'],
        answer:1,
        explain:'Model (agent) berinteraksi dengan lingkungan, menerima reward atau penalti, lalu menyesuaikan strateginya.' },
      { q:'Epoch dalam pelatihan model berarti…',
        options:['Satu putaran penuh model mempelajari seluruh data latih',
                 'Jumlah kamera yang dipakai',
                 'Nama bahasa pemrograman',
                 'Banyaknya pengguna aplikasi'],
        answer:0,
        explain:'Satu epoch = model sudah melewati seluruh data latih satu kali. Terlalu banyak epoch bisa membuat model overfitting.' },
      { q:'Model yang sudah dilatih diberi data baru dan hasilnya benar-benar akurat. Kemampuan ini disebut…',
        options:['Overfitting','Generalisasi','Dekompresi','Sinkronisasi'],
        answer:1,
        explain:'Generalisasi adalah kemampuan model bekerja baik pada data baru. Overfitting adalah kebalikannya: bagus di data latih, buruk di data baru.' }
    ]
  },

  m4: {
    badge:'Challenge · Misi 4', title:'Kuis: Etika dan Bias AI',
    passScore:70, xpPerCorrect:10,
    questions:[
      { q:'Apa yang dimaksud bias dalam sistem AI?',
        options:['Kerusakan pada perangkat keras',
                 'Kecenderungan model memberi hasil tidak adil karena data latihnya tidak seimbang',
                 'Kesalahan pengetikan kode',
                 'Koneksi internet yang lambat'],
        answer:1,
        explain:'Bias muncul ketika data latih tidak mewakili semua kelompok dengan adil, sehingga model merugikan kelompok tertentu.' },
      { q:'Contoh kejadian bias yang paling jelas adalah…',
        options:['Model pengenal wajah lebih sering gagal mengenali orang dengan warna kulit tertentu karena jarang ada di data latih',
                 'Model berjalan lambat di ponsel lama',
                 'Aplikasi sering keluar sendiri',
                 'Baterai ponsel cepat habis'],
        answer:0,
        explain:'Data latih yang tidak beragam membuat model berkinerja tidak merata — ini contoh nyata bias AI.' },
      { q:'Sebagai AI Engineer, langkah paling tepat untuk mengurangi bias adalah…',
        options:['Mengabaikannya karena model sudah jalan',
                 'Menambah dan menyeimbangkan data dari berbagai kelompok, lalu menguji hasilnya per kelompok',
                 'Menghapus fitur yang bermasalah',
                 'Mengganti warnanya jadi biru'],
        answer:1,
        explain:'Perbaikan dimulai dari data: pastikan beragam dan seimbang, lalu evaluasi performa untuk tiap kelompok pengguna.' },
      { q:'Prinsip data minimization berarti…',
        options:['Mengumpulkan sebanyak mungkin data pengguna',
                 'Hanya mengumpulkan data yang benar-benar dibutuhkan untuk tujuan tertentu',
                 'Menghapus semua data',
                 'Menyimpan data selamanya'],
        answer:1,
        explain:'Ambil secukupnya, pakai sesuai tujuan, dan jaga keamanannya. Ini praktik penting dalam pelindungan data pribadi.' },
      { q:'Mengapa hasil AI harus selalu diperiksa manusia sebelum dipakai untuk keputusan penting?',
        options:['Karena AI tidak bisa dijalankan tanpa manusia',
                 'Karena AI bisa salah dan keputusan penting menyangkut orang, jadi butuh pertanggungjawaban manusia',
                 'Karena manusia lebih cepat',
                 'Karena aturan mengharuskan semua komputer dimatikan'],
        answer:1,
        explain:'AI adalah alat bantu. Untuk keputusan berdampak besar, manusia tetap harus memverifikasi dan bertanggung jawab.' }
    ]
  },

  m5: {
    badge:'Challenge · Misi 5', title:'Kuis: Alur Kerja AI Engineer',
    passScore:70, xpPerCorrect:10,
    questions:[
      { q:'Urutan alur kerja AI Engineer yang paling logis adalah…',
        options:['Latih model → pahami masalah → kumpulkan data → terapkan',
                 'Pahami masalah → kumpulkan & siapkan data → latih model → uji & terapkan → pantau',
                 'Terapkan → uji → hapus data',
                 'Kumpulkan data → langsung terapkan tanpa uji'],
        answer:1,
        explain:'Semuanya dimulai dari masalah nyata. Data disiapkan, model dilatih, diuji, diterapkan, lalu terus dipantau.' },
      { q:'Mengapa tahap memahami masalah penting sebelum menyentuh data?',
        options:['Agar kita tahu data seperti apa yang dibutuhkan dan keberhasilan diukur bagaimana',
                 'Agar pekerjaan terlihat sibuk',
                 'Karena wajib dalam kurikulum',
                 'Agar bisa memakai komputer lebih lama'],
        answer:0,
        explain:'Tanpa kejelasan masalah dan ukuran keberhasilan, tim bisa mengumpulkan data yang salah dan melatih model yang tidak berguna.' },
      { q:'Kamu membuat model untuk mengenali jenis sampah. Cara paling tepat mengukur keberhasilannya adalah…',
        options:['Melihat tampilan aplikasinya bagus atau tidak',
                 'Menghitung persentase prediksi benar pada data uji yang belum pernah dilihat model',
                 'Menghitung jumlah baris kode',
                 'Menghitung jumlah foto yang tersimpan'],
        answer:1,
        explain:'Ukuran keberhasilan model adalah akurasi (dan metrik lain) pada data uji, bukan tampilan atau jumlah kode.' },
      { q:'Fungsi Google Teachable Machine bagi pemula adalah…',
        options:['Menggantikan seluruh pekerjaan AI Engineer',
                 'Melatih model AI langsung di browser tanpa menulis kode, sehingga konsepnya bisa dipahami lebih dulu',
                 'Mengedit video pembelajaran',
                 'Menyimpan file di cloud'],
        answer:1,
        explain:'Teachable Machine adalah alat latih cepat untuk memahami konsep data–latih–uji tanpa hambatan koding.' },
      { q:'Setelah model dipakai pengguna, tugas AI Engineer berikutnya adalah…',
        options:['Berhenti bekerja karena sudah selesai',
                 'Memantau performa, mengumpulkan keluhan, dan memperbarui model bila data dunia berubah',
                 'Menghapus model',
                 'Menjual model ke toko'],
        answer:1,
        explain:'Model yang sudah terpasang tetap perlu dipantau. Data dunia berubah, sehingga model perlu diperbarui secara berkala.' }
    ]
  }
};

/* ------------------------------------------------------------
   3. PENYIMPANAN
   ------------------------------------------------------------ */
const STORAGE_KEY = 'ailab_progress_v2';

const defaultState = () => ({
  xp: 0,
  completedModules: [],
  bestScores: {},
  labDone: false,
  labLogs: [],
  lastVisit: null
});

let state = defaultState();

/* ------------------------------------------------------------
   4. UTIL
   ------------------------------------------------------------ */
const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (e) { toast('Penyimpanan browser penuh. Progres tidak tersimpan.', 'warn'); }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  } catch (e) { return defaultState(); }
}

let toastTimer = null;
function toast(msg, type = '') {
  const el = $('#toast');
  if (!el) return;
  el.textContent = msg;
  el.className = 'toast show ' + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.className = 'toast ' + type; }, 3000);
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function todayID() {
  try {
    return new Date().toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });
  } catch (e) { return new Date().toISOString().slice(0, 10); }
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* ------------------------------------------------------------
   5. NAVIGASI
   ------------------------------------------------------------ */
function goTo(page) {
  $$('.page').forEach(p => p.classList.remove('active'));
  const target = $('#page-' + page);
  if (target) target.classList.add('active');

  $$('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.page === page));
  const nav = $('#navbar');
  if (nav) nav.classList.remove('open');

  if (page === 'mission') renderMissions();
  if (page === 'academy') renderModules();
  if (page === 'arena')   renderArena();
  if (page === 'report')  renderReport();
  if (page === 'teacher') renderTeacher();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ------------------------------------------------------------
   6. STATUS & PROGRES
   ------------------------------------------------------------ */
function isModuleDone(id) { return state.completedModules.includes(id); }

function isModuleUnlocked(mod) {
  if (!mod.unlockAfter) return true;
  return isModuleDone(mod.unlockAfter);
}

function bestScore(id) { return state.bestScores[id] || 0; }

function hasQuiz(mod) {
  return !!(QUIZZES[mod.id] && QUIZZES[mod.id].questions.length > 0);
}

function quizPassed(mod) {
  return !hasQuiz(mod) || bestScore(mod.id) >= QUIZZES[mod.id].passScore;
}

function isMissionComplete(mod) {
  return isModuleDone(mod.id) && quizPassed(mod);
}

function moduleProgress(mod) {
  let p = 0;
  if (isModuleDone(mod.id)) p += 50;
  if (hasQuiz(mod) ? bestScore(mod.id) >= QUIZZES[mod.id].passScore : isModuleDone(mod.id)) p += 50;
  return p;
}

/* Status kelulusan: satu sumber kebenaran untuk Learning Report dan sertifikat.
   Mengembalikan daftar syarat yang belum terpenuhi (kosong = lulus). */
function graduationStatus() {
  const missing = [];
  MODULES.forEach(m => {
    const plain = m.title.replace(/^Misi \d+ — /, '');
    const label = 'Misi ' + (MODULES.indexOf(m) + 1) + ' (' + plain + ')';
    if (!isModuleDone(m.id)) missing.push('materi ' + label);
    else if (!quizPassed(m)) missing.push('kuis ' + label);
  });
  if (!state.labDone) missing.push('tombol “Tandai Latihan Selesai” di AI Training Lab');
  return { passed: missing.length === 0, missing: missing };
}

function overallProgress() {
  let total = 0;
  MODULES.forEach(m => { total += moduleProgress(m); });
  return Math.round(total / MODULES.length);
}

function updateGlobalProgress() {
  const p = overallProgress();
  const fill = $('#gpFill'), txt = $('#gpText'), xp = $('#xpValue');
  if (fill) fill.style.width = p + '%';
  if (txt)  txt.textContent = 'Progres misi: ' + p + '%';
  if (xp)   xp.textContent = state.xp;
}

/* ------------------------------------------------------------
   7. MISSION CONTROL
   ------------------------------------------------------------ */
function renderMissions() {
  const grid = $('#missionGrid');
  if (!grid) return;

  grid.innerHTML = MODULES.map(mod => {
    const done   = isMissionComplete(mod);
    const opened = isModuleUnlocked(mod);
    const prog   = moduleProgress(mod);

    let statusClass = 'locked', statusText = 'Terkunci';
    if (done)        { statusClass = 'done'; statusText = 'Selesai'; }
    else if (opened) { statusClass = 'open'; statusText = 'Aktif'; }

    return `
      <article class="mission-card ${done ? 'done' : ''}">
        <div class="mc-top">
          <span class="mc-icon">${mod.icon}</span>
          <span class="mc-status ${statusClass}">${statusText}</span>
        </div>
        <h4>${mod.title}</h4>
        <p>${mod.desc}</p>
        <div class="mc-bar"><span style="width:${prog}%"></span></div>
        <button class="btn ${done ? 'btn-ghost' : 'btn-primary'}"
                ${opened ? '' : 'disabled'}
                data-open-module="${mod.id}">
          ${done ? 'Tinjau Misi' : opened ? 'Masuk Misi' : 'Selesaikan misi sebelumnya'}
        </button>
      </article>`;
  }).join('');
}

/* ------------------------------------------------------------
   8. MATERI & AI ACADEMY
   ------------------------------------------------------------ */
const MATERIAL = {
  m1: `
    <h4>Apa itu Kecerdasan Artifisial?</h4>
    <p><strong>Kecerdasan Artifisial (AI)</strong> adalah sistem komputer yang dirancang untuk meniru kemampuan berpikir manusia: mengenali gambar, memahami bahasa, memilih keputusan, dan belajar dari pengalaman.</p>
    <div class="keybox"><strong>Poin kunci:</strong> AI bukan program yang aturannya ditulis satu per satu. AI menemukan polanya sendiri dari data.</div>

    <h4>AI, Machine Learning, Deep Learning</h4>
    <ul>
      <li><strong>AI</strong> — payung besarnya: semua sistem yang meniru kecerdasan manusia.</li>
      <li><strong>Machine Learning (ML)</strong> — bagian AI yang belajar dari data.</li>
      <li><strong>Deep Learning</strong> — bagian ML yang memakai jaringan saraf berlapis-lapis, cocok untuk gambar dan suara.</li>
    </ul>
    <div class="analogy">🎯 <strong>Analogi:</strong> AI adalah sebuah sekolah. ML adalah pelajarannya. Deep Learning adalah jurusan tersulitnya.</div>

    <h4>AI di sekitarmu</h4>
    <ul>
      <li>Filter wajah dan pengenalan wajah di ponsel.</li>
      <li>Rekomendasi video dan lagu.</li>
      <li>Penerjemah bahasa otomatis.</li>
      <li>Deteksi barang cacat di pabrik.</li>
    </ul>
    <div class="keybox"><strong>Ingat:</strong> AI cepat menghitung, tetapi tidak memahami arti. Manusia tetap yang menilai hasilnya layak dipakai atau tidak.</div>
  `,

  m2: `
    <h4>Data adalah bahan bakar AI</h4>
    <p>Model AI tidak tahu apa-apa sebelum diberi contoh. Contoh itulah <strong>data latih</strong>. Semakin baik datanya, semakin baik hasil modelnya.</p>

    <h4>Jenis data</h4>
    <ul>
      <li><strong>Gambar</strong> — foto apel, daun, atau komponen mesin.</li>
      <li><strong>Teks</strong> — ulasan produk, pesan, dokumen.</li>
      <li><strong>Suara</strong> — perintah bicara, deteksi mesin rusak.</li>
      <li><strong>Angka</strong> — nilai sensor suhu, kelembapan, penjualan.</li>
    </ul>

    <h4>Data latih vs data uji</h4>
    <p>Data biasanya dibagi dua: sebagian dipakai untuk <strong>belajar</strong>, sebagian disimpan untuk <strong>menguji</strong>. Data uji tidak boleh pernah dilihat model saat belajar — supaya nilainya jujur.</p>

    <h4>Empat tanda data yang baik</h4>
    <ul>
      <li><strong>Cukup banyak</strong> — jangan 5 foto, usahakan puluhan sampai ratusan.</li>
      <li><strong>Beragam</strong> — beda sudut, cahaya, latar, ukuran.</li>
      <li><strong>Berlabel benar</strong> — jangan ada foto kucing berlabel anjing.</li>
      <li><strong>Seimbang</strong> — jumlah tiap kelas jangan jauh berbeda.</li>
    </ul>
    <div class="analogy">🧪 <strong>Analogi:</strong> data kotor = masakan kotor. Sehebat apa pun koki (modelnya), bahan yang buruk tetap menghasilkan rasa yang buruk. Istilahnya: <em>garbage in, garbage out</em>.</div>
  `,

  m3: `
    <h4>Tiga cara utama AI belajar</h4>

    <h4>1. Supervised Learning (belajar dengan guru)</h4>
    <p>Data sudah punya label atau jawaban benar. Model belajar memetakan input ke output.</p>
    <ul>
      <li>Foto daun + label nama penyakit → model mengenali penyakit daun.</li>
      <li>Email + label "spam / bukan spam" → filter spam.</li>
    </ul>

    <h4>2. Unsupervised Learning (belajar sendiri)</h4>
    <p>Tidak ada label. Model mencari pola dan mengelompokkan sendiri.</p>
    <ul>
      <li>Mengelompokkan pelanggan jadi beberapa tipe pembeli.</li>
      <li>Mendeteksi transaksi yang tidak biasa.</li>
    </ul>

    <h4>3. Reinforcement Learning (belajar dari pengalaman)</h4>
    <p>Model (agent) melakukan aksi, lalu mendapat <strong>reward</strong> bila benar dan <strong>penalti</strong> bila salah. Ia menyesuaikan strategi.</p>
    <ul>
      <li>Robot belajar berjalan.</li>
      <li>AI belajar memainkan permainan papan.</li>
    </ul>

    <h4>Istilah penting</h4>
    <ul>
      <li><strong>Epoch</strong> — satu putaran penuh mempelajari seluruh data latih.</li>
      <li><strong>Akurasi</strong> — persentase prediksi benar.</li>
      <li><strong>Overfitting</strong> — model hafal data latih, tetapi gagal pada data baru.</li>
      <li><strong>Generalisasi</strong> — model tetap bagus pada data baru. Ini tujuan sebenarnya.</li>
    </ul>
    <div class="keybox"><strong>Intinya:</strong> tujuan melatih model bukan menghafal, tetapi <em>memahami pola</em> yang bisa dipakai pada situasi baru.</div>
  `,

  m4: `
    <h4>AI tidak pernah netral</h4>
    <p>Model belajar dari data buatan manusia. Jika data itu tidak adil atau tidak lengkap, hasil AI ikut tidak adil. Inilah yang disebut <strong>bias</strong>.</p>

    <h4>Dari mana bias datang?</h4>
    <ul>
      <li>Data tidak mewakili semua kelompok pengguna.</li>
      <li>Data lama yang berisi kebiasaan tidak adil di masa lalu.</li>
      <li>Pelabelan yang dilakukan ceroboh atau berat sebelah.</li>
      <li>Data terlalu sedikit sehingga model menghafal kebetulan.</li>
    </ul>

    <h4>Contoh nyata</h4>
    <p>Sebuah model pengenal wajah bisa jauh lebih sering gagal mengenali kelompok yang fotonya jarang ada di data latih. Modelnya tidak "berniat" rasis — ia hanya cermin dari datanya.</p>
    <div class="analogy">🪞 <strong>Analogi:</strong> model AI seperti cermin. Ia memantulkan apa pun yang kamu taruh di depannya, termasuk kekuranganmu.</div>

    <h4>Tanggung jawab AI Engineer</h4>
    <ul>
      <li><strong>Kumpulkan data secukupnya</strong> — hanya yang benar-benar diperlukan (<em>data minimization</em>).</li>
      <li><strong>Uji per kelompok</strong> — pastikan performa merata, bukan hanya tinggi secara rata-rata.</li>
      <li><strong>Jelaskan hasilnya</strong> — pengguna berhak tahu model dipakai untuk apa.</li>
      <li><strong>Siapkan pengawasan manusia</strong> — keputusan penting tidak diserahkan penuh ke mesin.</li>
    </ul>
    <div class="keybox"><strong>Prinsip:</strong> teknologi yang baik bukan yang paling canggih, tetapi yang paling dapat dipertanggungjawabkan.</div>
  `,

  m5: `
    <h4>Alur kerja seorang AI Engineer</h4>
    <ol>
      <li><strong>Pahami masalah</strong> — apa yang ingin diselesaikan, dan bagaimana keberhasilannya diukur?</li>
      <li><strong>Kumpulkan data</strong> — cari, minta izin, dan pastikan datanya relevan.</li>
      <li><strong>Siapkan data</strong> — bersihkan, beri label, bagi jadi data latih dan data uji.</li>
      <li><strong>Latih model</strong> — pilih pendekatan, latih, atur parameternya.</li>
      <li><strong>Uji &amp; evaluasi</strong> — cek akurasi, cari kelemahan, ulangi bila perlu.</li>
      <li><strong>Terapkan</strong> — pasang ke aplikasi yang dipakai pengguna.</li>
      <li><strong>Pantau &amp; perbarui</strong> — dunia berubah, model perlu dijaga.</li>
    </ol>

    <h4>Contoh proyek lengkap</h4>
    <p><strong>Masalah:</strong> petugas kebersihan sulit memilah sampah cepat.<br>
    <strong>Solusi:</strong> model gambar yang membedakan sampah organik, plastik, dan kertas.<br>
    <strong>Data:</strong> 300 foto per kategori dari berbagai sudut.<br>
    <strong>Ukuran berhasil:</strong> akurasi ≥ 85% pada data uji.<br>
    <strong>Setelah terpasang:</strong> pantau salah klasifikasi, tambah data dari kasus sulit.</p>

    <div class="keybox"><strong>Karier di bidang ini:</strong> Data Annotator, Junior AI Engineer, Data Analyst, Machine Learning Engineer. Semuanya dimulai dari hal yang sama — memahami data dan masalahnya.</div>
  `
};

/* ------------------------------------------------------------
   KONTEN DINAMIS (materi & soal yang dapat diubah guru)
   Urutan prioritas: browser ini (hasil edit guru) > file
   konten-kustom.js > konten bawaan di atas.
   ------------------------------------------------------------ */
const CONTENT_KEY = 'ailab_content_v1';
const DEFAULT_PIN_HASH = 'p60dm66';
let teacherPinHash = DEFAULT_PIN_HASH;

const clone = (o) => JSON.parse(JSON.stringify(o));
const DEFAULT_CONTENT = clone({ modules: MODULES, quizzes: QUIZZES, material: MATERIAL });

function hashPin(s) {
  let h = 5381;
  for (const ch of String(s)) h = ((h << 5) + h + ch.charCodeAt(0)) | 0;
  return 'p' + (h >>> 0).toString(36);
}

function stripPrefix(t) {
  return String(t || '').replace(/^Misi \d+ — /, '');
}

function num(v, def, min, max) {
  const n = Number(v);
  return (isFinite(n) && n >= min && n <= max) ? Math.round(n) : def;
}

function okQ(q) {
  return !!q && typeof q.q === 'string' && Array.isArray(q.options) && q.options.length >= 2 &&
         Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length;
}

function validContent(c) {
  return !!c && Array.isArray(c.modules) && c.modules.length > 0 &&
    c.modules.every(m => m && typeof m.id === 'string' && m.id && typeof m.title === 'string') &&
    !!c.quizzes && typeof c.quizzes === 'object' &&
    !!c.material && typeof c.material === 'object';
}

/* Merapikan urutan, nomor misi, kunci berurutan, dan kelengkapan data */
function normalizeContent() {
  MODULES.forEach((m, i) => {
    const plain = stripPrefix(m.title);
    m.unlockAfter = i === 0 ? null : MODULES[i - 1].id;
    m.title = 'Misi ' + (i + 1) + ' — ' + plain;
    if (!QUIZZES[m.id]) QUIZZES[m.id] = { questions: [] };
    const qz = QUIZZES[m.id];
    qz.title = qz.title || ('Kuis: ' + plain);
    qz.badge = 'Challenge · Misi ' + (i + 1);
    qz.passScore = num(qz.passScore, 70, 1, 100);
    qz.xpPerCorrect = num(qz.xpPerCorrect, 10, 0, 100);
    if (!Array.isArray(qz.questions)) qz.questions = [];
    if (typeof MATERIAL[m.id] !== 'string') MATERIAL[m.id] = '';
  });
}

function applyContent(src) {
  const c = clone(src);
  MODULES.splice(0, MODULES.length, ...c.modules.map(m => ({
    id: m.id, icon: m.icon || '📘', title: m.title, desc: m.desc || '', unlockAfter: null
  })));
  Object.keys(QUIZZES).forEach(k => delete QUIZZES[k]);
  Object.keys(MATERIAL).forEach(k => delete MATERIAL[k]);
  Object.keys(c.quizzes).forEach(k => {
    const qz = c.quizzes[k] || {};
    qz.questions = (Array.isArray(qz.questions) ? qz.questions : [])
      .filter(okQ)
      .map(q => Object.assign({}, q, { explain: String(q.explain || '') }));
    QUIZZES[k] = qz;
  });
  Object.keys(c.material).forEach(k => { MATERIAL[k] = String(c.material[k]); });
  teacherPinHash = (typeof c.pinHash === 'string' && c.pinHash) ? c.pinHash : DEFAULT_PIN_HASH;
  normalizeContent();
}

function currentContent() {
  return clone({ modules: MODULES, quizzes: QUIZZES, material: MATERIAL, pinHash: teacherPinHash });
}

function loadContent() {
  const candidates = [];
  try {
    const raw = localStorage.getItem(CONTENT_KEY);
    if (raw) candidates.push(JSON.parse(raw));
  } catch (e) { /* abaikan, pakai sumber berikutnya */ }
  candidates.push(window.AILAB_CONTENT);

  const found = candidates.find(validContent);
  if (found) applyContent(found);
  else normalizeContent();
}

function saveContent() {
  try {
    localStorage.setItem(CONTENT_KEY, JSON.stringify(currentContent()));
    return true;
  } catch (e) {
    toast('Penyimpanan browser penuh. Perubahan tidak tersimpan.', 'warn');
    return false;
  }
}

function refreshAll() {
  renderMissions();
  renderModules();
  renderArena();
  renderReport();
  updateGlobalProgress();
}

/* Membersihkan HTML materi: buang script, iframe, atribut on*, dan tautan javascript: */
function sanitizeHtml(html) {
  try {
    const doc = new DOMParser().parseFromString(String(html || ''), 'text/html');
    doc.querySelectorAll('script,iframe,object,embed,link,meta,style,base,form').forEach(n => n.remove());
    doc.body.querySelectorAll('*').forEach(el => {
      Array.from(el.attributes).forEach(a => {
        const n = a.name.toLowerCase();
        const v = a.value.trim().toLowerCase();
        const bad = /^(javascript:|data:(?!image\/))/.test(v);
        if (n.startsWith('on') || ((n === 'href' || n === 'src' || n === 'xlink:href') && bad)) {
          el.removeAttribute(a.name);
        }
      });
    });
    return doc.body.innerHTML;
  } catch (e) {
    return escapeHtml(html);
  }
}

/* Teks biasa -> HTML. Jika guru menempel HTML, dipakai apa adanya. */
function inlineFmt(s) {
  return escapeHtml(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

function materialToHtml(text) {
  const t = String(text || '').trim();
  if (!t) return '';
  if (/<[a-z][\s\S]*?>/i.test(t)) return t;

  return t.split(/\n\s*\n/).map(block => {
    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
    if (!lines.length) return '';

    if (lines[0].startsWith('# ')) {
      const rest = lines.slice(1);
      return '<h4>' + inlineFmt(lines[0].slice(2)) + '</h4>' +
             (rest.length ? '<p>' + rest.map(inlineFmt).join('<br>') + '</p>' : '');
    }
    if (lines.every(l => l.startsWith('- '))) {
      return '<ul>' + lines.map(l => '<li>' + inlineFmt(l.slice(2)) + '</li>').join('') + '</ul>';
    }
    if (lines[0].startsWith('> ')) {
      return '<div class="keybox">' + lines.map(l => inlineFmt(l.replace(/^>\s?/, ''))).join('<br>') + '</div>';
    }
    return '<p>' + lines.map(inlineFmt).join('<br>') + '</p>';
  }).join('\n');
}

function renderModules() {
  const list = $('#moduleList');
  if (!list) return;

  list.innerHTML = MODULES.map((mod, idx) => {
    const unlocked = isModuleUnlocked(mod);
    const done     = isModuleDone(mod.id);

    return `
      <article class="module" data-module="${mod.id}">
        <div class="module-head" data-toggle="${mod.id}">
          <span class="module-num">${idx + 1}</span>
          <h3>${mod.icon} ${mod.title.replace(/^Misi \d+ — /, '')}</h3>
          <span class="caret">▼</span>
        </div>
        <div class="module-body">
          <div class="module-inner">
            ${sanitizeHtml(MATERIAL[mod.id] || '') || '<p>Materi belum tersedia.</p>'}
            <div class="module-foot">
              <button class="btn ${done ? 'btn-done' : 'btn-primary'}"
                      data-finish="${mod.id}" ${unlocked ? '' : 'disabled'}>
                ${done ? '✓ Materi Selesai' : 'Materi Selesai'}
              </button>
              <button class="btn btn-ghost" data-quiz="${mod.id}" ${done && hasQuiz(mod) ? '' : 'disabled'}>
                ${!hasQuiz(mod) ? 'Belum ada kuis' : done ? 'Mulai Kuis →' : 'Kunci kuis: selesaikan materi'}
              </button>
              ${unlocked ? '' : '<span class="hint">🔒 Selesaikan misi sebelumnya dahulu</span>'}
            </div>
          </div>
        </div>
      </article>`;
  }).join('');
}

function markMaterialDone(id) {
  if (isModuleDone(id)) { toast('Materi ini sudah kamu tandai selesai.', 'warn'); return; }
  state.completedModules.push(id);
  state.xp += 20;
  saveState();
  updateGlobalProgress();
  renderModules();
  renderMissions();
  toast('Materi selesai! +20 XP. Kuis terbuka.', 'good');
}

/* ------------------------------------------------------------
   9. MESIN KUIS
   ------------------------------------------------------------ */
const quiz = {
  moduleId: null,
  questions: [],
  index: 0,
  correct: 0,
  answered: false
};

function startQuiz(moduleId) {
  const data = QUIZZES[moduleId];
  if (!data) return;
  if (!data.questions.length) { toast('Kuis untuk materi ini belum memiliki soal.', 'warn'); return; }

  if (!isModuleDone(moduleId)) {
    toast('Selesaikan materi terlebih dahulu untuk membuka kuis.', 'warn');
    return;
  }

  quiz.moduleId  = moduleId;
  quiz.questions = shuffle(data.questions);
  quiz.index     = 0;
  quiz.correct   = 0;
  quiz.answered  = false;

  const modal = $('#quizOverlay .modal');
  if (modal) modal.classList.remove('showing-result');

  const resultPanel = $('#quizResult');
  if (resultPanel) resultPanel.hidden = true;

  $('#quizBadge').textContent = data.badge;
  $('#quizTitle').textContent = data.title;

  $('#quizOverlay').classList.add('show');

  renderQuestion();
}

function renderQuestion() {
  const q = quiz.questions[quiz.index];
  const total = quiz.questions.length;

  $('#qCounter').textContent = `Soal ${quiz.index + 1} / ${total}`;
  $('#qbarFill').style.width = (quiz.index / total * 100) + '%';
  $('#questionText').textContent = q.q;

  const letters = ['A', 'B', 'C', 'D', 'E'];
  const order = shuffle(q.options.map((_, i) => i));

  $('#optionsBox').innerHTML = order.map((origIdx, pos) => `
    <button class="option" type="button" data-orig="${origIdx}">
      <span class="letter">${letters[pos]}</span>
      <span>${escapeHtml(q.options[origIdx])}</span>
    </button>`).join('');

  const fb = $('#feedbackBox');
  fb.hidden = true;
  fb.className = 'feedback';
  fb.innerHTML = '';

  const nextBtn = $('#btnNextQ');
  nextBtn.disabled = true;
  nextBtn.textContent = (quiz.index === total - 1) ? 'Lihat Hasil →' : 'Soal Berikutnya →';

  quiz.answered = false;
}

function answerQuestion(btn) {
  if (quiz.answered || !btn || btn.disabled) return;
  quiz.answered = true;

  const q = quiz.questions[quiz.index];
  const chosenOrig = Number(btn.dataset.orig);
  const isRight = chosenOrig === q.answer;

  if (isRight) quiz.correct++;

  $$('#optionsBox .option').forEach(el => {
    const orig = Number(el.dataset.orig);
    el.disabled = true;
    if (orig === q.answer) el.classList.add('correct');
    else if (orig === chosenOrig && !isRight) el.classList.add('wrong');
  });

  const fb = $('#feedbackBox');
  fb.hidden = false;
  fb.className = 'feedback ' + (isRight ? 'ok-fb' : 'no-fb');
  fb.innerHTML =
    `<b>${isRight ? '✅ Tepat sekali!' : '❌ Belum tepat. Jawaban benar: ' + escapeHtml(q.options[q.answer])}</b>${escapeHtml(q.explain)}`;

  $('#btnNextQ').disabled = false;
  $('#qbarFill').style.width = ((quiz.index + 1) / quiz.questions.length * 100) + '%';
}

function nextQuestion() {
  if (quiz.index < quiz.questions.length - 1) {
    quiz.index++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const modId = quiz.moduleId;
  const data  = QUIZZES[modId];
  const total = quiz.questions.length;
  const score = Math.round(quiz.correct / total * 100);
  const prev  = bestScore(modId);
  const isNewBest = score > prev;

  if (isNewBest) state.bestScores[modId] = score;

  let gained = 0;
  if (isNewBest) {
    gained = quiz.correct * data.xpPerCorrect;
    state.xp += gained;
  }

  saveState();
  updateGlobalProgress();
  renderMissions();
  renderArena();
  renderModules();

  const lulus = score >= data.passScore;

  $('#rScore').textContent = score;
  $('#rMsg').textContent = lulus
    ? (score === 100 ? 'Sempurna! Kamu menguasai misi ini.' : 'Kerja bagus — misi ini berhasil kamu kuasai.')
    : 'Belum lulus. Baca ulang materinya, lalu coba lagi ya.';
  $('#rSub').innerHTML =
    `Jawaban benar: <strong>${quiz.correct}</strong> dari <strong>${total}</strong><br>` +
    (lulus ? `Ambang kelulusan: ${data.passScore}. Misi berikutnya sudah terbuka.`
           : `Ambang kelulusan: ${data.passScore}. Pelajari kembali bagian yang salah.`) + `<br>` +
    (gained > 0 ? `+${gained} XP diperoleh · ` : '') +
    `Skor terbaik tersimpan: <strong>${bestScore(modId)}</strong>`;

  const resultPanel = $('#quizResult');
  if (resultPanel) resultPanel.hidden = false;

  const modal = $('#quizOverlay .modal');
  if (modal) modal.classList.add('showing-result');
}

function closeQuiz() {
  const overlay = $('#quizOverlay');
  if (!overlay) return;
  overlay.classList.remove('show');

  const modal = overlay.querySelector('.modal');
  if (modal) modal.classList.remove('showing-result');

  const resultPanel = $('#quizResult');
  if (resultPanel) resultPanel.hidden = true;

  $('#feedbackBox').hidden = true;
  $('#optionsBox').innerHTML = '';
  $('#btnNextQ').disabled = true;

  renderMissions();
  renderArena();
  renderReport();
  updateGlobalProgress();
}

/* ------------------------------------------------------------
   10. CHALLENGE ARENA
   ------------------------------------------------------------ */
function renderArena() {
  const grid = $('#arenaGrid');
  if (!grid) return;

  grid.innerHTML = MODULES.map(mod => {
    const unlocked = isModuleDone(mod.id) && hasQuiz(mod);
    const data = QUIZZES[mod.id];
    const best = bestScore(mod.id);
    const lulus = best >= data.passScore;

    return `
      <article class="arena-card">
        <div class="ac-icon">${mod.icon}</div>
        <h4>${data.title}</h4>
        <p>${data.questions.length} soal pilihan ganda dengan pembahasan lengkap. Ambang kelulusan ${data.passScore}.</p>
        <div class="ac-score">
          ${best > 0 ? `Skor terbaik: <b>${best}</b> ${lulus ? '· Lulus' : '· Belum lulus'}` : 'Belum pernah dikerjakan'}
        </div>
        <button class="btn ${unlocked ? 'btn-primary' : 'btn-ghost'}"
                data-quiz="${mod.id}" ${unlocked ? '' : 'disabled'}>
          ${unlocked ? (best > 0 ? 'Ulangi Kuis' : 'Mulai Kuis') : (hasQuiz(mod) ? '🔒 Selesaikan materi dulu' : 'Belum ada soal')}
        </button>
      </article>`;
  }).join('');
}

/* ------------------------------------------------------------
   11. LEARNING REPORT
   ------------------------------------------------------------ */
function renderReport() {
  const doneCount   = MODULES.filter(m => isModuleDone(m.id)).length;
  const passedCount = MODULES.filter(m => hasQuiz(m) && bestScore(m.id) >= QUIZZES[m.id].passScore).length;
  const scores      = MODULES.map(m => bestScore(m.id)).filter(s => s > 0);
  const avg         = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  const prog        = overallProgress();

  $('#statGrid').innerHTML = `
    <div class="stat"><div class="s-val">${prog}%</div><div class="s-lab">Progres Misi</div></div>
    <div class="stat"><div class="s-val">${doneCount}/${MODULES.length}</div><div class="s-lab">Materi Selesai</div></div>
    <div class="stat"><div class="s-val">${passedCount}/${MODULES.filter(hasQuiz).length}</div><div class="s-lab">Kuis Lulus</div></div>
    <div class="stat"><div class="s-val">${avg || '—'}</div><div class="s-lab">Rata-rata Skor</div></div>
    <div class="stat"><div class="s-val">${state.xp}</div><div class="s-lab">Total XP</div></div>
    <div class="stat"><div class="s-val">${state.labDone ? '✓' : '—'}</div><div class="s-lab">Latihan Lab</div></div>`;

  $('#checkList').innerHTML = MODULES.map(mod => {
    const matDone   = isModuleDone(mod.id);
    const quizLulus = quizPassed(mod);
    const ok = matDone && quizLulus;
    return `
      <div class="check-item ${ok ? 'yes' : 'no'}">
        <span class="ci-mark">${ok ? '✅' : '⬜'}</span>
        <span>${mod.icon} ${mod.title.replace(/^Misi \d+ — /, '')}</span>
        <span style="margin-left:auto;font-size:12px;color:var(--txt-mute)">
          ${matDone ? 'materi ✓' : 'materi —'} · ${quizLulus ? 'kuis ✓' : 'kuis —'}
        </span>
      </div>`;
  }).join('');

  const allDone = graduationStatus().passed;
  const verdict = $('#verdict');
  if (allDone) {
    verdict.className = 'verdict pass';
    verdict.innerHTML = '🏆 <strong>Misi selesai!</strong> Kamu resmi menyandang gelar <strong>AI Engineer Muda</strong>. Buka sertifikat digitalmu di bawah.';
  } else {
    verdict.className = 'verdict';
    const sisa = MODULES.filter(m => !isMissionComplete(m)).length;
    verdict.innerHTML = `🎯 Selesaikan <strong>${sisa} misi</strong> lagi${state.labDone ? '' : ' dan tandai latihan di AI Training Lab'} untuk membuka sertifikat resmi. Pratinjau sertifikat tetap bisa dilihat lewat tombol di bawah.`;
  }

  $('#scoreBody').innerHTML = MODULES.map(mod => {
    const best = bestScore(mod.id);
    const lulus = best >= QUIZZES[mod.id].passScore;
    let pill = '<span class="pill none">' + (hasQuiz(mod) ? 'Belum dikerjakan' : 'Belum ada soal') + '</span>';
    if (best > 0) pill = lulus ? '<span class="pill pass">Lulus</span>' : '<span class="pill fail">Belum lulus</span>';
    return `<tr>
      <td>${mod.icon} ${QUIZZES[mod.id].title}</td>
      <td>${best > 0 ? best : '—'}</td>
      <td>${pill}</td>
    </tr>`;
  }).join('');

  const logEl = $('#reportLog');
  if (!state.labLogs.length) {
    logEl.innerHTML = '<p class="log-empty">Belum ada log latihan. Buka AI Training Lab untuk mulai mencatat.</p>';
  } else {
    logEl.innerHTML = state.labLogs.slice().reverse().map(l => `
      <div style="margin-bottom:12px">
        <strong style="color:var(--cyan-soft)">${escapeHtml(l.class || 'Tanpa nama kelas')}</strong>
        <span style="color:var(--txt-mute);font-size:12px"> · ${escapeHtml(l.date)}</span>
        <div>${escapeHtml(l.notes || '—')}</div>
      </div>`).join('');
  }

  updateGlobalProgress();
}

/* ------------------------------------------------------------
   12. SERTIFIKAT
   ------------------------------------------------------------ */
function openCertificate() {
  const grad = graduationStatus();
  const allDone = grad.passed;

  const scores = MODULES.filter(hasQuiz).map(m => bestScore(m.id));
  const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;

  // Keterangan pratinjau hanya tampil selama syarat belum terpenuhi;
  // dihitung ulang setiap sertifikat dibuka.
  const pv = $('#certPreview');
  if (pv) pv.hidden = allDone;
  const mi = $('#certMissing');
  if (mi) {
    mi.hidden = allDone;
    const shown = grad.missing.length > 3
      ? grad.missing.slice(0, 2).concat('dan ' + (grad.missing.length - 2) + ' syarat lainnya')
      : grad.missing;
    mi.textContent = allDone ? '' : 'Yang masih kurang: ' + shown.join(' · ');
  }
  if (!allDone) toast('Mode pratinjau: masih ada ' + grad.missing.length + ' syarat yang belum terpenuhi.', 'warn');

  $('#certStats').innerHTML = `
    <div><b>${overallProgress()}%</b>Progres Misi</div>
    <div><b>${avg}</b>Rata-rata Skor</div>
    <div><b>${state.xp}</b>Total XP</div>`;
  $('#certDate').textContent = 'Diterbitkan ' + todayID();
  $('#certOverlay').classList.add('show');
}

/* ------------------------------------------------------------
   13. LOG LATIHAN
   ------------------------------------------------------------ */
function saveLabLog() {
  const cls   = $('#labClass').value.trim();
  const notes = $('#labNotes').value.trim();

  if (!cls && !notes) {
    toast('Isi minimal nama kelas atau catatan latihanmu.', 'warn');
    return;
  }

  state.labLogs.push({ class: cls, notes: notes, date: todayID() });
  if (state.labLogs.length > 20) state.labLogs = state.labLogs.slice(-20);
  saveState();

  $('#labClass').value = '';
  $('#labNotes').value = '';
  renderLabLog();
  toast('Log latihan tersimpan.', 'good');
}

function renderLabLog() {
  const el = $('#logOutput');
  if (!el) return;
  if (!state.labLogs.length) {
    el.innerHTML = '<p class="log-empty">Belum ada log tersimpan.</p>';
    return;
  }
  el.innerHTML = state.labLogs.slice().reverse().slice(0, 5).map(l => `
    <div style="margin-bottom:10px">
      <strong style="color:var(--cyan-soft)">${escapeHtml(l.class || 'Tanpa nama kelas')}</strong>
      <span style="color:var(--txt-mute);font-size:12px"> · ${escapeHtml(l.date)}</span>
      <div>${escapeHtml(l.notes || '—')}</div>
    </div>`).join('');
}

/* ------------------------------------------------------------
   14. EKSPOR, SALIN TAUTAN, RESET
   ------------------------------------------------------------ */
function exportProgress() {
  try {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-lab-progres.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast('Progres diekspor.', 'good');
  } catch (e) {
    toast('Browser tidak mendukung ekspor otomatis.', 'warn');
  }
}

function copyTMUrl() {
  const url = 'https://teachablemachine.withgoogle.com/train';

  const legacyCopy = () => {
    try {
      const ta = document.createElement('textarea');
      ta.value = url;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, url.length);
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      if (ok) toast('Alamat situs tersalin. Tempel di tab baru browser.', 'good');
      else toast('Salin manual: ' + url, 'warn');
    } catch (e) {
      toast('Salin manual: ' + url, 'warn');
    }
  };

  if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext) {
    navigator.clipboard.writeText(url)
      .then(() => toast('Alamat situs tersalin. Tempel di tab baru browser.', 'good'))
      .catch(legacyCopy);
  } else {
    legacyCopy();
  }
}

function resetProgress() {
  const yakin = window.confirm(
    'Reset semua progres?\n\nMateri, skor kuis, XP, dan log latihan akan dihapus. Tindakan ini tidak bisa dibatalkan.'
  );
  if (!yakin) return;

  state = defaultState();
  saveState();
  renderMissions();
  renderModules();
  renderArena();
  renderReport();
  renderLabLog();
  updateGlobalProgress();
  toast('Progres direset. Selamat memulai kembali!', 'good');
}

/* ------------------------------------------------------------
   15. EVENT BINDING
   ------------------------------------------------------------ */
function bindEvents() {
  /* --- Navigasi --- */
  $$('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => goTo(btn.dataset.page));
  });

  /* --- Tombol goto di hero --- */
  $$('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => goTo(btn.dataset.goto));
  });

  /* --- Menu mobile --- */
  const btnMenu = $('#btnMenu');
  if (btnMenu) {
    btnMenu.addEventListener('click', () => {
      const nav = $('#navbar');
      if (nav) nav.classList.toggle('open');
    });
  }

  /* --- Delegasi global: accordion, tandai materi, mulai kuis, masuk misi --- */
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-toggle], [data-finish], [data-quiz], [data-open-module]');
    if (!t) return;

    /* Buka/tutup accordion materi */
    if (t.dataset.toggle) {
      const card = t.closest('.module');
      if (!card) return;
      const wasOpen = card.classList.contains('open');

      $$('.module').forEach(m => {
        m.classList.remove('open');
        const body = m.querySelector('.module-body');
        if (body) body.style.maxHeight = null;
      });

      if (!wasOpen) {
        card.classList.add('open');
        const body = card.querySelector('.module-body');
        if (body) body.style.maxHeight = body.scrollHeight + 40 + 'px';
      }
      return;
    }

    if (t.dataset.finish) { markMaterialDone(t.dataset.finish); return; }
    if (t.dataset.quiz)   { startQuiz(t.dataset.quiz); return; }

    if (t.dataset.openModule) {
      goTo('academy');
      setTimeout(() => {
        const card = document.querySelector(`.module[data-module="${t.dataset.openModule}"]`);
        if (!card) return;
        $$('.module').forEach(m => {
          m.classList.remove('open');
          const b = m.querySelector('.module-body');
          if (b) b.style.maxHeight = null;
        });
        card.classList.add('open');
        const body = card.querySelector('.module-body');
        if (body) body.style.maxHeight = body.scrollHeight + 40 + 'px';
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
      return;
    }
  });

  /* --- KUIS: delegasi klik opsi (tahan terhadap innerHTML ditulis ulang) --- */
  const optionsBox = $('#optionsBox');
  if (optionsBox) {
    optionsBox.addEventListener('click', (e) => {
      const btn = e.target.closest('.option');
      if (btn) answerQuestion(btn);
    });
  }

  const btnNextQ = $('#btnNextQ');
  if (btnNextQ) btnNextQ.addEventListener('click', nextQuestion);

  const btnQuitQuiz = $('#btnQuitQuiz');
  if (btnQuitQuiz) btnQuitQuiz.addEventListener('click', closeQuiz);

  const btnCloseQuiz = $('#btnCloseQuiz');
  if (btnCloseQuiz) btnCloseQuiz.addEventListener('click', closeQuiz);

  const btnRetryQ = $('#btnRetryQ');
  if (btnRetryQ) {
    btnRetryQ.addEventListener('click', () => {
      if (quiz.moduleId) startQuiz(quiz.moduleId);
    });
  }

  const btnFinishQ = $('#btnFinishQ');
  if (btnFinishQ) btnFinishQ.addEventListener('click', closeQuiz);

  /* --- Training Lab --- */
  const btnLabDone = $('#btnLabDone');
  if (btnLabDone) {
    btnLabDone.addEventListener('click', () => {
      if (state.labDone) { toast('Latihan lab sudah kamu tandai selesai.', 'warn'); return; }
      state.labDone = true;
      state.xp += 15;
      saveState();
      updateGlobalProgress();
      renderReport();
      toast('Latihan lab selesai! +15 XP.', 'good');
    });
  }

  const btnCopyTM = $('#btnCopyTM');
  if (btnCopyTM) btnCopyTM.addEventListener('click', copyTMUrl);

  const btnSaveLog = $('#btnSaveLog');
  if (btnSaveLog) btnSaveLog.addEventListener('click', saveLabLog);

  /* --- Report --- */
  const btnCertificate = $('#btnCertificate');
  if (btnCertificate) btnCertificate.addEventListener('click', openCertificate);

  const btnExport = $('#btnExport');
  if (btnExport) btnExport.addEventListener('click', exportProgress);

  const btnReset2 = $('#btnReset2');
  if (btnReset2) btnReset2.addEventListener('click', resetProgress);

  const btnReset = $('#btnReset');
  if (btnReset) btnReset.addEventListener('click', resetProgress);

  /* --- Modal lain --- */
  const btnCloseCert = $('#btnCloseCert');
  if (btnCloseCert) btnCloseCert.addEventListener('click', () => $('#certOverlay').classList.remove('show'));

  const btnPrintCert = $('#btnPrintCert');
  if (btnPrintCert) btnPrintCert.addEventListener('click', () => window.print());

  const quizOverlay = $('#quizOverlay');
  if (quizOverlay) {
    quizOverlay.addEventListener('click', (e) => { if (e.target === quizOverlay) closeQuiz(); });
  }

  const certOverlay = $('#certOverlay');
  if (certOverlay) {
    certOverlay.addEventListener('click', (e) => { if (e.target === certOverlay) certOverlay.classList.remove('show'); });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const qo = $('#quizOverlay'), co = $('#certOverlay');
    if (qo && qo.classList.contains('show')) closeQuiz();
    if (co && co.classList.contains('show')) co.classList.remove('show');
  });

  /* --- Sesuaikan tinggi accordion saat ukuran jendela berubah --- */
  window.addEventListener('resize', () => {
    const open = document.querySelector('.module.open .module-body');
    if (open) {
      open.style.maxHeight = 'none';
      const h = open.scrollHeight;
      open.style.maxHeight = h + 40 + 'px';
    }
  });
}

/* ------------------------------------------------------------
   MENU GURU
   Catatan: PIN hanya pembatas ringan. Website ini berjalan tanpa
   server, jadi tidak bisa menjadi pengaman penuh.
   ------------------------------------------------------------ */
const tState = { ok: false, tab: 'materi', editMod: null, quizMod: null, editQ: null };

function renderTeacher() {
  const root = $('#teacherRoot');
  if (!root) return;

  if (!tState.ok) {
    root.innerHTML = `
      <div class="card t-lock">
        <h4>🔒 Khusus Guru</h4>
        <p class="page-sub" style="margin-bottom:16px">Masukkan PIN untuk mengelola materi dan soal.</p>
        <div class="form-row">
          <label for="tPin">PIN Guru</label>
          <input id="tPin" type="password" autocomplete="off" maxlength="30" />
        </div>
        <button class="btn btn-primary" data-t="unlock">Masuk</button>
      </div>`;
    const pin = $('#tPin');
    if (pin) pin.focus();
    return;
  }

  if (!QUIZZES[tState.quizMod]) tState.quizMod = MODULES[0].id;

  const tab = tState.tab;
  const tabBtn = (k, label) =>
    `<button class="btn ${tab === k ? 'btn-primary' : 'btn-ghost'}" data-t="tab" data-v="${k}">${label}</button>`;

  root.innerHTML =
    `<div class="t-tabs">
       ${tabBtn('materi', '📘 Materi')}
       ${tabBtn('soal', '❓ Soal &amp; Kuis')}
       ${tabBtn('setelan', '⚙️ Pengaturan')}
       <button class="btn btn-ghost t-right" data-t="lock">🔒 Kunci</button>
     </div>` +
    (tab === 'materi' ? tMateriHtml() : tab === 'soal' ? tSoalHtml() : tSetelanHtml());
}

/* ---------- Tab: Materi ---------- */
function tMateriHtml() {
  if (tState.editMod) return tModFormHtml();

  const rows = MODULES.map((m, i) => `
    <div class="t-row">
      <div class="t-row-main">
        <strong>${escapeHtml(m.icon)} ${escapeHtml(m.title)}</strong>
        <span>${escapeHtml(m.desc)}</span>
      </div>
      <div class="t-row-act">
        <button class="btn btn-ghost" data-t="mod-edit" data-id="${escapeHtml(m.id)}">Edit</button>
        <button class="btn btn-ghost" data-t="mod-up" data-id="${escapeHtml(m.id)}" ${i === 0 ? 'disabled' : ''} aria-label="Naikkan urutan">↑</button>
        <button class="btn btn-ghost" data-t="mod-down" data-id="${escapeHtml(m.id)}" ${i === MODULES.length - 1 ? 'disabled' : ''} aria-label="Turunkan urutan">↓</button>
        <button class="btn btn-danger" data-t="mod-del" data-id="${escapeHtml(m.id)}">Hapus</button>
      </div>
    </div>`).join('');

  return `
    <div class="card">
      <div class="t-head">
        <h4>Daftar Materi / Misi (${MODULES.length})</h4>
        <button class="btn btn-primary" data-t="mod-new">+ Tambah Materi</button>
      </div>
      ${rows}
      <p class="t-note">Urutan di sini adalah urutan misi: misi berikutnya terbuka setelah misi sebelumnya selesai. Soal untuk materi baru ditambahkan di tab <strong>Soal &amp; Kuis</strong>.</p>
    </div>`;
}

function tModFormHtml() {
  const isNew = tState.editMod === 'new';
  const m = isNew ? { icon: '📘', title: '', desc: '' } : MODULES.find(x => x.id === tState.editMod);
  if (!m) { tState.editMod = null; return tMateriHtml(); }

  const body = isNew ? '' : (MATERIAL[m.id] || '');
  const preview = sanitizeHtml(materialToHtml(body)) || '<p class="log-empty">Pratinjau akan tampil di sini.</p>';

  return `
    <div class="card">
      <h4>${isNew ? 'Tambah Materi Baru' : 'Edit Materi'}</h4>
      <div class="t-grid">
        <div class="form-row">
          <label for="fTitle">Judul materi</label>
          <input id="fTitle" type="text" maxlength="80" value="${escapeHtml(stripPrefix(m.title))}" placeholder="Contoh: Pengenalan Computer Vision" />
        </div>
        <div class="form-row">
          <label for="fIcon">Ikon (emoji)</label>
          <input id="fIcon" type="text" maxlength="4" value="${escapeHtml(m.icon)}" />
        </div>
      </div>
      <div class="form-row">
        <label for="fDesc">Deskripsi singkat (tampil di kartu misi)</label>
        <input id="fDesc" type="text" maxlength="140" value="${escapeHtml(m.desc)}" placeholder="Satu kalimat tentang isi materi" />
      </div>
      <div class="form-row">
        <label for="fBody">Isi materi</label>
        <textarea id="fBody" rows="14" placeholder="Tulis materi di sini…">${escapeHtml(body)}</textarea>
      </div>
      <details class="t-help">
        <summary>Cara menulis materi</summary>
        <ul>
          <li>Tulis teks biasa. Pisahkan paragraf dengan <strong>satu baris kosong</strong>.</li>
          <li><code># Judul bagian</code> → subjudul.</li>
          <li>Baris yang diawali <code>- </code> → daftar poin.</li>
          <li>Baris yang diawali <code>&gt; </code> → kotak poin kunci.</li>
          <li><code>**kata**</code> → huruf tebal.</li>
          <li>Mahir HTML? Boleh menempel HTML langsung. Script dan atribut berbahaya otomatis dibuang.</li>
        </ul>
      </details>
      <h4 style="margin-top:18px">Pratinjau</h4>
      <div class="module-inner t-preview" id="fPreview">${preview}</div>
      <div class="t-actions">
        <button class="btn btn-primary" data-t="mod-save">Simpan Materi</button>
        <button class="btn btn-ghost" data-t="mod-cancel">Batal</button>
      </div>
    </div>`;
}

/* ---------- Tab: Soal & Kuis ---------- */
function tSoalHtml() {
  const id = tState.quizMod;
  const qz = QUIZZES[id];

  const select = `
    <div class="card">
      <div class="form-row" style="margin-bottom:0">
        <label for="tQuizMod">Pilih materi / kuis yang diatur</label>
        <select id="tQuizMod">
          ${MODULES.map(m => `<option value="${escapeHtml(m.id)}" ${m.id === id ? 'selected' : ''}>${escapeHtml(m.icon + ' ' + m.title)}</option>`).join('')}
        </select>
      </div>
    </div>`;

  if (tState.editQ !== null && (tState.editQ === 'new' || qz.questions[tState.editQ])) {
    return select + tQuestionFormHtml(qz);
  }
  tState.editQ = null;

  const list = qz.questions.length
    ? qz.questions.map((q, i) => `
        <div class="t-q">
          <div class="t-q-top">
            <strong>${i + 1}. ${escapeHtml(q.q)}</strong>
            <div class="t-row-act">
              <button class="btn btn-ghost" data-t="q-edit" data-i="${i}">Edit</button>
              <button class="btn btn-danger" data-t="q-del" data-i="${i}">Hapus</button>
            </div>
          </div>
          <ol class="t-opts" type="A">
            ${q.options.map((o, j) => `<li class="${j === q.answer ? 'ok' : ''}">${escapeHtml(o)}${j === q.answer ? ' ✓' : ''}</li>`).join('')}
          </ol>
          ${q.explain ? `<p class="t-exp">Pembahasan: ${escapeHtml(q.explain)}</p>` : ''}
        </div>`).join('')
    : '<p class="log-empty">Belum ada soal untuk materi ini. Klik “+ Tambah Soal”.</p>';

  return select + `
    <div class="card">
      <h4>Pengaturan Kuis</h4>
      <div class="t-grid3">
        <div class="form-row">
          <label for="qTitle">Judul kuis</label>
          <input id="qTitle" type="text" maxlength="90" value="${escapeHtml(qz.title)}" />
        </div>
        <div class="form-row">
          <label for="qPass">Nilai lulus (1–100)</label>
          <input id="qPass" type="number" min="1" max="100" value="${qz.passScore}" />
        </div>
        <div class="form-row">
          <label for="qXp">XP per jawaban benar</label>
          <input id="qXp" type="number" min="0" max="100" value="${qz.xpPerCorrect}" />
        </div>
      </div>
      <button class="btn btn-primary" data-t="quiz-save">Simpan Pengaturan Kuis</button>
    </div>
    <div class="card">
      <div class="t-head">
        <h4>Daftar Soal (${qz.questions.length})</h4>
        <button class="btn btn-primary" data-t="q-new">+ Tambah Soal</button>
      </div>
      ${list}
    </div>`;
}

function tQuestionFormHtml(qz) {
  const isNew = tState.editQ === 'new';
  const q = isNew ? { q: '', options: [], answer: 0, explain: '' } : qz.questions[tState.editQ];
  const letters = ['A', 'B', 'C', 'D', 'E'];

  const rows = letters.map((L, j) => `
    <div class="t-opt">
      <label class="t-radio" title="Tandai sebagai jawaban benar">
        <input type="radio" name="fAns" value="${j}" ${q.answer === j ? 'checked' : ''} /> ${L}
      </label>
      <input type="text" id="fO${j}" maxlength="200" value="${escapeHtml(q.options[j] || '')}" placeholder="Opsi ${L}${j < 2 ? '' : ' (opsional)'}" />
    </div>`).join('');

  return `
    <div class="card">
      <h4>${isNew ? 'Tambah Soal' : 'Edit Soal'}</h4>
      <div class="form-row">
        <label for="fQ">Pertanyaan</label>
        <textarea id="fQ" rows="3" maxlength="400">${escapeHtml(q.q)}</textarea>
      </div>
      <p class="t-hint" style="margin:0 0 10px">Isi minimal 2 opsi, lalu pilih bulatan di samping opsi yang benar.</p>
      ${rows}
      <div class="form-row" style="margin-top:14px">
        <label for="fExp">Pembahasan (tampil setelah siswa menjawab)</label>
        <textarea id="fExp" rows="3" maxlength="500">${escapeHtml(q.explain)}</textarea>
      </div>
      <div class="t-actions">
        <button class="btn btn-primary" data-t="q-save">Simpan Soal</button>
        <button class="btn btn-ghost" data-t="q-cancel">Batal</button>
      </div>
    </div>`;
}

/* ---------- Tab: Pengaturan ---------- */
function tSetelanHtml() {
  return `
    <div class="card">
      <h4>🔑 Ganti PIN Guru</h4>
      <div class="t-grid3" style="grid-template-columns:1fr 1fr">
        <div class="form-row">
          <label for="sPin">PIN baru (minimal 4 karakter)</label>
          <input id="sPin" type="password" autocomplete="new-password" maxlength="30" />
        </div>
        <div class="form-row">
          <label for="sPin2">Ulangi PIN baru</label>
          <input id="sPin2" type="password" autocomplete="new-password" maxlength="30" />
        </div>
      </div>
      <button class="btn btn-primary" data-t="pin-save">Simpan PIN</button>
      <p class="t-note">PIN hanya pembatas ringan agar siswa tidak sengaja masuk. Website ini berjalan tanpa server, jadi bukan pengaman penuh.</p>
    </div>
    <div class="card">
      <h4>💾 Simpan &amp; Bagikan Konten</h4>
      <p class="t-note" style="margin-top:0">Perubahan materi dan soal tersimpan di browser perangkat ini. Agar siswa di perangkat lain ikut melihat perubahan, klik <strong>Unduh</strong>, lalu timpa file <code>konten-kustom.js</code> di folder AI Lab (satu folder dengan <code>index.html</code>). File yang sama juga bisa dipakai untuk cadangan dan dipulihkan lewat <strong>Impor</strong>.</p>
      <div class="t-actions">
        <button class="btn btn-primary" data-t="export">Unduh konten-kustom.js</button>
        <button class="btn btn-ghost" data-t="import">Impor Konten…</button>
        <button class="btn btn-danger" data-t="reset-content">Kembalikan ke Konten Bawaan</button>
      </div>
      <input type="file" id="fileImport" accept=".js,.json,application/json,text/javascript" hidden />
    </div>`;
}

/* ---------- Aksi ---------- */
function teacherAction(a, el) {
  const id = el && el.dataset ? el.dataset.id : null;
  const v  = el && el.dataset ? el.dataset.v : null;

  switch (a) {
    case 'unlock': {
      const field = $('#tPin');
      if (field && hashPin(field.value) === teacherPinHash) { tState.ok = true; }
      else { toast('PIN salah.', 'warn'); return; }
      break;
    }
    case 'lock':       tState.ok = false; tState.editMod = null; tState.editQ = null; break;
    case 'tab':        tState.tab = v; tState.editMod = null; tState.editQ = null; break;
    case 'mod-new':    tState.editMod = 'new'; break;
    case 'mod-edit':   tState.editMod = id; break;
    case 'mod-cancel': tState.editMod = null; break;
    case 'mod-save':   if (!saveModuleForm()) return; break;
    case 'mod-up':     moveModule(id, -1); break;
    case 'mod-down':   moveModule(id, 1); break;
    case 'mod-del':    if (!deleteModule(id)) return; break;
    case 'quiz-save':  if (!saveQuizSettings()) return; break;
    case 'q-new':      tState.editQ = 'new'; break;
    case 'q-edit':     tState.editQ = Number(el.dataset.i); break;
    case 'q-cancel':   tState.editQ = null; break;
    case 'q-save':     if (!saveQuestionForm()) return; break;
    case 'q-del':      if (!deleteQuestion(Number(el.dataset.i))) return; break;
    case 'pin-save':   if (!savePin()) return; break;
    case 'export':     downloadContent(); return;
    case 'import':     { const f = $('#fileImport'); if (f) f.click(); return; }
    case 'reset-content': if (!resetContent()) return; break;
    default: return;
  }

  renderTeacher();
  if (['mod-new', 'mod-edit', 'q-new', 'q-edit'].indexOf(a) !== -1) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function saveModuleForm() {
  const title = ($('#fTitle').value || '').trim();
  const icon  = ($('#fIcon').value || '').trim() || '📘';
  const desc  = ($('#fDesc').value || '').trim();
  const html  = materialToHtml($('#fBody').value);

  if (!title) { toast('Judul materi wajib diisi.', 'warn'); return false; }
  if (!html)  { toast('Isi materi masih kosong.', 'warn'); return false; }

  if (tState.editMod === 'new') {
    let id = 'm' + Date.now().toString(36);
    while (QUIZZES[id] || MATERIAL[id]) id += 'x';
    MODULES.push({ id: id, icon: icon, title: title, desc: desc, unlockAfter: null });
    QUIZZES[id] = { title: 'Kuis: ' + title, passScore: 70, xpPerCorrect: 10, questions: [] };
    MATERIAL[id] = html;
    tState.quizMod = id;
  } else {
    const m = MODULES.find(x => x.id === tState.editMod);
    if (m) { m.icon = icon; m.title = title; m.desc = desc; MATERIAL[m.id] = html; }
  }

  tState.editMod = null;
  normalizeContent();
  saveContent();
  refreshAll();
  toast('Materi tersimpan.', 'good');
  return true;
}

function moveModule(id, dir) {
  const i = MODULES.findIndex(m => m.id === id);
  const j = i + dir;
  if (i < 0 || j < 0 || j >= MODULES.length) return;
  const tmp = MODULES[i]; MODULES[i] = MODULES[j]; MODULES[j] = tmp;
  normalizeContent();
  saveContent();
  refreshAll();
}

function deleteModule(id) {
  const m = MODULES.find(x => x.id === id);
  if (!m) return false;
  if (MODULES.length <= 1) { toast('Minimal harus ada satu materi.', 'warn'); return false; }
  if (!window.confirm('Hapus materi "' + stripPrefix(m.title) + '" beserta seluruh soalnya?\n\nTindakan ini tidak bisa dibatalkan.')) return false;

  MODULES.splice(MODULES.indexOf(m), 1);
  delete QUIZZES[id];
  delete MATERIAL[id];
  state.completedModules = state.completedModules.filter(x => x !== id);
  delete state.bestScores[id];
  if (tState.quizMod === id) tState.quizMod = null;

  normalizeContent();
  saveContent();
  saveState();
  refreshAll();
  toast('Materi dihapus.', 'good');
  return true;
}

function saveQuizSettings() {
  const qz = QUIZZES[tState.quizMod];
  if (!qz) return false;

  const title = ($('#qTitle').value || '').trim();
  const pass  = Number($('#qPass').value);
  const xp    = Number($('#qXp').value);

  if (!title) { toast('Judul kuis wajib diisi.', 'warn'); return false; }
  if (!(pass >= 1 && pass <= 100)) { toast('Nilai lulus harus antara 1 dan 100.', 'warn'); return false; }
  if (!(xp >= 0 && xp <= 100)) { toast('XP per jawaban benar harus antara 0 dan 100.', 'warn'); return false; }

  qz.title = title;
  qz.passScore = Math.round(pass);
  qz.xpPerCorrect = Math.round(xp);

  saveContent();
  refreshAll();
  toast('Pengaturan kuis tersimpan.', 'good');
  return true;
}

function saveQuestionForm() {
  const qz = QUIZZES[tState.quizMod];
  if (!qz) return false;

  const text = ($('#fQ').value || '').trim();
  const raw  = [0, 1, 2, 3, 4].map(j => ($('#fO' + j).value || '').trim());
  const picked = document.querySelector('input[name="fAns"]:checked');
  const sel  = picked ? Number(picked.value) : -1;

  if (!text) { toast('Pertanyaan wajib diisi.', 'warn'); return false; }

  const options = [];
  let answer = -1;
  raw.forEach((t, j) => {
    if (!t) return;
    if (j === sel) answer = options.length;
    options.push(t);
  });

  if (options.length < 2) { toast('Isi minimal 2 opsi jawaban.', 'warn'); return false; }
  if (answer < 0) { toast('Pilih jawaban benar pada opsi yang terisi.', 'warn'); return false; }

  const q = { q: text, options: options, answer: answer, explain: ($('#fExp').value || '').trim() };
  if (tState.editQ === 'new') qz.questions.push(q);
  else qz.questions[tState.editQ] = q;

  tState.editQ = null;
  saveContent();
  refreshAll();
  toast('Soal tersimpan.', 'good');
  return true;
}

function deleteQuestion(i) {
  const qz = QUIZZES[tState.quizMod];
  if (!qz || !qz.questions[i]) return false;
  if (!window.confirm('Hapus soal nomor ' + (i + 1) + '?')) return false;

  qz.questions.splice(i, 1);
  saveContent();
  refreshAll();
  toast('Soal dihapus.', 'good');
  return true;
}

function savePin() {
  const p1 = ($('#sPin').value || '');
  const p2 = ($('#sPin2').value || '');
  if (p1.length < 4) { toast('PIN minimal 4 karakter.', 'warn'); return false; }
  if (p1 !== p2)     { toast('Kedua PIN tidak sama.', 'warn'); return false; }

  teacherPinHash = hashPin(p1);
  saveContent();
  toast('PIN diganti. Ingat PIN baru ini.', 'good');
  return true;
}

function downloadContent() {
  try {
    const js = '/* Konten AI Lab. Letakkan file ini di folder yang sama dengan index.html */\n' +
               'window.AILAB_CONTENT = ' + JSON.stringify(currentContent(), null, 2) + ';\n';
    const blob = new Blob([js], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'konten-kustom.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast('File konten diunduh.', 'good');
  } catch (e) {
    toast('Browser tidak mendukung unduhan otomatis.', 'warn');
  }
}

function importContent(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const t = String(reader.result);
      const a = t.indexOf('{');
      const b = t.lastIndexOf('}');
      if (a < 0 || b <= a) throw new Error('format');
      const c = JSON.parse(t.slice(a, b + 1));
      if (!validContent(c)) throw new Error('isi');
      if (!window.confirm('Impor konten ini? Materi dan soal yang sekarang akan diganti.')) return;

      applyContent(c);
      saveContent();
      tState.editMod = null; tState.editQ = null; tState.quizMod = null;
      refreshAll();
      renderTeacher();
      toast('Konten berhasil diimpor.', 'good');
    } catch (e) {
      toast('File tidak valid. Pakai file konten-kustom.js hasil unduhan menu ini.', 'warn');
    }
  };
  reader.onerror = () => toast('File tidak bisa dibaca.', 'warn');
  reader.readAsText(file);
}

function resetContent() {
  if (!window.confirm('Kembalikan ke materi dan soal bawaan?\n\nSemua perubahan dari Menu Guru akan hilang. PIN tidak berubah.')) return false;

  const keepPin = teacherPinHash;
  applyContent(DEFAULT_CONTENT);
  teacherPinHash = keepPin;
  tState.editMod = null; tState.editQ = null; tState.quizMod = null;
  saveContent();
  refreshAll();
  toast('Konten dikembalikan ke bawaan.', 'good');
  return true;
}

function bindTeacherEvents() {
  const root = $('#teacherRoot');
  if (!root) return;

  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-t]');
    if (!b || b.disabled) return;
    teacherAction(b.dataset.t, b);
  });

  root.addEventListener('change', (e) => {
    if (e.target.id === 'tQuizMod') {
      tState.quizMod = e.target.value;
      tState.editQ = null;
      renderTeacher();
    } else if (e.target.id === 'fileImport') {
      importContent(e.target.files && e.target.files[0]);
      e.target.value = '';
    }
  });

  root.addEventListener('input', (e) => {
    if (e.target.id !== 'fBody') return;
    const p = $('#fPreview');
    if (p) p.innerHTML = sanitizeHtml(materialToHtml(e.target.value)) || '<p class="log-empty">Pratinjau akan tampil di sini.</p>';
  });

  root.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.id === 'tPin') teacherAction('unlock');
  });
}

/* ------------------------------------------------------------
   16. INISIALISASI
   ------------------------------------------------------------ */
function init() {
  loadContent();
  state = loadState();

  if (typeof state.xp !== 'number' || isNaN(state.xp)) state.xp = 0;
  if (!Array.isArray(state.completedModules)) state.completedModules = [];
  if (!Array.isArray(state.labLogs)) state.labLogs = [];
  if (typeof state.bestScores !== 'object' || state.bestScores === null) state.bestScores = {};

  state.lastVisit = new Date().toISOString();
  saveState();

  bindEvents();
  bindTeacherEvents();
  renderMissions();
  renderModules();
  renderArena();
  renderLabLog();
  renderReport();
  updateGlobalProgress();
}

document.addEventListener('DOMContentLoaded', init);
