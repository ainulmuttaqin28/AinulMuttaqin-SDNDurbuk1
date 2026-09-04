import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { StudentAdventure } from './components/StudentAdventure';
import { CurriculumMasterMapView } from './components/CurriculumMasterMapView';
import { TeacherDashboard } from './components/TeacherDashboard';
import { RegulatoryReferenceModal } from './components/RegulatoryReferenceModal';
import { BadgesModal } from './components/BadgesModal';

export default function App() {
  const [currentView, setCurrentView] = useState<'student' | 'curriculum' | 'teacher' | 'regulation'>('student');
  const [selectedGrade, setSelectedGrade] = useState<number>(1);
  const [activeUnitId, setActiveUnitId] = useState<string | undefined>('A1-QUR-01');
  const [studentXp, setStudentXp] = useState<number>(45);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>(['sahabat_quran']);
  const [isBadgesModalOpen, setIsBadgesModalOpen] = useState<boolean>(false);
  const [isRegModalOpen, setIsRegModalOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const studentLevel = Math.floor(studentXp / 100) + 1;

  const handleAwardBadge = (badgeId: string) => {
    if (!unlockedBadges.includes(badgeId)) {
      setUnlockedBadges((prev) => [...prev, badgeId]);
      setIsBadgesModalOpen(true);
    }
  };

  const handleSelectUnitFromMap = (unitId: string) => {
    // Determine grade from unitId, e.g. A1- => 1, A2- => 2, B3- => 3, etc.
    const gradeNum = parseInt(unitId.charAt(1), 10);
    if (!isNaN(gradeNum)) {
      setSelectedGrade(gradeNum);
    }
    setActiveUnitId(unitId);
    setCurrentView('student');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-['Plus_Jakarta_Sans'] antialiased">
      {/* Navbar Component */}
      <Navbar
        currentView={currentView}
        setCurrentView={(v) => {
          if (v === 'regulation') {
            setIsRegModalOpen(true);
          } else {
            setCurrentView(v);
          }
        }}
        selectedGrade={selectedGrade}
        setSelectedGrade={(g) => {
          setSelectedGrade(g);
          setActiveUnitId(undefined);
        }}
        studentXp={studentXp}
        studentLevel={studentLevel}
        onOpenBadgesModal={() => setIsBadgesModalOpen(true)}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {currentView === 'student' && (
          <StudentAdventure
            selectedGrade={selectedGrade}
            setSelectedGrade={setSelectedGrade}
            studentXp={studentXp}
            setStudentXp={setStudentXp}
            onAwardBadge={handleAwardBadge}
            activeUnitId={activeUnitId}
            setActiveUnitId={setActiveUnitId}
          />
        )}

        {currentView === 'curriculum' && (
          <CurriculumMasterMapView
            selectedGrade={selectedGrade}
            setSelectedGrade={setSelectedGrade}
            onSelectUnit={handleSelectUnitFromMap}
          />
        )}

        {currentView === 'teacher' && (
          <TeacherDashboard
            selectedGrade={selectedGrade}
            setSelectedGrade={setSelectedGrade}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-md bg-emerald-700 text-white flex items-center justify-center font-bold text-[10px]">
              ☪
            </span>
            <span className="font-bold text-slate-700 font-['Fredoka']">
              PAI CERIA – Petualangan Belajar Islam
            </span>
            <span className="text-[11px] text-slate-400">| Media Pembelajaran Interaktif SD 1–6</span>
          </div>

          <div className="flex items-center gap-3 text-slate-600">
            <button onClick={() => setIsRegModalOpen(true)} className="hover:text-emerald-700 underline">
              Regulasi BKPDM No. 020 Th 2026
            </button>
            <span>•</span>
            <button onClick={() => setCurrentView('curriculum')} className="hover:text-emerald-700 underline">
              Master Map
            </button>
            <span>•</span>
            <button onClick={() => setCurrentView('teacher')} className="hover:text-emerald-700 underline">
              Portal Guru
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <RegulatoryReferenceModal
        isOpen={isRegModalOpen}
        onClose={() => setIsRegModalOpen(false)}
      />

      <BadgesModal
        isOpen={isBadgesModalOpen}
        onClose={() => setIsBadgesModalOpen(false)}
        studentXp={studentXp}
        studentLevel={studentLevel}
        unlockedBadges={unlockedBadges}
      />
    </div>
  );
}
