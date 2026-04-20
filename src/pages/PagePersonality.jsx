import React from 'react';
import { StutterText }    from '../components/ui/StutterText';
import { ParanoiaReveal } from '../components/ui/ParanoiaReveal';

/** ─── PagePersonality — "Fracture Mentale" ─────────────────────
 *  Schizophrénie, démence, voix écrasante.
 *  Mise en page cassée — pas de symétrie. 
 *  Texte géant qui interrompt le flux, révélations au hover.
 */
export const PagePersonality = () => (
  <div style={{ position: 'relative', overflow: 'visible' }}>

    {/* ── TITRE — FRACTURE MENTALE ───────────────────────────── */}
    <div style={{ marginBottom: 'clamp(3rem, 7vw, 6rem)', overflow: 'visible' }}>
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
        — Rapport Psychologique / Confidentiel
      </p>

      <StutterText
        as="h1"
        intensity="med"
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(3.5rem, 12vw, 13rem)',
          lineHeight:    0.88,
          color:         '#e8d5b0',
          letterSpacing: '-0.02em',
          overflow:      'visible',
          display:       'block',
        }}
      >
        FRACTURE
      </StutterText>
      <StutterText
        as="div"
        intensity="high"
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(3.5rem, 12vw, 13rem)',
          lineHeight:    0.88,
          color:         '#8b0000',
          letterSpacing: '-0.02em',
          overflow:      'visible',
          display:       'block',
          marginLeft:    'clamp(2rem, 6vw, 8rem)',
          transform:     'rotate(0.8deg)',
        }}
      >
        MENTALE
      </StutterText>
    </div>

    {/* ── BLOC 01 — Le Murmure ──────────────────────────────── */}
    <div
      style={{
        maxWidth:     '60ch',
        marginBottom: 'clamp(4rem, 8vw, 7rem)',
        transform:    'rotate(-0.4deg)',
      }}
    >
      <h2
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(1rem, 2vw, 1.5rem)',
          color:         'rgba(139,0,0,0.8)',
          letterSpacing: '0.15em',
          marginBottom:  '1rem',
          display:       'flex',
          alignItems:    'center',
          gap:           '0.8rem',
        }}
      >
        <span style={{ color: 'rgba(232,213,176,0.2)', fontSize: '0.7em' }}>壱</span>
        LE MURMURE
      </h2>

      <p
        className="font-body"
        style={{
          fontSize:   'clamp(1.05rem, 1.7vw, 1.25rem)',
          lineHeight:  1.9,
          fontStyle:  'italic',
          color:      'rgba(232,213,176,0.65)',
        }}
      >
        La réalité est corrompue. Les mots n'ont plus de sens — seule la{' '}
        <strong style={{ color: '#8b0000', fontStyle: 'normal', fontFamily: '"Cinzel", serif' }}>
          vérité du sang
        </strong>{' '}
        compte. Il ne voit pas des visages humains, il voit des réseaux artériels palpitants.{' '}
        <ParanoiaReveal
          surface="Chaque battement de cœur adverse est une information."
          hidden="CHAQUE CŒUR EST UNE HORLOGE QUE JE PEUX ARRÊTER."
          size="md"
        />
      </p>
    </div>

    {/* ── INTERRUPTION — Texte géant, voix forte ────────────── */}
    <div
      style={{
        position:    'relative',
        marginLeft:  '-clamp(1.5rem, 18vw, 20rem)',
        marginRight: '-clamp(1.5rem, 5vw, 5rem)',
        overflow:    'hidden',
        marginBottom: 'clamp(4rem, 8vw, 7rem)',
        padding:     'clamp(1rem, 2vw, 2rem) 0',
        borderTop:    '1px solid rgba(139,0,0,0.2)',
        borderBottom: '1px solid rgba(139,0,0,0.2)',
      }}
    >
      {/* Fond tache d'encre */}
      <div
        style={{
          position:   'absolute',
          inset:      0,
          background: 'linear-gradient(90deg, rgba(61,0,0,0.15) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <StutterText
        as="div"
        intensity="high"
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(4rem, 14vw, 18rem)',
          lineHeight:    0.9,
          color:         'transparent',
          WebkitTextStroke: '1px rgba(139,0,0,0.5)',
          letterSpacing: '0.05em',
          whiteSpace:    'nowrap',
          paddingLeft:   'clamp(1.5rem, 5vw, 5rem)',
          overflow:      'visible',
          userSelect:    'none',
        }}
        aria-hidden="true"
      >
        ILS MENTENT TOUS
      </StutterText>
    </div>

    {/* ── BLOC 02 — Dissonance ──────────────────────────────── */}
    <div
      style={{
        display:    'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap:        'clamp(2rem, 4vw, 4rem)',
        alignItems: 'start',
      }}
    >
      {/* Log audio */}
      <div
        className="parchment-block"
        style={{
          padding:    'clamp(1.2rem, 2.5vw, 2.2rem)',
          transform:  'rotate(0.6deg)',
          marginTop:  '4rem',
        }}
      >
        <div
          style={{
            display:    'flex',
            alignItems: 'center',
            gap:        '0.5rem',
            marginBottom: '1rem',
            paddingBottom: '0.8rem',
            borderBottom: '1px solid rgba(139,0,0,0.2)',
          }}
        >
          <div
            style={{
              width:      '6px',
              height:     '6px',
              borderRadius: '50%',
              background: '#8b0000',
              boxShadow:  '0 0 8px rgba(139,0,0,0.8)',
              animation:  'blood-pulse 2s infinite',
            }}
          />
          <span
            className="font-noble"
            style={{
              fontSize:      '0.5rem',
              letterSpacing: '0.4em',
              color:         'rgba(139,0,0,0.6)',
              textTransform: 'uppercase',
            }}
          >
            Log Audio #44 — Censuré
          </span>
        </div>

        <p
          className="font-body"
          style={{
            fontSize:   'clamp(1.1rem, 1.8vw, 1.4rem)',
            fontStyle:  'italic',
            lineHeight:  1.8,
            color:      'rgba(232,213,176,0.7)',
            borderLeft: '2px solid #3d0000',
            paddingLeft: '1rem',
          }}
        >
          "Ils mentent tous. Leurs bouches mentent...{' '}<br /><br />
          <span
            className="font-noble font-black"
            style={{
              color:      '#8b0000',
              fontSize:   '1.4em',
              fontStyle:  'normal',
              display:    'block',
              textShadow: '0 0 20px rgba(139,0,0,0.5)',
              lineHeight:  1.2,
              marginBottom: '0.8rem',
            }}
          >
            Mais leurs carotides hurlent.
          </span>
          Quand je coupe... le mensonge s'écoule enfin."
        </p>
      </div>

      {/* Dissonance — observations cliniques */}
      <div>
        <h2
          className="font-noble font-black"
          style={{
            fontSize:      'clamp(1rem, 2vw, 1.5rem)',
            color:         'rgba(139,0,0,0.8)',
            letterSpacing: '0.15em',
            marginBottom:  '1.5rem',
            display:       'flex',
            alignItems:    'center',
            gap:           '0.8rem',
          }}
        >
          <span style={{ color: 'rgba(232,213,176,0.2)', fontSize: '0.7em' }}>弐</span>
          DISSONANCE
        </h2>

        <div
          className="font-body"
          style={{
            fontSize:   'clamp(1rem, 1.6vw, 1.15rem)',
            lineHeight:  1.9,
            fontStyle:  'italic',
            color:      'rgba(232,213,176,0.6)',
            display:    'flex',
            flexDirection: 'column',
            gap:        '1.2rem',
          }}
        >
          <p>
            <ParanoiaReveal
              surface="Il a regardé l'examinateur sans répondre pendant 4 minutes."
              hidden="IL COMPTAIT MES PULSATIONS. IL SAVAIT."
              size="sm"
            />
          </p>
          <p>
            <ParanoiaReveal
              surface="Sa voix monte sans raison apparente."
              hidden="SON SILENCE EST PLUS DANGEREUX QUE SES CRIS."
              size="sm"
            />
          </p>
          <p>
            Le bégaiement s'intensifie uniquement lors des{' '}
            <strong style={{ color: 'rgba(232,213,176,0.9)', fontStyle: 'normal' }}>
              moments de lucidité
            </strong>
            {' '}— comme si la vérité résiste à sortir.
          </p>
        </div>
      </div>
    </div>
  </div>
);
