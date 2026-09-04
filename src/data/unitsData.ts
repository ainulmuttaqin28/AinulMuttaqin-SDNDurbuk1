import { UnitDetail } from '../types/curriculum';

export const UNITS_DATA: UnitDetail[] = [
  // =========================================================================
  // KELAS 1: UNIT 1 - AL-QUR'AN & HURUF HIJAIYAH
  // =========================================================================
  {
    kodeUnit: 'A1-QUR-01',
    namaUnit: 'Mengenal Al-Qur\'an & Huruf Hijaiyah Ceria',
    fase: 'A',
    kelas: 1,
    elemen: 'Al-Qur\'an-Hadis',
    semester: 1,
    cpResmi: 'Peserta didik mampu mengenal huruf hijaiyah dan harakatnya, huruf hijaiyah bersambung, dan menghafal surah-surah pendek Al-Qur\'an dengan baik.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-A1.1: Menunjukkan pelafalan huruf hijaiyah berharakat fathah, kasrah, dhammah secara tepat.',
      'TP-A1.2: Melafalkan Q.S. Al-Fatihah dan Al-Ikhlas dengan tartil sederhana.',
      'TP-A1.3: Membiasakan adab memegang dan memuliakan mushaf Al-Qur\'an.'
    ],
    materiPengembangan: [
      {
        id: 'A1-QUR-01-SUB-1',
        judul: '1. Al-Qur\'an Kitab Suciku yang Agung',
        tujuan: 'Siswa dapat menjelaskan bahwa Al-Qur\'an adalah kitab suci umat Islam yang berisi petunjuk hidup bahagia.',
        materiInti: [
          'Al-Qur\'an adalah firman Allah Swt. yang diturunkan kepada Nabi Muhammad saw. melalui perantaraan Malaikat Jibril a.s.',
          'Membaca Al-Qur\'an mendatangkan pahala yang berlipat ganda. Setiap satu huruf bernilai sepuluh kebaikan.',
          'Al-Qur\'an adalah sahabat setia kita yang menuntun kita menjadi anak saleh dan berbakti.'
        ],
        contohNyata: 'Setiap habis magrib, Ahmad dan Salma membersihkan diri, berwudu, lalu duduk melingkar bersama ayah dan ibu untuk membaca Al-Qur\'an dengan suara merdu.',
        ilustrasi: 'Anak laki-laki dan perempuan muslim duduk rapi di atas sajadah, memangku Al-Qur\'an di atas rekal kayu dengan wajah berseri-seri.',
        pertanyaanBerpikir: [
          'Siapakah yang menurunkan Al-Qur\'an kepada Nabi Muhammad saw.?',
          'Mengapa kita merasa tenang dan bahagia saat mendengarkan lantunan ayat suci Al-Qur\'an?'
        ],
        refleksiDiri: 'Apakah aku sudah terbiasa membaca atau mendengarkan Al-Qur\'an setiap hari di rumah?'
      },
      {
        id: 'A1-QUR-01-SUB-2',
        judul: '2. Adab Memuliakan Mushaf Al-Qur\'an',
        tujuan: 'Siswa dapat mempraktikkan cara memegang, meletakkan, dan membaca Al-Qur\'an dengan penuh rasa hormat.',
        materiInti: [
          'Sebelum memegang Al-Qur\'an, disunnahkan berwudu agar tubuh kita suci dari hadas.',
          'Peganglah mushaf Al-Qur\'an menggunakan kedua tangan dengan lembut, jangan dilempar atau ditarik kasar.',
          'Letakkan Al-Qur\'an di tempat yang tinggi dan bersih, seperti di atas meja belajar atau rak khusus, bukan di lantai.'
        ],
        contohNyata: 'Ketika selesai mengaji, Fatimah mencium mushafnya dengan santun lalu menyimpannya di rak buku bagian paling atas agar tidak terinjak atau kotor.',
        ilustrasi: 'Anak meletakkan Al-Qur\'an di atas meja kayu yang bersih dan rapi dengan kedua tangan.',
        pertanyaanBerpikir: [
          'Bolehkah kita meletakkan Al-Qur\'an sejajar dengan sandal di lantai? Mengapa?',
          'Mengapa kita dianjurkan suci dari hadas sebelum memegang mushaf Al-Qur\'an?'
        ],
        refleksiDiri: 'Aku berjanji akan selalu menyimpan Al-Qur\'an di tempat yang bersih dan tinggi.'
      },
      {
        id: 'A1-QUR-01-SUB-3',
        judul: '3. Mengenal 29 Huruf Hijaiyah & Harakat Dasar',
        tujuan: 'Siswa mampu melafalkan huruf hijaiyah dari Alif sampai Ya serta membedakan bunyi harakat fathah (a), kasrah (i), dan dhammah (u).',
        materiInti: [
          'Huruf hijaiyah berjumlah 29 huruf, dimulai dari Alif (ا) sampai Ya (ي).',
          'Huruf hijaiyah ditulis dan dibaca dari arah kanan ke kiri.',
          'Harakat fathah (ـَ) berbunyi "A", kasrah (ـِ) berbunyi "I", dan dhammah (ـُ) berbunyi "U".'
        ],
        contohNyata: 'Saat guru menunjukkan kartu huruf ب (Ba), diberi garis di atas menjadi بَ (Ba), di bawah menjadi بِ (Bi), dan dilingkar di atas menjadi بُ (Bu).',
        ilustrasi: 'Tabel kartu warna-warni huruf hijaiyah dengan harakat ceria: Ba, Bi, Bu.',
        pertanyaanBerpikir: [
          'Dari arah mana kita membaca tulisan Arab dan Al-Qur\'an?',
          'Bagaimana bunyi huruf Ta (ت) jika diberi harakat kasrah?'
        ],
        refleksiDiri: 'Aku senang mengulang-ulang hafalan huruf hijaiyah sampai lancar dan fasih.'
      },
      {
        id: 'A1-QUR-01-SUB-4',
        judul: '4. Menghafal Surah Al-Fatihah (Pembuka)',
        tujuan: 'Siswa mampu melafalkan Q.S. Al-Fatihah ayat 1-7 dengan tartil dan memahami bahwa surah ini wajib dibaca dalam setiap rakaat salat.',
        materiInti: [
          'Surah Al-Fatihah artinya "Pembukaan" dan terdiri dari 7 ayat yang mulia.',
          'Surah ini disebut juga Ummul Qur\'an (Induk Al-Qur\'an) karena merangkum seluruh isi kebaikan dalam Al-Qur\'an.',
          'Surah Al-Fatihah wajib dibaca pada setiap rakaat salat fardu maupun sunnah.'
        ],
        contohNyata: 'Zaid membaca Surah Al-Fatihah dengan perlahan, berhenti di setiap akhir ayat sambil mengingat bahwa Allah Maha Pengasih lagi Maha Penyayang.',
        ilustrasi: 'Teks kaligrafi Al-Fatihah yang indah dihiasi ornamen geometris Islami bernuansa emas dan hijau.',
        pertanyaanBerpikir: [
          'Ada berapa ayat dalam Surah Al-Fatihah?',
          'Apa yang kita lakukan jika dalam salat lupa membaca Surah Al-Fatihah?'
        ],
        refleksiDiri: 'Aku membaca Al-Fatihah dengan khusyuk di setiap salatku.',
        arabic: {
          surah: 'Al-Fatihah',
          nomorAyat: '1-7',
          teksArab: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝',
          transliterasi: 'Bismillāhir-raḥmānir-raḥīm. Al-ḥamdu lillāhi rabbil-\'ālamīn.',
          terjemahan: 'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang. Segala puji bagi Allah, Tuhan seluruh alam.',
          sumberVerifikasi: 'Mushaf Standar Indonesia Kemenag RI, Q.S. 1: 1-2',
          statusVerifikasi: 'TERVERIFIKASI'
        }
      },
      {
        id: 'A1-QUR-01-SUB-5',
        judul: '5. Menghafal Surah Al-Ikhlas (Maha Esa)',
        tujuan: 'Siswa mampu melafalkan Q.S. Al-Ikhlas dan meyakini bahwa Allah Swt. adalah Tuhan Yang Maha Esa dan tidak ada sekutu bagi-Nya.',
        materiInti: [
          'Surah Al-Ikhlas menegaskan bahwa Allah itu Esa (Tunggal), tidak beranak dan tidak pula diperanakkan.',
          'Hanya kepada Allah tempat kita bergantung dan memohon pertolongan.',
          'Membaca Surah Al-Ikhlas pahalanya setara dengan sepertiga Al-Qur\'an.'
        ],
        contohNyata: 'Saat malam hari menjelang tidur, Maryam melafalkan Surah Al-Ikhlas, Al-Falaq, dan An-Nas lalu berdoa memohon penjagaan Allah.',
        ilustrasi: 'Bulan sabit bercahaya lembut di langit malam, melambangkan keheningan zikir dan keikhlasan doa.',
        pertanyaanBerpikir: [
          'Apakah Allah Swt. membutuhkan ayah atau anak seperti manusia?',
          'Kepada siapakah satu-satunya tempat kita meminta pertolongan?'
        ],
        refleksiDiri: 'Hatiku mantap bahwa Allah Swt. adalah Tuhanku Yang Maha Esa.'
      }
    ],
    kosakataPenting: [
      { kata: 'Hijaiyah', arti: 'Aksara atau abjad bahasa Arab yang digunakan dalam Al-Qur\'an berjumlah 29 huruf.' },
      { kata: 'Harakat', arti: 'Tanda baca vokal dalam bahasa Arab (fathah = a, kasrah = i, dhammah = u).' },
      { kata: 'Mushaf', arti: 'Kumpulan lembaran wahyu Al-Qur\'an yang dijilid menjadi satu buku suci.' },
      { kata: 'Tartil', arti: 'Membaca Al-Qur\'an secara perlahan, tenang, dan sesuai makhraj serta kaidah tajwid.' }
    ],
    konsepInti: 'Al-Qur\'an adalah kalam Allah yang suci. Kita memuliakannya dengan menjaga kebersihan, membaca huruf demi huruf dengan cinta, dan mengamalkan ajaran-ajarannya dalam kehidupan sehari-hari.',
    ceritaPembuka: {
      judul: 'Petualangan Bintang di Taman Huruf',
      narasi: 'Di sebuah sore yang teduh di serambi Masjid Baiturrahim, Ustadz Salman mengajak anak-anak kelas 1 bermain "Tebak Cahaya Huruf". Setiap anak yang berhasil melafalkan huruf hijaiyah dengan makhraj yang benar mendapatkan bintang kebaikan. Rayyan tersenyum gembira saat berhasil membaca huruf Jim (ج) berharakat fathah menjadi "Ja". Dari serambi masjid itu, gema lantunan huruf Al-Qur\'an melahirkan kedamaian di hati seluruh warga kampung.',
      hikmah: 'Belajar membaca Al-Qur\'an sejak kecil akan menerangi jalan kehidupan kita laksana bintang gemintang di langit.'
    },
    aktivitasInteraktif: [
      {
        id: 'ACT-A1-01',
        level: 1,
        type: 'tebak_gambar',
        title: 'Tebak Harakat & Bunyi Huruf Ceria',
        instructions: 'Perhatikan kartu huruf di bawah ini dan pilih bunyi harakat yang tepat!',
        items: [
          { id: 'item-1', label: 'دَ (Dal fathah)', imageHint: 'Harakat garis miring di atas', matchWith: 'Da' },
          { id: 'item-2', label: 'رِ (Ra kasrah)', imageHint: 'Harakat garis miring di bawah', matchWith: 'Ri' },
          { id: 'item-3', label: 'سُ (Sin dhammah)', imageHint: 'Harakat wau kecil di atas', matchWith: 'Su' }
        ],
        xpReward: 10
      },
      {
        id: 'ACT-A1-02',
        level: 2,
        type: 'susun_urutan',
        title: 'Susun Urutan Huruf Hijaiyah',
        instructions: 'Urutkan huruf-huruf hijaiyah berikut ini dari urutan yang paling awal (kanan ke kiri)!',
        items: [
          { id: 'h-1', label: 'ا (Alif)', correctOrder: 1 },
          { id: 'h-2', label: 'ب (Ba)', correctOrder: 2 },
          { id: 'h-3', label: 'ت (Ta)', correctOrder: 3 },
          { id: 'h-4', label: 'ث (Tsa)', correctOrder: 4 }
        ],
        xpReward: 15
      },
      {
        id: 'ACT-A1-03',
        level: 3,
        type: 'studi_kasus',
        title: 'Adab Mulia Bersama Al-Qur\'an',
        instructions: 'Baca situasi di bawah ini lalu pilih tindakan yang paling beradab!',
        scenario: 'Setelah selesai membaca Al-Qur\'an di kelas, waktu istirahat tiba. Teman-temanmu berlarian keluar kelas. Mushaf Al-Qur\'an milikmu masih terbuka di atas meja.',
        options: [
          { id: 'opt-1', text: 'Langsung lari keluar kelas dan membiarkan Al-Qur\'an terbuka di meja.', isBestChoice: false, feedback: 'Kurang tepat. Al-Qur\'an bisa terkena debu, tertumpah air, atau robek saat ditinggal.' },
          { id: 'opt-2', text: 'Menutup mushaf dengan lembut, merapikannya di rekal/rak buku yang aman, lalu berdoa.', isBestChoice: true, feedback: 'MasyaAllah! Pilihan sangat tepat dan beradab dalam memuliakan kitab suci Allah.' },
          { id: 'opt-3', text: 'Menumpuk Al-Qur\'an di bawah buku gambar dan mainan.', isBestChoice: false, feedback: 'Tidak boleh. Al-Qur\'an tidak boleh diletakkan di bawah benda-benda lain.' }
        ],
        xpReward: 20
      },
      {
        id: 'ACT-A1-04',
        level: 4,
        type: 'refleksi_aksi',
        title: 'Ikrar Sahabat Cilik Al-Qur\'an',
        instructions: 'Pilih komitmen harianmu untuk senantiasa mencintai Al-Qur\'an!',
        options: [
          { id: 'ref-1', text: 'Aku akan mengaji minimal 15 menit setiap hari didampingi ayah atau ibu.', isBestChoice: true, feedback: 'Luar biasa! Konsistensi sedikit demi sedikit akan membawamu menjadi hafiz cilik berakhlak mulia.' },
          { id: 'ref-2', text: 'Aku akan selalu berwudu dan memegang Al-Qur\'an dengan kedua tanganku yang bersih.', isBestChoice: true, feedback: 'Barakallahu fiik! Menjaga adab adalah pintu terbukanya cahaya ilmu.' }
        ],
        xpReward: 25
      }
    ],
    soal: [
      {
        idSoal: 'Q-A1-01',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-QUR-01',
        elemen: 'Al-Qur\'an-Hadis',
        tingkatKesulitan: 'Dasar',
        pertanyaan: 'Al-Qur\'an adalah kitab suci bagi umat...',
        opsi: ['A. Islam', 'B. Kristen', 'C. Hindu'],
        jawabanBenar: 'A. Islam',
        pembahasan: 'Al-Qur\'an adalah wahyu Allah Swt. yang menjadi pedoman hidup suci bagi seluruh umat Islam.',
        indikator: 'Menyebutkan identitas Al-Qur\'an sebagai kitab suci umat Islam',
        tp: 'TP-A1.1',
        jenisSoal: 'pilihan_ganda'
      },
      {
        idSoal: 'Q-A1-02',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-QUR-01',
        elemen: 'Al-Qur\'an-Hadis',
        tingkatKesulitan: 'Dasar',
        pertanyaan: 'Huruf pertama dalam abjad hijaiyah adalah...',
        opsi: ['A. Ba (ب)', 'B. Alif (ا)', 'C. Ta (ت)'],
        jawabanBenar: 'B. Alif (ا)',
        pembahasan: 'Huruf hijaiyah diawali dengan huruf Alif (ا) dan diakhiri dengan huruf Ya (ي).',
        indikator: 'Mengetahui urutan awal huruf hijaiyah',
        tp: 'TP-A1.1',
        jenisSoal: 'pilihan_ganda'
      },
      {
        idSoal: 'Q-A1-03',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-QUR-01',
        elemen: 'Al-Qur\'an-Hadis',
        tingkatKesulitan: 'Dasar',
        pertanyaan: 'Tanda baca (harakat) garis miring yang berada di ATAS huruf disebut...',
        opsi: ['A. Kasrah', 'B. Fathah', 'C. Dhammah'],
        jawabanBenar: 'B. Fathah',
        pembahasan: 'Fathah adalah harakat di atas huruf yang menghasilkan bunyi vokal "A".',
        indikator: 'Mengidentifikasi nama harakat fathah',
        tp: 'TP-A1.1',
        jenisSoal: 'pilihan_ganda'
      },
      {
        idSoal: 'Q-A1-04',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-QUR-01',
        elemen: 'Al-Qur\'an-Hadis',
        tingkatKesulitan: 'Reguler',
        pertanyaan: 'Surah Al-Fatihah terdiri dari berapa ayat?',
        opsi: ['A. 5 ayat', 'B. 6 ayat', 'C. 7 ayat'],
        jawabanBenar: 'C. 7 ayat',
        pembahasan: 'Surah Al-Fatihah terdiri dari 7 ayat yang dimulai dengan basmalah.',
        indikator: 'Mengetahui jumlah ayat dalam Surah Al-Fatihah',
        tp: 'TP-A1.2',
        jenisSoal: 'pilihan_ganda'
      },
      {
        idSoal: 'Q-A1-05',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-QUR-01',
        elemen: 'Al-Qur\'an-Hadis',
        tingkatKesulitan: 'Reguler',
        pertanyaan: 'Sebelum memegang mushaf Al-Qur\'an, kita disunnahkan untuk...',
        opsi: ['A. Makan kenyang', 'B. Berwudu', 'C. Tidur nyenyak'],
        jawabanBenar: 'B. Berwudu',
        pembahasan: 'Berwudu menyucikan kita dari hadas kecil sehingga kita memegang mushaf dalam keadaan suci.',
        indikator: 'Menerapkan adab bersuci sebelum menyentuh mushaf',
        tp: 'TP-A1.3',
        jenisSoal: 'pilihan_ganda'
      },
      {
        idSoal: 'Q-A1-06',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-QUR-01',
        elemen: 'Al-Qur\'an-Hadis',
        tingkatKesulitan: 'Dasar',
        pertanyaan: 'Membaca tulisan Arab dan Al-Qur\'an dimulai dari sebelah kiri ke kanan.',
        opsi: ['Benar', 'Salah'],
        jawabanBenar: 'Salah',
        pembahasan: 'Salah, karena membaca dan menulis huruf Arab dimulai dari arah KANAN ke kiri.',
        indikator: 'Menentukan arah penulisan huruf Arab',
        tp: 'TP-A1.1',
        jenisSoal: 'benar_salah'
      },
      {
        idSoal: 'Q-A1-07',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-QUR-01',
        elemen: 'Al-Qur\'an-Hadis',
        tingkatKesulitan: 'Dasar',
        pertanyaan: 'Al-Qur\'an boleh diletakkan di lantai begitu saja tanpa alas.',
        opsi: ['Benar', 'Salah'],
        jawabanBenar: 'Salah',
        pembahasan: 'Salah. Sebagai bentuk penghormatan, mushaf harus diletakkan di tempat tinggi dan bersih.',
        indikator: 'Menentukan adab penempatan mushaf Al-Qur\'an',
        tp: 'TP-A1.3',
        jenisSoal: 'benar_salah'
      },
      {
        idSoal: 'Q-A1-08',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-QUR-01',
        elemen: 'Al-Qur\'an-Hadis',
        tingkatKesulitan: 'Tantangan',
        pertanyaan: 'HOTS: Mengapa Surah Al-Fatihah disebut sebagai Ummul Qur\'an (Induk Al-Qur\'an)?',
        opsi: [
          'A. Karena berada di paling akhir mushaf',
          'B. Karena memuat pokok ajaran Al-Qur\'an seperti tauhid, ibadah, dan jalan kebenaran',
          'C. Karena ayatnya paling panjang di Al-Qur\'an'
        ],
        jawabanBenar: 'B. Karena memuat pokok ajaran Al-Qur\'an seperti tauhid, ibadah, dan jalan kebenaran',
        pembahasan: 'Al-Fatihah disebut Ummul Qur\'an karena intisari tauhid, syukur, doa, dan jalan kebenaran terangkum lengkap di dalamnya.',
        indikator: 'Menganalisis alasan penamaan Ummul Qur\'an pada Surah Al-Fatihah',
        tp: 'TP-A1.2',
        jenisSoal: 'hots'
      },
      {
        idSoal: 'Q-A1-09',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-QUR-01',
        elemen: 'Al-Qur\'an-Hadis',
        tingkatKesulitan: 'Reguler',
        pertanyaan: 'Situasi: Adikmu yang masih balita mengambil mushaf Al-Qur\'an lalu memainkannya di lantai. Apa yang sebaiknya kamu lakukan?',
        opsi: [
          'A. Membentak adik sampai menangis',
          'B. Mengambil mushaf dengan lembut, meletakkannya di rak tinggi, dan menasihati adik dengan sayang',
          'C. Membiarkannya karena adik masih kecil'
        ],
        jawabanBenar: 'B. Mengambil mushaf dengan lembut, meletakkannya di rak tinggi, dan menasihati adik dengan sayang',
        pembahasan: 'Kita harus memuliakan mushaf dengan sigap namun tetap bersikap lemah lembut penuh kasih kepada adik.',
        indikator: 'Menentukan sikap beradab dalam situasi nyata terkait mushaf',
        tp: 'TP-A1.3',
        jenisSoal: 'situasi'
      },
      {
        idSoal: 'Q-A1-10',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-QUR-01',
        elemen: 'Al-Qur\'an-Hadis',
        tingkatKesulitan: 'Reguler',
        pertanyaan: 'Reflektif: Bagaimana perasaanmu saat membaca Al-Qur\'an dengan tenang bersama keluarga?',
        opsi: [
          'A. Merasa tenang, damai, dan semakin cinta kepada Allah',
          'B. Merasa terpaksa dan bosan',
          'C. Ingin cepat selesai untuk bermain HP'
        ],
        jawabanBenar: 'A. Merasa tenang, damai, dan semakin cinta kepada Allah',
        pembahasan: 'Membaca Al-Qur\'an menghadirkan sakinah (kedamaian) di dalam jiwa dan keharmonisan di dalam rumah tangga.',
        indikator: 'Merefleksikan perasaan spiritual saat membaca Al-Qur\'an',
        tp: 'TP-A1.3',
        jenisSoal: 'reflektif'
      }
    ],
    remedial: {
      judul: 'Yuk Belajar Lagi! Mengenal Huruf & Adab Al-Qur\'an',
      materiRingkas: [
        '1. Al-Qur\'an adalah kitab suci umat Islam yang wajib kita hormati.',
        '2. Membaca Al-Qur\'an selalu dari arah KANAN ke kiri.',
        '3. Harakat fathah berbunyi A, kasrah berbunyi I, dhammah berbunyi U.',
        '4. Pegang Al-Qur\'an dalam keadaan berwudu dan simpan di tempat yang tinggi.'
      ],
      contohSederhana: 'Huruf بَ dibaca "Ba", بِ dibaca "Bi", بُ dibaca "Bu". Simpan selalu Al-Qur\'an di rak atau meja belajar.',
      kuisUlang: [
        {
          idSoal: 'REM-A1-01',
          kelas: 1,
          fase: 'A',
          unitId: 'A1-QUR-01',
          elemen: 'Al-Qur\'an-Hadis',
          tingkatKesulitan: 'Dasar',
          pertanyaan: 'Jika huruf Jim (ج) diberi harakat fathah (garis atas), maka dibaca...',
          opsi: ['A. Ja', 'B. Ji', 'C. Ju'],
          jawabanBenar: 'A. Ja',
          pembahasan: 'Fathah menghasilkan bunyi A, sehingga Jim berharakat fathah dibaca "Ja".',
          indikator: 'Menyebutkan bunyi huruf berharakat fathah',
          tp: 'TP-A1.1',
          jenisSoal: 'pilihan_ganda'
        },
        {
          idSoal: 'REM-A1-02',
          kelas: 1,
          fase: 'A',
          unitId: 'A1-QUR-01',
          elemen: 'Al-Qur\'an-Hadis',
          tingkatKesulitan: 'Dasar',
          pertanyaan: 'Di manakah tempat terbaik untuk meletakkan Al-Qur\'an?',
          opsi: ['A. Di lantai bawah meja', 'B. Di rak yang bersih dan tinggi', 'C. Di kotak mainan'],
          jawabanBenar: 'B. Di rak yang bersih dan tinggi',
          pembahasan: 'Adab terhadap Al-Qur\'an adalah memuliakannya dengan meletakkannya di tempat tinggi dan bersih.',
          indikator: 'Menjelaskan adab meletakkan mushaf',
          tp: 'TP-A1.3',
          jenisSoal: 'pilihan_ganda'
        }
      ]
    },
    pengayaan: {
      judul: 'Tantangan Sahabat Bintang Al-Qur\'an',
      studiKasusKompleks: 'Faris ingin mengajarkan adiknya yang berusia 4 tahun mengenal huruf hijaiyah di rumah dengan cara yang menyenangkan tanpa membuat adiknya bosan. Rancanglah ide kreatif Faris!',
      proyekMini: 'Membuat "Pohon Huruf Hijaiyah Ceria" menggunakan kertas origami warna-warni bersama orang tua di rumah.',
      pertanyaanAnalitis: [
        'Mengapa kita harus terus menjaga hafalan Surah Al-Fatihah dan tidak boleh terburu-buru saat membacanya dalam salat?',
        'Bagaimana Al-Qur\'an dapat membimbing tutur kata kita agar selalu berbicara sopan dan jujur?'
      ]
    },
    lkpd: {
      unitId: 'A1-QUR-01',
      judul: 'Lembar Kerja Peserta Didik (LKPD) Digital: Menjelajah Huruf Hijaiyah & Adab Al-Qur\'an',
      tujuan: [
        'Siswa dapat melafalkan huruf hijaiyah dan harakat dasarnya dengan percaya diri.',
        'Siswa dapat mendemonstrasikan adab memegang dan memuliakan mushaf Al-Qur\'an.'
      ],
      petunjuk: [
        '1. Berdoalah sebelum memulai kegiatan dengan membaca Basmalah.',
        '2. Amati kartu huruf hijaiyah yang ditampilkan gurumu.',
        '3. Tuliskan jawaban atau tandai pilihanmu dengan teliti dan riang.'
      ],
      mariMengamati: {
        stimulus: 'Perhatikan gambar seorang anak sedang memegang Al-Qur\'an dengan kedua tangan di atas meja yang bersih.',
        gambarHint: 'Ilustrasi anak berpakaian bersih, tersenyum, duduk bersila dengan mushaf terbuka di rekal kayu.',
        pertanyaan: 'Apa saja tanda-tanda anak tersebut menunjukkan adab yang baik saat hendak membaca Al-Qur\'an?'
      },
      mariBerpikir: [
        'Apa yang terjadi jika kita membaca Al-Qur\'an tanpa memerhatikan harakatnya?',
        'Sebutkan 3 huruf hijaiyah favoritmu dan bunyikan dengan harakat kasrah!'
      ],
      mariBerdiskusi: 'Diskusikan bersama teman sebangkumu: Mengapa sebelum memegang Al-Qur\'an kita dianjurkan berwudu terlebih dahulu?',
      mariMencoba: 'Praktikkan bersama gurumu cara melafalkan Q.S. Al-Fatihah ayat 1-3 dengan suara merdu dan makhraj yang jelas!',
      mariMenyimpulkan: 'Tuliskan kesimpulan sederhanamu: Al-Qur\'an adalah kitab suci yang harus kita ... dan kita ... setiap hari.',
      refleksi: 'Bagian kegiatan mana yang paling membuatmu merasa senang dan bersemangat hari ini?'
    },
    refleksiSiswa: [
      {
        pertanyaan: 'Bagaimana perasaanmu setelah belajar mengenal Al-Qur\'an hari ini?',
        pilihanEmosi: ['Sangat Senang 😊', 'Bersemangat 🌟', 'Ingin Belajar Lagi 📖']
      }
    ],
    refleksiGuru: [
      'Apakah seluruh siswa kelas 1 sudah mampu melafalkan harakat fathah, kasrah, dan dhammah dengan makhraj tepat?',
      'Apakah pembiasaan adab memegang mushaf Al-Qur\'an sudah tercermin dalam perilaku nyata di kelas?'
    ],
    sumber: [
      'Keputusan Kepala BKPDM Nomor 020 Tahun 2026',
      'Buku Panduan Guru PAI dan Budi Pekerti Kelas 1 Kemendikdasmen RI',
      'Mushaf Al-Qur\'an Standar Indonesia Kementerian Agama RI'
    ],
    verifikasi: true
  },

  // =========================================================================
  // KELAS 1: UNIT 2 - AKU ANAK MUSLIM: MENGENAL ALLAH & KALIMAT THAYYIBAH
  // =========================================================================
  {
    kodeUnit: 'A1-AKI-02',
    namaUnit: 'Aku Anak Muslim: Mengenal Allah & Kalimat Thayyibah',
    fase: 'A',
    kelas: 1,
    elemen: 'Akidah',
    semester: 1,
    cpResmi: 'Peserta didik terbiasa mempraktikkan nilai-nilai baik dalam kehidupan sehari-hari melalui pengenalan rukun iman, iman kepada Allah Swt., serta mengenal beberapa asmaulhusna dan kalimat thayyibah.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-A1.4: Menyebutkan rukun iman secara berurutan dengan riang dan sadar.',
      'TP-A1.5: Meyakini Allah Swt. sebagai Tuhan Yang Maha Esa pencipta alam semesta.',
      'TP-A1.6: Membiasakan mengucap Basmalah, Hamdalah, Takbir, dan Salam sesuai waktu yang tepat.'
    ],
    materiPengembangan: [
      {
        id: 'A1-AKI-02-SUB-1',
        judul: '1. Identitasku sebagai Anak Muslim Ceria',
        tujuan: 'Siswa bangga menjadi anak muslim yang rajin beribadah dan bertutur kata santun.',
        materiInti: [
          'Anak muslim adalah anak yang beriman kepada Allah Swt. dan mengikuti ajaran Nabi Muhammad saw.',
          'Ciri anak muslim sejati adalah wajahnya selalu tersenyum, suka membantu, dan rajin berdoa.',
          'Kita bangga menjadi muslim yang membawa rahmat dan kedamaian bagi lingkungan sekitar.'
        ],
        contohNyata: 'Yusuf selalu menyapa teman-temannya dengan senyuman hangat dan ucapan "Assalamu\'alaikum" saat tiba di gerbang sekolah.',
        ilustrasi: 'Anak muslim memakai peci dan jilbab ceria, melambaikan tangan dengan riang di depan gerbang sekolah.',
        pertanyaanBerpikir: [
          'Apa saja kebiasaan baik yang dilakukan anak muslim setiap pagi?',
          'Mengapa kita harus bangga menjadi anak muslim?'
        ],
        refleksiDiri: 'Aku bersyukur diciptakan Allah sebagai anak muslim yang bahagia.'
      },
      {
        id: 'A1-AKI-02-SUB-2',
        judul: '2. Allah Tuhanku Yang Maha Pengasih (Ar-Rahman)',
        tujuan: 'Siswa dapat meyakini bahwa Allah adalah Pencipta alam semesta yang Maha Pengasih kepada seluruh makhluk.',
        materiInti: [
          'Allah Swt. menciptakan matahari yang bersinar hangat, udara sejuk untuk bernapas, dan air hujan yang menyuburkan tanaman.',
          'Ar-Rahman artinya Allah Maha Pengasih kepada semua makhluk tanpa pilih kasih.',
          'Ar-Rahim artinya Allah Maha Penyayang khusus kepada orang-orang yang beriman.'
        ],
        contohNyata: 'Ketika memandang bunga yang mekar dan kupu-kupu beterbangan di taman, Siti berbisik kagum: "Subhanallah, alangkah indahnya ciptaan Allah!"',
        ilustrasi: 'Pemandangan alam pegunungan yang hijau, matahari terbit, sungai jernih, burung-burung berkicau.',
        pertanyaanBerpikir: [
          'Siapakah yang menciptakan udara yang kita hirup setiap detik?',
          'Bagaimana cara kita berterima kasih kepada Allah yang Maha Pengasih?'
        ],
        refleksiDiri: 'Aku mencintai Allah dengan menjaga ciptaan-Nya dan rajin beribadah.'
      },
      {
        id: 'A1-AKI-02-SUB-3',
        judul: '3. Kalimat Thayyibah: Basmalah & Hamdalah',
        tujuan: 'Siswa membiasakan membaca Basmalah sebelum memulai kegiatan dan Hamdalah setelah selesai berkegiatan.',
        materiInti: [
          'Kalimat thayyibah adalah kalimat-kalimat yang baik dan mengandung pujian serta zikir kepada Allah.',
          'Lafal Basmalah: "Bismillāhir-raḥmānir-raḥīm" (Dengan nama Allah Yang Maha Pengasih, Maha Penyayang). Dibaca sebelum makan, belajar, dan melangkah.',
          'Lafal Hamdalah: "Al-ḥamdu lillāhi rabbil-\'ālamīn" (Segala puji bagi Allah Tuhan seluruh alam). Dibaca setelah selesai berkegiatan atau mendapat nikmat.'
        ],
        contohNyata: 'Sebelum memegang pensil untuk mengerjakan tugas, Budi membaca basmalah. Setelah selesai menggambar, ia tersenyum mengucap alhamdulillah.',
        ilustrasi: 'Anak duduk di meja makan, mengangkat kedua tangan membaca doa sebelum makan.',
        pertanyaanBerpikir: [
          'Apa yang kita ucapkan saat hendak memakai sepatu?',
          'Mengapa kita harus membaca hamdalah setelah selesai makan?'
        ],
        refleksiDiri: 'Lisanku selalu basah dengan basmalah dan hamdalah setiap hari.'
      },
      {
        id: 'A1-AKI-02-SUB-4',
        judul: '4. Kalimat Thayyibah: Takbir & Salam Kasih',
        tujuan: 'Siswa dapat mengumandangkan takbir saat kagum atau bersemangat dan mengucapkan salam saat bertemu sesama.',
        materiInti: [
          'Lafal Takbir: "Allāhu Akbar" artinya Allah Maha Besar. Mengingatkan kita bahwa tidak ada yang lebih besar dan berkuasa selain Allah.',
          'Lafal Salam: "Assalāmu\'alaikum Warahmatullāhi Wabarakātuh" artinya Semoga keselamatan, rahmat, dan keberkahan Allah tercurah kepadamu.',
          'Menyebarkan salam adalah tanda cinta dan menebarkan rasa aman di antara sesama teman.'
        ],
        contohNyata: 'Saat memenangkan lomba lari, Umar tidak menyombongkan diri, melainkan bersorak: "Allahu Akbar!" dan menyalami teman-temannya.',
        ilustrasi: 'Dua orang anak saling tersenyum dan berjabat tangan dengan hangat di lorong sekolah.',
        pertanyaanBerpikir: [
          'Bagaimana jawaban jika ada teman yang mengucapkan salam kepadamu?',
          'Apa arti dari ucapan Allāhu Akbar?'
        ],
        refleksiDiri: 'Aku gemar menebarkan salam dan mendoakan kebaikan bagi siapa pun yang kutemui.'
      },
      {
        id: 'A1-AKI-02-SUB-5',
        judul: '5. Rukun Iman Enam Perkara',
        tujuan: 'Siswa dapat melafalkan 6 rukun iman secara runtut dan menanamkannya di dalam hati sanubari.',
        materiInti: [
          'Rukun iman ada 6 perkara yang menjadi fondasi keyakinan seorang muslim:',
          '1. Iman kepada Allah, 2. Iman kepada Malaikat Allah, 3. Iman kepada Kitab-Kitab Allah.',
          '4. Iman kepada Rasul-Rasul Allah, 5. Iman kepada Hari Akhir, 6. Iman kepada Qada dan Qadar.'
        ],
        contohNyata: 'Anak-anak bernyanyi tepuk rukun iman bersama guru dengan penuh tawa ceria dan tepukan ritmis yang riang.',
        ilustrasi: 'Pohon rukun iman dengan 6 cabang dahan berbuah bintang emas yang bersinar.',
        pertanyaanBerpikir: [
          'Sebutkan rukun iman yang pertama dan kedua!',
          'Apakah orang yang tidak percaya kepada hari akhir dapat disebut beriman sempurna?'
        ],
        refleksiDiri: 'Aku percaya sepenuh hati pada keenam rukun iman.'
      }
    ],
    kosakataPenting: [
      { kata: 'Thayyibah', arti: 'Kata-kata yang baik, suci, dan bernilai pahala saat diucapkan.' },
      { kata: 'Basmalah', arti: 'Ucapan Bismillāhir-raḥmānir-raḥīm untuk memohon berkah Allah.' },
      { kata: 'Hamdalah', arti: 'Ucapan Al-ḥamdu lillāh sebagai ungkapan terima kasih dan pujian kepada Allah.' },
      { kata: 'Ar-Rahman', arti: 'Nama Allah yang artinya Maha Pengasih kepada seluruh makhluk di dunia.' }
    ],
    konsepInti: 'Keyakinan kepada Allah Swt. terpancar dari kata-kata baik (kalimat thayyibah) yang senantiasa menghiasi lisan anak muslim dalam setiap gerak langkah kehidupannya.',
    ceritaPembuka: {
      judul: 'Pohon Ceria di Kebun Kakek',
      narasi: 'Pada hari Ahad, Salman dan Aisyah berkunjung ke kebun buah kakek di desa. Pohon mangga dan jeruk berbuah lebat menggelantung ranum. Salman berseru gembira, "Kakek, siapa yang membuat pohon ini tumbuh begitu subur?" Kakek tersenyum bijak lalu membelai kepala Salman, "Allah Swt. cucuku, Sang Maha Pencipta. Dia menurunkan hujan dan menerbitkan mentari. Karena itu, ucapkanlah Hamdalah atas nikmat manis buah ini." Salman dan Aisyah pun serempak mengucap, "Alhamdulillahirabbil \'alamin!" dengan penuh syukur.',
      hikmah: 'Segala nikmat yang kita nikmati di dunia bersumber dari kasih sayang Allah Yang Maha Pemurah.'
    },
    aktivitasInteraktif: [
      {
        id: 'ACT-A1-05',
        level: 1,
        type: 'drag_drop',
        title: 'Cocokkan Situasi dengan Kalimat Thayyibah',
        instructions: 'Pilihlah kalimat thayyibah yang paling tepat untuk situasi berikut!',
        items: [
          { id: 'sit-1', label: 'Sebelum makan siang bersama', matchWith: 'Bismillah' },
          { id: 'sit-2', label: 'Setelah bersin atau kenyang makan', matchWith: 'Alhamdulillah' },
          { id: 'sit-3', label: 'Bertemu bapak/ibu guru di jalan', matchWith: 'Assalamu\'alaikum' },
          { id: 'sit-4', label: 'Takjub melihat pemandangan indah', matchWith: 'Subhanallah' }
        ],
        xpReward: 10
      },
      {
        id: 'ACT-A1-06',
        level: 2,
        type: 'susun_urutan',
        title: 'Susun Rukun Iman 1 sampai 6',
        instructions: 'Urutkan rukun iman dari nomor 1 hingga nomor 6 dengan benar!',
        items: [
          { id: 'ri-1', label: '1. Iman kepada Allah', correctOrder: 1 },
          { id: 'ri-2', label: '2. Iman kepada Malaikat', correctOrder: 2 },
          { id: 'ri-3', label: '3. Iman kepada Kitab-Kitab', correctOrder: 3 },
          { id: 'ri-4', label: '4. Iman kepada Rasul-Rasul', correctOrder: 4 },
          { id: 'ri-5', label: '5. Iman kepada Hari Akhir', correctOrder: 5 },
          { id: 'ri-6', label: '6. Iman kepada Qada dan Qadar', correctOrder: 6 }
        ],
        xpReward: 15
      },
      {
        id: 'ACT-A1-07',
        level: 3,
        type: 'studi_kasus',
        title: 'Keputusan Anak Muslim Jujur',
        instructions: 'Simak cerita singkat berikut dan tentukan pilihan bijakmu!',
        scenario: 'Saat bermain petak umpet di halaman sekolah, tak sengaja kakimu menyenggol pot bunga hingga pecah. Tidak ada teman lain yang melihat kejadian tersebut.',
        options: [
          { id: 'opt-a', text: 'Lari sembunyi dan pura-pura tidak tahu saat guru bertanya.', isBestChoice: false, feedback: 'Bukan sikap terpuji. Anak muslim berani jujur dan bertanggung jawab.' },
          { id: 'opt-b', text: 'Mendatangi guru dengan santun, mengucap istighfar, meminta maaf, dan membantu membersihkan pecahan pot.', isBestChoice: true, feedback: 'Hebat sekali! Kejujuran dan tanggung jawab adalah akhlak mulia anak beriman.' },
          { id: 'opt-c', text: 'Menuduh teman lain yang lewat agar tidak dimarahi.', isBestChoice: false, feedback: 'Sangat dilarang! Memfitnah teman adalah perbuatan dosa yang dibenci Allah.' }
        ],
        xpReward: 20
      }
    ],
    soal: [
      {
        idSoal: 'Q-A1-11',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-AKI-02',
        elemen: 'Akidah',
        tingkatKesulitan: 'Dasar',
        pertanyaan: 'Sebelum memulai belajar atau makan, kita membaca kalimat...',
        opsi: ['A. Hamdalah (Alhamdulillah)', 'B. Basmalah (Bismillah)', 'C. Takbir (Allahu Akbar)'],
        jawabanBenar: 'B. Basmalah (Bismillah)',
        pembahasan: 'Membaca basmalah diajarkan Nabi agar kegiatan kita bernilai ibadah dan berkah.',
        indikator: 'Menentukan kalimat thayyibah sebelum beraktivitas',
        tp: 'TP-A1.6',
        jenisSoal: 'pilihan_ganda'
      },
      {
        idSoal: 'Q-A1-12',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-AKI-02',
        elemen: 'Akidah',
        tingkatKesulitan: 'Dasar',
        pertanyaan: 'Rukun iman berjumlah...',
        opsi: ['A. 5 perkara', 'B. 6 perkara', 'C. 7 perkara'],
        jawabanBenar: 'B. 6 perkara',
        pembahasan: 'Rukun iman ada 6 perkara, diawali iman kepada Allah dan diakhiri iman kepada takdir (qada dan qadar).',
        indikator: 'Menyebutkan jumlah rukun iman',
        tp: 'TP-A1.4',
        jenisSoal: 'pilihan_ganda'
      },
      {
        idSoal: 'Q-A1-13',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-AKI-02',
        elemen: 'Akidah',
        tingkatKesulitan: 'Reguler',
        pertanyaan: 'Asmaulhusna Ar-Rahman memiliki arti bahwa Allah Maha...',
        opsi: ['A. Pengasih', 'B. Melihat', 'C. Mendengar'],
        jawabanBenar: 'A. Pengasih',
        pembahasan: 'Ar-Rahman artinya Allah Maha Pengasih kepada seluruh makhluk di semesta alam.',
        indikator: 'Menjelaskan arti asmaulhusna Ar-Rahman',
        tp: 'TP-A1.5',
        jenisSoal: 'pilihan_ganda'
      },
      {
        idSoal: 'Q-A1-14',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-AKI-02',
        elemen: 'Akidah',
        tingkatKesulitan: 'Dasar',
        pertanyaan: 'Ucapan salam mendoakan keselamatan bagi orang yang kita jumpai.',
        opsi: ['Benar', 'Salah'],
        jawabanBenar: 'Benar',
        pembahasan: 'Benar. Kalimat Assalamu\'alaikum mengandung doa keselamatan, rahmat, dan berkah Allah.',
        indikator: 'Menilai makna ucapan salam',
        tp: 'TP-A1.6',
        jenisSoal: 'benar_salah'
      },
      {
        idSoal: 'Q-A1-15',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-AKI-02',
        elemen: 'Akidah',
        tingkatKesulitan: 'Tantangan',
        pertanyaan: 'HOTS: Mengapa seorang muslim harus mengucap Hamdalah ketika mendapat nilai bagus dan bukan menyombongkan diri?',
        opsi: [
          'A. Supaya dipuji oleh semua teman sekelas',
          'B. Karena kecerdasan dan keberhasilan tersebut adalah nikmat dan pertolongan dari Allah Swt.',
          'C. Supaya tidak disuruh belajar lagi oleh orang tua'
        ],
        jawabanBenar: 'B. Karena kecerdasan dan keberhasilan tersebut adalah nikmat dan pertolongan dari Allah Swt.',
        pembahasan: 'Hamdalah menyadarkan kita bahwa segala kepandaian dan kesuksesan semata-mata adalah karunia Allah yang wajib disyukuri.',
        indikator: 'Menganalisis urgensi rasa syukur atas keberhasilan belajar',
        tp: 'TP-A1.6',
        jenisSoal: 'hots'
      }
    ],
    remedial: {
      judul: 'Yuk Belajar Lagi! Kalimat Thayyibah yang Membawa Berkah',
      materiRingkas: [
        '1. Sebelum memulai hal baik: Ucapkan "Bismillāhir-raḥmānir-raḥīm".',
        '2. Setelah selesai atau bersyukur: Ucapkan "Al-ḥamdu lillāh".',
        '3. Rukun iman ada 6 perkara.',
        '4. Allah Maha Pengasih (Ar-Rahman) dan Maha Penyayang (Ar-Rahim).'
      ],
      contohSederhana: 'Ucapkan bismillah sebelum minum air putih, dan ucapkan alhamdulillah setelah selesai minum.',
      kuisUlang: [
        {
          idSoal: 'REM-A1-03',
          kelas: 1,
          fase: 'A',
          unitId: 'A1-AKI-02',
          elemen: 'Akidah',
          tingkatKesulitan: 'Dasar',
          pertanyaan: 'Apa yang kamu ucapkan setelah selesai makan nasi?',
          opsi: ['A. Alhamdulillah', 'B. Bismillah', 'C. Astaghfirullah'],
          jawabanBenar: 'A. Alhamdulillah',
          pembahasan: 'Setelah makan selesai, kita memuji Allah dengan mengucap alhamdulillah.',
          indikator: 'Menentukan ucapan hamdalah pasca kegiatan',
          tp: 'TP-A1.6',
          jenisSoal: 'pilihan_ganda'
        }
      ]
    },
    pengayaan: {
      judul: 'Petualangan Duta Zikir Ceria',
      studiKasusKompleks: 'Bagaimana caramu mengingatkan teman bermain yang suka berkata kasar agar membiasakan lisan mengucap kalimat thayyibah tanpa membuatnya tersinggung?',
      proyekMini: 'Membuat "Kartu Pengingat Kalimat Thayyibah" untuk ditempel di pintu kamar tidur dan meja makan.',
      pertanyaanAnalitis: [
        'Bagaimana kalimat bismillah dan alhamdulillah dapat mengubah perbuatan biasa menjadi bernilai ibadah di sisi Allah?'
      ]
    },
    lkpd: {
      unitId: 'A1-AKI-02',
      judul: 'LKPD Digital: Warna-Warni Kalimat Thayyibah & Rukun Iman',
      tujuan: [
        'Siswa terbiasa melafalkan kalimat thayyibah pada momen kehidupan nyata.',
        'Siswa dapat menyebutkan 6 rukun iman secara berurutan.'
      ],
      petunjuk: [
        'Buka lembar kegiatan dengan basmalah.',
        'Cocokkan kartu ucapan dan beri centang pada gambar perilaku anak muslim.'
      ],
      mariMengamati: {
        stimulus: 'Perhatikan gambar anak yang hendak makan bersama keluarganya di meja makan.',
        gambarHint: 'Keluarga duduk rapi, ayah memimpin doa, anak-anak menengadahkan tangan.',
        pertanyaan: 'Doa apa yang dibaca sebelum suapan nasi pertama masuk ke mulut?'
      },
      mariBerpikir: [
        'Apa arti kalimat Bismillāhir-raḥmānir-raḥīm?',
        'Mengapa kita harus mengucap salam saat bertemu teman?'
      ],
      mariBerdiskusi: 'Berceritalah kepada teman di sampingmu tentang pengalamanmu mengucap alhamdulillah saat ditolong orang lain.',
      mariMencoba: 'Tirukan bersama lafal 6 rukun iman sambil bertepuk tangan berirama gembira!',
      mariMenyimpulkan: 'Anak muslim yang beriman selalu menghiasi lisannya dengan ucapan yang ...',
      refleksi: 'Sudahkah aku mengucapkan bismillah sebelum sarapan pagi ini?'
    },
    refleksiSiswa: [
      {
        pertanyaan: 'Apakah kamu merasa senang melafalkan kalimat thayyibah hari ini?',
        pilihanEmosi: ['Sangat Senang 😊', 'Lega & Damai 💖', 'Siap Mengamalkan ✨']
      }
    ],
    refleksiGuru: [
      'Apakah peserta didik sudah spontan mengucap basmalah saat memulai tugas di kelas?',
      'Sejauh mana pengenalan rukun iman dihayati secara konkret oleh siswa kelas 1?'
    ],
    sumber: [
      'Keputusan Kepala BKPDM Nomor 020 Tahun 2026',
      'Panduan Pembelajaran Akidah Akhlak SD Kemendikdasmen RI'
    ],
    verifikasi: true
  },

  // =========================================================================
  // KELAS 1: UNIT 3 - AKHLAK TERPUJI: SAYANG ORANG TUA, GURU, & SAHABAT
  // =========================================================================
  {
    kodeUnit: 'A1-AKH-03',
    namaUnit: 'Akhlak Terpuji: Sayang Orang Tua, Guru, & Sahabat',
    fase: 'A',
    kelas: 1,
    elemen: 'Akhlak',
    semester: 1,
    cpResmi: 'Peserta didik terbiasa mempraktikkan nilai-nilai baik dalam kehidupan sehari-hari dalam ungkapan-ungkapan positif baik untuk dirinya maupun sesama manusia, terutama orang tua dan guru.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-A1.7: Menampilkan sikap hormat dan santun kepada ayah, ibu, dan guru.',
      'TP-A1.8: Membiasakan sikap jujur, ramah, dan suka berbagi kepada teman sebaya.',
      'TP-A1.9: Membiasakan hidup bersih, tertib, dan menjaga fasilitas di sekolah dan rumah.'
    ],
    materiPengembangan: [
      {
        id: 'A1-AKH-03-SUB-1',
        judul: '1. Hormat dan Berbakti kepada Ayah dan Ibu',
        tujuan: 'Siswa dapat menunjukkan rasa terima kasih dan perilaku patuh kepada orang tua yang telah merawat dengan penuh kasih.',
        materiInti: [
          'Orang tua adalah sosok yang paling berjasa dalam hidup kita. Ibu melahirkan dan merawat kita, Ayah bekerja keras mencari nafkah halal.',
          'Cara berbakti kepada orang tua: berbicara sopan, mendengarkan nasihat, mencium tangan saat hendak bepergian, dan mendoakan kebaikan mereka.',
          'Doa untuk kedua orang tua: Rabbighfir lī wa liwālidayya warḥamhumā kamā rabbayānī ṣaghīrā.'
        ],
        contohNyata: 'Sebelum berangkat sekolah, Hanif mencium tangan ayah dan ibu sambil tersenyum mengucapkan pamit dan memohon restu belajar.',
        ilustrasi: 'Anak membungkukkan badan sedikit sambil mencium punggung tangan ibu di depan pintu rumah.',
        pertanyaanBerpikir: [
          'Apa yang kamu rasakan ketika ibu memelukmu saat kamu sedih?',
          'Bolehkah kita membentak atau berkata kasar kepada orang tua? Mengapa?'
        ],
        refleksiDiri: 'Aku bertekad untuk selalu membahagiakan ayah dan ibu dengan rajin belajar dan bertutur kata manis.'
      },
      {
        id: 'A1-AKH-03-SUB-2',
        judul: '2. Santun dan Patuh kepada Guru di Sekolah',
        tujuan: 'Siswa dapat menghargai bapak dan ibu guru sebagai orang tua kedua yang membimbing ilmu pengetahuan.',
        materiInti: [
          'Guru adalah orang tua kita selama berada di sekolah yang mengajari kita membaca, menulis, dan berakhlak mulia.',
          'Adab kepada guru: memberi salam saat bertemu, mendengarkan penjelasan di kelas tanpa bercanda, dan mengangkat tangan sebelum bertanya.',
          'Menghormati guru membuat ilmu yang kita pelajari menjadi berkah dan mudah dipahami.'
        ],
        contohNyata: 'Saat Bu Guru sedang menjelaskan materi di papan tulis, Zahra mendengarkan dengan tenang dan tertib mencatat di bukunya.',
        ilustrasi: 'Ruang kelas cerah, siswa duduk rapi mendengarkan guru yang tersenyum memegang buku panduan.',
        pertanyaanBerpikir: [
          'Mengapa guru disebut sebagai orang tua kita di sekolah?',
          'Apa yang sebaiknya kamu lakukan jika berpapasan dengan guru di koridor sekolah?'
        ],
        refleksiDiri: 'Aku selalu mendengarkan nasihat guruku dengan penuh perhatian.'
      },
      {
        id: 'A1-AKH-03-SUB-3',
        judul: '3. Menyayangi Teman & Suka Berbagi',
        tujuan: 'Siswa dapat membangun pertemanan yang rukun, tidak membeda-bedakan kawan, dan gemar berbagi kebaikan.',
        materiInti: [
          'Semua teman di sekolah adalah saudara kita. Rasulullah saw. mengajarkan kita untuk saling menyayangi.',
          'Sikap terpuji kepada teman: mau meminjamkan alat tulis yang dibutuhkan, berbagi bekal makanan, dan tidak mengejek kelemahan orang lain.',
          'Jika terjadi perselisihan, segera saling memaafkan dan kembali bermain bersama dengan ceria.'
        ],
        contohNyata: 'Melihat pensil krayon temannya patah, Ilham dengan senang hati meminjamkan krayon birunya sehingga mereka bisa mewarnai bersama-sama.',
        ilustrasi: 'Dua orang anak tersenyum bersama mewarnai gambar pemandangan masjid dengan rukun.',
        pertanyaanBerpikir: [
          'Apa yang kamu lakukan jika melihat temanmu duduk sendirian di pojok kelas saat jam istirahat?',
          'Mengapa kita tidak boleh mengolok-olok nama atau fisik teman?'
        ],
        refleksiDiri: 'Aku mencintai sahabat-sahabatku sebagaimana aku mencintai diriku sendiri.'
      },
      {
        id: 'A1-AKH-03-SUB-4',
        judul: '4. Berbicara Jujur & Menghindari Bohong',
        tujuan: 'Siswa dapat memahami bahwa berkata jujur membawa ketenangan dan disenangi oleh Allah serta sesama manusia.',
        materiInti: [
          'Jujur artinya mengatakan hal yang sebenarnya sesuai dengan kenyataan.',
          'Nabi Muhammad saw. sangat jujur sejak kecil hingga digelari Al-Amin (orang yang sangat terpercaya).',
          'Berbohong membuat hati gelisah dan dijauhi teman, sedangkan jujur membuat hati tenang dan dipercaya semua orang.'
        ],
        contohNyata: 'Fadil mengakui terus terang kepada ibu bahwa ia lupa meletakkan tempat minumnya di kelas, tanpa mencari-cari alasan bohong.',
        ilustrasi: 'Anak tersenyum jujur berbicara kepada ibunya dengan tatapan mata yang jernih.',
        pertanyaanBerpikir: [
          'Mengapa orang yang suka berbohong sulit dipercaya lagi oleh orang lain?',
          'Bagaimana rasanya di dalam hati ketika kita berani berkata jujur?'
        ],
        refleksiDiri: 'Aku berani berkata jujur dalam setiap keadaan.'
      },
      {
        id: 'A1-AKH-03-SUB-5',
        judul: '5. Hidup Bersih & Rapi di Sekolah dan Rumah',
        tujuan: 'Siswa membiasakan membuang sampah pada tempatnya dan merapikan perlengkapan belajar sendiri.',
        materiInti: [
          'Kebersihan adalah sebagian dari iman (An-nazhafatu minal iman).',
          'Islam sangat mencintai kebersihan pakaian, tubuh, rumah, dan lingkungan sekitar.',
          'Membiasakan merapikan tempat tidur sendiri dan membuang bungkus makanan ke tong sampah yang tepat.'
        ],
        contohNyata: 'Usai memakan pisang, Aisyah segera memasukkan kulit pisang ke dalam tong sampah organik agar tidak membuat orang lain terpeleset.',
        ilustrasi: 'Anak memasukkan sampah ke tong sampah berlabel organik dan anorganik di taman sekolah.',
        pertanyaanBerpikir: [
          'Apa bahayanya jika membuang sampah sembarangan di selokan sekolah?',
          'Bagaimana caramu menjaga kebersihan meja belajarmu?'
        ],
        refleksiDiri: 'Aku mencintai kebersihan karena Allah itu Mahaindah dan mencintai keindahan.'
      }
    ],
    kosakataPenting: [
      { kata: 'Berbakti', arti: 'Tunduk, hormat, patuh, dan berbuat baik sepenuh hati kepada orang tua dan guru.' },
      { kata: 'Al-Amin', arti: 'Gelar kemuliaan Nabi Muhammad saw. yang bermakna orang yang terpercaya kejujurannya.' },
      { kata: 'Santun', arti: 'Halus dan baik budi pekertinya, tingkah laku maupun tutur katanya.' },
      { kata: 'Empati', arti: 'Kemampuan merasakan apa yang dirasakan oleh orang lain dan tergerak membantu.' }
    ],
    konsepInti: 'Akhlak terpuji adalah buah dari keimanan. Sayang kepada orang tua, hormat kepada guru, rukun dengan teman, dan jujur dalam bertutur kata akan membuat hidup kita dipenuhi keberkahan.',
    ceritaPembuka: {
      judul: 'Kotak Bekal Milik Bilal',
      narasi: 'Waktu istirahat pertama berdentang nyaring di SD Harapan Bangsa. Anak-anak membuka kotak bekal masing-masing. Di sudut bangku, Dika termenung menatap mejanya yang kosong. Ibunya sedang sakit sehingga tidak sempat menyiapkan sarapan. Bilal yang duduk di dekatnya melihat Dika yang lemas. Tanpa ragu, Bilal membagi separuh roti bakar isi selai cokelatnya dan sebutir telur rebus ke piring Dika. "Makanlah bersamaku, Dika. Ibu bilang bekal yang dimakan bersama rasanya dua kali lipat lebih lezat!" Dika tersenyum haru. Persahabatan mereka terasa semakin hangat karena saling peduli.',
      hikmah: 'Berbagi bekal dan rezeki kepada sesama tidak akan mengurangi harta, melainkan menambah rasa syukur dan kasih sayang.'
    },
    aktivitasInteraktif: [
      {
        id: 'ACT-A1-08',
        level: 1,
        type: 'tebak_gambar',
        title: 'Pilih Perilaku Terpuji vs Perilaku Tercela',
        instructions: 'Sentuh gambar perilaku yang TERPUJI dan patut kita tiru!',
        items: [
          { id: 'per-1', label: 'Mencium tangan ibu sebelum berangkat', matchWith: 'Terpuji' },
          { id: 'per-2', label: 'Mengejek teman yang terjatuh', matchWith: 'Tercela' },
          { id: 'per-3', label: 'Membuang sampah bekas jajanan ke tong sampah', matchWith: 'Terpuji' },
          { id: 'per-4', label: 'Menyela perkataan guru saat berbicara', matchWith: 'Tercela' }
        ],
        xpReward: 10
      },
      {
        id: 'ACT-A1-09',
        level: 3,
        type: 'studi_kasus',
        title: 'Studi Kasus: Pensil Teman Tertinggal',
        instructions: 'Pilih tindakan terbaikmu saat menghadapi situasi berikut!',
        scenario: 'Teman sebangkumu lupa membawa pensil tulis saat jam ulangan dimulai. Kamu membawa dua pensil di dalam tempat pensilmu.',
        options: [
          { id: 'opt-x', text: 'Menyembunyikan tempat pensil dan membiarkan teman kebingungan.', isBestChoice: false, feedback: 'Tidak baik. Kita harus suka menolong sahabat yang kesusahan.' },
          { id: 'opt-y', text: 'Meminjamkan satu pensilmu dengan ikhlas dan tersenyum ramah.', isBestChoice: true, feedback: 'MasyaAllah! Sikap dermawan dan tolong-menolong sangat dicintai Allah Swt.' },
          { id: 'opt-z', text: 'Meminjamkan tetapi meminta imbalan uang jajan.', isBestChoice: false, feedback: 'Kurang tepat. Menolong teman sebaiknya ikhlas lillahi ta\'ala tanpa pamrih.' }
        ],
        xpReward: 20
      }
    ],
    soal: [
      {
        idSoal: 'Q-A1-16',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-AKH-03',
        elemen: 'Akhlak',
        tingkatKesulitan: 'Dasar',
        pertanyaan: 'Sikap yang benar kepada bapak dan ibu guru saat di sekolah adalah...',
        opsi: ['A. Mengacuhkan nasihatnya', 'B. Menghormati dan mematuhi arahannya', 'C. Berbicara keras dan berteriak'],
        jawabanBenar: 'B. Menghormati dan mematuhi arahannya',
        pembahasan: 'Guru adalah orang tua kedua di sekolah yang wajib kita hormati dan patuhi bimbingan ilmunya.',
        indikator: 'Menunjukkan adab hormat kepada guru',
        tp: 'TP-A1.7',
        jenisSoal: 'pilihan_ganda'
      },
      {
        idSoal: 'Q-A1-17',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-AKH-03',
        elemen: 'Akhlak',
        tingkatKesulitan: 'Reguler',
        pertanyaan: 'Nabi Muhammad saw. memiliki sifat Al-Amin yang artinya...',
        opsi: ['A. Dapat dipercaya / sangat jujur', 'B. Kaya raya', 'C. Suka bepergian'],
        jawabanBenar: 'A. Dapat dipercaya / sangat jujur',
        pembahasan: 'Al-Amin adalah gelar Rasulullah sejak muda karena tidak pernah sekali pun berdusta.',
        indikator: 'Menjelaskan makna gelar Al-Amin',
        tp: 'TP-A1.8',
        jenisSoal: 'pilihan_ganda'
      },
      {
        idSoal: 'Q-A1-18',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-AKH-03',
        elemen: 'Akhlak',
        tingkatKesulitan: 'Dasar',
        pertanyaan: 'Jika ada teman yang meminta maaf atas kesalahannya, kita sebaiknya memaafkannya dengan lapang dada.',
        opsi: ['Benar', 'Salah'],
        jawabanBenar: 'Benar',
        pembahasan: 'Benar. Memberi maaf adalah ciri orang bertakwa yang disukai oleh Allah Swt.',
        indikator: 'Menerapkan sikap pemaaf kepada sesama',
        tp: 'TP-A1.8',
        jenisSoal: 'benar_salah'
      },
      {
        idSoal: 'Q-A1-19',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-AKH-03',
        elemen: 'Akhlak',
        tingkatKesulitan: 'Tantangan',
        pertanyaan: 'HOTS: Mengapa Islam sangat menekankan kebersihan lingkungan seperti membuang sampah pada tempatnya?',
        opsi: [
          'A. Supaya mendapat hadiah dari kepala sekolah',
          'B. Karena kebersihan adalah bagian dari iman dan menjaga kesehatan bersama dari kuman penyakit',
          'C. Hanya agar lantai kelas terlihat berkilau saat difoto'
        ],
        jawabanBenar: 'B. Karena kebersihan adalah bagian dari iman dan menjaga kesehatan bersama dari kuman penyakit',
        pembahasan: 'Menjaga kebersihan merupakan cerminan iman sekaligus wujud tanggung jawab kemanusiaan agar lingkungan tetap sehat dan asri.',
        indikator: 'Menganalisis hubungan kebersihan dengan kesempurnaan iman',
        tp: 'TP-A1.9',
        jenisSoal: 'hots'
      }
    ],
    remedial: {
      judul: 'Yuk Belajar Lagi! Akhlak Manis Anak Saleh',
      materiRingkas: [
        '1. Hormat dan cium tangan ayah, ibu, dan guru.',
        '2. Selalu jujur dan tidak boleh berbohong.',
        '3. Rukun dengan teman dan tidak boleh saling mengejek.',
        '4. Buang sampah selalu ke tempat sampah.'
      ],
      contohSederhana: 'Ucapkan kata "tolong" saat meminta bantuan dan "terima kasih" setelah ditolong.',
      kuisUlang: [
        {
          idSoal: 'REM-A1-04',
          kelas: 1,
          fase: 'A',
          unitId: 'A1-AKH-03',
          elemen: 'Akhlak',
          tingkatKesulitan: 'Dasar',
          pertanyaan: 'Apa yang harus kita ucapkan ketika menerima pertolongan dari teman?',
          opsi: ['A. Terima kasih', 'B. Diam saja', 'C. Pergilah'],
          jawabanBenar: 'A. Terima kasih',
          pembahasan: 'Ucapan terima kasih adalah adab mulia menghargai kebaikan orang lain.',
          indikator: 'Membiasakan ungkapan terima kasih',
          tp: 'TP-A1.7',
          jenisSoal: 'pilihan_ganda'
        }
      ]
    },
    pengayaan: {
      judul: 'Misi Kebaikan Harian: Duta Kasih Sayang',
      studiKasusKompleks: 'Buatlah jurnal kebaikan 3 hari berturut-turut yang memuat: 1 kebaikan untuk orang tua, 1 kebaikan untuk guru, dan 1 kebaikan untuk teman!',
      proyekMini: 'Membuat kartu ucapan terima kasih dengan hiasan bunga origami untuk Ayah dan Ibu.',
      pertanyaanAnalitis: [
        'Bagaimana sikap jujur saat ulangan di sekolah dapat membentuk karakter pemimpin masa depan yang amanah?'
      ]
    },
    lkpd: {
      unitId: 'A1-AKH-03',
      judul: 'LKPD Digital: Mempraktikkan Kasih Sayang & Kejujuran',
      tujuan: [
        'Siswa mampu membedakan perilaku terpuji dan perilaku tercela di rumah dan sekolah.',
        'Siswa membiasakan ungkapan santun dan berbakti kepada orang tua.'
      ],
      petunjuk: [
        'Perhatikan setiap gambar dan kasus dengan saksama.',
        'Warnai atau pilih perilaku yang mencerminkan akhlak anak muslim.'
      ],
      mariMengamati: {
        stimulus: 'Perhatikan gambar seorang anak membantu ibunya merapikan meja makan usai sarapan.',
        gambarHint: 'Anak membawa piring plastik ke bak cuci piring dengan hati-hati didampingi ibu yang tersenyum.',
        pertanyaan: 'Kebaikan apa saja yang dilakukan anak pada gambar tersebut?'
      },
      mariBerpikir: [
        'Mengapa kita harus mencium tangan orang tua saat pamit ke sekolah?',
        'Apa akibatnya jika seseorang suka berbohong kepada temannya?'
      ],
      mariBerdiskusi: 'Diskusikan dengan teman kelompokmu: Bagaimana cara kita membantu teman yang sedang menangis sedih?',
      mariMencoba: 'Praktikkan bersama teman sebangkumu cara meminta maaf dan memaafkan dengan tulus!',
      mariMenyimpulkan: 'Anak yang saleh selalu menyayangi sesama karena mencari rida ...',
      refleksi: 'Apakah hari ini aku sudah berkata jujur dan berbuat baik kepada orang lain?'
    },
    refleksiSiswa: [
      {
        pertanyaan: 'Bagaimana perasaanmu ketika berhasil membantu orang tua atau teman hari ini?',
        pilihanEmosi: ['Sangat Bangga 💖', 'Hati Terasa Sejuk 🌸', 'Ingin Berbagi Kebaikan Lagi 🌈']
      }
    ],
    refleksiGuru: [
      'Apakah siswa dapat mengidentifikasi perilaku santun dalam interaksi nyata di kelas?',
      'Apakah ada siswa yang masih mengalami kesulitan dalam berbagi atau mengendalikan emosi?'
    ],
    sumber: [
      'Keputusan Kepala BKPDM Nomor 020 Tahun 2026',
      'Buku Siswa PAI & Budi Pekerti Kelas 1 Kemendikdasmen RI'
    ],
    verifikasi: true
  },

  // =========================================================================
  // KELAS 1: UNIT 4 - BERSUCI & CERIA MELAKSANAKAN SALAT
  // =========================================================================
  {
    kodeUnit: 'A1-FIK-04',
    namaUnit: 'Bersuci & Ceria Melaksanakan Salat',
    fase: 'A',
    kelas: 1,
    elemen: 'Fikih',
    semester: 2,
    cpResmi: 'Peserta didik mampu menerapkan rukun Islam dan terbiasa melakukan tata cara bersuci, salat fardu, azan, ikamah, dan zikir serta doa setelah salat.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-A1.10: Menyebutkan 5 rukun Islam secara runtut dan gembira.',
      'TP-A1.11: Mengenal arti bersuci (taharah) dan mempraktikkan tata cara wudu berurutan.',
      'TP-A1.12: Mengenal 5 waktu salat fardu dan gerakan salat dasar secara teratur.'
    ],
    materiPengembangan: [
      {
        id: 'A1-FIK-04-SUB-1',
        judul: '1. Mengenal 5 Rukun Islam yang Kokoh',
        tujuan: 'Siswa dapat menyebutkan lima rukun Islam secara berurutan sebagai tiang agama.',
        materiInti: [
          'Rukun Islam adalah lima pondasi utama agama Islam yang wajib diketahui setiap muslim.',
          '1. Mengucap dua kalimat syahadat, 2. Mendirikan salat lima waktu, 3. Menunaikan zakat.',
          '4. Berpuasa di bulan Ramadan, 5. Menunaikan ibadah haji bagi yang mampu.'
        ],
        contohNyata: 'Saat guru bernyanyi "Katakan rukun Islam yang pertama: Syahadat!", seluruh siswa bertepuk tangan gembira menjawab: "Katakan rukun Islam yang kedua: Salat!"',
        ilustrasi: 'Gambar bangunan megah beratap kubah yang disangga oleh lima tiang kokoh bertuliskan rukun Islam.',
        pertanyaanBerpikir: [
          'Apa rukun Islam yang pertama kali diucapkan seseorang saat memeluk agama Islam?',
          'Mengapa salat disebut sebagai tiang agama?'
        ],
        refleksiDiri: 'Aku bertekad mengamalkan seluruh rukun Islam sepanjang hayatku.'
      },
      {
        id: 'A1-FIK-04-SUB-2',
        judul: '2. Arti Bersuci (Taharah) & Hidup Sehat',
        tujuan: 'Siswa memahami arti bersuci dari najis dan kotoran sebelum beribadah.',
        materiInti: [
          'Taharah artinya bersuci dari hadas dan najis menggunakan air suci lagi menyucikan.',
          'Najis adalah kotoran yang menghalangi sahnya ibadah, seperti air kencing dan kotoran hewan.',
          'Sebelum salat, badan, pakaian, dan tempat salat kita harus bersih dari kotoran dan najis.'
        ],
        contohNyata: 'Setelah buang air kecil di toilet, Hasan membasuh kemaluannya dengan air bersih (istinja) sampai suci lalu mencuci tangannya dengan sabun.',
        ilustrasi: 'Anak mencuci tangan dengan air mengalir dari kran yang bersih dan jernih.',
        pertanyaanBerpikir: [
          'Mengapa kita harus beristinja setelah buang air kecil?',
          'Bolehkah kita salat memakai baju yang terkena air kencing adik bayi?'
        ],
        refleksiDiri: 'Aku selalu menjaga kebersihan diri dan pakaianku dari segala najis.'
      },
      {
        id: 'A1-FIK-04-SUB-3',
        judul: '3. Tata Urutan Wudu yang Runtut',
        tujuan: 'Siswa dapat mendemonstrasikan urutan wudu dari awal sampai akhir secara tertib.',
        materiInti: [
          'Urutan wudu yang benar:',
          '1. Membaca basmalah & membasuh kedua telapak tangan hingga pergelangan.',
          '2. Berkumur-kumur membersihkan sisa makanan (3x).',
          '3. Membersihkan lubang hidung (istinsyaq) (3x).',
          '4. Membasuh seluruh wajah disertai niat wudu (3x).',
          '5. Membasuh kedua tangan hingga siku, mendahulukan yang kanan (3x).',
          '6. Mengusap sebagian kepala/rambut (3x).',
          '7. Membasuh kedua telinga bagian luar dan dalam (3x).',
          '8. Membasuh kedua kaki hingga mata kaki, mendahulukan kaki kanan (3x).',
          '9. Tertib (berurutan) dan membaca doa setelah wudu.'
        ],
        contohNyata: 'Di tempat wudu masjid, Latifah membuka kran air secukupnya (hemat air) lalu membasuh wajahnya dengan lembut dan khusyuk.',
        ilustrasi: 'Panduan kartu visual langkah-langkah wudu anak muslim ceria 1 sampai 8.',
        pertanyaanBerpikir: [
          'Bolehkah kita membasuh kaki sebelum membasuh muka saat wudu? Mengapa?',
          'Mengapa kita dilarang membuang-buang air berlebihan saat berwudu?'
        ],
        refleksiDiri: 'Aku berwudu dengan tertib dan tenang tanpa terburu-buru.'
      },
      {
        id: 'A1-FIK-04-SUB-4',
        judul: '4. Mengenal 5 Waktu Salat Fardu',
        tujuan: 'Siswa dapat menyebutkan nama-nama salat lima waktu dan jumlah rakaatnya.',
        materiInti: [
          'Salat fardu wajib dikerjakan lima kali dalam sehari semalam:',
          '1. Subuh (2 rakaat) di waktu fajar sebelum terbit matahari.',
          '2. Zuhur (4 rakaat) di waktu siang saat matahari tergelincir.',
          '3. Asar (4 rakaat) di waktu sore menjelang petang.',
          '4. Magrib (3 rakaat) di waktu petang setelah matahari terbenam.',
          '5. Isya (4 rakaat) di waktu malam hari.',
          'Total rakaat salat fardu dalam sehari adalah 17 rakaat.'
        ],
        contohNyata: 'Saat azan Magrib berkumandang, Arkan segera menghentikan permainan sepedanya, berwudu, dan berangkat ke masjid bersama ayahnya.',
        ilustrasi: 'Jam dinding ceria bergambar waktu salat Subuh, Zuhur, Asar, Magrib, dan Isya.',
        pertanyaanBerpikir: [
          'Salat fardu apa yang jumlah rakaatnya paling sedikit?',
          'Berapa jumlah rakaat salat Zuhur dan Asar digabungkan?'
        ],
        refleksiDiri: 'Aku gembira menyambut panggilan azan dan salat tepat waktu.'
      },
      {
        id: 'A1-FIK-04-SUB-5',
        judul: '5. Gerakan Dasar Salat dengan Tertib',
        tujuan: 'Siswa dapat mempraktikkan gerakan salat dasar: Takbiratul ihram, Ruku, I\'tidal, Sujud, Duduk di antara dua sujud, dan Salam.',
        materiInti: [
          '1. Berdiri tegak menghadap kiblat.',
          '2. Takbiratul Ihram: Mengangkat kedua tangan sejajar telinga/bahu sambil mengucap Allāhu Akbar.',
          '3. Bersedekap: Meletakkan tangan kanan di atas tangan kiri di dada.',
          '4. Ruku: Membungkukkan badan dengan punggung rata dan kedua tangan memegang lutut.',
          '5. I\'tidal: Bangkit dari ruku dengan berdiri tegak (Sami\'allāhu liman ḥamidah).',
          '6. Sujud: Meletakkan kening, hidung, kedua telapak tangan, lutut, dan ujung jari kaki ke lantai.',
          '7. Duduk di antara dua sujud dan duduk tahiyyat.',
          '8. Salam: Menoleh ke kanan lalu ke kiri.'
        ],
        contohNyata: 'Di musala sekolah, anak-anak kelas 1 berbaris rapi dalam saf, bergerak serempak mengikuti instruksi guru pembina dengan tenang.',
        ilustrasi: 'Anak muslim memperagakan posisi sujud yang benar dengan tujuh anggota sujud menempel sempurna di sajadah.',
        pertanyaanBerpikir: [
          'Ke arah manakah kiblat salat umat Islam di seluruh dunia?',
          'Bagaimana posisi punggung kita saat melakukan gerakan ruku?'
        ],
        refleksiDiri: 'Salat membuat hatiku tenang, damai, dan terjaga dari perbuatan buruk.'
      }
    ],
    kosakataPenting: [
      { kata: 'Taharah', arti: 'Bersuci dari hadas dan najis agar ibadah menjadi sah.' },
      { kata: 'Wudu', arti: 'Menyucikan anggota tubuh tertentu menggunakan air bersih sebelum salat.' },
      { kata: 'Ruku', arti: 'Membungkukkan badan hingga punggung rata pada saat salat.' },
      { kata: 'Sujud', arti: 'Menempelkan kening, telapak tangan, lutut, dan jari kaki ke lantai sebagai wujud ketundukan kepada Allah.' }
    ],
    konsepInti: 'Ibadah salat adalah komunikasi terindah seorang hamba dengan Allah Swt. Kebersihan fisik melalui wudu menjadi pintu gerbang kesucian batin dalam menegakkan tiang agama.',
    ceritaPembuka: {
      judul: 'Panggilan Merdu Menjelang Senja',
      narasi: 'Langit sore berubah warna menjadi jingga keemasan. Dari menara masjid desa, suara azan Magrib berkumandang merdu menghanyutkan jiwa: "Allāhu Akbar, Allāhu Akbar..." Hamzah segera mematikan keran air setelah berwudu dengan tertib. Ia mengenakan sarung bersih bermotif kotak-kotak dan peci putih kesayangannya. Bersama kakek, ia berjalan kaki menuju masjid sambil melantunkan doa. Berdiri di saf terdepan, Hamzah merasakan ketenteraman yang luar biasa saat keningnya menyentuh sajadah dalam sujud yang khusyuk.',
      hikmah: 'Menjaga salat berjamaah di masjid menumbuhkan disiplin waktu, kerukunan bermasyarakat, dan kedekatan kepada Allah.'
    },
    aktivitasInteraktif: [
      {
        id: 'ACT-A1-10',
        level: 2,
        type: 'susun_urutan',
        title: 'Susun Urutan Wudu yang Runtut',
        instructions: 'Urutkan langkah wudu di bawah ini dari langkah pertama hingga langkah terakhir!',
        items: [
          { id: 'w-1', label: '1. Membasuh telapak tangan & berkumur', correctOrder: 1 },
          { id: 'w-2', label: '2. Membasuh hidung & membasuh muka', correctOrder: 2 },
          { id: 'w-3', label: '3. Membasuh kedua tangan sampai siku', correctOrder: 3 },
          { id: 'w-4', label: '4. Mengusap sebagian kepala & membasuh telinga', correctOrder: 4 },
          { id: 'w-5', label: '5. Membasuh kedua kaki sampai mata kaki', correctOrder: 5 }
        ],
        xpReward: 15
      },
      {
        id: 'ACT-A1-11',
        level: 2,
        type: 'susun_urutan',
        title: 'Susun Urutan Gerakan Salat',
        instructions: 'Urutkan gerakan salat berikut ini secara tertib!',
        items: [
          { id: 's-1', label: '1. Takbiratul Ihram & Bersedekap', correctOrder: 1 },
          { id: 's-2', label: '2. Ruku dengan thuma\'ninah', correctOrder: 2 },
          { id: 's-3', label: '3. I\'tidal berdiri tegak', correctOrder: 3 },
          { id: 's-4', label: '4. Sujud di atas sajadah', correctOrder: 4 },
          { id: 's-5', label: '5. Duduk Tahiyyat & Salam', correctOrder: 5 }
        ],
        xpReward: 15
      },
      {
        id: 'ACT-A1-12',
        level: 1,
        type: 'tebak_gambar',
        title: 'Pasangkan Salat Fardu dengan Jumlah Rakaatnya',
        instructions: 'Pasangkan nama salat dengan jumlah rakaat yang tepat!',
        items: [
          { id: 'sf-1', label: 'Salat Subuh', matchWith: '2 Rakaat' },
          { id: 'sf-2', label: 'Salat Magrib', matchWith: '3 Rakaat' },
          { id: 'sf-3', label: 'Salat Isya, Zuhur, Asar', matchWith: '4 Rakaat' }
        ],
        xpReward: 10
      }
    ],
    soal: [
      {
        idSoal: 'Q-A1-20',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-FIK-04',
        elemen: 'Fikih',
        tingkatKesulitan: 'Dasar',
        pertanyaan: 'Rukun Islam yang kedua adalah mendirikan...',
        opsi: ['A. Zakat', 'B. Salat', 'C. Puasa'],
        jawabanBenar: 'B. Salat',
        pembahasan: 'Rukun Islam kedua adalah mendirikan salat lima waktu.',
        indikator: 'Menyebutkan rukun Islam kedua',
        tp: 'TP-A1.10',
        jenisSoal: 'pilihan_ganda'
      },
      {
        idSoal: 'Q-A1-21',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-FIK-04',
        elemen: 'Fikih',
        tingkatKesulitan: 'Dasar',
        pertanyaan: 'Saat berwudu, kita membasuh tangan sampai ke...',
        opsi: ['A. Pergelangan saja', 'B. Siku', 'C. Pundak'],
        jawabanBenar: 'B. Siku',
        pembahasan: 'Batas membasuh tangan dalam wudu adalah sampai kedua siku tangan.',
        indikator: 'Mengetahui batas membasuh tangan saat wudu',
        tp: 'TP-A1.11',
        jenisSoal: 'pilihan_ganda'
      },
      {
        idSoal: 'Q-A1-22',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-FIK-04',
        elemen: 'Fikih',
        tingkatKesulitan: 'Reguler',
        pertanyaan: 'Salat fardu yang dikerjakan pada pagi hari sebelum terbit fajar matahari adalah...',
        opsi: ['A. Subuh', 'B. Zuhur', 'C. Magrib'],
        jawabanBenar: 'A. Subuh',
        pembahasan: 'Salat Subuh berjumlah 2 rakaat dikerjakan pada pagi hari.',
        indikator: 'Menentukan waktu pelaksanaan salat Subuh',
        tp: 'TP-A1.12',
        jenisSoal: 'pilihan_ganda'
      },
      {
        idSoal: 'Q-A1-23',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-FIK-04',
        elemen: 'Fikih',
        tingkatKesulitan: 'Dasar',
        pertanyaan: 'Menoleh ke kanan dan ke kiri di akhir salat disebut gerakan salam.',
        opsi: ['Benar', 'Salah'],
        jawabanBenar: 'Benar',
        pembahasan: 'Benar. Gerakan salam menjadi penutup ibadah salat.',
        indikator: 'Mengidentifikasi gerakan penutup salat',
        tp: 'TP-A1.12',
        jenisSoal: 'benar_salah'
      },
      {
        idSoal: 'Q-A1-24',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-FIK-04',
        elemen: 'Fikih',
        tingkatKesulitan: 'Tantangan',
        pertanyaan: 'HOTS: Mengapa wudu harus dilakukan secara tertib (berurutan) dan tidak boleh melompat-lompat?',
        opsi: [
          'A. Supaya cepat selesai dan bisa main lagi',
          'B. Karena tertib adalah salah satu rukun wudu yang diajarkan langsung oleh Rasulullah saw.',
          'C. Supaya baju tidak basah'
        ],
        jawabanBenar: 'B. Karena tertib adalah salah satu rukun wudu yang diajarkan langsung oleh Rasulullah saw.',
        pembahasan: 'Tertib merupakan rukun wudu. Jika langkah-langkah wudu dibolak-balik tanpa aturan, maka wudu tersebut tidak sah menurut syariat.',
        indikator: 'Menganalisis urgensi rukun tertib dalam wudu',
        tp: 'TP-A1.11',
        jenisSoal: 'hots'
      }
    ],
    remedial: {
      judul: 'Yuk Belajar Lagi! Urutan Wudu & Salat Ceria',
      materiRingkas: [
        '1. Wudu membersihkan diri dari hadas kecil sebelum salat.',
        '2. Basuh muka, tangan sampai siku, usap kepala, lalu basuh kaki sampai mata kaki.',
        '3. Salat 5 waktu: Subuh (2), Zuhur (4), Asar (4), Magrib (3), Isya (4).',
        '4. Gerakan salat diakhiri dengan salam ke kanan dan kiri.'
      ],
      contohSederhana: 'Ingat urutannya: Cuci tangan -> Kumur -> Hidung -> Muka -> Tangan -> Kepala -> Telinga -> Kaki.',
      kuisUlang: [
        {
          idSoal: 'REM-A1-05',
          kelas: 1,
          fase: 'A',
          unitId: 'A1-FIK-04',
          elemen: 'Fikih',
          tingkatKesulitan: 'Dasar',
          pertanyaan: 'Berapa rakaat salat Magrib?',
          opsi: ['A. 2 rakaat', 'B. 3 rakaat', 'C. 4 rakaat'],
          jawabanBenar: 'B. 3 rakaat',
          pembahasan: 'Salat Magrib berjumlah 3 rakaat.',
          indikator: 'Menyebutkan rakaat salat Magrib',
          tp: 'TP-A1.12',
          jenisSoal: 'pilihan_ganda'
        }
      ]
    },
    pengayaan: {
      judul: 'Praktik Muazin & Imam Cilik',
      studiKasusKompleks: 'Rancanglah jadwal salat harian bersama keluargamu di rumah, beri tanda bintang setiap kali kamu berhasil salat berjamaah tepat waktu!',
      proyekMini: 'Membuat "Jam Dinding Waktu Salat" dari kardus bekas dan jarum putar warna-warni.',
      pertanyaanAnalitis: [
        'Bagaimana membiasakan salat lima waktu sejak kelas 1 SD dapat melatih kita menjadi anak yang disiplin dan tepat waktu?'
      ]
    },
    lkpd: {
      unitId: 'A1-FIK-04',
      judul: 'LKPD Digital: Simulasi Wudu & Gerakan Salat Mandiri',
      tujuan: [
        'Siswa dapat mempraktikkan gerakan wudu secara berurutan dan tertib.',
        'Siswa dapat mengenali nama salat fardu dan jumlah rakaatnya.'
      ],
      petunjuk: [
        'Ikuti instruksi simulasi wudu bertahap.',
        'Tarik garis penghubung antara nama salat dan jumlah rakaatnya.'
      ],
      mariMengamati: {
        stimulus: 'Perhatikan gambar anak yang sedang melakukan gerakan ruku dengan punggung lurus mendatar.',
        gambarHint: 'Anak membungkuk 90 derajat, tangan memegang lutut, pandangan mata ke tempat sujud.',
        pertanyaan: 'Gerakan apakah yang sedang dipraktikkan anak pada gambar tersebut?'
      },
      mariBerpikir: [
        'Mengapa kita tidak boleh berbicara bercanda saat sedang berwudu?',
        'Berapa jumlah rakaat salat fardu yang kita kerjakan dalam sehari semalam?'
      ],
      mariBerdiskusi: 'Bercerita bersama teman: Pernahkah kamu ikut salat berjamaah di masjid? Bagaimana rasanya salat di saf bersama jamaah lain?',
      mariMencoba: 'Peragakan bersama gerakan takbiratul ihram, ruku, dan sujud di depan kelas!',
      mariMenyimpulkan: 'Salat adalah tiang ... yang wajib didirikan oleh setiap muslim.',
      refleksi: 'Apakah aku sudah salat lima waktu dengan tertib kemarin?'
    },
    refleksiSiswa: [
      {
        pertanyaan: 'Bagaimana perasaanmu saat selesai berwudu dan sujud menghadap Allah?',
        pilihanEmosi: ['Hati Sangat Tenang 🕊️', 'Merasa Bersih & Segar 💧', 'Gembira Beribadah 🕌']
      }
    ],
    refleksiGuru: [
      'Apakah seluruh siswa sudah mampu membedakan anggota wudu yang wajib dan sunnah secara sederhana?',
      'Apakah gerakan sujud siswa sudah menempelkan kening ke lantai secara benar?'
    ],
    sumber: [
      'Keputusan Kepala BKPDM Nomor 020 Tahun 2026',
      'Panduan Praktis Ibadah Fikih SD Kemendikdasmen RI'
    ],
    verifikasi: true
  },

  // =========================================================================
  // KELAS 1: UNIT 5 - KISAH TELADAN NABI MUHAMMAD SAW. SANG AL-AMIN
  // =========================================================================
  {
    kodeUnit: 'A1-SEJ-05',
    namaUnit: 'Kisah Teladan Nabi Muhammad saw. Sang Al-Amin',
    fase: 'A',
    kelas: 1,
    elemen: 'Sejarah Peradaban Islam',
    semester: 2,
    cpResmi: 'Peserta didik mampu menceritakan secara sederhana kisah beberapa nabi dan rasul serta meneladani sifat-sifat mulianya.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-A1.13: Menceritakan secara runtut kisah masa kecil Nabi Muhammad saw.',
      'TP-A1.14: Meneladani sifat jujur (Al-Amin) dan santun Nabi Muhammad saw.',
      'TP-A1.15: Menceritakan kembali kisah Nabi Adam a.s. sebagai manusia pertama yang taat.'
    ],
    materiPengembangan: [
      {
        id: 'A1-SEJ-05-SUB-1',
        judul: '1. Kelahiran Nabi Muhammad saw. Pembawa Rahmat',
        tujuan: 'Siswa dapat menceritakan peristiwa kelahiran Nabi Muhammad saw. di Kota Makkah pada Tahun Gajah.',
        materiInti: [
          'Nabi Muhammad saw. lahir pada hari Senin, 12 Rabiul Awal di Kota Makkah pada Tahun Gajah.',
          'Ayah beliau bernama Abdullah, dan ibu beliau bernama Siti Aminah.',
          'Ayahanda beliau wafat ketika Nabi masih berada di dalam kandungan ibu, sehingga beliau lahir sebagai anak yatim yang diberkahi Allah.'
        ],
        contohNyata: 'Ketika mendengar kisah kelahiran Nabi, anak-anak melantunkan selawat nabi bersama-sama dengan hati yang penuh rindu kepada Rasulullah.',
        ilustrasi: 'Bintang bersinar terang di atas langit Kota Makkah pada malam hari yang damai.',
        pertanyaanBerpikir: [
          'Di kota manakah Nabi Muhammad saw. dilahirkan?',
          'Siapakah nama ayah dan ibu Nabi Muhammad saw.?'
        ],
        refleksiDiri: 'Aku mencintai Nabi Muhammad saw. dan gemar berselawat untuk beliau.'
      },
      {
        id: 'A1-SEJ-05-SUB-2',
        judul: '2. Masa Kecil Rasulullah: Gembala yang Mandiri',
        tujuan: 'Siswa dapat meneladani kemandirian dan kerja keras Nabi Muhammad saw. sejak usia kanak-kanak.',
        materiInti: [
          'Nabi diasuh oleh Halimah As-Sa\'diyah di perkampungan Bani Sa\'ad yang berudara sejuk.',
          'Sejak kecil, Nabi Muhammad saw. sudah mandiri dan rajin membantu menggembalakan kambing.',
          'Menggembala kambing melatih beliau menjadi sosok yang sabar, penyayang binatang, dan pemberani.'
        ],
        contohNyata: 'Rizki terinspirasi oleh masa kecil Nabi. Ia rajin merapikan tempat tidur dan membantu menyiram tanaman di kebun tanpa harus disuruh berkali-kali.',
        ilustrasi: 'Anak kecil berbudi luhur menggembalakan kambing-kambing putih di padang rumput hijau yang permai.',
        pertanyaanBerpikir: [
          'Hewan apakah yang digembalakan Nabi Muhammad saw. di masa kecilnya?',
          'Karakter baik apa yang diperoleh dari kegiatan menggembala kambing?'
        ],
        refleksiDiri: 'Aku ingin menjadi anak yang mandiri dan tidak selalu merepotkan orang tua.'
      },
      {
        id: 'A1-SEJ-05-SUB-3',
        judul: '3. Gelar Al-Amin: Kejujuran yang Terpercaya',
        tujuan: 'Siswa dapat menjelaskan arti gelar Al-Amin dan meneladaninya dalam pergaulan sehari-hari.',
        materiInti: [
          'Penduduk Makkah memberi gelar Al-Amin kepada Nabi Muhammad saw. karena beliau terkenal sangat jujur dan tidak pernah ingkar janji.',
          'Ketika berdagang mendampingi pamannya Abu Thalib, beliau selalu berkata jujur mengenai kondisi barang dagangan.',
          'Semua orang merasa aman dan percaya menitipkan barang berharga kepada Nabi.'
        ],
        contohNyata: 'Saat menemukan uang sepuluh ribu rupiah jatuh di tangga sekolah, Dinda langsung menyerahkannya ke ruang guru piket untuk diumumkan pemiliknya.',
        ilustrasi: 'Pedagang muda tersenyum jujur menjelaskan barang dagangannya kepada pembeli di pasar yang ramai.',
        pertanyaanBerpikir: [
          'Mengapa masyarakat Makkah sangat memercayai Nabi Muhammad saw.?',
          'Bagaimana caramu menerapkan sifat Al-Amin di sekolah?'
        ],
        refleksiDiri: 'Aku pantang berbohong demi meneladani kejujuran Rasulullah sang Al-Amin.'
      },
      {
        id: 'A1-SEJ-05-SUB-4',
        judul: '4. Kasih Sayang Nabi kepada Anak-Anak',
        tujuan: 'Siswa memahami bahwa Nabi Muhammad saw. sangat lembut, hangat, dan mencintai anak-anak.',
        materiInti: [
          'Rasulullah saw. selalu menyapa anak-anak dengan wajah berseri-seri, mengusap kepala mereka, dan memangku cucunya Hasan dan Husain.',
          'Beliau melarang bersikap kasar atau memarahi anak tanpa alasan yang benar.',
          'Nabi bersabda: "Bukan termasuk golongan kami orang yang tidak menyayangi yang muda dan tidak menghormati yang tua."'
        ],
        contohNyata: 'Saat salat, Rasulullah memanjangkan sujudnya karena cucunya bermain di punggung beliau, hingga sang cucu turun dengan rasa gembira.',
        ilustrasi: 'Rasulullah (disimbolkan cahaya kehangatan) sedang tersenyum ramah menyapa anak-anak di Madinah.',
        pertanyaanBerpikir: [
          'Bagaimana sikap Rasulullah saw. saat bertemu dengan anak-anak kecil?',
          'Bagaimana seharusnya sikap kita kepada adik kelas atau adik di rumah?'
        ],
        refleksiDiri: 'Aku menyayangi adik-adikku dan selalu bertutur kata lembut kepada mereka.'
      },
      {
        id: 'A1-SEJ-05-SUB-5',
        judul: '5. Kisah Nabi Adam a.s. Manusia Pertama',
        tujuan: 'Siswa dapat menceritakan ketaatan Nabi Adam a.s. dan pentingnya segera bertaubat ketika berbuat salah.',
        materiInti: [
          'Nabi Adam a.s. adalah manusia pertama yang diciptakan Allah dari tanah dan menjadi nabi yang pertama.',
          'Nabi Adam a.s. diciptakan sebagai khalifah di bumi untuk memimpin dengan adil dan taat kepada Allah.',
          'Ketika berbuat kekhilafan di surga, Nabi Adam dan Hawa segera memohon ampun dengan sungguh-sungguh kepada Allah.'
        ],
        contohNyata: 'Saat berbuat keliru menyenggol buku teman, Doni segera meminta maaf dan berdoa memohon ampun, mencontoh taubat Nabi Adam a.s.',
        ilustrasi: 'Taman surga yang indah dengan sungai mengalir jernih dan pohon-pohon rindang.',
        pertanyaanBerpikir: [
          'Siapakah manusia pertama yang diciptakan Allah Swt.?',
          'Apa yang dilakukan Nabi Adam a.s. saat menyadari kekhilafannya?'
        ],
        refleksiDiri: 'Jika aku berbuat salah, aku akan segera meminta maaf dan memohon ampunan kepada Allah.'
      }
    ],
    kosakataPenting: [
      { kata: 'Tahun Gajah', arti: 'Tahun kelahiran Nabi Muhammad saw. ketika pasukan bergajah Abrahah dihancurkan burung Ababil.' },
      { kata: 'Al-Amin', arti: 'Orang yang terpercaya, jujur, dan tidak pernah berkhianat.' },
      { kata: 'Yatim', arti: 'Anak yang ayahnya telah wafat sebelum ia mencapai usia balig.' },
      { kata: 'Khalifah', arti: 'Pemimpin atau pengelola bumi yang bertugas menjaga kedamaian dan kelestarian ciptaan Allah.' }
    ],
    konsepInti: 'Nabi Muhammad saw. adalah suri teladan terbaik bagi seluruh umat manusia. Sejak kecil beliau mandiri, gemar bekerja keras, penyayang, dan menyandang gelar Al-Amin karena kejujuran mutlaknya.',
    ceritaPembuka: {
      judul: 'Mata Air Zamzam & Bayi Mulia',
      narasi: 'Di lembah tandus Makkah yang dikelilingi bukit cadas, lahirlah seorang bayi suci yang telah dinanti-nanti oleh langit dan bumi. Kakeknya, Abdul Muthalib, membawanya ke dalam Ka\'bah lalu menamainya "Muhammad", yang berarti orang yang terpuji. Suatu nama yang belum pernah digunakan oleh kaum Quraisy sebelumnya. Bayi mulia itu tumbuh dengan bimbingan ilahi menjadi teladan kebaikan yang tidak pernah menyakiti hati orang lain, selalu menyapa fakir miskin, dan menyebarkan kasih sayang kepada segenap semesta alam.',
      hikmah: 'Meneladani Nabi Muhammad saw. dimulai dari hal sederhana: selalu berkata jujur dan menyayangi sesama makhluk hidup.'
    },
    aktivitasInteraktif: [
      {
        id: 'ACT-A1-13',
        level: 1,
        type: 'tebak_gambar',
        title: 'Tebak Fakta Masa Kecil Nabi Muhammad saw.',
        instructions: 'Pilihlah jawaban yang benar tentang kisah masa kecil Rasulullah saw.!',
        items: [
          { id: 'f-1', label: 'Nama Ibu Nabi Muhammad saw.', matchWith: 'Siti Aminah' },
          { id: 'f-2', label: 'Nama Ayah Nabi Muhammad saw.', matchWith: 'Abdullah' },
          { id: 'f-3', label: 'Nama Kakek Nabi Muhammad saw.', matchWith: 'Abdul Muthalib' },
          { id: 'f-4', label: 'Gelar kejujuran Nabi saw.', matchWith: 'Al-Amin' }
        ],
        xpReward: 10
      },
      {
        id: 'ACT-A1-14',
        level: 3,
        type: 'studi_kasus',
        title: 'Meneladani Karakter Al-Amin di Sekolah',
        instructions: 'Pilihlah tindakan terbaik yang mencerminkan sifat Al-Amin!',
        scenario: 'Kamu dititipi uang kas oleh guru kelas untuk disimpan di meja bendahara. Saat istirahat, kamu ingin membeli es krim kesukaanmu namun uangmu kurang.',
        options: [
          { id: 'cs-1', text: 'Memakai uang kas terlebih dahulu lalu berniat menggantinya besok.', isBestChoice: false, feedback: 'Keliru. Menggunakan uang titipan tanpa izin adalah bentuk ketidakjujuran.' },
          { id: 'cs-2', text: 'Menjaga uang kas dengan aman, menyerahkannya utuh kepada guru, dan menahan diri tidak membeli es krim.', isBestChoice: true, feedback: 'MasyaAllah! Kamu adalah anak yang amanah dan pantas menyandang teladan Al-Amin.' },
          { id: 'cs-3', text: 'Menghabiskan uang kas dan beralasan uangnya jatuh di selokan.', isBestChoice: false, feedback: 'Sangat berdosa! Berbohong dan khianat sangat dibenci Rasulullah.' }
        ],
        xpReward: 20
      }
    ],
    soal: [
      {
        idSoal: 'Q-A1-25',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-SEJ-05',
        elemen: 'Sejarah Peradaban Islam',
        tingkatKesulitan: 'Dasar',
        pertanyaan: 'Nabi Muhammad saw. dilahirkan di kota...',
        opsi: ['A. Madinah', 'B. Makkah', 'C. Mesir'],
        jawabanBenar: 'B. Makkah',
        pembahasan: 'Nabi Muhammad saw. lahir di Kota Makkah pada 12 Rabiul Awal Tahun Gajah.',
        indikator: 'Menyebutkan tempat lahir Nabi Muhammad saw.',
        tp: 'TP-A1.13',
        jenisSoal: 'pilihan_ganda'
      },
      {
        idSoal: 'Q-A1-26',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-SEJ-05',
        elemen: 'Sejarah Peradaban Islam',
        tingkatKesulitan: 'Dasar',
        pertanyaan: 'Nama ibu kandung Nabi Muhammad saw. adalah...',
        opsi: ['A. Siti Khadijah', 'B. Siti Aminah', 'C. Siti Fatimah'],
        jawabanBenar: 'B. Siti Aminah',
        pembahasan: 'Ibu kandung Nabi Muhammad saw. bernama Siti Aminah binti Wahb.',
        indikator: 'Menyebutkan nama ibu kandung Rasulullah saw.',
        tp: 'TP-A1.13',
        jenisSoal: 'pilihan_ganda'
      },
      {
        idSoal: 'Q-A1-27',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-SEJ-05',
        elemen: 'Sejarah Peradaban Islam',
        tingkatKesulitan: 'Reguler',
        pertanyaan: 'Pada masa kecilnya, Nabi Muhammad saw. mandiri dengan membantu...',
        opsi: ['A. Berburu singa', 'B. Menggembalakan kambing', 'C. Membuat kapal laut'],
        jawabanBenar: 'B. Menggembalakan kambing',
        pembahasan: 'Nabi Muhammad saw. menggembalakan kambing milik kaum Quraisy di Makkah dan Bani Sa\'ad.',
        indikator: 'Menjelaskan kegiatan kemandirian masa kecil Rasulullah',
        tp: 'TP-A1.14',
        jenisSoal: 'pilihan_ganda'
      },
      {
        idSoal: 'Q-A1-28',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-SEJ-05',
        elemen: 'Sejarah Peradaban Islam',
        tingkatKesulitan: 'Dasar',
        pertanyaan: 'Nabi Adam a.s. adalah manusia pertama yang diciptakan oleh Allah Swt.',
        opsi: ['Benar', 'Salah'],
        jawabanBenar: 'Benar',
        pembahasan: 'Benar. Nabi Adam a.s. adalah manusia sekaligus nabi pertama di muka bumi.',
        indikator: 'Mengidentifikasi status Nabi Adam a.s. sebagai manusia pertama',
        tp: 'TP-A1.15',
        jenisSoal: 'benar_salah'
      },
      {
        idSoal: 'Q-A1-29',
        kelas: 1,
        fase: 'A',
        unitId: 'A1-SEJ-05',
        elemen: 'Sejarah Peradaban Islam',
        tingkatKesulitan: 'Tantangan',
        pertanyaan: 'HOTS: Mengapa sifat jujur Nabi Muhammad saw. membuat beliau dipercaya oleh kawan maupun lawan di Makkah?',
        opsi: [
          'A. Karena beliau selalu membagikan uang emas setiap hari',
          'B. Karena ucapan beliau selalu terbukti benar dan tidak pernah mengkhianati kepercayaan siapa pun',
          'C. Karena beliau memiliki senjata paling canggih'
        ],
        jawabanBenar: 'B. Karena ucapan beliau selalu terbukti benar dan tidak pernah mengkhianati kepercayaan siapa pun',
        pembahasan: 'Integritas dan kejujuran mutlak Nabi Muhammad saw. melahirkan kepercayaan tinggi (tsiqah) di kalangan masyarakat tanpa memandang status.',
        indikator: 'Menganalisis dampak kejujuran dalam memenangkan kepercayaan sosial',
        tp: 'TP-A1.14',
        jenisSoal: 'hots'
      }
    ],
    remedial: {
      judul: 'Yuk Belajar Lagi! Mengenal Kisah Teladan Rasulullah',
      materiRingkas: [
        '1. Nabi Muhammad saw. lahir di Makkah pada Tahun Gajah.',
        '2. Ayah beliau bernama Abdullah, Ibu beliau bernama Siti Aminah.',
        '3. Beliau bergelar Al-Amin yang artinya dapat dipercaya.',
        '4. Nabi Muhammad saw. sangat penyayang kepada anak-anak dan fakir miskin.'
      ],
      contohSederhana: 'Katakan selalu yang sebenarnya saat ditanya guru atau orang tua, agar kamu menjadi anak Al-Amin.',
      kuisUlang: [
        {
          idSoal: 'REM-A1-06',
          kelas: 1,
          fase: 'A',
          unitId: 'A1-SEJ-05',
          elemen: 'Sejarah Peradaban Islam',
          tingkatKesulitan: 'Dasar',
          pertanyaan: 'Gelar Al-Amin yang disandang Nabi Muhammad saw. berarti...',
          opsi: ['A. Orang yang dapat dipercaya', 'B. Orang yang perkasa', 'C. Orang yang pandai berenang'],
          jawabanBenar: 'A. Orang yang dapat dipercaya',
          pembahasan: 'Al-Amin artinya orang yang sangat jujur dan terpercaya.',
          indikator: 'Menjelaskan arti Al-Amin',
          tp: 'TP-A1.14',
          jenisSoal: 'pilihan_ganda'
        }
      ]
    },
    pengayaan: {
      judul: 'Kisah Sahabat Cilik Pecinta Nabi',
      studiKasusKompleks: 'Tuliskan satu perbuatan jujur dan amanah yang telah kamu lakukan di rumah atau di sekolah minggu ini!',
      proyekMini: 'Membuat "Pohon Silsilah Keluarga Nabi Muhammad saw." dengan karton manila dan spidol warna.',
      pertanyaanAnalitis: [
        'Bagaimana sikap sabar Nabi Muhammad saw. saat menggembalakan kambing dapat kita terapkan saat menghadapi tugas sekolah yang sulit?'
      ]
    },
    lkpd: {
      unitId: 'A1-SEJ-05',
      judul: 'LKPD Digital: Meneladani Kemuliaan Akhlak Sang Al-Amin',
      tujuan: [
        'Siswa dapat menceritakan peristiwa penting masa kecil Nabi Muhammad saw.',
        'Siswa dapat menunjukkan contoh perilaku jujur meneladani sifat Al-Amin.'
      ],
      petunjuk: [
        'Bacalah cerita bergambar dengan tertib.',
        'Isi kotak nama keluarga Nabi dengan benar.'
      ],
      mariMengamati: {
        stimulus: 'Perhatikan gambar anak yang menemukan dompet di jalan dan mengembalikannya kepada pemiliknya dengan tersenyum.',
        gambarHint: 'Anak menyerahkan dompet kulit kepada bapak tua yang sedang mencari-cari di tepi jalan.',
        pertanyaan: 'Sifat Nabi Muhammad saw. manakah yang ditiru oleh anak tersebut?'
      },
      mariBerpikir: [
        'Siapakah yang menyusui Nabi Muhammad saw. saat masih bayi di perkampungan Bani Sa\'ad?',
        'Mengapa kita harus bangga mencontoh akhlak Nabi Muhammad saw.?'
      ],
      mariBerdiskusi: 'Bercerita bersama teman: Pernahkah kamu merasa tergoda untuk berbohong tetapi akhirnya memilih jujur? Bagaimana perasaanmu?',
      mariMencoba: 'Lantunkan selawat nabi bersama-sama dengan nada yang merdu dan penuh penghayatan!',
      mariMenyimpulkan: 'Nabi Muhammad saw. adalah teladan hidup kita karena memiliki sifat ... yang agung.',
      refleksi: 'Apakah aku sudah berselawat untuk Nabi Muhammad saw. hari ini?'
    },
    refleksiSiswa: [
      {
        pertanyaan: 'Bagaimana perasaanmu setelah mendengar kisah keteladanan Nabi Muhammad saw.?',
        pilihanEmosi: ['Makin Cinta Rasulullah 💚', 'Ingin Selalu Jujur 🛡️', 'Hati Berbunga-Bunga 🌸']
      }
    ],
    refleksiGuru: [
      'Apakah siswa dapat menangkap pesan moral kejujuran dari kisah masa kecil Nabi?',
      'Apakah metode storytelling interaktif berhasil membangkitkan empati siswa kelas 1?'
    ],
    sumber: [
      'Keputusan Kepala BKPDM Nomor 020 Tahun 2026',
      'Sirah Nabawiyah Standar Pendidikan Dasar Kemendikdasmen RI'
    ],
    verifikasi: true
  }
];
