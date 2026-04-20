import React from 'react';
import { StutterText } from '../components/ui/StutterText';

/**
 * GeneralInfo — "Dossier Médico-Tactique"
 * Style archive officielle de Kirigakure.
 * Un document bureaucratique froid, mais qui laisse percevoir l'horreur par les détails cliniques.
 */

const FIELDS = [
  { label: 'Nom',               value: 'Isamu' },
  { label: 'Clan',              value: 'Chinoike' },
  { label: 'Statut',            value: 'Étudiant sous surveillance' },
  { label: 'Physique',          value: 'Mince, teint livide, cernes chroniques, mains tremblantes.' },
  { label: 'Pathologie',        value: 'Porphyrie Variegata', danger: true },
];

const NOTE = `Sujet à ne pas déployer en première ligne sans escorte médicale. Potentiel de dangerosité cognitive élevé.`;

export const GeneralInfo = () => (
  <div style={{ position: 'relative' }}>

    {/* ── KANJI DE FOND ────────────────────────────────────────── */}
    <div
      className="font-kanji font-black select-none pointer-events-none"
      aria-hidden="true"
      style={{
        position:  'absolute',
        top:       '-0.2em',
        right:     '-0.1em',
        fontSize:  'clamp(10rem, 28vw, 36rem)',
        color:     'rgba(139,0,0,0.03)',
        lineHeight: 1,
        zIndex:    0,
      }}
    >
      血
    </div>

    {/* ── TITRE ─────────────────────────────────────────────────── */}
    <div style={{ marginBottom: 'clamp(2.5rem, 6vw, 5rem)', position: 'relative', zIndex: 1 }}>
      <p
        className="font-noble"
        style={{
          fontSize:      '0.6rem',
          letterSpacing: '0.5em',
          color:         '#ff3333',
          textTransform: 'uppercase',
          marginBottom:  '0.6rem',
        }}
      >
        — Dossier Médico-Tactique #092-CHI / Accès Restreint
      </p>

      <div style={{ overflow: 'visible' }}>
        <StutterText
          as="h1"
          intensity="med"
          className="font-noble font-black"
          style={{
            fontSize:         'clamp(5rem, 16vw, 18rem)',
            lineHeight:       0.85,
            color:            'transparent',
            WebkitTextStroke: '1.5px #e8d5b0',
            letterSpacing:    '-0.03em',
            display:          'block',
          }}
        >
          ISAMU
        </StutterText>
      </div>

      <div
        style={{
          display:    'flex',
          alignItems: 'baseline',
          gap:        'clamp(1rem, 2vw, 2rem)',
          marginTop:  '0.5rem',
        }}
      >
        <span
          className="font-noble font-black"
          style={{
            fontSize:      'clamp(1.4rem, 3.5vw, 3rem)',
            color:         '#cc0000',
            letterSpacing: '0.1em',
          }}
        >
          CHINOIKE
        </span>
        <span
          className="font-kanji font-black"
          style={{
            fontSize:  'clamp(1.6rem, 4vw, 3.5rem)',
            color:     'rgba(255,50,50,0.7)',
            lineHeight: 1,
          }}
        >
          血之池
        </span>
      </div>
    </div>

    {/* ── CORPS — Deux colonnes asymétriques ────────────────────── */}
    <div
      style={{
        display:              'grid',
        gridTemplateColumns:  '1fr 1.4fr',
        gap:                  'clamp(2rem, 4vw, 4rem)',
        alignItems:           'start',
        position:             'relative',
        zIndex:               1,
      }}
    >
      {/* Colonne gauche — Données froides */}
      <div style={{ transform: 'rotate(-0.4deg)' }}>
        <div className="parchment-block" style={{ padding: 'clamp(1.2rem, 2.5vw, 2rem)' }}>
          <p
            className="font-noble"
            style={{
              fontSize:      '0.55rem',
              letterSpacing: '0.4em',
              color:         'rgba(255,50,50,0.85)',
              textTransform: 'uppercase',
              marginBottom:  '1.5rem',
            }}
          >
            ⬛ Données du Sujet
          </p>

          {FIELDS.map(({ label, value, danger }) => (
            <div
              key={label}
              style={{
                borderBottom:  '1px solid rgba(232,213,176,0.06)',
                paddingBottom: '0.8rem',
                marginBottom:  '0.8rem',
              }}
            >
              <div
                className="font-noble"
                style={{
                  fontSize:      '0.5rem',
                  letterSpacing: '0.35em',
                  color:         '#e8d5b0',
                  textTransform: 'uppercase',
                  marginBottom:  '0.15rem',
                }}
              >
                {label}
              </div>
              <div
                className="font-body"
                style={{
                  fontSize:  'clamp(0.85rem, 1.2vw, 1rem)',
                  color:     danger ? '#cc0000' : '#e8d5b0',
                  fontWeight: danger ? 600 : 400,
                  fontStyle: danger ? 'normal' : 'italic',
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Colonne droite — Note administrative */}
      <div>
        <h2
          className="font-noble font-black ink-bleed"
          data-text="NOTE ADMINISTRATIVE"
          style={{
            fontSize:      'clamp(1.3rem, 2.5vw, 2rem)',
            color:         '#e8d5b0',
            letterSpacing: '0.08em',
            marginBottom:  'clamp(1rem, 2vw, 1.8rem)',
            borderLeft:    '3px solid #3d0000',
            paddingLeft:   '1rem',
          }}
        >
          NOTE ADMINISTRATIVE
        </h2>

        <div
          className="parchment-block"
          style={{
            padding:    'clamp(1.5rem, 3vw, 2.5rem)',
            transform:  'rotate(0.3deg)',
          }}
        >
          <p
            className="font-body italic"
            style={{
              fontSize:   'clamp(1.05rem, 1.6vw, 1.2rem)',
              lineHeight:  1.85,
              color:      '#e8d5b0',
            }}
          >
            {NOTE}
          </p>
        </div>

        {/* Mention de porphyrie approfondie */}
        <div
          style={{
            marginTop:  'clamp(2rem, 3vw, 3rem)',
            padding:    'clamp(1rem, 2vw, 1.5rem)',
            borderTop:  '1px solid rgba(204,0,0,0.5)',
          }}
        >
          <p
            className="font-body italic"
            style={{
              fontSize:   'clamp(0.9rem, 1.3vw, 1.05rem)',
              lineHeight: 1.8,
              color:      '#e8d5b0',
            }}
          >
            "La porphyrie variegata altère la synthèse de l'hème, provoquant un double fardeau neuro-cutané 
            : crises de douleurs abdominales foudroyantes et fragilité épidermique extrême et bien d'autres symptomes. 
            Le sujet présente une peau très pâle, à l'image d'un cadavre et des mains marquées de micro-cicatrices, 
            stigmates d'une peau qui s'abîme à la moindre exposition à la lumière."
          </p>
        </div>
      </div>
    </div>
  </div>
);
