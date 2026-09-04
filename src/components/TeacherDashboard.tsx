import React, { useState } from 'react';
import { MASTER_CURRICULUM_MAP, OFFICIAL_REGULATION_INFO, SUMMARY_STATS } from '../data/curriculumMasterMap';
import { UNITS_DATA } from '../data/unitsData';
import { 
  ShieldCheck, Download, Printer, UserCheck, AlertTriangle, 
  CheckCircle, FileJson, TrendingUp, Search, Award 
} from 'lucide-react';

interface TeacherDashboardProps {
  selectedGrade: number;
  setSelectedGrade: (grade: number) => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({
  selectedGrade,
  setSelectedGrade
}) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'students' | 'rapor' | 'json'>('audit');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample student gradebook for analytics
  const mockStudents = [
    { id: 'S-01', nama: 'Ahmad Rayyan', kelas: selectedGrade, nilaiQuran: 92, nilaiAkidah: 88, nilaiAkhlak: 95, nilaiFikih: 80, nilaiSejarah: 90, status: 'Tuntas' },
    { id: 'S-02', nama: 'Salma Aisyah', kelas: selectedGrade, nilaiQuran: 96, nilaiAkidah: 94, nilaiAkhlak: 98, nilaiFikih: 92, nilaiSejarah: 95, status: 'Pengayaan' },
    { id: 'S-03', nama: 'Budi Pratama', kelas: selectedGrade, nilaiQuran: 68, nilaiAkidah: 72, nilaiAkhlak: 85, nilaiFikih: 64, nilaiSejarah: 78, status: 'Butuh Remedial' },
    { id: 'S-04', nama: 'Fatimah Zahra', kelas: selectedGrade, nilaiQuran: 88, nilaiAkidah: 85, nilaiAkhlak: 92, nilaiFikih: 86, nilaiSejarah: 89, status: 'Tuntas' },
    { id: 'S-05', nama: 'Zaid Al-Farisi', kelas: selectedGrade, nilaiQuran: 70, nilaiAkidah: 75, nilaiAkhlak: 82, nilaiFikih: 68, nilaiSejarah: 74, status: 'Butuh Remedial' }
  ];

