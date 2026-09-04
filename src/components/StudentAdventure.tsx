import React, { useState } from 'react';
import { UNITS_DATA } from '../data/unitsData';
import { MASTER_CURRICULUM_MAP } from '../data/curriculumMasterMap';
import { ElemenPAI, UnitDetail } from '../types/curriculum';
import { 
  Sparkles, CheckCircle, BookOpen, Gamepad2, FileText, 
  RotateCcw, Rocket, Heart, ArrowRight, Volume2, Award, 
  HelpCircle, Check, X, ShieldCheck, ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';

interface StudentAdventureProps {
  selectedGrade: number;
  setSelectedGrade: (grade: number) => void;
  studentXp: number;
  setStudentXp: React.Dispatch<React.SetStateAction<number>>;
  onAwardBadge: (badgeId: string) => void;
  activeUnitId?: string;
  setActiveUnitId: (unitId?: string) => void;
}

export const StudentAdventure: React.FC<StudentAdventureProps> = ({
  selectedGrade,
  setSelectedGrade,
  studentXp,
  setStudentXp,
  onAwardBadge,
  activeUnitId,
  setActiveUnitId
}) => {
  const [selectedElemen, setSelectedElemen] = useState<ElemenPAI>('Al-Qur\'an-Hadis');
  const [activeTab, setActiveTab] = useState<'materi' | 'aktivitas' | 'kuis' | 'lkpd' | 'remedial' | 'pengayaan' | 'refleksi'>('materi');

  // Interactive Quiz state
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Interactive Activity state
  const [activitySelectedOption, setActivitySelectedOption] = useState<string | null>(null);
  const [orderItems, setOrderItems] = useState<{ id: string; label: string; correctOrder?: number }[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});

  // LKPD State
  const [lkpdAnswers, setLkpdAnswers] = useState({
    nama: 'Ahmad Zaki',
    kelas: `Kelas ${selectedGrade} SD`,
    tanggal: new Date().toLocaleDateString('id-ID'),
    mengamati: '',
    berpikir: '',
    berdiskusi: '',
    mencoba: '',
    menyimpulkan: '',
    refleksi: ''
  });
  const [lkpdSaved, setLkpdSaved] = useState(false);

  // Remedial flag
  const [showRemedialPrompt, setShowRemedialPrompt] = useState(false);

  const elemenTabs: { name: ElemenPAI; icon: string }[] = [
    { name: 'Al-Qur\'an-Hadis', icon: '📖' },
    { name: 'Akidah', icon: '🤲' },
    { name: 'Akhlak', icon: '🌸' },
    { name: 'Fikih', icon: '🕌' },
    { name: 'Sejarah Peradaban Islam', icon: '📜' }
  ];

  // Find units for current grade and elemen
  const unitsInGrade = UNITS_DATA.filter((u) => u.kelas === selectedGrade);
  const currentUnit = activeUnitId 
    ? UNITS_DATA.find((u) => u.kodeUnit === activeUnitId) || unitsInGrade[0] || UNITS_DATA[0]
    : unitsInGrade.find((u) => u.elemen === selectedElemen) || unitsInGrade[0] || UNITS_DATA[0];

  // Map rows for this grade
  const mapRowsInGrade = MASTER_CURRICULUM_MAP.filter((m) => m.kelas === selectedGrade);

  const handleSelectUnit = (unit: UnitDetail) => {
    setActiveUnitId(unit.kodeUnit);
    setSelectedElemen(unit.elemen);
    setActiveTab('materi');
    setQuizCompleted(false);
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handleAnswerQuestion = (option: string) => {
    if (showExplanation) return;
    setSelectedAnswer(option);
    setShowExplanation(true);

    const q = currentUnit.soal[currentQuestionIdx];
    const isCorrect = option === q.jawabanBenar;

    if (isCorrect) {
      soundManager.playCorrect();
      setQuizScore((prev) => prev + 10);
      setStudentXp((prev) => prev + 10);
    } else {
      soundManager.playWrong();
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx < currentUnit.soal.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
      const totalPossible = currentUnit.soal.length * 10;
      const finalPercentage = Math.round((quizScore / totalPossible) * 100);

      if (finalPercentage >= 75) {
        soundManager.playCheer();
        confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
        setStudentXp((prev) => prev + 25);
        // Award badge based on unit element
        if (currentUnit.elemen === 'Al-Qur\'an-Hadis') onAwardBadge('sahabat_quran');
        if (currentUnit.elemen === 'Akhlak') onAwardBadge('anak_jujur');
        if (currentUnit.elemen === 'Fikih') onAwardBadge('ahli_fikih');
        if (currentUnit.elemen === 'Sejarah Peradaban Islam') onAwardBadge('pecinta_rasul');
        setShowRemedialPrompt(false);
      } else {
        setShowRemedialPrompt(true);
      }
    }
  };

  const handleReciteText = (text: string) => {
    soundManager.speakText(text);
  };

  const handleSaveLkpd = () => {
    setLkpdSaved(true);
    soundManager.playCorrect();
    setStudentXp((prev) => prev + 25);
    setTimeout(() => setLkpdSaved(false), 3500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Grade Banner & Overview */}
      <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden mb-8">
        <div className="absolute right-0 bottom-0 opacity-10 text-9xl select-none font-['Amiri'] pointer-events-none">
          بِسْمِ اللَّهِ
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-emerald-800/80 px-3 py-1 rounded-full text-xs font-semibold text-emerald-200 mb-3 border border-emerald-500/50">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Fase {selectedGrade <= 2 ? 'A' : selectedGrade <= 4 ? 'B' : 'C'} – Kelas {selectedGrade} SD</span>
            <span className="text-amber-300 font-bold">• Kurikulum Berkesadaran</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-['Fredoka'] text-amber-300">
            PAI CERIA: Petualangan Belajar Islam
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base mt-2 leading-relaxed">
            Mari menjelajah ajaran Islam dengan penuh kesadaran diri, menemukan makna mendalam dalam kehidupan nyata, dan belajar dengan riang gembira melalui aktivitas interaktif!
          </p>

          {/* Remedial Recommendation Alert if needed */}
          {showRemedialPrompt && (
            <div className="mt-4 p-3.5 bg-amber-500/90 text-amber-950 rounded-2xl flex items-center justify-between gap-3 shadow-md animate-bounce">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌱</span>
                <div>
                  <p className="font-extrabold text-sm">Yuk Belajar Lagi!</p>
                  <p className="text-xs">
                    Skormu belum mencapai target. Mari buka menu <strong>Remedial Ceria</strong> untuk memantapkan materi!
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('remedial')}
                className="bg-emerald-950 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-xl hover:bg-emerald-900 transition shrink-0"
              >
                Buka Remedial
              </button>
            </div>
          )}
        </div>

        {/* 5 Elements Quick Bar */}
        <div className="mt-6 pt-4 border-t border-emerald-500/40 flex flex-wrap items-center gap-2">
          {elemenTabs.map((elm) => (
            <button
              key={elm.name}
              onClick={() => {
                setSelectedElemen(elm.name);
                const matchUnit = unitsInGrade.find((u) => u.elemen === elm.name);
                if (matchUnit) handleSelectUnit(matchUnit);
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedElemen === elm.name
                  ? 'bg-amber-400 text-amber-950 shadow-md scale-105'
                  : 'bg-emerald-800/60 text-emerald-100 hover:bg-emerald-800'
              }`}
            >
              <span>{elm.icon}</span>
              <span>{elm.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Available Units in this Grade and Element */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span>Daftar Unit Pembelajaran</span>
            <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">
              Kelas {selectedGrade} SD
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {unitsInGrade.map((unit) => {
            const isSelected = currentUnit?.kodeUnit === unit.kodeUnit;
            return (
              <div
                key={unit.kodeUnit}
                onClick={() => handleSelectUnit(unit)}
                className={`p-5 rounded-2xl cursor-pointer transition-all border-2 text-left relative ${
                  isSelected
                    ? 'bg-white border-emerald-600 shadow-md ring-4 ring-emerald-500/10'
                    : 'bg-white border-slate-200 hover:border-emerald-300 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {unit.kodeUnit}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {unit.elemen}
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-800 text-base mb-2 font-['Fredoka'] group-hover:text-emerald-700">
                  {unit.namaUnit}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                  {unit.konsepInti}
                </p>

                <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
                  <span className="text-[11px] text-slate-500 font-medium">
                    {unit.materiPengembangan.length} Submateri • 4 Aktivitas
                  </span>
                  <span className="flex items-center gap-1 text-emerald-600 font-bold text-xs">
                    <span>{isSelected ? 'Sedang Dipelajari' : 'Mulai Belajar'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ACTIVE UNIT LEARNING ENGINE */}
      {currentUnit && (
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-12">
          {/* Unit Header Details */}
          <div className="bg-gradient-to-r from-emerald-50 via-slate-50 to-emerald-50/50 p-6 sm:p-8 border-b border-slate-200">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-emerald-700 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md">
                [CP-RESMI]
              </span>
              <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md">
                [TP-TURUNAN]
              </span>
              <span className="bg-amber-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md">
                [MATERI-PENGEMBANGAN]
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                Terverifikasi BKPDM 2026
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-['Fredoka']">
              {currentUnit.namaUnit}
            </h2>

            {/* Official CP Quote */}
            <div className="mt-4 p-3.5 rounded-xl bg-white border border-emerald-200 shadow-sm text-xs leading-relaxed text-slate-700">
              <span className="font-bold text-emerald-900 block mb-1">
                Capaian Pembelajaran Resmi (Kepka BKPDM No. 020 Th 2026):
              </span>
              <p className="italic">"{currentUnit.cpResmi}"</p>
            </div>

            {/* Navigation Tabs for this Unit */}
            <div className="flex items-center gap-2 overflow-x-auto mt-6 pt-2 border-t border-slate-200 text-xs">
              <button
                onClick={() => setActiveTab('materi')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition shrink-0 ${
                  activeTab === 'materi'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>1. Materi & Cerita</span>
              </button>

              <button
                onClick={() => setActiveTab('aktivitas')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition shrink-0 ${
                  activeTab === 'aktivitas'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Gamepad2 className="w-4 h-4" />
                <span>2. Aktivitas Interaktif</span>
              </button>

              <button
                onClick={() => setActiveTab('kuis')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition shrink-0 ${
                  activeTab === 'kuis'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>3. Latihan & Kuis</span>
              </button>

              <button
                onClick={() => setActiveTab('lkpd')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition shrink-0 ${
                  activeTab === 'lkpd'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>4. LKPD Digital</span>
              </button>

              <button
                onClick={() => setActiveTab('remedial')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition shrink-0 ${
                  activeTab === 'remedial'
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
                }`}
              >
                <RotateCcw className="w-4 h-4" />
                <span>5. Remedial</span>
              </button>

              <button
                onClick={() => setActiveTab('pengayaan')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition shrink-0 ${
                  activeTab === 'pengayaan'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-purple-50 text-purple-900 border border-purple-200 hover:bg-purple-100'
                }`}
              >
                <Rocket className="w-4 h-4" />
                <span>6. Pengayaan</span>
              </button>

              <button
                onClick={() => setActiveTab('refleksi')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition shrink-0 ${
                  activeTab === 'refleksi'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-teal-50 text-teal-900 border border-teal-200 hover:bg-teal-100'
                }`}
              >
                <Heart className="w-4 h-4" />
                <span>7. Refleksi Diri</span>
              </button>
            </div>
          </div>

          {/* TAB 1: MATERI & CERITA PEMBUKA */}
          {activeTab === 'materi' && (
            <div className="p-6 sm:p-8 space-y-8">
              {/* Cerita Pembuka Bermakna */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 relative">
                <div className="flex items-center gap-2 mb-2 text-amber-900 font-bold text-sm">
                  <span className="text-xl">🌟</span>
                  <span>Cerita Pembuka Bermakna: {currentUnit.ceritaPembuka.judul}</span>
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                  {currentUnit.ceritaPembuka.narasi}
                </p>
                <div className="p-3 bg-white rounded-xl border border-amber-200 text-xs text-amber-950 font-semibold flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">✨ Hikmah Pembelajaran:</span>
                  <span>{currentUnit.ceritaPembuka.hikmah}</span>
                </div>
              </div>

              {/* Kosakata Kunci */}
              <div>
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                  Kosakata Penting Unit Ini
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {currentUnit.kosakataPenting.map((k, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <span className="font-extrabold text-emerald-800 text-sm block mb-1 font-['Fredoka']">
                        {k.kata}
                      </span>
                      <p className="text-slate-600">{k.arti}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submateri List */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-800">
                  Submateri Pembelajaran ({currentUnit.materiPengembangan.length} Submateri)
                </h3>

                {currentUnit.materiPengembangan.map((sub, idx) => (
                  <div key={sub.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <h4 className="font-extrabold text-slate-900 text-base font-['Fredoka'] text-emerald-800">
                        {sub.judul}
                      </h4>
                      <button
                        onClick={() => handleReciteText(sub.materiInti.join(' '))}
                        className="self-start flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1 rounded-lg border border-emerald-200 transition"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Dengarkan Teks</span>
                      </button>
                    </div>

                    {/* Tujuan Submateri */}
                    <p className="text-xs font-semibold text-emerald-700 bg-emerald-50/70 p-2 rounded-lg">
                      🎯 Tujuan: {sub.tujuan}
                    </p>

                    {/* Materi Inti */}
                    <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
                      {sub.materiInti.map((par, pIdx) => (
                        <p key={pIdx}>{par}</p>
                      ))}
                    </div>

                    {/* Arabic Calligraphy & Recitation if available */}
                    {sub.arabic && (
                      <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 text-center space-y-2 my-3">
                        <div className="flex items-center justify-between text-[11px] text-emerald-800 font-semibold mb-2">
                          <span className="bg-emerald-200/80 px-2 py-0.5 rounded font-mono">
                            Q.S. {sub.arabic.surah} : {sub.arabic.nomorAyat}
                          </span>
                          <span className="text-emerald-700 font-bold">
                            ✓ {sub.arabic.statusVerifikasi}
                          </span>
                        </div>
                        <p className="text-2xl sm:text-3xl font-['Amiri'] text-emerald-950 font-bold py-2 leading-loose" dir="rtl">
                          {sub.arabic.teksArab}
                        </p>
                        <p className="italic text-xs text-slate-600">{sub.arabic.transliterasi}</p>
                        <p className="text-xs text-slate-800 font-medium">"{sub.arabic.terjemahan}"</p>
                        <button
                          onClick={() => handleReciteText(sub.arabic.transliterasi + '. ' + sub.arabic.terjemahan)}
                          className="mt-2 inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm transition"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>Lantunkan & Terjemahan</span>
                        </button>
                      </div>
                    )}

                    {/* Contoh Nyata Kehidupan SD */}
                    <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-900 leading-relaxed">
                      <span className="font-bold block mb-1">🏡 Contoh Nyata Sahabat Cilik:</span>
                      <p>{sub.contohNyata}</p>
                    </div>

                    {/* Visual Description */}
                    <div className="text-[11px] text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-200/60">
                      🖼️ <em>Panduan Visual: {sub.ilustrasi}</em>
                    </div>

                    {/* Pertanyaan Berpikir (Higher Order Thinking) */}
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-700 block mb-1">
                        🤔 Pertanyaan Berpikir:
                      </span>
                      <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                        {sub.pertanyaanBerpikir.map((q, qIdx) => (
                          <li key={qIdx}>{q}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: AKTIVITAS INTERAKTIF */}
          {activeTab === 'aktivitas' && (
            <div className="p-6 sm:p-8 space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-800 font-['Fredoka']">
                    Aktivitas Interaktif Berjenjang
                  </h3>
                  <p className="text-xs text-slate-600">
                    Selesaikan aktivitas di bawah ini untuk mengumpulkan XP dan mengasah pemahamanmu!
                  </p>
                </div>
                <span className="bg-amber-100 text-amber-900 font-extrabold text-xs px-3 py-1.5 rounded-xl border border-amber-300">
                  +10 s.d. +25 XP Tiap Aktivitas
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentUnit.aktivitasInteraktif.map((act) => (
                  <div key={act.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                          Level {act.level} • {act.type.replace('_', ' ').toUpperCase()}
                        </span>
                        <span className="text-xs font-bold text-amber-600">+{act.xpReward} XP</span>
                      </div>

                      <h4 className="font-extrabold text-base text-slate-800 mb-1 font-['Fredoka']">
                        {act.title}
                      </h4>
                      <p className="text-xs text-slate-600 mb-3">{act.instructions}</p>

                      {/* Scenario if any */}
                      {act.scenario && (
                        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 mb-3 leading-relaxed">
                          <strong>Situasi:</strong> {act.scenario}
                        </div>
                      )}

                      {/* Interactive Options / Decisions */}
                      {act.options && (
                        <div className="space-y-2">
                          {act.options.map((opt) => {
                            const isChosen = activitySelectedOption === opt.id;
                            return (
                              <button
                                key={opt.id}
                                onClick={() => {
                                  setActivitySelectedOption(opt.id);
                                  if (opt.isBestChoice) {
                                    soundManager.playCorrect();
                                    setStudentXp((prev) => prev + act.xpReward);
                                  } else {
                                    soundManager.playWrong();
                                  }
                                }}
                                className={`w-full text-left p-3 rounded-xl text-xs font-medium transition border ${
                                  isChosen
                                    ? opt.isBestChoice
                                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold'
                                      : 'bg-rose-50 border-rose-300 text-rose-950'
                                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                                }`}
                              >
                                <span>{opt.text}</span>
                                {isChosen && (
                                  <p className="mt-1 text-[11px] text-slate-600 italic">
                                    {opt.feedback}
                                  </p>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Interactive Items / Matching */}
                      {act.items && (
                        <div className="space-y-2">
                          {act.items.map((it) => (
                            <div
                              key={it.id}
                              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
                            >
                              <span className="font-semibold text-slate-800">{it.label}</span>
                              <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold text-[11px]">
                                {it.matchWith || `Urutan #${it.correctOrder}`}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end">
                      <button
                        onClick={() => {
                          soundManager.playCorrect();
                          setStudentXp((prev) => prev + 5);
                        }}
                        className="text-xs text-emerald-700 font-bold hover:underline flex items-center gap-1"
                      >
                        <span>Selesaikan Aktivitas</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: LATIHAN & KUIS INTERAKTIF */}
          {activeTab === 'kuis' && (
            <div className="p-6 sm:p-8 max-w-3xl mx-auto">
              {!quizCompleted ? (
                <div className="space-y-6">
                  {/* Progress Header */}
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span className="font-bold text-emerald-800">
                      Soal {currentQuestionIdx + 1} dari {currentUnit.soal.length}
                    </span>
                    <span className="font-mono bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">
                      Skor Sementara: {quizScore}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-600 h-full transition-all duration-300 rounded-full"
                      style={{ width: `${((currentQuestionIdx + 1) / currentUnit.soal.length) * 100}%` }}
                    />
                  </div>

                  {/* Question Card */}
                  {currentUnit.soal[currentQuestionIdx] && (
                    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                          {currentUnit.soal[currentQuestionIdx].jenisSoal.replace('_', ' ')}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          currentUnit.soal[currentQuestionIdx].tingkatKesulitan === 'Tantangan'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          Level: {currentUnit.soal[currentQuestionIdx].tingkatKesulitan}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {currentUnit.soal[currentQuestionIdx].pertanyaan}
                      </h3>

                      {/* Options */}
                      <div className="space-y-2.5 pt-2">
                        {currentUnit.soal[currentQuestionIdx].opsi?.map((opt, oIdx) => {
                          const isSelected = selectedAnswer === opt;
                          const isCorrect = opt === currentUnit.soal[currentQuestionIdx].jawabanBenar;

                          return (
                            <button
                              key={oIdx}
                              disabled={showExplanation}
                              onClick={() => handleAnswerQuestion(opt)}
                              className={`w-full text-left p-3.5 rounded-xl text-sm font-medium transition border flex items-center justify-between ${
                                showExplanation
                                  ? isCorrect
                                    ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold'
                                    : isSelected
                                    ? 'bg-rose-50 border-rose-400 text-rose-950'
                                    : 'bg-slate-50 border-slate-200 opacity-60'
                                  : isSelected
                                  ? 'bg-emerald-50 border-emerald-500'
                                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                              }`}
                            >
                              <span>{opt}</span>
                              {showExplanation && (
                                isCorrect ? (
                                  <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                                ) : isSelected ? (
                                  <X className="w-5 h-5 text-rose-600 shrink-0" />
                                ) : null
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      {showExplanation && (
                        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1 animate-fadeIn">
                          <p className="font-bold flex items-center gap-1">
                            <span>💡 Pembahasan:</span>
                          </p>
                          <p className="leading-relaxed">{currentUnit.soal[currentQuestionIdx].pembahasan}</p>
                          <p className="text-[10px] text-amber-800 pt-1">
                            Indikator: {currentUnit.soal[currentQuestionIdx].indikator}
                          </p>
                        </div>
                      )}

                      {/* Next button */}
                      {showExplanation && (
                        <div className="pt-2 flex justify-end">
                          <button
                            onClick={handleNextQuestion}
                            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm transition"
                          >
                            <span>
                              {currentQuestionIdx < currentUnit.soal.length - 1 ? 'Soal Berikutnya' : 'Selesai & Lihat Skor'}
                            </span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                /* Quiz Finished Card */
                <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-3xl mx-auto">
                    🏆
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-['Fredoka']">
                    Alhamdulillah, Kuis Selesai!
                  </h3>
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 inline-block px-8">
                    <span className="text-xs text-emerald-800 font-bold uppercase tracking-wider block">Total Skor Kamu</span>
                    <span className="text-4xl font-extrabold text-emerald-700 font-['Fredoka']">
                      {Math.round((quizScore / (currentUnit.soal.length * 10)) * 100)} / 100
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    {quizScore >= 70
                      ? 'Luar biasa! Kamu telah menguasai kompetensi unit ini dengan sangat baik. Ayo lanjutkan ke Pengayaan!'
                      : 'Jangan berkecil hati! Belajar adalah proses yang bertahap. Yuk buka menu Remedial untuk memantapkan materi!'}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <button
                      onClick={() => {
                        setQuizCompleted(false);
                        setCurrentQuestionIdx(0);
                        setQuizScore(0);
                        setSelectedAnswer(null);
                        setShowExplanation(false);
                      }}
                      className="px-4 py-2 text-xs font-bold rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
                    >
                      Ulangi Kuis
                    </button>
                    {quizScore < 70 ? (
                      <button
                        onClick={() => setActiveTab('remedial')}
                        className="px-5 py-2 text-xs font-bold rounded-xl bg-amber-500 hover:bg-amber-600 text-white shadow transition"
                      >
                        Buka Remedial Ceria
                      </button>
                    ) : (
                      <button
                        onClick={() => setActiveTab('pengayaan')}
                        className="px-5 py-2 text-xs font-bold rounded-xl bg-purple-600 hover:bg-purple-700 text-white shadow transition"
                      >
                        Buka Tantangan Pengayaan
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: LKPD DIGITAL */}
          {activeTab === 'lkpd' && (
            <div className="p-6 sm:p-8 max-w-3xl mx-auto space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-rose-100 text-rose-800 text-[10px] font-bold px-2 py-0.5 rounded">
                    LKPD DIGITAL
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{currentUnit.lkpd.unitId}</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-800 font-['Fredoka']">
                  {currentUnit.lkpd.judul}
                </h3>
              </div>

              {/* Student Identity Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Nama Siswa:</label>
                  <input
                    type="text"
                    value={lkpdAnswers.nama}
                    onChange={(e) => setLkpdAnswers({ ...lkpdAnswers, nama: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg p-2 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Kelas:</label>
                  <input
                    type="text"
                    value={lkpdAnswers.kelas}
                    onChange={(e) => setLkpdAnswers({ ...lkpdAnswers, kelas: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg p-2 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Tanggal:</label>
                  <input
                    type="text"
                    value={lkpdAnswers.tanggal}
                    onChange={(e) => setLkpdAnswers({ ...lkpdAnswers, tanggal: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg p-2 font-medium"
                  />
                </div>
              </div>

              {/* LKPD Sections (A to H) */}
              <div className="space-y-5 text-xs text-slate-800">
                {/* A. Tujuan */}
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <h4 className="font-bold text-emerald-800 text-sm mb-2">A. Tujuan Pembelajaran</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600">
                    {currentUnit.lkpd.tujuan.map((t, idx) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ul>
                </div>

                {/* B. Petunjuk */}
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <h4 className="font-bold text-emerald-800 text-sm mb-2">B. Petunjuk Belajar</h4>
                  <ul className="space-y-1 text-slate-600">
                    {currentUnit.lkpd.petunjuk.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>

                {/* C. Mari Mengamati */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                  <h4 className="font-bold text-emerald-800 text-sm">C. Mari Mengamati</h4>
                  <p className="text-slate-700">{currentUnit.lkpd.mariMengamati.stimulus}</p>
                  {currentUnit.lkpd.mariMengamati.gambarHint && (
                    <p className="text-[11px] text-slate-500 italic">
                      [Ilustrasi: {currentUnit.lkpd.mariMengamati.gambarHint}]
                    </p>
                  )}
                  <p className="font-semibold text-slate-800 pt-1">
                    Pertanyaan Pengamatan: {currentUnit.lkpd.mariMengamati.pertanyaan}
                  </p>
                  <textarea
                    rows={2}
                    placeholder="Tuliskan hasil pengamatanmu di sini..."
                    value={lkpdAnswers.mengamati}
                    onChange={(e) => setLkpdAnswers({ ...lkpdAnswers, mengamati: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-xs"
                  />
                </div>

                {/* D. Mari Berpikir */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                  <h4 className="font-bold text-emerald-800 text-sm">D. Mari Berpikir</h4>
                  {currentUnit.lkpd.mariBerpikir.map((q, idx) => (
                    <p key={idx} className="font-medium text-slate-700">• {q}</p>
                  ))}
                  <textarea
                    rows={2}
                    placeholder="Tuliskan ide pemikiranmu..."
                    value={lkpdAnswers.berpikir}
                    onChange={(e) => setLkpdAnswers({ ...lkpdAnswers, berpikir: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-xs"
                  />
                </div>

                {/* E. Mari Berdiskusi */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                  <h4 className="font-bold text-emerald-800 text-sm">E. Mari Berdiskusi</h4>
                  <p className="text-slate-700">{currentUnit.lkpd.mariBerdiskusi}</p>
                  <textarea
                    rows={2}
                    placeholder="Catat hasil diskusimu bersama teman..."
                    value={lkpdAnswers.berdiskusi}
                    onChange={(e) => setLkpdAnswers({ ...lkpdAnswers, berdiskusi: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-xs"
                  />
                </div>

                {/* F. Mari Mencoba */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                  <h4 className="font-bold text-emerald-800 text-sm">F. Mari Mencoba / Praktik</h4>
                  <p className="text-slate-700">{currentUnit.lkpd.mariMencoba}</p>
                  <textarea
                    rows={2}
                    placeholder="Ceritakan pengalaman praktikmu..."
                    value={lkpdAnswers.mencoba}
                    onChange={(e) => setLkpdAnswers({ ...lkpdAnswers, mencoba: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-xs"
                  />
                </div>

                {/* G. Mari Menyimpulkan */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                  <h4 className="font-bold text-emerald-800 text-sm">G. Mari Menyimpulkan</h4>
                  <p className="text-slate-700">{currentUnit.lkpd.mariMenyimpulkan}</p>
                  <textarea
                    rows={2}
                    placeholder="Tuliskan kesimpulan belajarmu..."
                    value={lkpdAnswers.menyimpulkan}
                    onChange={(e) => setLkpdAnswers({ ...lkpdAnswers, menyimpulkan: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-xs"
                  />
                </div>

                {/* H. Refleksi */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                  <h4 className="font-bold text-emerald-800 text-sm">H. Refleksi Siswa</h4>
                  <p className="text-slate-700">{currentUnit.lkpd.refleksi}</p>
                  <textarea
                    rows={2}
                    placeholder="Refleksi perasaan dan aksiku hari ini..."
                    value={lkpdAnswers.refleksi}
                    onChange={(e) => setLkpdAnswers({ ...lkpdAnswers, refleksi: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-xs"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <span className="text-xs text-slate-500">
                  {lkpdSaved ? '✅ LKPD berhasil disimpan & +25 XP ditambahkan!' : 'Isi seluruh kolom dan simpan.'}
                </span>
                <button
                  onClick={handleSaveLkpd}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow transition flex items-center gap-1.5"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Simpan LKPD Digital (+25 XP)</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 5: REMEDIAL ("Yuk belajar lagi!") */}
          {activeTab === 'remedial' && (
            <div className="p-6 sm:p-8 max-w-3xl mx-auto space-y-6">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center text-2xl font-bold shrink-0">
                  🌱
                </div>
                <div>
                  <h3 className="font-extrabold text-amber-950 text-base font-['Fredoka']">
                    {currentUnit.remedial.judul}
                  </h3>
                  <p className="text-xs text-amber-900 mt-0.5">
                    "Setiap anak hebat memiliki ritme belajarnya sendiri. Mari ulangi poin intinya dengan santai dan menyenangkan!"
                  </p>
                </div>
              </div>

              {/* Materi Ringkas */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
                <h4 className="font-bold text-emerald-800 text-sm flex items-center gap-1.5">
                  <span>📌 Rangkuman Inti Cepat:</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {currentUnit.remedial.materiRingkas.map((m, idx) => (
                    <li key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contoh Sederhana */}
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-950">
                <span className="font-bold block mb-1">💡 Contoh Paling Sederhana:</span>
                <p>{currentUnit.remedial.contohSederhana}</p>
              </div>

              {/* Kuis Ulang Bertahap */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-sm">
                  Latihan Bertahap & Kuis Ulang:
                </h4>
                {currentUnit.remedial.kuisUlang.map((soalRem, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">
                      {idx + 1}. {soalRem.pertanyaan}
                    </p>
                    <div className="space-y-1.5">
                      {soalRem.opsi?.map((op, oIdx) => (
                        <button
                          key={oIdx}
                          onClick={() => {
                            if (op === soalRem.jawabanBenar) {
                              soundManager.playCorrect();
                              alert('Bagus sekali! Jawabanmu benar! Kamu sudah memahami konsep ini.');
                              setStudentXp((prev) => prev + 10);
                            } else {
                              soundManager.playWrong();
                              alert('Ayo coba lagi pelan-pelan!');
                            }
                          }}
                          className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-xs border border-slate-200 text-slate-700 transition"
                        >
                          {op}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: PENGAYAAN */}
          {activeTab === 'pengayaan' && (
            <div className="p-6 sm:p-8 max-w-3xl mx-auto space-y-6">
              <div className="p-5 rounded-2xl bg-purple-50 border border-purple-200 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center text-2xl font-bold shrink-0">
                  🚀
                </div>
                <div>
                  <h3 className="font-extrabold text-purple-950 text-base font-['Fredoka']">
                    {currentUnit.pengayaan.judul}
                  </h3>
                  <p className="text-xs text-purple-900 mt-0.5">
                    Tantangan istimewa untuk memperluas wawasan dan memecahkan studi kasus analitis!
                  </p>
                </div>
              </div>

              {/* Studi Kasus Kompleks */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <h4 className="font-bold text-slate-800 text-sm text-purple-800">
                  🎯 Studi Kasus Nyata Tingkat Lanjut:
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {currentUnit.pengayaan.studiKasusKompleks}
                </p>
              </div>

              {/* Proyek Mini */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <h4 className="font-bold text-slate-800 text-sm text-purple-800">
                  🛠️ Proyek Mini Kreatif Mandiri:
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {currentUnit.pengayaan.proyekMini}
                </p>
              </div>

              {/* Pertanyaan Analitis */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <h4 className="font-bold text-slate-800 text-sm text-purple-800">
                  🔍 Pertanyaan Eksploratif & Analisis:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
                  {currentUnit.pengayaan.pertanyaanAnalitis.map((q, idx) => (
                    <li key={idx}>{q}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => {
                    soundManager.playCheer();
                    confetti({ particleCount: 70, spread: 50 });
                    setStudentXp((prev) => prev + 50);
                    alert('MasyaAllah! Kamu telah menyelesaikan tantangan Pengayaan. +50 XP ditambahkan!');
                  }}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow transition"
                >
                  Klaim Hadiah Pengayaan (+50 XP)
                </button>
              </div>
            </div>
          )}

          {/* TAB 7: REFLEKSI DIRI & EMOSI */}
          {activeTab === 'refleksi' && (
            <div className="p-6 sm:p-8 max-w-3xl mx-auto space-y-6">
              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center text-xl shrink-0">
                  🌸
                </div>
                <div>
                  <h3 className="font-extrabold text-teal-950 text-base font-['Fredoka']">
                    Refleksi Diri Berkesadaran
                  </h3>
                  <p className="text-xs text-teal-900">
                    Merenungi kebaikan yang telah dipelajari dan menghubungkannya dengan tindakan nyata hari ini.
                  </p>
                </div>
              </div>

              {/* Pertanyaan Refleksi Siswa */}
              <div className="space-y-4">
                {currentUnit.refleksiSiswa.map((ref, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
                    <p className="font-bold text-slate-800 text-sm">{ref.pertanyaan}</p>
                    <div className="flex flex-wrap gap-2">
                      {ref.pilihanEmosi.map((emo, eIdx) => (
                        <button
                          key={eIdx}
                          onClick={() => {
                            soundManager.playCorrect();
                            alert(`Terima kasih telah berbagi perasaan: "${emo}". Tetaplah istiqamah dalam kebaikan!`);
                            setStudentXp((prev) => prev + 10);
                          }}
                          className="px-4 py-2 rounded-xl bg-slate-50 hover:bg-emerald-100 text-slate-700 text-xs font-semibold border border-slate-200 transition"
                        >
                          {emo}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Refleksi Guru */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                <span className="font-bold text-slate-800 block">Catatan Observasi Guru:</span>
                {currentUnit.refleksiGuru.map((rg, idx) => (
                  <p key={idx}>• {rg}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
