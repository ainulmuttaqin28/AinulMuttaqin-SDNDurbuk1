import React from 'react';
import { Sparkles, Award, Volume2, VolumeX, ShieldCheck, Map, BookOpen, GraduationCap } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  currentView: 'student' | 'curriculum' | 'teacher' | 'regulation';
  setCurrentView: (view: 'student' | 'curriculum' | 'teacher' | 'regulation') => void;
  selectedGrade: number;
  setSelectedGrade: (grade: number) => void;
  studentXp: number;
  studentLevel: number;
  onOpenBadgesModal: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  selectedGrade,
  setSelectedGrade,
  studentXp,
  studentLevel,
  onOpenBadgesModal,
  soundEnabled,
  setSoundEnabled
}) => {
  const getFaseName = (grade: number) => {
    if (grade <= 2) return 'Fase A (Kelas 1–2)';
    if (grade <= 4) return 'Fase B (Kelas 3–4)';
    return 'Fase C (Kelas 5–6)';
  };

  const toggleSound = () => {
    const newVal = !soundEnabled;
    soundManager.soundEnabled = newVal;
    setSoundEnabled(newVal);
  };

  return (
    <header className="sticky top-0 z-40 bg-emerald-700 text-white shadow-md border-b border-emerald-800">
      {/* Top Banner */}
      <div className="bg-emerald-900/80 px-4 py-1 text-xs text-emerald-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="bg-amber-400 text-amber-950 font-bold px-2 py-0.5 rounded text-[11px]">
            Kepka BKPDM No. 020 Th 2026
          </span>
          <span className="hidden sm:inline">Kurikulum Berkesadaran, Bermakna, & Menggembirakan</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentView('regulation')}
            className="hover:underline flex items-center gap-1 text-emerald-200 hover:text-white"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Landasan Regulasi & Verifikasi</span>
          </button>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Brand */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentView('student')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-emerald-950 flex items-center justify-center font-extrabold shadow-md border border-amber-200 text-lg font-['Fredoka']">
            ☪️
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight font-['Fredoka'] text-amber-300">
                PAI CERIA
              </span>
              <span className="bg-emerald-800/80 text-emerald-200 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-600">
                SD 1–6
              </span>
            </div>
            <p className="text-[11px] text-emerald-200 font-medium">Petualangan Belajar Islam Berkarakter</p>
          </div>
        </div>

        {/* Grade Selector */}
        <div className="flex items-center bg-emerald-800/90 p-1 rounded-xl border border-emerald-600">
          <span className="text-xs font-semibold px-2 text-emerald-200 hidden md:inline">
            Pilih Kelas:
          </span>
          {[1, 2, 3, 4, 5, 6].map((grade) => (
            <button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              className={`px-2.5 py-1 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                selectedGrade === grade
                  ? 'bg-amber-400 text-amber-950 shadow-sm scale-105'
                  : 'text-emerald-100 hover:bg-emerald-700/60'
              }`}
            >
              Kls {grade}
            </button>
          ))}
        </div>

        {/* User Stats & Sound */}
        <div className="flex items-center gap-3">
          {/* XP & Level Badge */}
          <div
            onClick={onOpenBadgesModal}
            className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 border border-emerald-600 px-3 py-1.5 rounded-xl cursor-pointer transition shadow-inner"
            title="Klik untuk melihat lencana & profil"
          >
            <div className="w-7 h-7 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center font-bold text-xs">
              L{studentLevel}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-[11px] font-bold text-amber-300">
                <Sparkles className="w-3 h-3" />
                <span>{studentXp} XP</span>
              </div>
              <div className="w-16 bg-emerald-950 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-amber-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (studentXp % 100))}%` }}
                />
              </div>
            </div>
            <Award className="w-4 h-4 text-amber-300 ml-1" />
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-emerald-200 hover:text-white border border-emerald-600 transition"
            title={soundEnabled ? 'Matikan Suara' : 'Nyalakan Suara'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-emerald-400" />}
          </button>
        </div>
      </div>

      {/* Navigation Sub-bar */}
      <div className="bg-emerald-800/90 border-t border-emerald-700/60 px-4 sm:px-6 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto gap-3 text-xs">
          <div className="flex items-center gap-2 shrink-0">
            <span className="bg-emerald-900 text-amber-300 font-bold px-2 py-0.5 rounded text-[11px]">
              {getFaseName(selectedGrade)}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setCurrentView('student')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-semibold transition ${
                currentView === 'student'
                  ? 'bg-amber-400 text-amber-950 shadow'
                  : 'text-emerald-100 hover:bg-emerald-700'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Petualangan Belajar</span>
            </button>

            <button
              onClick={() => setCurrentView('curriculum')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-semibold transition ${
                currentView === 'curriculum'
                  ? 'bg-amber-400 text-amber-950 shadow'
                  : 'text-emerald-100 hover:bg-emerald-700'
              }`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>Master Curriculum Map</span>
            </button>

            <button
              onClick={() => setCurrentView('teacher')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-semibold transition ${
                currentView === 'teacher'
                  ? 'bg-amber-400 text-amber-950 shadow'
                  : 'text-emerald-100 hover:bg-emerald-700'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Portal Guru & Audit CP</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
