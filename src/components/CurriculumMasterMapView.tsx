import React, { useState } from 'react';
import { 
  MASTER_CURRICULUM_MAP, 
  SUMMARY_STATS, 
  VERIFICATION_STATUS_TABLE,
  OFFICIAL_REGULATION_INFO 
} from '../data/curriculumMasterMap';
import { ElemenPAI } from '../types/curriculum';
import { ShieldCheck, Filter, Download, CheckCircle, AlertCircle, BookOpen, Layers } from 'lucide-react';

interface CurriculumMasterMapViewProps {
  selectedGrade: number;
  setSelectedGrade: (grade: number) => void;
  onSelectUnit?: (unitId: string) => void;
}

export const CurriculumMasterMapView: React.FC<CurriculumMasterMapViewProps> = ({
  selectedGrade,
  setSelectedGrade,
  onSelectUnit
}) => {
  const [filterElemen, setFilterElemen] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'map' | 'stats' | 'verification'>('map');

  const elemenList: ElemenPAI[] = [
    'Al-Qur\'an-Hadis',
    'Akidah',
    'Akhlak',
    'Fikih',
    'Sejarah Peradaban Islam'
  ];

  const filteredRows = MASTER_CURRICULUM_MAP.filter((row) => {
    const matchGrade = selectedGrade === 0 || row.kelas === selectedGrade;
    const matchElemen = filterElemen === 'all' || row.elemen === filterElemen;
    return matchGrade && matchElemen;
  });

  const exportMapToJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(MASTER_CURRICULUM_MAP, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "PAI_CERIA_MASTER_CURRICULUM_MAP.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Regulasi Resmi: Kepka BKPDM No. 020 Th 2026
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-200">
                BSKAP No. 046/H/KR/2025
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-['Fredoka']">
              MASTER CONTENT MAP PAI SD KELAS 1–6
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Pemetaan lengkap Capaian Pembelajaran Resmi, Tujuan Pembelajaran Turunan, dan Materi Pengembangan spiral berbasis Fase A (Kelas 1–2), Fase B (Kelas 3–4), dan Fase C (Kelas 5–6).
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={exportMapToJson}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-sm transition"
            >
              <Download className="w-4 h-4" />
              <span>Ekspor Data JSON</span>
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 border-b border-slate-200 mt-6 pt-2">
          <button
            onClick={() => setActiveTab('map')}
            className={`pb-2.5 px-4 text-xs font-bold transition border-b-2 flex items-center gap-1.5 ${
              activeTab === 'map'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Tabel Master Map</span>
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`pb-2.5 px-4 text-xs font-bold transition border-b-2 flex items-center gap-1.5 ${
              activeTab === 'stats'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Total Statistik Content Engine</span>
          </button>
          <button
            onClick={() => setActiveTab('verification')}
            className={`pb-2.5 px-4 text-xs font-bold transition border-b-2 flex items-center gap-1.5 ${
              activeTab === 'verification'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>Status Validasi & Audit Regulasi</span>
          </button>
        </div>
      </div>

      {activeTab === 'stats' && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-center">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">Total Unit</span>
            <span className="text-3xl font-extrabold text-emerald-700 font-['Fredoka'] block my-1">{SUMMARY_STATS.totalUnit} Unit</span>
            <span className="text-[11px] text-emerald-600">5 Unit × 6 Kelas (Fase A, B, C)</span>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl text-center">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block">Total Submateri</span>
            <span className="text-3xl font-extrabold text-blue-700 font-['Fredoka'] block my-1">{SUMMARY_STATS.totalSubmateri}</span>
            <span className="text-[11px] text-blue-600">5 Submateri per Unit</span>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-center">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">Total Aktivitas</span>
            <span className="text-3xl font-extrabold text-amber-700 font-['Fredoka'] block my-1">{SUMMARY_STATS.totalAktivitas}</span>
            <span className="text-[11px] text-amber-600">Level 1 s.d. Level 4 Interaktif</span>
          </div>

          <div className="bg-purple-50 border border-purple-200 p-4 rounded-2xl text-center">
            <span className="text-xs font-bold text-purple-800 uppercase tracking-wider block">Total Bank Soal</span>
            <span className="text-3xl font-extrabold text-purple-700 font-['Fredoka'] block my-1">{SUMMARY_STATS.totalSoal}</span>
            <span className="text-[11px] text-purple-600">Pilihan Ganda, B/S, HOTS</span>
          </div>

          <div className="bg-rose-50 border border-rose-200 p-4 rounded-2xl text-center">
            <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block">Total LKPD</span>
            <span className="text-3xl font-extrabold text-rose-700 font-['Fredoka'] block my-1">{SUMMARY_STATS.totalLkpd}</span>
            <span className="text-[11px] text-rose-600">Lembar Kerja Digital Siswa</span>
          </div>

          <div className="bg-teal-50 border border-teal-200 p-4 rounded-2xl text-center">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block">Total Asesmen</span>
            <span className="text-3xl font-extrabold text-teal-700 font-['Fredoka'] block my-1">{SUMMARY_STATS.totalAsesmen}</span>
            <span className="text-[11px] text-teal-600">Formatif & Sumatif Lengkap</span>
          </div>
        </div>
      )}

      {activeTab === 'verification' && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8">
          <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>Matriks Status Verifikasi & Integritas Konten</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                  <th className="py-3 px-4 font-bold">Komponen</th>
                  <th className="py-3 px-4 font-bold">Status Verifikasi</th>
                  <th className="py-3 px-4 font-bold">Keterangan Sumber & Landasan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {VERIFICATION_STATUS_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80">
                    <td className="py-3 px-4 font-semibold text-slate-800">{row.komponen}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-600">{row.keterangan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Prinsip Ketat Validasi Konten PAI:</p>
              <p>
                Sesuai instruksi mutlak: Capaian Pembelajaran (CP) dalam aplikasi ini murni diambil dari regulasi resmi pemerintah tanpa diubah. Rumusan pembagian per kelas merupakan <strong>[MATERI-PENGEMBANGAN]</strong> yang diturunkan secara pedagogis dari CP Fase yang relevan guna menjamin pembelajaran berkesadaran, bermakna, dan menggembirakan.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Filter Toolbar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 mr-2">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            <span>Filter Kelas:</span>
          </div>
          <button
            onClick={() => setSelectedGrade(0)}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition ${
              selectedGrade === 0 ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Semua (1–6)
          </button>
          {[1, 2, 3, 4, 5, 6].map((gr) => (
            <button
              key={gr}
              onClick={() => setSelectedGrade(gr)}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition ${
                selectedGrade === gr ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Kelas {gr}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-600">Elemen:</span>
          <select
            value={filterElemen}
            onChange={(e) => setFilterElemen(e.target.value)}
            className="text-xs font-semibold bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="all">Semua Elemen (5 Elemen)</option>
            {elemenList.map((elm) => (
              <option key={elm} value={elm}>
                {elm}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* MASTER CONTENT MAP TABLE */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-emerald-800 text-white text-[11px] uppercase tracking-wider font-bold">
                <th className="py-3 px-3 w-16 text-center">Kelas</th>
                <th className="py-3 px-3 w-14 text-center">Fase</th>
                <th className="py-3 px-4 w-32">Elemen</th>
                <th className="py-3 px-4 w-72">Capaian Pembelajaran (CP Resmi)</th>
                <th className="py-3 px-4 w-80">Tujuan Pembelajaran (TP Turunan)</th>
                <th className="py-3 px-4 w-60">Unit Pembelajaran</th>
                <th className="py-3 px-4 w-72">Materi Pengembangan (Spiral)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-amber-50/50 transition duration-150 align-top">
                  {/* Kelas */}
                  <td className="py-3 px-3 text-center font-extrabold text-slate-800">
                    <span className="inline-block w-8 h-8 rounded-xl bg-slate-100 text-slate-800 leading-8 text-sm font-['Fredoka']">
                      {row.kelas}
                    </span>
                  </td>

                  {/* Fase */}
                  <td className="py-3 px-3 text-center font-bold">
                    <span className={`px-2 py-0.5 rounded text-[10px] ${
                      row.fase === 'A' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                      row.fase === 'B' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                      'bg-purple-100 text-purple-800 border border-purple-200'
                    }`}>
                      Fase {row.fase}
                    </span>
                  </td>

                  {/* Elemen */}
                  <td className="py-3 px-4 font-bold text-emerald-900">
                    <span className="bg-emerald-50 text-emerald-800 px-2 py-1 rounded-lg border border-emerald-200 inline-block">
                      {row.elemen}
                    </span>
                  </td>

                  {/* CP Resmi */}
                  <td className="py-3 px-4 leading-relaxed text-slate-700 bg-slate-50/50">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="bg-emerald-700 text-white font-bold text-[9px] px-1.5 py-0.2 rounded">
                        [CP-RESMI]
                      </span>
                    </div>
                    <p className="italic text-slate-700 text-[11px]">{row.cpResmi}</p>
                  </td>

                  {/* TP Turunan */}
                  <td className="py-3 px-4 text-slate-700">
                    <div className="flex items-center gap-1 mb-1.5">
                      <span className="bg-blue-600 text-white font-bold text-[9px] px-1.5 py-0.2 rounded">
                        [TP-TURUNAN]
                      </span>
                    </div>
                    <ul className="space-y-1 text-[11px]">
                      {row.tpTurunan.map((tp, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-1">
                          <span className="text-blue-500 font-bold">•</span>
                          <span>{tp}</span>
                        </li>
                      ))}
                    </ul>
                  </td>

                  {/* Unit */}
                  <td className="py-3 px-4">
                    <span className="font-mono text-[10px] text-slate-400 block">{row.unitId}</span>
                    <button
                      onClick={() => onSelectUnit && onSelectUnit(row.unitId)}
                      className="font-bold text-slate-900 text-xs hover:text-emerald-700 text-left mt-0.5 hover:underline"
                    >
                      {row.unitTitle}
                    </button>
                    <span className="block mt-1.5 text-[10px] text-emerald-700 bg-emerald-50 p-1 rounded border border-emerald-100">
                      💡 {row.karakterSpiral}
                    </span>
                  </td>

                  {/* Materi Pengembangan */}
                  <td className="py-3 px-4 text-slate-700 bg-slate-50/30">
                    <div className="flex items-center gap-1 mb-1.5">
                      <span className="bg-amber-600 text-white font-bold text-[9px] px-1.5 py-0.2 rounded">
                        [MATERI-PENGEMBANGAN]
                      </span>
                    </div>
                    <ol className="list-decimal list-inside space-y-0.5 text-[11px]">
                      {row.materiPengembangan.map((mat, mIdx) => (
                        <li key={mIdx} className="text-slate-800">
                          {mat}
                        </li>
                      ))}
                    </ol>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredRows.length === 0 && (
          <div className="py-12 text-center text-slate-500">
            Tidak ada baris yang sesuai dengan kriteria filter saat ini.
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="mt-4 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>
          Menampilkan <strong>{filteredRows.length}</strong> dari <strong>{MASTER_CURRICULUM_MAP.length}</strong> unit kurikulum resmi SD 1–6.
        </p>
        <p className="text-[11px] text-slate-400">
          PAI CERIA Content Engine © 2026 – Kemendikdasmen RI Standards.
        </p>
      </div>
    </div>
  );
};
