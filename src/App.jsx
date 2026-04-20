import React, { useState } from 'react';

import { DOSSIER_DATA } from './data';
import { InkCursor }     from './components/ui/InkCursor';
import { BloodDropIntro } from './components/ui/BloodDropIntro';
import { BloodMetaballs } from './components/ui/BloodMetaballs';
import { MistOverlay }    from './components/ui/MistOverlay';
import { StutterText }    from './components/ui/StutterText';

import { PageGeneral }     from './pages/PageGeneral';
import { PagePersonality } from './pages/PagePersonality';
import { PageHistory }     from './pages/PageHistory';
import { PageObjectives }  from './pages/PageObjectives';
import { Diary }           from './pages/Diary';

// ─── Onglets de navigation ────────────────────────────────────
const TABS = [
  { id: 'general',     kanji: '壱', label: 'Matière Première' },
  { id: 'personality', kanji: '弐', label: 'Fracture Mentale' },
  { id: 'history',     kanji: '参', label: 'Trauma Initial'   },
  { id: 'objectives',  kanji: '四', label: 'Dessein Final'     },
  { id: 'diary',       kanji: '血', label: 'Journal Intime'    },
];

// ─── Composant de transition de page ─────────────────────────
const PageTransition = ({ children, isTransitioning }) => (
  <div
    style={{
      opacity:    isTransitioning ? 0 : 1,
      filter:     isTransitioning ? 'blur(4px)' : 'blur(0px)',
      transform:  isTransitioning ? 'translateY(8px)' : 'translateY(0)',
      transition: 'opacity 0.5s ease, filter 0.5s ease, transform 0.5s ease',
      width:      '100%',
    }}
  >
    {children}
  </div>
);

