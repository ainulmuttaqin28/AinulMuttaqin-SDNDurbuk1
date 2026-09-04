import React from 'react';
import { OFFICIAL_REGULATION_INFO } from '../data/curriculumMasterMap';
import { ShieldCheck, BookOpen, ExternalLink, X, FileText, CheckCircle2 } from 'lucide-react';

interface RegulatoryReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegulatoryReferenceModal: React.FC<RegulatoryReferenceModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-emerald-100 p-6 sm:p-8 space-y-6">
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl font-bold">
              <ShieldCheck className="w-7 h-7 text-emerald-700" />
            </div>
            <div>
              <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full border border-amber-200">
                LANDASAN YURIDIS & PEDAGOGIS
              </span>
              <h2 className="text-xl font-extrabold text-slate-800 font-['Fredoka'] mt-0.5">
                Sumber & Regulasi Resmi Kurikulum
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hierarchy of Sources */}
        <div className="space-y-4 text-xs text-slate-700">
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
            <span className="font-bold text-emerald-950 block text-sm">
              🏛️ Hierarki Sumber Regulasi Resmi:
            </span>
            <ul className="space-y-1.5 text-xs text-slate-800">
              {OFFICIAL_REGULATION_INFO.hierarchy.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Regulatory Articles */}
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">
                1. Regulasi Utama (Prioritas 1):
              </span>
              <p className="font-semibold text-emerald-800 mb-1">
                {OFFICIAL_REGULATION_INFO.primaryRegulation}
              </p>
              <p className="text-slate-600 leading-relaxed">
                Tentang perubahan atas {OFFICIAL_REGULATION_INFO.amendsRegulation}.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">
                2. Instansi Pembina:
              </span>
              <p className="text-slate-700">
                <strong>Kementerian:</strong> {OFFICIAL_REGULATION_INFO.ministry}<br />
                <strong>Badan:</strong> {OFFICIAL_REGULATION_INFO.body}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">
                3. Prinsip Pembedaan [CP-RESMI] vs [MATERI-PENGEMBANGAN]:
              </span>
              <p className="text-slate-600 leading-relaxed">
                Capaian Pembelajaran (CP) pada regulasi pemerintah ditetapkan berbasis fase (Fase A, B, C) dan tidak mengikat pembagian kelas tunggal secara kaku. Oleh karena itu, aplikasi PAI Ceria dengan disiplin ilmiah menandai pembagian per kelas sebagai <strong>[MATERI-PENGEMBANGAN]</strong> yang diturunkan dari <strong>[CP-RESMI]</strong> fase, demi menjamin kepatuhan hukum dan mutu kurikulum nasional.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950">
              <span className="font-bold block mb-1">
                4. Protokol Verifikasi Ayat, Teks Arab, Hadis, & Fikih:
              </span>
              <p className="leading-relaxed">
                Setiap teks Al-Qur'an menggunakan rujukan resmi Mushaf Standar Indonesia (Kemenag RI), hadis merujuk kitab mu'tabar (Shahih Bukhari, Muslim, Sunan Tirmidzi), dan ketentuan fikih disajikan secara santun, toleran, dan tidak dogmatis satu arah.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Terverifikasi Sistem Kurikulum BKPDM Kemendikdasmen 2026
          </span>
          <button
            onClick={onClose}
            className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition"
          >
            Saya Memahami
          </button>
        </div>
      </div>
    </div>
  );
};
