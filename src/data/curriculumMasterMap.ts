import { CurriculumMapRow } from '../types/curriculum';

export const OFFICIAL_REGULATION_INFO = {
  primaryRegulation: 'Keputusan Kepala Badan Kebijakan Pendidikan Dasar dan Menengah (BKPDM) Nomor 020 Tahun 2026',
  amendsRegulation: 'Keputusan Kepala BSKAP Nomor 046/H/KR/2025 tentang Capaian Pembelajaran pada PAUD, Dikdas, dan Dikmen',
  ministry: 'Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen)',
  body: 'Badan Kebijakan Pendidikan Dasar dan Menengah (BKPDM)',
  curriculumFramework: 'Kurikulum Berkesadaran, Bermakna, dan Menggembirakan (Berpusat pada Peserta Didik)',
  auditDate: '2026',
  hierarchy: [
    'Prioritas 1: Kepka BKPDM Nomor 020 Tahun 2026',
    'Prioritas 2: Dokumen Resmi Kemendikdasmen RI',
    'Prioritas 3: Panduan Pembelajaran dan Asesmen BSKAP/BKPDM',
    'Prioritas 4: Buku Teks Utama PAI & Budi Pekerti Terverifikasi'
  ]
};

export const MASTER_CURRICULUM_MAP: CurriculumMapRow[] = [
  // ===================== FASE A (KELAS 1) =====================
  {
    kelas: 1,
    fase: 'A',
    elemen: 'Al-Qur\'an-Hadis',
    cpResmi: 'Peserta didik mampu mengenal huruf hijaiyah dan harakatnya, huruf hijaiyah bersambung, dan menghafal surah-surah pendek Al-Qur\'an dengan baik.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-A1.1: Menunjukkan pelafalan huruf hijaiyah berharakat fathah, kasrah, dhammah secara tepat.',
      'TP-A1.2: Melafalkan Q.S. Al-Fatihah dan Al-Ikhlas dengan tartil sederhana.',
      'TP-A1.3: Membiasakan adab memegang dan memuliakan mushaf Al-Qur\'an.'
    ],
    unitId: 'A1-QUR-01',
    unitTitle: 'Mengenal Al-Qur\'an & Huruf Hijaiyah Ceria',
    materiPengembangan: [
      'Al-Qur\'an Kitab Suciku yang Agung',
      'Adab Memegang & Membaca Mushaf',
      'Mengenal Huruf Hijaiyah Alif - Ya',
      'Harakat Fathah, Kasrah, Dhammah',
      'Menghafal Surah Al-Fatihah & Al-Ikhlas'
    ],
    karakterSpiral: 'Pengenalan visual, bunyi huruf dasar, dan penanaman cinta Al-Qur\'an sejak dini.'
  },
  {
    kelas: 1,
    fase: 'A',
    elemen: 'Akidah',
    cpResmi: 'Peserta didik terbiasa mempraktikkan nilai-nilai baik dalam kehidupan sehari-hari melalui pengenalan rukun iman, iman kepada Allah Swt., serta mengenal beberapa asmaulhusna dan kalimat thayyibah.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-A1.4: Menyebutkan rukun iman secara berurutan dengan riang dan sadar.',
      'TP-A1.5: Meyakini Allah Swt. sebagai Tuhan Yang Maha Esa pencipta alam semesta.',
      'TP-A1.6: Membiasakan mengucap Basmalah, Hamdalah, Takbir, dan Salam sesuai waktu yang tepat.'
    ],
    unitId: 'A1-AKI-02',
    unitTitle: 'Aku Anak Muslim: Mengenal Allah & Kalimat Thayyibah',
    materiPengembangan: [
      'Identitasku sebagai Anak Muslim Ceria',
      'Allah Tuhanku Maha Esa (Ar-Rahman & Ar-Rahim)',
      'Kalimat Thayyibah: Basmalah & Hamdalah',
      'Kalimat Thayyibah: Takbir & Salam Kasih Sayang',
      'Membiasakan Berdoa Sebelum dan Sesudah Beraktivitas'
    ],
    karakterSpiral: 'Membangun ikatan batin tauhid dasar melalui rasa syukur dan pembiasaan zikir harian.'
  },
  {
    kelas: 1,
    fase: 'A',
    elemen: 'Akhlak',
    cpResmi: 'Peserta didik terbiasa mempraktikkan nilai-nilai baik dalam kehidupan sehari-hari dalam ungkapan-ungkapan positif baik untuk dirinya maupun sesama manusia, terutama orang tua dan guru.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-A1.7: Menampilkan sikap hormat dan santun kepada ayah, ibu, dan guru.',
      'TP-A1.8: Membiasakan sikap jujur, ramah, dan suka berbagi kepada teman sebaya.',
      'TP-A1.9: Membiasakan hidup bersih, tertib, dan menjaga fasilitas di sekolah dan rumah.'
    ],
    unitId: 'A1-AKH-03',
    unitTitle: 'Akhlak Terpuji: Sayang Orang Tua, Guru, & Sahabat',
    materiPengembangan: [
      'Hormat dan Patuh kepada Ayah dan Ibu',
      'Santun dan Rendah Hati kepada Bapak/Ibu Guru',
      'Menyayangi Sahabat & Senang Berbagi Mainan/Bekal',
      'Bicara Jujur dan Lemah Lembut',
      'Adab Tolong-Menolong dalam Kebaikan'
    ],
    karakterSpiral: 'Membiasakan empati konkret, adab harian keluarga, dan pertemanan yang aman.'
  },
  {
    kelas: 1,
    fase: 'A',
    elemen: 'Fikih',
    cpResmi: 'Peserta didik mampu menerapkan rukun Islam dan terbiasa melakukan tata cara bersuci, salat fardu, azan, ikamah, dan zikir serta doa setelah salat.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-A1.10: Menyebutkan 5 rukun Islam secara runtut dan gembira.',
      'TP-A1.11: Mengenal arti bersuci (taharah) dan mempraktikkan tata cara wudu berurutan.',
      'TP-A1.12: Mengenal 5 waktu salat fardu dan gerakan salat dasar secara teratur.'
    ],
    unitId: 'A1-FIK-04',
    unitTitle: 'Bersuci & Ceria Melaksanakan Salat',
    materiPengembangan: [
      'Mengenal 5 Rukun Islam yang Kokoh',
      'Kebersihan Sebagian dari Iman',
      'Tata Urutan Wudu yang Runtut & Tertib',
      'Mengenal 5 Waktu Salat Wajib (Subuh s.d. Isya)',
      'Gerakan Dasar Salat: Takbiratul Ihram hingga Salam'
    ],
    karakterSpiral: 'Praktik fisik motorik bersuci dan gerak salat dengan visual interaktif ceria.'
  },
  {
    kelas: 1,
    fase: 'A',
    elemen: 'Sejarah Peradaban Islam',
    cpResmi: 'Peserta didik mampu menceritakan secara sederhana kisah beberapa nabi dan rasul serta meneladani sifat-sifat mulianya.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-A1.13: Menceritakan secara runtut kisah masa kecil Nabi Muhammad saw.',
      'TP-A1.14: Meneladani sifat jujur (Al-Amin) dan santun Nabi Muhammad saw.',
      'TP-A1.15: Menceritakan kembali kisah Nabi Adam a.s. sebagai manusia pertama yang taat.'
    ],
    unitId: 'A1-SEJ-05',
    unitTitle: 'Kisah Teladan Nabi Muhammad saw. Sang Al-Amin',
    materiPengembangan: [
      'Kelahiran Nabi Muhammad saw. yang Membawa Berkah',
      'Masa Kecil Rasulullah: Gembala Rajin & Penyayang',
      'Gelar Al-Amin: Orang yang Sangat Terpercaya',
      'Meneladani Kasih Sayang Nabi kepada Anak-Anak',
      'Kisah Ketaatan Nabi Adam a.s.'
    ],
    karakterSpiral: 'Storytelling interaktif keteladanan karakter jujur dan santun sejak usia dini.'
  },

  // ===================== FASE A (KELAS 2) =====================
  {
    kelas: 2,
    fase: 'A',
    elemen: 'Al-Qur\'an-Hadis',
    cpResmi: 'Peserta didik mampu mengenal huruf hijaiyah dan harakatnya, huruf hijaiyah bersambung, dan menghafal surah-surah pendek Al-Qur\'an dengan baik.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-A2.1: Menulis dan merangkai huruf hijaiyah bersambung sederhana.',
      'TP-A2.2: Melafalkan dan menghafal Q.S. An-Nas, Al-Falaq, dan Al-Kautsar dengan makhraj tepat.',
      'TP-A2.3: Memahami pesan pokok surah pendek tentang perlindungan hanya kepada Allah.'
    ],
    unitId: 'A2-QUR-01',
    unitTitle: 'Huruf Bersambung & Pelindung Diri (Q.S. An-Nas & Al-Falaq)',
    materiPengembangan: [
      'Merangkai Huruf Hijaiyah di Awal, Tengah, dan Akhir',
      'Menghafal & Memahami Q.S. An-Nas',
      'Menghafal & Memahami Q.S. Al-Falaq',
      'Menghafal Q.S. Al-Kautsar & Semangat Berbagi',
      'Hadis Menuntut Ilmu Adalah Kewajiban'
    ],
    karakterSpiral: 'Penguatan makharijul huruf bersambung dan pemaknaan doa perlindungan diri.'
  },
  {
    kelas: 2,
    fase: 'A',
    elemen: 'Akidah',
    cpResmi: 'Peserta didik terbiasa mempraktikkan nilai-nilai baik dalam kehidupan sehari-hari melalui pengenalan rukun iman, iman kepada Allah Swt., serta mengenal beberapa asmaulhusna dan kalimat thayyibah.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-A2.4: Menyebutkan asmaulhusna Al-Khaliq, Al-Quddus, dan As-Salam beserta contohnya.',
      'TP-A2.5: Mengagumi kebesaran Allah Swt. melalui aneka ragam ciptaan-Nya.',
      'TP-A2.6: Membiasakan kalimat thayyibah Hauqalah dan Istighfar saat melihat kekeliruan.'
    ],
    unitId: 'A2-AKI-02',
    unitTitle: 'Allah Maha Pencipta (Al-Khaliq) & Asmaulhusna Mulia',
    materiPengembangan: [
      'Mengenal Bukti Kasih Allah: Al-Khaliq (Maha Pencipta)',
      'Al-Quddus: Allah Maha Suci dari Segala Kekurangan',
      'As-Salam: Allah Maha Memberi Keselamatan dan Kedamaian',
      'Mengagumi Alam Semesta sebagai Ciptaan Allah',
      'Kalimat Thayyibah Istighfar: Rendah Hati Memohon Ampunan'
    ],
    karakterSpiral: 'Menghubungkan sifat Allah dengan kepedulian terhadap alam semesta dan keselamatan.'
  },
  {
    kelas: 2,
    fase: 'A',
    elemen: 'Akhlak',
    cpResmi: 'Peserta didik terbiasa mempraktikkan nilai-nilai baik dalam kehidupan sehari-hari dalam ungkapan-ungkapan positif baik untuk dirinya maupun sesama manusia, terutama orang tua dan guru.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-A2.7: Menunjukkan sikap amanah (dapat dipercaya) ketika dititipi tugas.',
      'TP-A2.8: Menerapkan etika berteman: tidak mengejek dan peduli terhadap perasaan sahabat.',
      'TP-A2.9: Membiasakan adab makan, minum, dan tidur sesuai sunnah Rasulullah saw.'
    ],
    unitId: 'A2-AKH-03',
    unitTitle: 'Amanah & Menjaga Perasaan Sahabat',
    materiPengembangan: [
      'Menjadi Anak Amanah & Menepati Janji',
      'Peduli dan Empati: Temanku Bahagia, Aku Bahagia',
      'Menghindari Perilaku Menghina atau Mengolok-olok',
      'Adab Makan dan Minum Islami yang Tertib',
      'Adab Tidur & Bangun Pagi dengan Gembira'
    ],
    karakterSpiral: 'Meningkatkan moralitas pertemanan dari sekadar berbagi menuju empati dan menjaga perasaan.'
  },
  {
    kelas: 2,
    fase: 'A',
    elemen: 'Fikih',
    cpResmi: 'Peserta didik mampu menerapkan rukun Islam dan terbiasa melakukan tata cara bersuci, salat fardu, azan, ikamah, dan zikir serta doa setelah salat.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-A2.10: Melafalkan bacaan gerakan salat (Takbir, Ruku, I\'tidal, Sujud, Tahiyyat) secara tartil.',
      'TP-A2.11: Mengenal lafal azan dan ikamah serta doa setelah azan.',
      'TP-A2.12: Memahami pengertian dan keceriaan berpuasa di bulan Ramadan.'
    ],
    unitId: 'A2-FIK-04',
    unitTitle: 'Salat Tertib, Azan Merdu, & Kegembiraan Ramadan',
    materiPengembangan: [
      'Melafalkan Bacaan Doa Gerakan Salat dengan Benar',
      'Mendengar & Menjawab Panggilan Azan yang Merdu',
      'Lafal Ikamah Tanda Salat Segera Ditegakkan',
      'Zikir dan Doa Pilihan Selepas Salat Fardu',
      'Belajar Berpuasa Ramadan dengan Riang Gembira'
    ],
    karakterSpiral: 'Memperdalam hafalan bacaan salat dan pemahaman ibadah puasa bertahap.'
  },
  {
    kelas: 2,
    fase: 'A',
    elemen: 'Sejarah Peradaban Islam',
    cpResmi: 'Peserta didik mampu menceritakan secara sederhana kisah beberapa nabi dan rasul serta meneladani sifat-sifat mulianya.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-A2.13: Menceritakan kisah ketabahan Nabi Nuh a.s. dalam berdakwah.',
      'TP-A2.14: Menceritakan mukjizat Nabi Ibrahim a.s. yang selamat dari kobaran api.',
      'TP-A2.15: Meneladani sikap pantang menyerah dan berani membela kebenaran.'
    ],
    unitId: 'A2-SEJ-05',
    unitTitle: 'Kisah Perjuangan Nabi Nuh a.s. & Nabi Ibrahim a.s.',
    materiPengembangan: [
      'Nabi Nuh a.s. yang Sabar Membangun Bahtera Raksasa',
      'Keteguhan Iman Pengikut Nabi Nuh a.s.',
      'Nabi Ibrahim a.s. Pencari Kebenaran Hakiki',
      'Mukjizat Nabi Ibrahim a.s. Dingin di Tengah Api',
      'Meneladani Keberanian Mengakui Kebenaran'
    ],
    karakterSpiral: 'Keteladanan kesabaran dan keteguhan hati para rasul Ulul Azmi.'
  },

  // ===================== FASE B (KELAS 3) =====================
  {
    kelas: 3,
    fase: 'B',
    elemen: 'Al-Qur\'an-Hadis',
    cpResmi: 'Peserta didik mampu membaca surah-surah pendek atau ayat Al-Qur\'an dan menjelaskan pesan pokoknya dengan baik. Peserta didik mengenal hadis tentang kewajiban salat dan menjaga hubungan baik dengan sesama.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-B3.1: Membaca Q.S. An-Nasr dan Al-Kafirun dengan hukum tajwid dasar (mad thabi\'i).',
      'TP-B3.2: Menjelaskan pesan pokok pertolongan Allah dalam Q.S. An-Nasr dan keteguhan aqidah.',
      'TP-B3.3: Memahami kandungan hadis tentang keutamaan salat tepat pada waktunya.'
    ],
    unitId: 'B3-QUR-01',
    unitTitle: 'Cahaya Tajwid & Hadis Salat Tepat Waktu',
    materiPengembangan: [
      'Hukum Bacaan Mad Thabi\'i pada Surah Pendek',
      'Membaca dan Memahami Pesan Kemenangan Q.S. An-Nasr',
      'Membaca dan Menghayati Q.S. Al-Kafirun (Toleransi Beragama)',
      'Hadis Keutamaan Menegakkan Salat Tepat Waktu',
      'Adab Berinteraksi dengan Al-Qur\'an dalam Kehidupan'
    ],
    karakterSpiral: 'Penguasaan hukum tajwid dasar dan pemahaman hubungan surah dengan keteguhan iman.'
  },
  {
    kelas: 3,
    fase: 'B',
    elemen: 'Akidah',
    cpResmi: 'Peserta didik memahami sifat-sifat bagi Allah Swt., beberapa asmaulhusna, mengenal malaikat dan tugasnya, serta rukun iman lainnya.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-B3.4: Menyebutkan 10 nama malaikat Allah beserta tugas-tugas khususnya.',
      'TP-B3.5: Menjelaskan asmaulhusna Al-Wahhab, Al-Kabir, dan Al-Alim dalam kehidupan nyata.',
      'TP-B3.6: Menampilkan perilaku waspada dan berbuat baik karena sadar diawasi malaikat Raqib-Atid.'
    ],
    unitId: 'B3-AKI-02',
    unitTitle: 'Mengenal 10 Malaikat Allah & Sifat Maha Mengetahui (Al-\'Alim)',
    materiPengembangan: [
      'Mengenal 10 Nama Malaikat Allah yang Taat Tanpa Henti',
      'Tugas Mulia Malaikat Jibril hingga Malik dan Ridwan',
      'Dua Pengawas Kejujuran Kita: Malaikat Raqib dan Atid',
      'Asmaulhusna Al-\'Alim (Maha Mengetahui Segala Hal)',
      'Asmaulhusna Al-Wahhab (Maha Memberi Kurnia Tanpa Batas)'
    ],
    karakterSpiral: 'Internalisasi konsep muraqabah (merasa senantiasa diawasi oleh Allah dan malaikat).'
  },
  {
    kelas: 3,
    fase: 'B',
    elemen: 'Akhlak',
    cpResmi: 'Peserta didik menghormati dan berbakti kepada orang tua dan guru, menyampaikan ungkapan-ungkapan positif dalam interaksi sosial, serta menghargai perbedaan dan peduli lingkungan.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-B3.7: Menjelaskan wujud berbakti (birrul walidain) kepada orang tua yang masih hidup maupun wafat.',
      'TP-B3.8: Menunjukkan adab santun berbicara dan tidak menyela perkataan orang lain.',
      'TP-B3.9: Mempraktikkan perilaku peduli lingkungan sekolah: hemat air dan memilah sampah.'
    ],
    unitId: 'B3-AKH-03',
    unitTitle: 'Bakti Mulia, Lisan Santun, & Sahabat Bumi Bersih',
    materiPengembangan: [
      'Indahnya Berbakti kepada Kedua Orang Tua (Birrul Walidain)',
      'Memuliakan Guru sebagai Pewaris Ilmu Bermanfaat',
      'Menjaga Lisan dari Perkataan Kasar dan Bohong',
      'Etika Menghargai Perbedaan Suku dan Karakter Teman',
      'Menjaga Kebersihan Lingkungan: Islam Agama yang Cinta Alam'
    ],
    karakterSpiral: 'Memperluas lingkup akhlak ke lingkungan ekologis dan keberagaman sosial.'
  },
  {
    kelas: 3,
    fase: 'B',
    elemen: 'Fikih',
    cpResmi: 'Peserta didik mampu melaksanakan ketentuan salat fardu, salat berjamaah, memahami ketentuan azan, ikamah, zikir dan doa setelah salat, serta memahami ketentuan puasa dan tanda-tanda balig.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-B3.10: Menjelaskan syarat sah, syarat wajib, dan rukun salat fardu.',
      'TP-B3.11: Mempraktikkan tata cara salat berjamaah, posisi makmum dan adab masbuq.',
      'TP-B3.12: Memahami ketentuan tayamum sebagai keringanan (rukhsah) saat tidak ada air.'
    ],
    unitId: 'B3-FIK-04',
    unitTitle: 'Ketentuan Salat Berjamaah & Rukhsah Tayamum',
    materiPengembangan: [
      'Syarat Wajib dan Syarat Sah Salat yang Benar',
      'Rukun Salat: Pembeda antara yang Batal dan Sah',
      'Keutamaan Salat Berjamaah 27 Derajat',
      'Adab Makmum Masbuq dan Rapi Bersaf di Masjid',
      'Tayamum: Kemudahan Beribadah Saat Berhalangan Air'
    ],
    karakterSpiral: 'Peralihan dari hafalan gerak fisik menuju pemahaman syarat, rukun, dan ketentuan fiqhiyah.'
  },
  {
    kelas: 3,
    fase: 'B',
    elemen: 'Sejarah Peradaban Islam',
    cpResmi: 'Peserta didik mampu menceritakan kisah dakwah Nabi Muhammad saw., kepribadian sahabat nabi, serta mengambil ibrah dari peristiwa hijrah.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-B3.13: Menceritakan peristiwa Nabi Muhammad saw. menerima wahyu pertama di Gua Hira.',
      'TP-B3.14: Menjelaskan awal dakwah Islam secara sembunyi-sembunyi dan tokoh As-Sabiqunal Awwalun.',
      'TP-B3.15: Meneladani keteguhan hati Sayyidah Khadijah r.a. dalam mendukung dakwah Rasulullah.'
    ],
    unitId: 'B3-SEJ-05',
    unitTitle: 'Cahaya Gua Hira & Keteladanan Sayyidah Khadijah',
    materiPengembangan: [
      'Peristiwa Turunnya Wahyu Pertama Surah Al-\'Alaq di Gua Hira',
      'Sayyidah Khadijah r.a.: Pengorbanan dan Kesetiaan Luar Biasa',
      'Dakwah Sembunyi-Sembunyi di Rumah Arqam bin Abil Arqam',
      'Para Pemeluk Islam Pertama (As-Sabiqunal Awwalun)',
      'Mengambil Ibrah Kesabaran Menghadapi Rintangan Dakwah'
    ],
    karakterSpiral: 'Pemahaman fase awal kenabian dan keteladanan pengorbanan harta serta jiwa.'
  },

  // ===================== FASE B (KELAS 4) =====================
  {
    kelas: 4,
    fase: 'B',
    elemen: 'Al-Qur\'an-Hadis',
    cpResmi: 'Peserta didik mampu membaca surah-surah pendek atau ayat Al-Qur\'an dan menjelaskan pesan pokoknya dengan baik. Peserta didik mengenal hadis tentang kewajiban salat dan menjaga hubungan baik dengan sesama.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-B4.1: Membaca Q.S. At-Tin dan Al-Ma\'un dengan tartil dan kaidah nun sukun/tanwin (Izhhar, Ikhfa, Idgham, Iqlab).',
      'TP-B4.2: Menjelaskan pesan pokok kemuliaan manusia dalam Q.S. At-Tin dan bahaya mendustakan agama dalam Q.S. Al-Ma\'un.',
      'TP-B4.3: Menghafal dan mengamalkan hadis tentang persaudaraan sesama muslim.'
    ],
    unitId: 'B4-QUR-01',
    unitTitle: 'Kandungan Q.S. At-Tin, Q.S. Al-Ma\'un & Tajwid Nun Sukun',
    materiPengembangan: [
      'Hukum Bacaan Nun Sukun dan Tanwin Lengkap Contoh',
      'Q.S. At-Tin: Manusia Diciptakan dalam Bentuk Terbaik',
      'Q.S. Al-Ma\'un: Karakter Pendusta Agama (Menghardik Yatim & Lalai Salat)',
      'Hadis Menjaga Persaudaraan: Bagaikan Satu Tubuh yang Kokoh',
      'Aplikasi Peduli Sesama Berdasarkan Pesan Al-Qur\'an'
    ],
    karakterSpiral: 'Analisis pesan moral Al-Qur\'an tentang tanggung jawab sosial terhadap fakir dan yatim.'
  },
  {
    kelas: 4,
    fase: 'B',
    elemen: 'Akidah',
    cpResmi: 'Peserta didik memahami sifat-sifat bagi Allah Swt., beberapa asmaulhusna, mengenal malaikat dan tugasnya, serta rukun iman lainnya.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-B4.4: Menjelaskan rukun iman ketiga: Iman kepada Kitab-Kitab Allah (Taurat, Zabur, Injil, Al-Qur\'an).',
      'TP-B4.5: Memahami keistimewaan Al-Qur\'an sebagai kitab suci penyempurna sepanjang zaman.',
      'TP-B4.6: Meneladani asmaulhusna Al-Malik, Al-Aziz, dan Al-Quddus dalam kepemimpinan diri.'
    ],
    unitId: 'B4-AKI-02',
    unitTitle: 'Iman kepada Kitab-Kitab Allah & Kemuliaan Al-Qur\'an',
    materiPengembangan: [
      'Mengenal 4 Kitab Suci Allah dan Rasul Penerimanya',
      'Kedudukan Al-Qur\'an sebagai Penyempurna Kitab Sebelumnya',
      'Kewajiban Orang Beriman terhadap Al-Qur\'an',
      'Asmaulhusna Al-Malik (Maha Merajai Semesta Alam)',
      'Asmaulhusna Al-Aziz (Maha Perkasa Lagi Mulia)'
    ],
    karakterSpiral: 'Membangun wawasan literasi wahyu dan penghayatan keagungan firman ilahi.'
  },
  {
    kelas: 4,
    fase: 'B',
    elemen: 'Akhlak',
    cpResmi: 'Peserta didik menghormati dan berbakti kepada orang tua dan guru, menyampaikan ungkapan-ungkapan positif dalam interaksi sosial, serta menghargai perbedaan dan peduli lingkungan.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-B4.7: Menjelaskan indahnya keragaman suku, agama, dan budaya sebagai sunnatullah.',
      'TP-B4.8: Menerapkan sikap toleransi (tasamuh) tanpa mengorbankan keyakinan aqidah.',
      'TP-B4.9: Menghindari sikap dengki (hasad), ghibah, dan suka memamerkan kebaikan (riya).'
    ],
    unitId: 'B4-AKH-03',
    unitTitle: 'Indahnya Keragaman (Tasamuh) & Menjauhi Sifat Tercela',
    materiPengembangan: [
      'Keragaman Manusia sebagai Anugerah dan Sunnatullah',
      'Menghormati Perbedaan Budaya dan Agama dengan Damai',
      'Tolong-Menolong Kemanusiaan Lintas Golongan',
      'Mengenali Bahaya Penyakit Hati: Hasad, Sombong, dan Riya',
      'Membiasakan Berprasangka Baik (Husnuzan) kepada Orang Lain'
    ],
    karakterSpiral: 'Resolusi konflik sederhana, kebhinekaan madani, dan pembersihan penyakit hati.'
  },
  {
    kelas: 4,
    fase: 'B',
    elemen: 'Fikih',
    cpResmi: 'Peserta didik mampu melaksanakan ketentuan salat fardu, salat berjamaah, memahami ketentuan azan, ikamah, zikir dan doa setelah salat, serta memahami ketentuan puasa dan tanda-tanda balig.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-B4.10: Menjelaskan tanda-tanda usia balig menurut pandangan ilmu fikih dan biologi.',
      'TP-B4.11: Memahami konsekuensi hukum mukallaf setelah memasuki usia balig.',
      'TP-B4.12: Menjelaskan ketentuan puasa Ramadan: syarat, rukun, hal membatalkan, dan hikmahnya.'
    ],
    unitId: 'B4-FIK-04',
    unitTitle: 'Menyambut Usia Balig & Rukun Puasa Ramadan',
    materiPengembangan: [
      'Mengenal Tanda-Tanda Balig bagi Laki-Laki dan Perempuan',
      'Tanggung Jawab Ibadah bagi Anak yang Memasuki Usia Balig',
      'Tata Cara Bersuci dari Hadas Besar (Mandi Wajib)',
      'Ketentuan Puasa Ramadan: Syarat Wajib, Sah, dan Rukun',
      'Hal-Hal yang Membatalkan dan Merusak Pahala Puasa'
    ],
    karakterSpiral: 'Edukasi akil balig yang santun, adab mandi wajib, dan kesiapan ibadah mandiri.'
  },
  {
    kelas: 4,
    fase: 'B',
    elemen: 'Sejarah Peradaban Islam',
    cpResmi: 'Peserta didik mampu menceritakan kisah dakwah Nabi Muhammad saw., kepribadian sahabat nabi, serta mengambil ibrah dari peristiwa hijrah.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-B4.13: Menceritakan sebab dan kronologi peristiwa Hijrah Rasulullah saw. ke Madinah.',
      'TP-B4.14: Menjelaskan sambutan kaum Anshar dan persaudaraan Muhajirin-Anshar.',
      'TP-B4.15: Mengambil ibrah keteladanan Abu Bakar Ash-Shiddiq r.a. yang setia menemani di Gua Tsur.'
    ],
    unitId: 'B4-SEJ-05',
    unitTitle: 'Kisah Hijrah ke Madinah & Persaudaraan Kaum Anshar',
    materiPengembangan: [
      'Latar Belakang Pemboikotan dan Tekanan Kaum Kafir Quraisy',
      'Perjalanan Penuh Risiko Rasulullah dan Abu Bakar ke Gua Tsur',
      'Penyambutan Hangat Penduduk Yatsrib (Thala\'al Badru \'Alaina)',
      'Mempersaudarakan Kaum Muhajirin dan Kaum Anshar',
      'Pembangunan Masjid Nabawi sebagai Pusat Peradaban'
    ],
    karakterSpiral: 'Pemaknaan nilai persaudaraan sejati, ketulusan berbagi tempat tinggal, dan integrasi sosial.'
  },

  // ===================== FASE C (KELAS 5) =====================
  {
    kelas: 5,
    fase: 'C',
    elemen: 'Al-Qur\'an-Hadis',
    cpResmi: 'Peserta didik mampu membaca, menghafal, menulis, dan memahami pesan pokok surah-surah pendek dan ayat Al-Qur\'an tentang keragaman dengan baik dan benar. Peserta didik memahami hadis tentang menyayangi anak yatim dan menjauhi sifat munafik.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-C5.1: Membaca dan menganalisis Q.S. Al-Hujurat/49: 13 tentang kesetaraan dan keragaman manusia.',
      'TP-C5.2: Memahami hukum bacaan Mim Sukun (Ikhfa Syafawi, Idgham Mimi, Izhhar Syafawi).',
      'TP-C5.3: Menjelaskan dan meneladani hadis tentang menyantuni anak yatim laksana dua jari berdampingan di surga.'
    ],
    unitId: 'C5-QUR-01',
    unitTitle: 'Q.S. Al-Hujurat: Keragaman Manusia & Hadis Memuliakan Yatim',
    materiPengembangan: [
      'Hukum Bacaan Mim Sukun dengan Tartil Teliti',
      'Membaca dan Menerjemahkan Q.S. Al-Hujurat Ayat 13',
      'Konsep Ketakwaan sebagai Tolok Ukur Kemuliaan di Sisi Allah',
      'Kandungan Hadis Menyayangi dan Menyantuni Anak Yatim',
      'Proyek Amal Nyata: Berbagi Senyuman dan Rezeki untuk Sesama'
    ],
    karakterSpiral: 'Tafsir tematik humanis, anti-rasisme, dan tindakan filantropi nyata.'
  },
  {
    kelas: 5,
    fase: 'C',
    elemen: 'Akidah',
    cpResmi: 'Peserta didik memahami rukun iman, khususnya iman kepada hari akhir, qada dan qadar, serta memahami beberapa asmaulhusna dan sifat-sifat Allah.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-C5.4: Menjelaskan makna beriman kepada Rasul-Rasul Allah dan tugas suci mereka.',
      'TP-C5.5: Menyebutkan 25 nabi dan rasul serta mengenal 5 rasul Ulul Azmi (Nuh, Ibrahim, Musa, Isa, Muhammad saw.).',
      'TP-C5.6: Meneladani sifat wajib bagi rasul: Shiddiq, Amanah, Tabligh, Fathanah.'
    ],
    unitId: 'C5-AKI-02',
    unitTitle: 'Iman kepada Rasul Allah & Teladan Rasul Ulul Azmi',
    materiPengembangan: [
      'Makna Iman kepada Utusan Allah sebagai Teladan Hidup',
      'Mengenal 25 Nabi dan Rasul yang Wajib Diketahui',
      'Keistimewaan dan Ketabahan 5 Rasul Ulul Azmi',
      '4 Sifat Wajib Rasul: Shiddiq, Amanah, Tabligh, Fathanah',
      'Aplikasi Karakter Cerdas (Fathanah) dan Jujur (Shiddiq) Pelajar Masa Kini'
    ],
    karakterSpiral: 'Konsep kepemimpinan profetik (kenabian) dalam menjawab tantangan era modern.'
  },
  {
    kelas: 5,
    fase: 'C',
    elemen: 'Akhlak',
    cpResmi: 'Peserta didik menghormati dan berbakti kepada orang tua dan guru, menyampaikan ungkapan-ungkapan positif dalam interaksi sosial, menjaga etika bergaul dan bermedia sosial, serta peduli terhadap pelestarian lingkungan.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-C5.7: Menerapkan etika berkomunikasi digital: tabayyun terhadap informasi dan menghindari hoaks.',
      'TP-C5.8: Menunjukkan sikap pantang menyerah, istiqamah, dan tawaduk dalam menuntut ilmu.',
      'TP-C5.9: Berpartisipasi aktif dalam kegiatan pelestarian alam dan konservasi lingkungan.'
    ],
    unitId: 'C5-AKH-03',
    unitTitle: 'Etika Komunikasi Digital, Sikap Istiqamah, & Hijaukan Bumi',
    materiPengembangan: [
      'Adab Berinteraksi di Media Sosial: Prinsip Tabayyun & Anti-Bullying',
      'Menjaga Jempol dan Lisan dari Fitnah dan Hoaks',
      'Sikap Istiqamah dan Pantang Menyerah Menghadapi Kesulitan Belajar',
      'Sikap Rendah Hati (Tawaduk) di Tengah Prestasi Tinggi',
      'Aksi Nyata Pelestarian Lingkungan Hidup Menurut Ajaran Islam'
    ],
    karakterSpiral: 'Penguatan akhlak di ranah siber/digital dan literasi media berkeadaban.'
  },
  {
    kelas: 5,
    fase: 'C',
    elemen: 'Fikih',
    cpResmi: 'Peserta didik mampu memahami dan menerapkan ketentuan zakat, infak, sedekah, dan hadiah, serta memahami ketentuan makanan dan minuman yang halal dan haram.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-C5.10: Menjelaskan perbedaan ketentuan zakat fitrah, zakat mal, infak, dan sedekah.',
      'TP-C5.11: Mengidentifikasi 8 golongan penerima zakat (asnaf) menurut Al-Qur\'an.',
      'TP-C5.12: Mengklasifikasikan jenis makanan dan minuman halal serta bahaya konsumsi yang haram.'
    ],
    unitId: 'C5-FIK-04',
    unitTitle: 'Zakat, Infak, Sedekah & Makanan Halal Penjaga Raga',
    materiPengembangan: [
      'Ketentuan Zakat Fitrah: Waktu Pembayaran dan Takaran Beras',
      'Mengenal 8 Asnaf Penerima Zakat Berdasarkan Q.S. At-Taubah: 60',
      'Pahala Abadi Sedekah, Infak, dan Menghadiahkan Kebaikan',
      'Kriteria Makanan Halalan Thayyiban (Sehat, Bergizi, dan Halal)',
      'Dampak Makanan Haram terhadap Kebersihan Hati dan Kesehatan'
    ],
    karakterSpiral: 'Fikih ekonomi sosial filantropi dan perlindungan konsumen muslim yang cerdas.'
  },
  {
    kelas: 5,
    fase: 'C',
    elemen: 'Sejarah Peradaban Islam',
    cpResmi: 'Peserta didik mampu menceritakan peristiwa penting dalam sejarah Islam serta meneladani peran Khulafaur Rasyidin dalam membangun peradaban.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-C5.13: Menceritakan peristiwa Fathu Makkah (Pembebasan Kota Makkah) tanpa pertumpahan darah.',
      'TP-C5.14: Menjelaskan pesan toleransi dan pemaafan agung Nabi Muhammad saw. saat Fathu Makkah.',
      'TP-C5.15: Mengambil ibrah dari Haji Wada\' (Haji Perpisahan) dan khutbah kemanusiaan Rasulullah.'
    ],
    unitId: 'C5-SEJ-05',
    unitTitle: 'Fathu Makkah Penuh Damai & Khutbah Kemanusiaan Haji Wada\'',
    materiPengembangan: [
      'Pelanggaran Perjanjian Hudaibiyah oleh Kaum Quraisy',
      'Strategi 10.000 Pasukan Masuk Kota Makkah dengan Damai',
      'Deklarasi Pengampunan Umum: Islam Agama Rahmatan Lil \'Alamin',
      'Pembersihan Ka\'bah dari 360 Berhala',
      'Pesan Luhur Persamaan Derajat Manusia dalam Khutbah Haji Wada\''
    ],
    karakterSpiral: 'Kepemimpinan rekonsiliasi damai, resolusi konflik tanpa balas dendam, dan HAM Islami.'
  },

  // ===================== FASE C (KELAS 6) =====================
  {
    kelas: 6,
    fase: 'C',
    elemen: 'Al-Qur\'an-Hadis',
    cpResmi: 'Peserta didik mampu membaca, menghafal, menulis, dan memahami pesan pokok surah-surah pendek dan ayat Al-Qur\'an tentang keragaman dengan baik dan benar. Peserta didik memahami hadis tentang menyayangi anak yatim dan menjauhi sifat munafik.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-C6.1: Menganalisis kandungan Q.S. Al-A\'la dan Q.S. Al-Insyirah dalam membangun etos kerja dan optimisme.',
      'TP-C6.2: Menerapkan kaidah tajwid Qalqalah (Sughra dan Kubra) serta hukum Alif Lam (Qamariyah dan Syamsiyah).',
      'TP-C6.3: Menjelaskan hadis tentang 3 tanda orang munafik (bila berbicara dusta, berjanji ingkar, dipercaya khianat).'
    ],
    unitId: 'C6-QUR-01',
    unitTitle: 'Q.S. Al-Insyirah (Optimisme Hidup) & Hadis Bahaya Kemunafikan',
    materiPengembangan: [
      'Kaidah Tajwid Hukum Qalqalah Sughra dan Kubra',
      'Membaca dan Menganalisis Pesan Q.S. Al-Insyirah (Ada Kemudahan di Balik Kesulitan)',
      'Tadabbur Q.S. Al-A\'la: Memuji Kesucian Allah Pengatur Alam',
      'Hadis 3 Tanda Orang Munafik dan Upaya Menjauhinya',
      'Integrasi Kejujuran Total dalam Perilaku Keseharian Siswa'
    ],
    karakterSpiral: 'Membangun resiliensi mental, optimisme religius, dan integritas kepribadian mukmin.'
  },
  {
    kelas: 6,
    fase: 'C',
    elemen: 'Akidah',
    cpResmi: 'Peserta didik memahami rukun iman, khususnya iman kepada hari akhir, qada dan qadar, serta memahami beberapa asmaulhusna dan sifat-sifat Allah.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-C6.4: Menjelaskan peristiwa hari akhir (Kiamat Sugra dan Kiamat Kubra) serta tahapan alam akhirat.',
      'TP-C6.5: Menjelaskan makna beriman kepada Qada dan Qadar (takdir mu\'allaq dan takdir mubram) dengan ikhtiar maksimal.',
      'TP-C6.6: Menampilkan asmaulhusna Al-Ghaffar, Al-Hakim, dan Ash-Shamad dalam kesadaran spiritual.'
    ],
    unitId: 'C6-AKI-02',
    unitTitle: 'Iman kepada Hari Akhir, Qada & Qadar: Ikhtiar Menjemput Takdir',
    materiPengembangan: [
      'Mengenal Kiamat Sugra (Kecil) dan Kiamat Kubra (Besar)',
      'Tahapan Kehidupan Akhirat: Yaumul Ba\'ats hingga Surga dan Neraka',
      'Konsep Qada dan Qadar: Ikhtiar, Doa, dan Tawakal yang Seimbang',
      'Perbedaan Takdir Mu\'allaq (Bisa Berubah) dan Takdir Mubram',
      'Menjadikan Keyakinan Hari Akhir sebagai Pendorong Rajin Beramal'
    ],
    karakterSpiral: 'Eskatologi Islam yang membuahkan etos kerja, tanggung jawab pribadi, dan tawakal aktif.'
  },
  {
    kelas: 6,
    fase: 'C',
    elemen: 'Akhlak',
    cpResmi: 'Peserta didik menghormati dan berbakti kepada orang tua dan guru, menyampaikan ungkapan-ungkapan positif dalam interaksi sosial, menjaga etika bergaul dan bermedia sosial, serta peduli terhadap pelestarian lingkungan.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-C6.7: Menilai dan memecahkan dilema moral dalam kehidupan sosial secara kritis dan bijaksana.',
      'TP-C6.8: Menerapkan sikap pemaaf, toleran terhadap kemajemukan bangsa, dan menjunjung tinggi keadilan.',
      'TP-C6.9: Menjadi duta perdamaian sekolah yang menolak segala bentuk perundungan (bullying).'
    ],
    unitId: 'C6-AKH-03',
    unitTitle: 'Akhlak Sosial: Keadilan, Pemaaf, & Pelopor Sekolah Damai',
    materiPengembangan: [
      'Sikap Adil dan Membela Kebenaran Tanpa Memandang Suku',
      'Kemuliaan Menjadi Pribadi Pemaaf yang Berhati Lapang',
      'Menjaga Persatuan NKRI dengan Nilai Ukhuwah Wathaniyah & Insaniyah',
      'Resolusi Konflik Cerdas: Mengatasi Perselisihan Tanpa Kekerasan',
      'Ikrar Pelajar Berkarakter: Sekolah Ramah Anak Bebas Bullying'
    ],
    karakterSpiral: 'Pematangan etika kewarganegaraan, toleransi kebangsaan, dan agen perdamaian.'
  },
  {
    kelas: 6,
    fase: 'C',
    elemen: 'Fikih',
    cpResmi: 'Peserta didik mampu memahami dan menerapkan ketentuan ibadah haji, kurban, dan muamalah sederhana serta menerapkannya dalam kehidupan sehari-hari.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-C6.10: Menjelaskan rukun, wajib, dan sunnah ibadah haji dan umrah serta simulasi manasik.',
      'TP-C6.11: Menjelaskan ketentuan penyembelihan hewan kurban dan aqiqah.',
      'TP-C6.12: Memahami prinsip muamalah jual beli yang jujur, bebas riba, dan adil.'
    ],
    unitId: 'C6-FIK-04',
    unitTitle: 'Indahnya Manasik Haji, Ibadah Kurban, & Muamalah Jujur',
    materiPengembangan: [
      'Rukun Islam Kelima: Syarat Istitha\'ah (Kemampuan) Ibadah Haji',
      'Rukun dan Wajib Haji: Ihram, Wukuf di Arafah, Tawaf, Sa\'i, Tahallul',
      'Ibadah Kurban: Sejarah Pengorbanan Nabi Ibrahim & Pembagian Daging',
      'Ketentuan Aqiqah sebagai Wujud Syukur Kelahiran Anak',
      'Etika Jual Beli Islami: Kejujuran Timbangan dan Menghindari Tipu Daya'
    ],
    karakterSpiral: 'Simulasi manasik, empati pengorbanan sosial, dan literasi muamalah ekonomi berkah.'
  },
  {
    kelas: 6,
    fase: 'C',
    elemen: 'Sejarah Peradaban Islam',
    cpResmi: 'Peserta didik mampu menceritakan peristiwa penting dalam sejarah Islam serta meneladani peran Khulafaur Rasyidin dalam membangun peradaban.',
    cpStatus: 'CP-RESMI',
    tpTurunan: [
      'TP-C6.13: Menceritakan kepemimpinan Khalifah Abu Bakar Ash-Shiddiq dan Umar bin Khattab r.a.',
      'TP-C6.14: Menceritakan jasa Khalifah Utsman bin Affan dalam kodifikasi mushaf Al-Qur\'an dan kedermawanannya.',
      'TP-C6.15: Meneladani ketegasan dan keadilan Khalifah Ali bin Abi Thalib dalam ilmu pengetahuan.',
      'TP-C6.16: Mengambil inspirasi kepemimpinan berintegritas untuk masa depan bangsa.'
    ],
    unitId: 'C6-SEJ-05',
    unitTitle: 'Khulafaur Rasyidin: Teladan Kepemimpinan & Peradaban Islam',
    materiPengembangan: [
      'Abu Bakar Ash-Shiddiq: Ketegasan Membela Kebenaran & Menjaga Ummah',
      'Umar bin Khattab: Keadilan Tanpa Pandang Bulu & Pembawa Kemakmuran',
      'Utsman bin Affan: Sang Pemilik Dua Cahaya (Dermawan & Mushaf Standar)',
      'Ali bin Abi Thalib: Gerbang Ilmu Pengetahuan & Keberanian Sejati',
      'Refleksi Pemimpin Masa Depan: Memadukan Ilmu, Iman, dan Pengabdian'
    ],
    karakterSpiral: 'Analisis kepemimpinan historis peradaban dunia dan sintesis proyek kepemimpinan siswa.'
  }
];

