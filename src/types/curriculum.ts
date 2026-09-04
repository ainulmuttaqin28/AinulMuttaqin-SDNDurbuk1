export type FaseType = 'A' | 'B' | 'C';
export type ElemenPAI = 'Al-Qur\'an-Hadis' | 'Akidah' | 'Akhlak' | 'Fikih' | 'Sejarah Peradaban Islam';

export type VerificationStatus = 'TERVERIFIKASI' | 'PERLU_VERIFIKASI' | 'TURUNAN' | 'PENGEMBANGAN';

export interface CurriculumMapRow {
  kelas: number;
  fase: FaseType;
  elemen: ElemenPAI;
  cpResmi: string;
  cpStatus: 'CP-RESMI' | 'PERLU-VERIFIKASI';
  tpTurunan: string[];
  unitId: string;
  unitTitle: string;
  materiPengembangan: string[];
  karakterSpiral: string;
}

export interface ArabicContent {
  surah?: string;
  nomorAyat?: string;
  teksArab: string;
  transliterasi: string;
  terjemahan: string;
  sumberVerifikasi: string;
  statusVerifikasi: 'TERVERIFIKASI' | 'PERLU_VERIFIKASI';
}

export type QuestionType = 'pilihan_ganda' | 'benar_salah' | 'menjodohkan' | 'situasi' | 'hots' | 'reflektif';

export interface QuestionItem {
  idSoal: string;
  kelas: number;
  fase: FaseType;
  unitId: string;
  elemen: ElemenPAI;
  tingkatKesulitan: 'Dasar' | 'Reguler' | 'Tantangan';
  pertanyaan: string;
  opsi?: string[];
  jawabanBenar: string | boolean | number;
  pembahasan: string;
  indikator: string;
  tp: string;
  jenisSoal: QuestionType;
}

export interface InteractiveActivity {
  id: string;
  level: 1 | 2 | 3 | 4;
  type: 'tebak_gambar' | 'susun_urutan' | 'studi_kasus' | 'drag_drop' | 'refleksi_aksi';
  title: string;
  instructions: string;
  scenario?: string;
  items?: { id: string; label: string; imageHint?: string; correctOrder?: number; matchWith?: string }[];
  options?: { id: string; text: string; isBestChoice: boolean; feedback: string }[];
  xpReward: number;
}

export interface LkpdDigital {
  unitId: string;
  judul: string;
  tujuan: string[];
  petunjuk: string[];
  mariMengamati: { stimulus: string; gambarHint?: string; pertanyaan: string };
  mariBerpikir: string[];
  mariBerdiskusi: string;
  mariMencoba: string;
  mariMenyimpulkan: string;
  refleksi: string;
}

export interface UnitDetail {
  kodeUnit: string;
  namaUnit: string;
  fase: FaseType;
  kelas: number;
  elemen: ElemenPAI;
  semester: 1 | 2;
  cpResmi: string;
  cpStatus: 'CP-RESMI' | 'PERLU-VERIFIKASI';
  tpTurunan: string[];
  materiPengembangan: {
    id: string;
    judul: string;
    tujuan: string;
    materiInti: string[];
    contohNyata: string;
    ilustrasi: string;
    pertanyaanBerpikir: string[];
    refleksiDiri: string;
    arabic?: ArabicContent;
  }[];
  kosakataPenting: { kata: string; arti: string }[];
  konsepInti: string;
  ceritaPembuka: { judul: string; narasi: string; hikmah: string };
  aktivitasInteraktif: InteractiveActivity[];
  soal: QuestionItem[];
  remedial: {
    judul: string;
    materiRingkas: string[];
    contohSederhana: string;
    kuisUlang: QuestionItem[];
  };
  pengayaan: {
    judul: string;
    studiKasusKompleks: string;
    proyekMini: string;
    pertanyaanAnalitis: string[];
  };
  lkpd: LkpdDigital;
  refleksiSiswa: { pertanyaan: string; pilihanEmosi: string[] }[];
  refleksiGuru: string[];
  sumber: string[];
  verifikasi: boolean;
}

export interface StudentProfile {
  nama: string;
  kelas: number;
  xp: number;
  level: number;
  badges: { id: string; name: string; earned: boolean; earnedAt?: string; icon: string; desc: string }[];
  completedUnits: string[];
  quizScores: Record<string, number>;
  remedialNeeds: string[];
  lkpdSubmissions: Record<string, any>;
}
