import React from 'react';
import { StutterText } from '../components/ui/StutterText';

/**
 * Psychology — "Profil Psychologique"
 * Trois facettes de la psyché d'Isamu tirées de pointscategorie.md.
 * Mise en page cassée avec sections décalées — on entre dans sa tête.
 */
export const Psychology = () => (
  <div style={{ position: 'relative', overflow: 'visible' }}>

    {/* ── TITRE ──────────────────────────────────────────────────── */}
    <div style={{ marginBottom: 'clamp(3rem, 7vw, 6rem)', overflow: 'visible' }}>
      <p
        className="font-noble"
        style={{
          fontSize:      '0.6rem',
          letterSpacing: '0.5em',
          color:         '#ff3333',
          textTransform: 'uppercase',
          marginBottom:  '0.5rem',
        }}
      >
        — II. Évaluation Psychologique / Confidentiel
      </p>

      <StutterText
        as="h1"
        intensity="med"
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(3.5rem, 11vw, 12rem)',
          lineHeight:    0.88,
          color:         '#e8d5b0',
          letterSpacing: '-0.02em',
          display:       'block',
        }}
      >
        PROFIL
      </StutterText>
      <StutterText
        as="div"
        intensity="high"
        className="font-noble font-black mobile-no-offset"
        style={{
          fontSize:      'clamp(3.5rem, 11vw, 12rem)',
          lineHeight:    0.88,
          color:         '#cc0000',
          letterSpacing: '-0.02em',
          display:       'block',
          marginLeft:    'clamp(2rem, 6vw, 8rem)',
          transform:     'rotate(0.5deg)',
        }}
      >
        PSYCHO.
      </StutterText>

      <p
        className="font-body italic"
        style={{
          fontSize:   'clamp(1rem, 1.6vw, 1.2rem)',
          lineHeight: 1.8,
          color:      '#e8d5b0',
          maxWidth:   '55ch',
          marginTop:  'clamp(1.5rem, 3vw, 2.5rem)',
        }}
      >
        La mentalité d'Isamu est une <strong style={{ color: '#e8d5b0', fontStyle: 'normal' }}>bizarre</strong>.
        Il ne vit pas dans le même monde que ses camarades, il vit dans un monde
        de <strong style={{ color: '#cc0000', fontStyle: 'normal', fontFamily: '"Cinzel", serif' }}>signes et de décodages</strong>.
      </p>
    </div>

    {/* ── TRAIT 01 — L'Hyper-Interprétation ──────────────────────── */}
    <div style={{ marginBottom: 'clamp(4rem, 7vw, 6rem)' }}>
      <div
        className="grid-responsive-num"
        style={{
          transform:            'rotate(-0.3deg)',
        }}
      >
        <div style={{ textAlign: 'center', paddingTop: '0.3rem' }}>
          <div
            className="font-noble font-black"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'rgba(255,50,50,0.7)', lineHeight: 1 }}
          >
            01
          </div>
          <div className="font-kanji" style={{ fontSize: '0.85rem', color: 'rgba(204,0,0,0.45)', marginTop: '0.3rem' }}>
            壱
          </div>
        </div>

        <div className="parchment-block" style={{ padding: 'clamp(1.2rem, 2.5vw, 2rem)' }}>
          <h2
            className="font-noble font-black"
            style={{
              fontSize:      'clamp(1.2rem, 2.5vw, 2rem)',
              color:         '#e8d5b0',
              letterSpacing: '0.06em',
              marginBottom:  '1rem',
            }}
          >
            L'Hyper-Interprétation
          </h2>
          <p
            className="font-noble"
            style={{
              fontSize:      '0.5rem',
              letterSpacing: '0.35em',
              color:         '#ff3333',
              textTransform: 'uppercase',
              marginBottom:  '1rem',
            }}
          >
            Sémiotique Démente
          </p>

          <p
            className="font-body italic"
            style={{
              fontSize:   'clamp(1rem, 1.5vw, 1.15rem)',
              lineHeight:  1.85,
              color:      '#e8d5b0',
            }}
          >
            Isamu analyse tout de manière excessive. Pour lui, le moindre geste cache quelque chose de grave. 
            Un simple silence ? Il croit que{' '}
            <em style={{ color: '#cc0000' }}>« la vérité est en train de s'échapper »</em>.
            malgré la personne. Quelqu'un croise les bras ? Il ne pense pas que la personne est fermée, mais qu'elle{' '}
            <em style={{ color: '#cc0000' }}>« lutte pour cacher la violence en lui »</em>.
            À cause de cette paranoïa, il est épuisant et personne ne sait jamais comment il va réagir.
          </p>
        </div>
      </div>
    </div>

    {/* ── INTERRUPTION — Citation d'Isamu ────────────────────────── */}
    <div
      style={{
        position:      'relative',
        padding:       'clamp(1.5rem, 3vw, 3rem) 0',
        marginBottom:  'clamp(4rem, 7vw, 6rem)',
        borderTop:     '1px solid rgba(204,0,0,0.4)',
        borderBottom:  '1px solid rgba(204,0,0,0.4)',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, rgba(61,0,0,0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      <StutterText
        as="div"
        intensity="high"
        className="font-noble font-black"
        style={{
          fontSize:         'clamp(2.5rem, 8vw, 9rem)',
          lineHeight:       0.95,
          color:            'transparent',
          WebkitTextStroke: '1px rgba(139,0,0,0.45)',
          letterSpacing:    '0.04em',
          display:          'block',
        }}
      >
        IL MENT.
      </StutterText>
      <div
        className="font-noble font-black mobile-no-offset"
        style={{
          fontSize:      'clamp(1rem, 3vw, 3rem)',
          lineHeight:    1,
          color:         'rgba(232,213,176,0.15)',
          letterSpacing: '0.15em',
          marginLeft:    'clamp(4rem, 12vw, 16rem)',
          marginTop:     '0.2rem',
        }}
      >
        — SON POULS L'A TRAHI.
      </div>
    </div>

    {/* ── TRAIT 02 — Kurotsuchi ──────────────────────────────────── */}
    <div style={{ marginBottom: 'clamp(4rem, 7vw, 6rem)' }}>
      <div
        className="grid-responsive-num mobile-no-offset"
        style={{
          marginLeft:           'clamp(0rem, 3vw, 4rem)',
          transform:            'rotate(0.4deg)',
        }}
      >
        <div style={{ textAlign: 'center', paddingTop: '0.3rem' }}>
          <div
            className="font-noble font-black"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'rgba(255,50,50,0.7)', lineHeight: 1 }}
          >
            02
          </div>
          <div className="font-kanji" style={{ fontSize: '0.85rem', color: 'rgba(204,0,0,0.45)', marginTop: '0.3rem' }}>
            弐
          </div>
        </div>

        <div className="parchment-block" style={{ padding: 'clamp(1.2rem, 2.5vw, 2rem)' }}>
          <h2
            className="font-noble font-black"
            style={{
              fontSize:      'clamp(1.2rem, 2.5vw, 2rem)',
              color:         '#e8d5b0',
              letterSpacing: '0.06em',
              marginBottom:  '1rem',
            }}
          >
            La Schizophrénie
          </h2>
          <p
            className="font-noble"
            style={{
              fontSize:      '0.5rem',
              letterSpacing: '0.35em',
              color:         '#ff3333',
              textTransform: 'uppercase',
              marginBottom:  '1rem',
            }}
          >
            Kurotsuchi — Le Filtre de Réalité
          </p>

          <p
            className="font-body italic"
            style={{
              fontSize:   'clamp(1rem, 1.5vw, 1.15rem)',
              lineHeight:  1.85,
              color:      '#e8d5b0',
              marginBottom: '1rem',
            }}
          >
            Kurotsuchi n'est pas une seconde personnalité classique comme dans certaines œuvres, à vrai dire, il vit 
            en Isamu, devenant au fur à mesure un{' '}
            <strong style={{ color: '#e8d5b0', fontStyle: 'normal' }}>filtre de réalité</strong>.
            Ce terme n'est pas utilisé bêtement, déjà qu'il résume la relation entre Isamu et Kurotsuchi, ce dernier le
            guide continuellement à chaque décision, que ce soit dans la vie de tous les jours ou en combat.
            Isamu est celui qui doute, bégaye et subit la douleur. Kurotsuchi est celui qui conclut,
            tranche et ordonne, étant le véritable shinobi que Kiri aurait dû avoir.
          </p>
          <p
            className="font-body italic"
            style={{
              fontSize:   'clamp(1rem, 1.5vw, 1.15rem)',
              lineHeight:  1.85,
              color:      '#e8d5b0',
              paddingLeft: '1rem',
              borderLeft:  '2px solid rgba(255,50,50,0.6)',
            }}
          >
            Isamu parle fort et constamment pour masquer les murmures de Kurotsuchi qui lui
            dicte la pseudo « vérité » sur les gens. Le véritable shinobi exemplaire devrait être
            Kurotsuchi, mais malheureusement, l'hôte du corps est Isamu. Donc pour régler cela, Kurotsuchi fait
            tout pour être le plus présent, prenant le contrôle du corps d'Isamu dès qu'il en a l'occasion.
          </p>
        </div>
      </div>
    </div>

    {/* ── TRAIT 03 — Rapport à l'autre ──────────────────────────── */}
    <div>
      <div
        className="grid-responsive-num"
        style={{
          transform:            'rotate(-0.2deg)',
        }}
      >
        <div style={{ textAlign: 'center', paddingTop: '0.3rem' }}>
          <div
            className="font-noble font-black"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'rgba(255,50,50,0.7)', lineHeight: 1 }}
          >
            03
          </div>
          <div className="font-kanji" style={{ fontSize: '0.85rem', color: 'rgba(204,0,0,0.45)', marginTop: '0.3rem' }}>
            参
          </div>
        </div>

        <div className="parchment-block" style={{ padding: 'clamp(1.2rem, 2.5vw, 2rem)' }}>
          <h2
            className="font-noble font-black"
            style={{
              fontSize:      'clamp(1.2rem, 2.5vw, 2rem)',
              color:         '#e8d5b0',
              letterSpacing: '0.06em',
              marginBottom:  '1rem',
            }}
          >
            Rapport à l'Autre
          </h2>

          <p
            className="font-body italic"
            style={{
              fontSize:   'clamp(1rem, 1.5vw, 1.15rem)',
              lineHeight:  1.85,
              color:      '#e8d5b0',
            }}
          >
            Il traite et observe les humains comme des{' '}
            <strong style={{ color: '#e8d5b0', fontStyle: 'normal' }}>livres ouverts qu'il ne peut s'empêcher de lire</strong>, 
            l'expression « tourner la page » ne lui va vraiment pas à merveille.
            Il ne ressent pas de compassion, véritablement, il ne cherche pas à savoir si vous souffrez, mais à débusquer 
            vos mensonges. Sa méfiance ne vient pas d'une peur d'être blessé, mais d'un besoin maladif de tout 
            savoir. Il ne supporte pas l'idée qu'un détail lui échappe ou qu'il soit{' '}
            <em style={{ color: '#cc0000' }}>« mal informé »</em>.
          </p>
        </div>
      </div>
    </div>
  </div>
);
