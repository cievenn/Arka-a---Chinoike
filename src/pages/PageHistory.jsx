import React from 'react';
import { StutterText }    from '../components/ui/StutterText';
import { ParanoiaReveal } from '../components/ui/ParanoiaReveal';

/** ─── PageHistory — "Trauma Initial" ──────────────────────────
 *  Les trois phases de la formation d'Isamu — journal de laboratoire.
 *  Mise en page verticale de type "mur de notes" avec rotations et offsets.
 */

const phases = [
  {
    id:       '01',
    kanji:    '壱',
    subtitle: 'Phase Initiale',
    title:    "L'Abattoir",
    content:  "Enfermé dans les laboratoires clandestins de Kiri. Exposition quotidienne à des toxines coagulantes extremement douloureuses pour forcer l'éveil du Dojutsu. Les cris des autres sujets sont devenus sa seule berceuse.",
    paranoia: {
      surface: "Les autres sujets pleuraient la nuit.",
      hidden:  "IL COLLECTAIT LEUR DOULEUR. IL APPRENAIT.",
    },
    rotate:   '-0.7deg',
    offset:   '0rem',
  },
  {
    id:       '02',
    kanji:    '弐',
    subtitle: 'Phase Critique',
    title:    "L'Éveil Rouge",
    content:  "Le jour où l'esprit a craqué. Surcharge sensorielle absolue lors d'une injection. L'œil s'est ouvert en se gorgeant de son propre sang. Premier massacre documenté.",
    paranoia: {
      surface: "Bilan : 14 morts, aucun corps intact.",
      hidden:  "IL NE SAIT PAS QUI IL A TUÉ. IL S'EN FOUT.",
    },
    rotate:   '0.5deg',
    offset:   'clamp(3rem, 8vw, 8rem)',
  },
  {
    id:       '03',
    kanji:    '参',
    subtitle: 'Phase Actuelle',
    title:    'Lâché dans la Brume',
    content:  "Jugé trop dangereux pour la société, mais trop utile pour être exécuté. L'ANBU attend l'ordre de déploiement. Il le sait. Ça ne le dérange pas.",
    paranoia: {
      surface: "Il coopère avec les autorités.",
      hidden:  "IL ATTEND LE BON MOMENT. NOUS TOUS.",
    },
    rotate:   '-0.3deg',
    offset:   'clamp(1rem, 3vw, 3rem)',
  },
];

export const PageHistory = () => (
  <div style={{ position: 'relative' }}>

    {/* ── TITRE ──────────────────────────────────────────────── */}
    <div style={{ marginBottom: 'clamp(3rem, 7vw, 6rem)' }}>
      <p
        className="font-noble"
        style={{
          fontSize:      '0.6rem',
          letterSpacing: '0.5em',
          color:         'rgba(139,0,0,0.5)',
          textTransform: 'uppercase',
          marginBottom:  '0.5rem',
        }}
      >
        — Archives Classifiées / Kiri ANBU
      </p>

      <StutterText
        as="h1"
        intensity="low"
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(3rem, 10vw, 10rem)',
          lineHeight:    0.9,
          color:         '#e8d5b0',
          letterSpacing: '-0.02em',
          display:       'block',
        }}
      >
        TRAUMA
      </StutterText>
      <div
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(3rem, 10vw, 10rem)',
          lineHeight:    0.9,
          color:         'transparent',
          WebkitTextStroke: '1px rgba(139,0,0,0.6)',
          letterSpacing: '-0.02em',
          marginLeft:    'clamp(3rem, 8vw, 8rem)',
        }}
      >
        INITIAL
      </div>
    </div>

    {/* ── TIMELINE — Mur de notes ────────────────────────────── */}
    <div
      style={{
        display:       'flex',
        flexDirection: 'column',
        gap:           'clamp(3rem, 6vw, 5rem)',
      }}
    >
      {phases.map((phase, i) => (
        <div
          key={phase.id}
          style={{
            display:       'grid',
            gridTemplateColumns: '80px 1fr',
            gap:           'clamp(1.5rem, 3vw, 3rem)',
            alignItems:    'start',
            marginLeft:    phase.offset,
            transform:     `rotate(${phase.rotate})`,
          }}
        >
          {/* Numéro + kanji */}
          <div style={{ textAlign: 'center', paddingTop: '0.5rem' }}>
            <div
              className="font-noble font-black"
              style={{
                fontSize:   'clamp(2rem, 5vw, 4rem)',
                color:      'rgba(139,0,0,0.4)',
                lineHeight:  1,
              }}
            >
              {phase.id}
            </div>
            <div
              className="font-kanji"
              style={{
                fontSize:   '0.9rem',
                color:      'rgba(139,0,0,0.25)',
                marginTop:  '0.3rem',
              }}
            >
              {phase.kanji}
            </div>

            {/* Ligne verticale — connexion de timeline */}
            {i < phases.length - 1 && (
              <div
                style={{
                  width:      '1px',
                  height:     'clamp(3rem, 6vw, 5rem)',
                  background: 'linear-gradient(to bottom, #3d0000, transparent)',
                  margin:     '0.8rem auto 0',
                }}
              />
            )}
          </div>

          {/* Contenu */}
          <div className="parchment-block" style={{ padding: 'clamp(1.2rem, 2.5vw, 2rem)' }}>
            <p
              className="font-noble"
              style={{
                fontSize:      '0.55rem',
                letterSpacing: '0.4em',
                color:         'rgba(139,0,0,0.5)',
                textTransform: 'uppercase',
                marginBottom:  '0.5rem',
              }}
            >
              {phase.subtitle}
            </p>

            <h2
              className="font-noble font-black"
              style={{
                fontSize:      'clamp(1.5rem, 3vw, 2.5rem)',
                color:         '#e8d5b0',
                letterSpacing: '0.03em',
                marginBottom:  '1rem',
                lineHeight:     1.1,
              }}
            >
              {phase.title}
            </h2>

            <p
              className="font-body"
              style={{
                fontSize:   'clamp(0.95rem, 1.5vw, 1.1rem)',
                fontStyle:  'italic',
                lineHeight:  1.85,
                color:      'rgba(232,213,176,0.6)',
                marginBottom: '1rem',
              }}
            >
              {phase.content}
            </p>

            {/* Révélation paranoïaque */}
            <div
              style={{
                paddingTop:  '0.8rem',
                borderTop:   '1px solid rgba(139,0,0,0.2)',
              }}
            >
              <ParanoiaReveal
                surface={phase.paranoia.surface}
                hidden={phase.paranoia.hidden}
                size="sm"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