// ─── COMPOSANT PRINCIPAL ──────────────────────────────────────
export default function App() {
  const [activeTab,      setActiveTab]      = useState('general');
  const [nextTab,        setNextTab]        = useState('general');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [introDone,      setIntroDone]      = useState(false);

  const handleTabChange = (tabId) => {
    if (tabId === activeTab || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setNextTab(tabId);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div
      className="min-h-screen overflow-hidden flex flex-col"
      style={{ background: '#0a0000', color: '#e8d5b0' }}
    >
      {/* Curseur tache d'encre */}
      <InkCursor />

      {/* Intro — goutte de sang sur parchemin */}
      {!introDone && (
        <BloodDropIntro onComplete={() => setIntroDone(true)} />
      )}

      {/* Contenu principal — affiché après l'intro */}
      {introDone && (
        <>
          {/* Fond — flaques de sang qui fusionnent */}
          <BloodMetaballs count={8} />

          {/* Brume dense de Kiri */}
          <MistOverlay />

          {/* ── EN-TÊTE ──────────────────────────────────────── */}
          <header
            className="fixed top-0 left-0 w-full z-40 flex justify-between items-start"
            style={{ padding: 'clamp(1rem, 3vw, 2.5rem) clamp(1.5rem, 5vw, 4rem)' }}
          >
            {/* Titre — Nom du clan */}
            <div style={{ mixBlendMode: 'difference', pointerEvents: 'none' }}>
              <StutterText
                as="div"
                intensity="low"
                className="font-noble font-black tracking-[0.15em] leading-none"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', color: '#e8d5b0' }}
              >
                CHINOIKE
              </StutterText>
              <div
                className="font-body italic"
                style={{
                  fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)',
                  color:    'rgba(139,0,0,0.8)',
                  letterSpacing: '0.4em',
                  marginTop: '0.2rem',
                }}
              >
                血之池 — KIRI NO YAMI
              </div>
            </div>

            {/* ID dossier */}
            <div
              className="font-body text-right"
              style={{
                color:         'rgba(232,213,176,0.35)',
                fontSize:      'clamp(0.6rem, 0.9vw, 0.75rem)',
                letterSpacing: '0.25em',
                lineHeight:    1.8,
                pointerEvents: 'none',
              }}
            >
              {DOSSIER_DATA.id}<br />
              <span style={{ color: 'rgba(139,0,0,0.7)' }}>ACCÈS RESTREINT</span>
            </div>
          </header>

          {/* ── LAYOUT : NAV + CONTENU ─────────────────────── */}
          <div
            className="flex-1 w-full flex flex-col md:flex-row"
            style={{
              minHeight:    '100vh',
              overflowY:    'auto',
              overflowX:    'hidden',
              scrollbarWidth: 'thin',
              scrollbarColor: '#3d0000 #0a0000',
            }}
          >
            {/* Navigation verticale — côté gauche */}
            <nav
              className="md:fixed md:left-0 md:top-1/2 md:-translate-y-1/2 z-50"
              style={{ padding: 'clamp(1rem, 2vw, 2rem) clamp(1.5rem, 3vw, 3rem)' }}
              aria-label="Navigation sections"
            >
              <ul
                className="flex flex-row md:flex-col gap-2 md:gap-6 overflow-x-auto md:overflow-visible no-scrollbar"
                style={{ marginTop: 'clamp(5rem, 10vh, 8rem)' }}
              >
                {TABS.map((tab) => {
                  const isActive = nextTab === tab.id;
                  return (
                    <li key={tab.id}>
                      <button
                        onClick={() => handleTabChange(tab.id)}
                        aria-current={isActive ? 'page' : undefined}
                        style={{
                          display:     'flex',
                          alignItems:  'center',
                          gap:         '0.75rem',
                          padding:     '0.4rem 0',
                          background:  'none',
                          border:      'none',
                          color:       isActive ? '#e8d5b0' : 'rgba(232,213,176,0.25)',
                          transition:  'color 0.4s ease, transform 0.3s ease',
                          transform:   isActive ? 'translateX(4px)' : 'translateX(0)',
                          whiteSpace:  'nowrap',
                        }}
                        onMouseEnter={e => !isActive && (e.currentTarget.style.color = 'rgba(232,213,176,0.6)')}
                        onMouseLeave={e => !isActive && (e.currentTarget.style.color = 'rgba(232,213,176,0.25)')}
                      >
                        {/* Kanji indicateur */}
                        <span
                          className="font-kanji font-black"
                          style={{
                            fontSize: '0.85rem',
                            color:    isActive ? '#8b0000' : 'rgba(139,0,0,0.3)',
                            transition: 'color 0.4s ease',
                          }}
                        >
                          {tab.kanji}
                        </span>

                        {/* Barre active */}
                        <span
                          style={{
                            display:         'inline-block',
                            width:           isActive ? '24px' : '8px',
                            height:          '1px',
                            background:      isActive ? '#8b0000' : 'rgba(232,213,176,0.2)',
                            transition:      'width 0.4s ease, background 0.4s ease',
                            boxShadow:       isActive ? '0 0 8px rgba(139,0,0,0.6)' : 'none',
                          }}
                        />

                        {/* Label */}
                        <span
                          className="font-noble"
                          style={{
                            fontSize:      'clamp(0.55rem, 0.8vw, 0.7rem)',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {tab.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Contenu de la page active */}
            <main
              className="flex-1 relative z-20"
              style={{
                paddingLeft:  'clamp(1.5rem, 18vw, 20rem)',
                paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
                paddingTop:   'clamp(6rem, 12vh, 10rem)',
                paddingBottom: 'clamp(3rem, 6vw, 6rem)',
              }}
            >
              <PageTransition isTransitioning={isTransitioning}>
                {activeTab === 'general'     && <PageGeneral />}
                {activeTab === 'personality' && <PagePersonality />}
                {activeTab === 'history'     && <PageHistory />}
                {activeTab === 'objectives'  && <PageObjectives />}
                {activeTab === 'diary'       && <Diary />}
              </PageTransition>
            </main>
          </div>
        </>
      )}
    </div>
  );
}