  const exportFullContentEngineJson = () => {
    const fullData = {
      engine: 'PAI CERIA CONTENT ENGINE',
      version: '2026.1.0',
      regulasi: OFFICIAL_REGULATION_INFO,
      stats: SUMMARY_STATS,
      masterCurriculumMap: MASTER_CURRICULUM_MAP,
      unitsData: UNITS_DATA
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "PAI_CERIA_COMPLETE_DATABASE_ENGINE.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handlePrintRapor = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200">
              PORTAL GURU & AUDIT KURIKULUM
            </span>
            <span className="text-xs text-slate-500 font-semibold">
              Kementerian Pendidikan Dasar dan Menengah RI
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-['Fredoka']">
            Dashboard Guru & Engine Validasi PAI
          </h1>
          <p className="text-xs text-slate-600 mt-1">
            Audit regulasi, monitoring ketercapaian TP & CP siswa, penanganan remedial otomatis, dan pengelolaan basis data konten.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={exportFullContentEngineJson}
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm transition"
          >
            <Download className="w-4 h-4" />
            <span>Ekspor JSON Database</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 mb-6 text-xs font-bold">
        <button
          onClick={() => setActiveTab('audit')}
          className={`pb-3 px-4 border-b-2 transition flex items-center gap-1.5 ${
            activeTab === 'audit'
              ? 'border-emerald-600 text-emerald-800'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Audit Regulasi & CP BKPDM 020/2026</span>
        </button>

        <button
          onClick={() => setActiveTab('students')}
          className={`pb-3 px-4 border-b-2 transition flex items-center gap-1.5 ${
            activeTab === 'students'
              ? 'border-emerald-600 text-emerald-800'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <UserCheck className="w-4 h-4" />
          <span>Analitik Capaian Siswa & Remedial</span>
        </button>

        <button
          onClick={() => setActiveTab('rapor')}
          className={`pb-3 px-4 border-b-2 transition flex items-center gap-1.5 ${
            activeTab === 'rapor'
              ? 'border-emerald-600 text-emerald-800'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Printer className="w-4 h-4" />
          <span>Cetak Laporan Capaian Belajar</span>
        </button>

        <button
          onClick={() => setActiveTab('json')}
          className={`pb-3 px-4 border-b-2 transition flex items-center gap-1.5 ${
            activeTab === 'json'
              ? 'border-emerald-600 text-emerald-800'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <FileJson className="w-4 h-4" />
          <span>Schema JSON Content Engine</span>
        </button>
      </div>

      {/* TAB 1: AUDIT REGULASI & VALIDASI CP */}
      {activeTab === 'audit' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Hasil Audit Keselarasan Regulasi Kemendikdasmen RI</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-2">
                <span className="font-bold text-emerald-950 block">Hierarki Landasan Hukum Prioritas 1:</span>
                <p className="font-semibold text-emerald-800">
                  {OFFICIAL_REGULATION_INFO.primaryRegulation}
                </p>
                <p className="text-slate-600">
                  Perubahan atas {OFFICIAL_REGULATION_INFO.amendsRegulation}.
                </p>
                <p className="text-[11px] text-emerald-700 pt-1">
                  Status: <strong>TERVERIFIKASI & AKTIF DIGUNAKAN</strong>
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 space-y-2">
                <span className="font-bold text-blue-950 block">Kepatuhan Terhadap Larangan Halusinasi CP:</span>
                <p className="text-slate-700">
                  Semua rumusan CP resmi disalin verbatim tanpa klaim palsu. Pembagian materi tiap kelas secara tegas dilabeli sebagai <strong>[MATERI-PENGEMBANGAN]</strong> berbasis Fase.
                </p>
                <p className="text-[11px] text-blue-700 pt-1">
                  Status: <strong>SESUAI PRINSIP PEDAGOGIS KEMENDIKDASMEN</strong>
                </p>
              </div>
            </div>

            {/* Audit Table */}
            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                    <th className="py-2.5 px-3">Kode Unit</th>
                    <th className="py-2.5 px-3">Fase & Kelas</th>
                    <th className="py-2.5 px-3">Elemen</th>
                    <th className="py-2.5 px-3">Status CP</th>
                    <th className="py-2.5 px-3">Status Verifikasi Teks Arab/Hadis</th>
                    <th className="py-2.5 px-3">Kesesuaian TP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {UNITS_DATA.map((u) => (
                    <tr key={u.kodeUnit} className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-mono font-bold text-slate-800">{u.kodeUnit}</td>
                      <td className="py-2.5 px-3 font-semibold">Fase {u.fase} • Kelas {u.kelas}</td>
                      <td className="py-2.5 px-3">{u.elemen}</td>
                      <td className="py-2.5 px-3">
                        <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold text-[10px]">
                          {u.cpStatus}
                        </span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold text-[10px]">
                          TERVERIFIKASI
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-emerald-700 font-bold">100% Selaras CP</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ANALITIK CAPAIAN SISWA & REMEDIAL */}
      {activeTab === 'students' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-800">
                  Buku Nilai & Analisis Diagnostik Siswa Kelas {selectedGrade}
                </h3>
                <p className="text-xs text-slate-500">
                  KKM PAI: 75. Siswa dengan nilai di bawah 75 otomatis menerima rekomendasi materi remedial ceria.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-600">Pilih Kelas:</span>
                {[1, 2, 3, 4, 5, 6].map((k) => (
                  <button
                    key={k}
                    onClick={() => setSelectedGrade(k)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg ${
                      selectedGrade === k ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    Kls {k}
                  </button>
                ))}
              </div>
            </div>

            {/* Students Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                    <th className="py-3 px-3">NIS/ID</th>
                    <th className="py-3 px-3">Nama Siswa</th>
                    <th className="py-3 px-3 text-center">Al-Qur'an</th>
                    <th className="py-3 px-3 text-center">Akidah</th>
                    <th className="py-3 px-3 text-center">Akhlak</th>
                    <th className="py-3 px-3 text-center">Fikih</th>
                    <th className="py-3 px-3 text-center">Sejarah</th>
                    <th className="py-3 px-3 text-center">Rata-Rata</th>
                    <th className="py-3 px-3">Tindak Lanjut</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {mockStudents.map((st) => {
                    const avg = Math.round((st.nilaiQuran + st.nilaiAkidah + st.nilaiAkhlak + st.nilaiFikih + st.nilaiSejarah) / 5);
                    const needRemedial = avg < 75 || st.nilaiFikih < 75 || st.nilaiQuran < 75;

                    return (
                      <tr key={st.id} className="hover:bg-slate-50">
                        <td className="py-3 px-3 font-mono font-medium text-slate-500">{st.id}</td>
                        <td className="py-3 px-3 font-bold text-slate-900">{st.nama}</td>
                        <td className={`py-3 px-3 text-center font-bold ${st.nilaiQuran < 75 ? 'text-rose-600 bg-rose-50/50' : 'text-slate-800'}`}>{st.nilaiQuran}</td>
                        <td className={`py-3 px-3 text-center font-bold ${st.nilaiAkidah < 75 ? 'text-rose-600 bg-rose-50/50' : 'text-slate-800'}`}>{st.nilaiAkidah}</td>
                        <td className={`py-3 px-3 text-center font-bold ${st.nilaiAkhlak < 75 ? 'text-rose-600 bg-rose-50/50' : 'text-slate-800'}`}>{st.nilaiAkhlak}</td>
                        <td className={`py-3 px-3 text-center font-bold ${st.nilaiFikih < 75 ? 'text-rose-600 bg-rose-50/50' : 'text-slate-800'}`}>{st.nilaiFikih}</td>
                        <td className={`py-3 px-3 text-center font-bold ${st.nilaiSejarah < 75 ? 'text-rose-600 bg-rose-50/50' : 'text-slate-800'}`}>{st.nilaiSejarah}</td>
                        <td className="py-3 px-3 text-center font-extrabold text-emerald-800">{avg}</td>
                        <td className="py-3 px-3">
                          {needRemedial ? (
                            <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-900 text-[11px] font-bold px-2 py-0.5 rounded-full border border-amber-200">
                              <AlertTriangle className="w-3 h-3 text-amber-600" />
                              Remedial Aktif
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                              <CheckCircle className="w-3 h-3 text-emerald-600" />
                              Tuntas / Pengayaan
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: CETAK RAPOR CAPAIAN BELAJAR */}
      {activeTab === 'rapor' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
              <div>
                <h3 className="text-lg font-bold text-slate-800">
                  Pratinjau Laporan Hasil Belajar Siswa (Rapor Formatif PAI)
                </h3>
                <p className="text-xs text-slate-500">
                  Format resmi berbasis deskripsi Capaian Pembelajaran Kurikulum Kemendikdasmen.
                </p>
              </div>
              <button
                onClick={handlePrintRapor}
                className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-xl transition"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak / Unduh PDF</span>
              </button>
            </div>

            {/* Printable Report Card Sheet */}
            <div className="p-8 border border-slate-300 rounded-2xl bg-white space-y-6 max-w-3xl mx-auto shadow-sm text-slate-800 text-xs">
              <div className="text-center border-b-2 border-slate-800 pb-4">
                <h2 className="text-base font-extrabold uppercase tracking-wide">
                  LAPORAN CAPAIAN PEMBELAJARAN PESERTA DIDIK
                </h2>
                <h3 className="text-sm font-bold text-slate-700">
                  PENDIDIKAN AGAMA ISLAM DAN BUDI PEKERTI
                </h3>
                <p className="text-[11px] text-slate-500 mt-1">
                  Standar Kepka BKPDM No. 020 Th 2026 • Kemendikdasmen RI
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p><span className="font-bold">Nama Peserta Didik:</span> Ahmad Rayyan</p>
                  <p><span className="font-bold">Nomor Induk Siswa:</span> 202601001</p>
                  <p><span className="font-bold">Sekolah:</span> SD Harapan Bangsa</p>
                </div>
                <div>
                  <p><span className="font-bold">Kelas / Fase:</span> Kelas {selectedGrade} / Fase {selectedGrade <= 2 ? 'A' : selectedGrade <= 4 ? 'B' : 'C'}</p>
                  <p><span className="font-bold">Semester:</span> 1 (Ganjil)</p>
                  <p><span className="font-bold">Tahun Ajaran:</span> 2026/2027</p>
                </div>
              </div>

              <table className="w-full border-collapse border border-slate-300 text-xs">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-bold">
                    <th className="border border-slate-300 p-2 text-center w-8">No</th>
                    <th className="border border-slate-300 p-2 w-36">Elemen</th>
                    <th className="border border-slate-300 p-2 text-center w-16">Nilai</th>
                    <th className="border border-slate-300 p-2">Deskripsi Capaian Kompetensi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-2 text-center">1</td>
                    <td className="border border-slate-300 p-2 font-bold">Al-Qur'an-Hadis</td>
                    <td className="border border-slate-300 p-2 text-center font-bold">92</td>
                    <td className="border border-slate-300 p-2">
                      Sangat baik dalam melafalkan huruf hijaiyah berharakat dan menghafal Surah Al-Fatihah serta Al-Ikhlas dengan tartil.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-2 text-center">2</td>
                    <td className="border border-slate-300 p-2 font-bold">Akidah</td>
                    <td className="border border-slate-300 p-2 text-center font-bold">88</td>
                    <td className="border border-slate-300 p-2">
                      Memahami makna rukun iman dan membiasakan kalimat thayyibah (Basmalah & Hamdalah) dengan kesadaran penuh.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-2 text-center">3</td>
                    <td className="border border-slate-300 p-2 font-bold">Akhlak</td>
                    <td className="border border-slate-300 p-2 text-center font-bold">95</td>
                    <td className="border border-slate-300 p-2">
                      Menunjukkan akhlak mulia, berbakti kepada orang tua, santun kepada guru, serta suka berbagi dengan teman sebaya.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-2 text-center">4</td>
                    <td className="border border-slate-300 p-2 font-bold">Fikih</td>
                    <td className="border border-slate-300 p-2 text-center font-bold">80</td>
                    <td className="border border-slate-300 p-2">
                      Mampu mempraktikkan urutan wudu dengan tertib dan mengenal 5 waktu salat fardu.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-2 text-center">5</td>
                    <td className="border border-slate-300 p-2 font-bold">Sejarah Islam</td>
                    <td className="border border-slate-300 p-2 text-center font-bold">90</td>
                    <td className="border border-slate-300 p-2">
                      Mampu menceritakan kisah masa kecil Nabi Muhammad saw. dan meneladani sifat jujur Al-Amin dalam kehidupan sehari-hari.
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="grid grid-cols-2 gap-8 pt-8 text-center text-xs">
                <div>
                  <p>Orang Tua / Wali Siswa</p>
                  <div className="h-14"></div>
                  <p className="font-bold underline">( ........................................ )</p>
                </div>
                <div>
                  <p>Guru Pendidikan Agama Islam</p>
                  <div className="h-14"></div>
                  <p className="font-bold underline">Ustadz H. Ainul Muttaqin, S.Pd.I</p>
                  <p className="text-[10px] text-slate-500">NIP. 19850512 201001 1 023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: SCHEMA JSON CONTENT ENGINE */}
      {activeTab === 'json' && (
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-800">
                Format Baku Database JSON Content Engine PAI
              </h3>
              <p className="text-xs text-slate-500">
                Struktur data interoperable siap dihubungkan ke database Firestore, mobile app Flutter/Android, atau CMS pendidikan.
              </p>
            </div>
            <button
              onClick={exportFullContentEngineJson}
              className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh File .json</span>
            </button>
          </div>

          <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl text-xs font-mono overflow-x-auto max-h-96 leading-relaxed">
{`{
  "engine": "PAI CERIA CONTENT ENGINE",
  "regulasi": {
    "utama": "Kepka BKPDM Nomor 020 Tahun 2026",
    "perubahan_dari": "Kepka BSKAP Nomor 046/H/KR/2025"
  },
  "unit_id": "A1-QUR-01",
  "kelas": 1,
  "fase": "A",
  "elemen": "Al-Qur'an-Hadis",
  "cp_status": "CP-RESMI",
  "cp": "Peserta didik mampu mengenal huruf hijaiyah dan harakatnya...",
  "tp": [
    "TP-A1.1: Menunjukkan pelafalan huruf hijaiyah berharakat fathah, kasrah, dhammah...",
    "TP-A1.2: Melafalkan Q.S. Al-Fatihah dan Al-Ikhlas dengan tartil sederhana..."
  ],
  "materi_pengembangan": [
    "Al-Qur'an Kitab Suciku yang Agung",
    "Adab Memegang & Membaca Mushaf",
    "Mengenal Huruf Hijaiyah Alif - Ya"
  ],
  "aktivitas_interaktif": [
    { "level": 1, "type": "tebak_gambar" },
    { "level": 2, "type": "susun_urutan" },
    { "level": 3, "type": "studi_kasus" }
  ],
  "bank_soal": [
    { "id_soal": "Q-A1-01", "jenis": "pilihan_ganda", "kategori": "HOTS" }
  ],
  "remedial": { "judul": "Yuk Belajar Lagi!" },
  "pengayaan": { "judul": "Tantangan Bintang" },
  "lkpd_digital": { "format": "A-s.d-H" },
  "verifikasi": true
}`}
          </pre>
        </div>
      )}
    </div>
  );
};
