import React, { useState } from 'react';

import { InkCursor }       from './components/ui/InkCursor';
import { BloodDropIntro }  from './components/ui/BloodDropIntro';
import { BloodMetaballs }  from './components/ui/BloodMetaballs';
import { MistOverlay }     from './components/ui/MistOverlay';
import { StutterText }     from './components/ui/StutterText';

import { GeneralInfo }  from './pages/GeneralInfo';
import { Psychology }   from './pages/Psychology';
import { CombatStyle }  from './pages/CombatStyle';
import { Objectives }   from './pages/Objectives';
import { History }      from './pages/History';

// ─── Onglets de navigation ────────────────────────────────────
const TABS = [
  { id: 'general',    kanji: '壱', label: 'Informations'    },
  { id: 'psychology', kanji: '弐', label: 'Profil Psycho'   },
  { id: 'combat',     kanji: '参', label: 'Combat'          },
  { id: 'objectives', kanji: '四', label: 'Objectifs'       },
  { id: 'history',    kanji: '伍', label: 'Histoire'        },
];

// ─── Transition douce entre pages ─────────────────────────────
const PageTransition = ({ children, isTransitioning }) => (
  <div
    style={{
      opacity:    isTransitioning ? 0 : 1,
      filter:     isTransitioning ? 'blur(6px)' : 'blur(0px)',
      transform:  isTransitioning ? 'translateY(18px)' : 'translateY(0)',
      transition: 'opacity 0.55s cubic-bezier(0.4,0,0.2,1), filter 0.55s ease, transform 0.6s cubic-bezier(0.4,0,0.2,1)',
      width:      '100%',
    }}
  >
    {children}
  </div>
);

