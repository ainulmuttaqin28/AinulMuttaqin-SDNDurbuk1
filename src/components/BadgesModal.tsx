import React from 'react';
import { Award, Sparkles, X, CheckCircle, Lock } from 'lucide-react';

interface BadgesModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentXp: number;
  studentLevel: number;
  unlockedBadges: string[];
}

export const BadgesModal: React.FC<BadgesModalProps> = ({
  isOpen,
  onClose,
  studentXp,
  studentLevel,
  unlockedBadges
}) => {
  if (!isOpen) return null;

  const BADGES_LIST = [
    {
      id: 'sahabat_quran',
      name: 'Sahabat Al-Qur\'an',
      icon: '📖',
      desc: 'Berhasil mempelajari materi Al-Qur\'an & menyelesaikan hafalan surah pendek.',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      id: 'anak_jujur',
      name: 'Anak Jujur (Al-Amin)',
      icon: '🛡️',
      desc: 'Menunjukkan kejujuran dan menyelesaikan studi kasus akhlak terpuji.',
      color: 'from-amber-400 to-orange-500'
    },
    {
      id: 'ahli_fikih',
      name: 'Ahli Fikih Cilik',
      icon: '🕌',
      desc: 'Menguasai tata cara wudu dan gerakan salat fardu dengan tertib.',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 'pecinta_rasul',
      name: 'Pecinta Rasulullah',
      icon: '💚',
      desc: 'Meneladani kisah perjuangan dan sifat-sifat mulia Nabi Muhammad saw.',
      color: 'from-green-400 to-emerald-600'
    },
    {
      id: 'sahabat_akhlak',
      name: 'Sahabat Berakhlak Mulia',
      icon: '🌸',
      desc: 'Berbakti kepada orang tua, hormat kepada guru, dan rukun sesama sahabat.',
      color: 'from-rose-400 to-pink-500'
    },
    {
      id: 'penjelajah_sejarah',
      name: 'Penjelajah Sejarah Islam',
      icon: '📜',
      desc: 'Menyelesaikan petualangan kisah para nabi dan Khulafaur Rasyidin.',
      color: 'from-purple-400 to-violet-500'
    }
  ];

  const nextLevelXp = studentLevel * 100;
  const currentLevelBase = (studentLevel - 1) * 100;
  const progressInLevel = Math.max(0, Math.min(100, studentXp - currentLevelBase));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-emerald-100 p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center text-2xl font-bold">
              <Award className="w-7 h-7 text-amber-600" />
            </div>
            <div>
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                SISTEM PENGHARGAAN ISLAMI
              </span>
              <h2 className="text-xl font-extrabold text-slate-800 font-['Fredoka'] mt-0.5">
                Koleksi Lencana & Prestasi
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

        {/* Level & XP Progress Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-amber-400 text-amber-950 font-extrabold flex items-center justify-center text-base">
                L{studentLevel}
              </div>
              <div>
                <p className="font-extrabold text-sm font-['Fredoka'] text-amber-300">
                  Level {studentLevel}: Penjelajah Iman
                </p>
                <p className="text-[11px] text-emerald-100">Menuju Level {studentLevel + 1}</p>
              </div>
            </div>

            <div className="text-right">
              <span className="font-extrabold text-lg text-amber-300 flex items-center gap-1 justify-end">
                <Sparkles className="w-4 h-4" />
                {studentXp} XP
              </span>
              <span className="text-[11px] text-emerald-200">
                {nextLevelXp - studentXp > 0 ? `${nextLevelXp - studentXp} XP lagi` : 'Level Up!'}
              </span>
            </div>
          </div>

          <div className="w-full bg-emerald-950/60 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-amber-300 to-amber-400 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressInLevel}%` }}
            />
          </div>
        </div>

        {/* Badges Grid */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            6 Lencana Kehormatan PAI Ceria
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BADGES_LIST.map((b) => {
              const isUnlocked = unlockedBadges.includes(b.id);
              return (
                <div
                  key={b.id}
                  className={`p-3.5 rounded-2xl border transition flex items-start gap-3 ${
                    isUnlocked
                      ? 'bg-amber-50/60 border-amber-300 shadow-sm'
                      : 'bg-slate-50 border-slate-200 opacity-60'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-sm ${
                      isUnlocked
                        ? `bg-gradient-to-br ${b.color} text-white`
                        : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    {isUnlocked ? b.icon : <Lock className="w-5 h-5 text-slate-400" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <h4 className="font-extrabold text-xs text-slate-800 truncate font-['Fredoka']">
                        {b.name}
                      </h4>
                      {isUnlocked && (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      )}
                    </div>
                    <p className="text-[11px] text-slate-600 leading-tight">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 leading-relaxed">
          💡 <strong>Tips Gamifikasi Islami:</strong> Belajar materi (+5 XP), menjawab latihan (+10 XP), menyelesaikan kuis (+20 XP), menyelesaikan LKPD (+25 XP), dan proyek mini (+50 XP).
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