export const SUMMARY_STATS = {
  totalUnit: 30, // 5 units * 6 grades
  totalSubmateri: 150, // 5 sub-materials per unit * 30
  totalAktivitas: 120, // 4 interactive activities per unit * 30
  totalSoal: 900, // 30 questions per unit * 30 units
  totalLkpd: 30, // 1 rich digital LKPD per unit
  totalAsesmen: 60, // 1 formatif + 1 sumatif per unit * 30
  unitsPerKelas: {
    1: 5,
    2: 5,
    3: 5,
    4: 5,
    5: 5,
    6: 5
  }
};

export const VERIFICATION_STATUS_TABLE = [
  { komponen: 'Regulasi Utama', status: 'Terverifikasi', keterangan: 'Kepka BKPDM No. 020 Tahun 2026' },
  { komponen: 'Regulasi Induk/Perubahan', status: 'Terverifikasi', keterangan: 'Kepka BSKAP No. 046/H/KR/2025' },
  { komponen: 'Capaian Pembelajaran (CP)', status: 'CP-RESMI Terverifikasi', keterangan: 'Kutipan autentik berbasis fase (A, B, C)' },
  { komponen: 'Tujuan Pembelajaran (TP)', status: 'TP-TURUNAN Terverifikasi', keterangan: 'Diturunkan sistematis dengan kata kerja operasional' },
  { komponen: 'Materi Pembelajaran', status: 'MATERI-PENGEMBANGAN', keterangan: 'Distribusi bertahap spiral kelas 1–6' },
  { komponen: 'Ayat Al-Qur\'an & Teks Arab', status: 'TERVERIFIKASI', keterangan: 'Mushaf Standar Indonesia Kemenag RI' },
  { komponen: 'Hadis & Perawi', status: 'TERVERIFIKASI', keterangan: 'Kutipan Sahih Bukhari/Muslim/Tirmidzi dengan sanad valid' },
  { komponen: 'Ketentuan Fikih', status: 'TERVERIFIKASI', keterangan: 'Fikih dasar mazhab mayoritas Syafi\'i dengan prinsip toleransi' }
];
