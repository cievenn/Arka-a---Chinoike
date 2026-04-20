import React from 'react';
import { StutterText }    from '../components/ui/StutterText';
import { ParanoiaReveal } from '../components/ui/ParanoiaReveal';

/** ─── PageObjectives — "Dessein Final" ─────────────────────────
 *  Ses desseins — purger le monde. Mise en page fragmentée.
 *  Un manifeste cassé, pas un slide PowerPoint.
 */
export const PageObjectives = () => (
  <div style={{ position: 'relative', overflow: 'visible' }}>

    {/* ── TITRE ──────────────────────────────────────────────── */}
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
        — Motivations / Classification : EXTREMIS
      </p>

      <StutterText
        as="h1"
        intensity="med"
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(3rem, 11vw, 12rem)',
          lineHeight:    0.88,
          color:         '#8b0000',
          letterSpacing: '-0.02em',
          display:       'block',
          overflow:      'visible',
        }}
      >
        DESSEIN
      </StutterText>
      <StutterText
        as="div"
        intensity="low"
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(3rem, 11vw, 12rem)',
          lineHeight:    0.88,
          color:         'transparent',
          WebkitTextStroke: '1px rgba(232,213,176,0.4)',
          letterSpacing: '-0.02em',
          overflow:      'visible',
          marginLeft:    'clamp(4rem, 10vw, 12rem)',
        }}
      >
        FINAL
      </StutterText>
    </div>

    {/* ── OBJECTIF 1 — Purgatoire Biologique ─────────────────── */}
    <div
      style={{
        marginBottom: 'clamp(3rem, 6vw, 5rem)',
        transform:    'rotate(-0.6deg)',
      }}
    >
      <div
        className="parchment-block"
        style={{
          padding:   'clamp(1.5rem, 3vw, 2.5rem)',
          maxWidth:  '65ch',
        }}
      >
        <h2
          className="font-noble font-black"
          style={{
            fontSize:      'clamp(1.2rem, 2.5vw, 2rem)',
            color:         '#e8d5b0',
            letterSpacing: '0.06em',
            marginBottom:  '1rem',
          }}
        >
          Purgatoire Biologique
        </h2>

        <p
          className="font-body"
          style={{
            fontSize:   'clamp(1rem, 1.6vw, 1.2rem)',
            fontStyle:  'italic',
            lineHeight:  1.9,
            color:      'rgba(232,213,176,0.6)',
            marginBottom: '1.2rem',
          }}
        >
          Nettoyer Kirigakure de ses mensonges. Traquer les cibles non pas par leurs empreintes,
          mais par les{' '}
          <strong style={{ color: '#8b0000', fontStyle: 'normal' }}>
            variations terrifiées de leur rythme cardiaque
          </strong>
          .{' '}
          <ParanoiaReveal
            surface="L'assassinat parfait, chirurgical, sans émotion."
            hidden="IL RESSENT QUELQUE CHOSE. C'EST LE PROBLÈME."
            size="sm"
          />
        </p>
      </div>
    </div>

    {/* ── INTERRUPTION — Citation géante ─────────────────────── */}
    <div
      style={{
        position:    'relative',
        marginLeft:  '-clamp(1.5rem, 18vw, 20rem)',
        marginRight: '-clamp(1.5rem, 5vw, 5rem)',
        padding:     'clamp(2rem, 4vw, 4rem) clamp(1.5rem, 5vw, 5rem)',
        marginBottom: 'clamp(3rem, 7vw, 6rem)',
        background:  'linear-gradient(135deg, rgba(61,0,0,0.25) 0%, transparent 70%)',
        borderTop:   '1px solid rgba(139,0,0,0.3)',
        borderBottom: '1px solid rgba(139,0,0,0.15)',
        overflow:    'visible',
      }}
    >
      <StutterText
        as="div"
        intensity="high"
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(2rem, 7vw, 8rem)',
          lineHeight:    1,
          color:         '#8b0000',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          overflow:      'visible',
        }}
      >
        PAS DE PAIX
      </StutterText>
      <div
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(2rem, 7vw, 8rem)',
          lineHeight:    1,
          color:         'transparent',
          WebkitTextStroke: '1px rgba(139,0,0,0.4)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginLeft:    'clamp(2rem, 5vw, 6rem)',
          overflow:      'visible',
        }}
      >
        SEULEMENT
      </div>
      <div
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(2.5rem, 9vw, 11rem)',
          lineHeight:    0.9,
          color:         '#8b0000',
          letterSpacing: '-0.02em',
          textShadow:    '0 0 60px rgba(139,0,0,0.4)',
          overflow:      'visible',
          marginLeft:    'clamp(8rem, 20vw, 24rem)',
        }}
      >
        L'HÉMORRAGIE.
      </div>
    </div>

    {/* ── OBJECTIF FINAL — Noyer le Monde ─────────────────────── */}
    <div style={{ transform: 'rotate(0.4deg)' }}>
      <div
        style={{
          display:    'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap:        'clamp(2rem, 4vw, 4rem)',
          alignItems: 'center',
        }}
      >
        {/* Grand kanji — ambition */}
        <div
          className="font-kanji font-black"
          style={{
            fontSize:   'clamp(8rem, 18vw, 22rem)',
            color:      'rgba(139,0,0,0.12)',
            lineHeight:  1,
            textAlign:  'center',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        >
          海
        </div>

        {/* Texte */}
        <div>
          <h2
            className="font-noble font-black"
            style={{
              fontSize:      'clamp(1.8rem, 4vw, 3.5rem)',
              color:         '#e8d5b0',
              letterSpacing: '0.03em',
              marginBottom:  '1.2rem',
              lineHeight:    1.1,
            }}
          >
            Noyer le Monde
          </h2>

          <p
            className="font-body"
            style={{
              fontSize:   'clamp(1rem, 1.6vw, 1.2rem)',
              fontStyle:  'italic',
              lineHeight:  1.9,
              color:      'rgba(232,213,176,0.65)',
              marginBottom: '1.5rem',
            }}
          >
            Atteindre la forme parfaite du Ketsuryugan. Créer un océan écarlate où la
            réalité illusoire des vivants se dissout dans la froide vérité du sang.{' '}
            <ParanoiaReveal
              surface="Il parle de cela avec un calme troublant."
              hidden="PARCE QUE POUR LUI, C'EST DÉJÀ FAIT."
              size="sm"
            />
          </p>

          {/* Sceau final */}
          <div
            style={{
              display:        'inline-block',
              background:     '#8b0000',
              color:          '#e8d5b0',
              padding:        '0.8rem 1.8rem',
              fontFamily:     '"Cinzel", serif',
              fontWeight:     900,
              fontSize:       'clamp(0.9rem, 1.5vw, 1.2rem)',
              letterSpacing:  '0.2em',
              textTransform:  'uppercase',
              transform:      'skewX(-4deg)',
              boxShadow:      '4px 4px 0 #3d0000, 0 0 30px rgba(139,0,0,0.3)',
            }}
          >
            KETSURYUGAN — STADE IV
          </div>
        </div>
      </div>
    </div>
  </div>
);