// ─── COMPOSANT PRINCIPAL ──────────────────────────────────────
export default function App() {
  const [activeTab,        setActiveTab]        = useState('general');
  const [nextTab,          setNextTab]          = useState('general');
  const [isTransitioning,  setIsTransitioning]  = useState(false);
  const [introDone,        setIntroDone]        = useState(false);

  const handleTabChange = (tabId) => {
    if (tabId === activeTab || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setNextTab(tabId);
      setIsTransitioning(false);
    }, 550);
  };

  return (
    <div
      className="min-h-screen overflow-hidden flex flex-col"
      style={{ background: '#0a0000', color: '#e8d5b0' }}
    >
      <InkCursor />

      {!introDone && (
        <BloodDropIntro onComplete={() => setIntroDone(true)} />
      )}

      {introDone && (
        <>
          <BloodMetaballs count={8} />
          <MistOverlay />

          {/* ── EN-TÊTE ──────────────────────────────────────── */}
          <header
            className="fixed top-0 left-0 w-full z-40 flex justify-between items-start"
            style={{ padding: 'clamp(0.75rem, 2.5vw, 2.5rem) clamp(1rem, 4vw, 4rem)' }}
          >
            <div style={{ mixBlendMode: 'difference', pointerEvents: 'none' }}>
              <StutterText
                as="div"
                intensity="low"
                className="font-noble font-black tracking-[0.15em] leading-none"
                style={{ fontSize: 'clamp(1rem, 3vw, 2.2rem)', color: '#e8d5b0' }}
              >
                CHINOIKE
              </StutterText>
              <div
                className="font-body italic hidden sm:block"
                style={{
                  fontSize: 'clamp(0.55rem, 1.2vw, 0.9rem)',
                  color: '#ff3333',
                  letterSpacing: '0.3em',
                  marginTop: '0.2rem',
                }}
              >
                血之池 — KIRI NO YAMI
              </div>
            </div>

            <div
              className="font-body text-right hidden sm:block"
              style={{
                color: '#e8d5b0',
                fontSize: 'clamp(0.55rem, 0.9vw, 0.75rem)',
                letterSpacing: '0.2em',
                lineHeight: 1.8,
                pointerEvents: 'none',
              }}
            >
              DOSSIER #092-CHI<br />
              <span style={{ color: '#ff3333' }}>SÉCURITÉ NIVEAU 3</span>
            </div>
          </header>

          {/* ── LAYOUT : NAV (desktop gauche / mobile bas) + CONTENU ─── */}
          <div
            className="flex-1 w-full"
            style={{
              minHeight: '100vh',
              overflowX: 'hidden',
              scrollbarWidth: 'thin',
              scrollbarColor: '#3d0000 #0a0000',
            }}
          >
            {/* ── Navigation desktop : fixée à gauche ─────────────── */}
            <nav
              className="hidden md:flex md:fixed md:left-0 md:top-1/2 md:-translate-y-1/2 z-50 flex-col"
              style={{ padding: 'clamp(1rem, 2vw, 2rem) clamp(1.5rem, 3vw, 3rem)' }}
              aria-label="Navigation sections"
            >
              <ul className="flex flex-col gap-6">
                {TABS.map((tab) => {
                  const isActive = nextTab === tab.id;
                  return (
                    <li key={tab.id}>
                      <button
                        onClick={() => handleTabChange(tab.id)}
                        aria-current={isActive ? 'page' : undefined}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          padding: '0.4rem 0',
                          background: 'none',
                          border: 'none',
                          color: '#e8d5b0',
                          transition: 'transform 0.3s ease',
                          transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span
                          className="font-kanji font-black"
                          style={{
                            fontSize: '0.85rem',
                            color: isActive ? '#cc0000' : 'rgba(255,50,50,0.85)',
                            transition: 'color 0.4s ease',
                          }}
                        >
                          {tab.kanji}
                        </span>
                        <span
                          style={{
                            display: 'inline-block',
                            width: isActive ? '24px' : '8px',
                            height: '1px',
                            background: isActive ? '#cc0000' : '#e8d5b0',
                            transition: 'width 0.4s ease, background 0.4s ease',
                            boxShadow: isActive ? '0 0 8px #ff3333' : 'none',
                          }}
                        />
                        <span
                          className="font-noble"
                          style={{
                            fontSize: 'clamp(0.55rem, 0.8vw, 0.7rem)',
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

            {/* ── Navigation mobile : barre fixée en bas ──────────── */}
            <nav
              className="md:hidden fixed bottom-0 left-0 w-full z-50"
              style={{
                background: 'rgba(10,0,0,0.92)',
                backdropFilter: 'blur(12px)',
                borderTop: '1px solid rgba(139,0,0,0.4)',
                padding: '0.5rem 0',
              }}
              aria-label="Navigation sections mobile"
            >
              <ul className="flex flex-row justify-around items-center">
                {TABS.map((tab) => {
                  const isActive = nextTab === tab.id;
                  return (
                    <li key={tab.id}>
                      <button
                        onClick={() => handleTabChange(tab.id)}
                        aria-current={isActive ? 'page' : undefined}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '0.2rem',
                          padding: '0.4rem 0.6rem',
                          background: 'none',
                          border: 'none',
                          color: '#e8d5b0',
                        }}
                      >
                        <span
                          className="font-kanji font-black"
                          style={{
                            fontSize: '1.1rem',
                            color: isActive ? '#cc0000' : 'rgba(255,50,50,0.6)',
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {tab.kanji}
                        </span>
                        <span
                          className="font-noble"
                          style={{
                            fontSize: '0.45rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: isActive ? '#e8d5b0' : 'rgba(232,213,176,0.4)',
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {tab.label}
                        </span>
                        {isActive && (
                          <span style={{
                            display: 'block',
                            width: '20px',
                            height: '1px',
                            background: '#cc0000',
                            boxShadow: '0 0 6px #ff3333',
                          }} />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Contenu de la page active */}
            <main
              className="relative z-20"
              style={{
                paddingLeft:   'clamp(1rem, 18vw, 20rem)',
                paddingRight:  'clamp(1rem, 4vw, 5rem)',
                paddingTop:    'clamp(4.5rem, 10vh, 10rem)',
                paddingBottom: 'clamp(5rem, 8vw, 6rem)',
              }}
            >
              <PageTransition isTransitioning={isTransitioning}>
                {activeTab === 'general'    && <GeneralInfo />}
                {activeTab === 'psychology' && <Psychology />}
                {activeTab === 'combat'     && <CombatStyle />}
                {activeTab === 'objectives' && <Objectives />}
                {activeTab === 'history'    && <History />}
              </PageTransition>
            </main>
          </div>
        </>
      )}
    </div>
  );
}