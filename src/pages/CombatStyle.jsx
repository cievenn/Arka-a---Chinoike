import React from 'react';
import { StutterText } from '../components/ui/StutterText';

/**
 * CombatStyle — "Capacités et Style de Combat"
 * Trois sections : Le Style de l'Observateur, Le Paradoxe de la Porphyrie, Tactiques de Combat.
 * Content faithfully from pointscategorie.md.
 */
export const CombatStyle = () => (
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
        — III. Capacités / Classification Opérationnelle
      </p>

      <StutterText
        as="h1"
        intensity="low"
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(3rem, 10vw, 11rem)',
          lineHeight:    0.88,
          color:         '#e8d5b0',
          letterSpacing: '-0.02em',
          display:       'block',
        }}
      >
        STYLE DE
      </StutterText>
      <StutterText
        as="div"
        intensity="med"
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(3rem, 10vw, 11rem)',
          lineHeight:    0.88,
          color:         'transparent',
          WebkitTextStroke: '1px #ff3333',
          letterSpacing: '-0.02em',
          display:       'block',
          marginLeft:    'clamp(3rem, 8vw, 10rem)',
        }}
      >
        COMBAT
      </StutterText>

      <p
        className="font-body italic"
        style={{
          fontSize:   'clamp(1rem, 1.5vw, 1.15rem)',
          lineHeight: 1.8,
          color:      '#e8d5b0',
          maxWidth:   '58ch',
          marginTop:  'clamp(1.5rem, 3vw, 2.5rem)',
        }}
      >
        Isamu n'est pas un guerrier frontal. Sa morphologie et sa maladie lui interdisent les
        échanges de coups prolongés. Son style est{' '}
        <strong style={{ color: '#e8d5b0', fontStyle: 'normal' }}>sournois, psychologique et analytique</strong>.
      </p>
    </div>

    {/* ── SECTION 1 — Le Style de l'Observateur ──────────────────── */}
    <div style={{ marginBottom: 'clamp(3.5rem, 6vw, 5rem)', transform: 'rotate(-0.3deg)' }}>
      <div className="parchment-block" style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
          <span
            className="font-noble font-black"
            style={{ fontSize: '0.75rem', color: '#ff3333', letterSpacing: '0.3em' }}
          >
            01
          </span>
          <h2
            className="font-noble font-black"
            style={{
              fontSize:      'clamp(1.2rem, 2.5vw, 2rem)',
              color:         '#e8d5b0',
              letterSpacing: '0.06em',
            }}
          >
            Le Style de l'Observateur
          </h2>
        </div>

        <p
          className="font-body italic"
          style={{
            fontSize:   'clamp(1rem, 1.5vw, 1.15rem)',
            lineHeight: 1.85,
            color:      '#e8d5b0',
            marginBottom: '1rem',
          }}
        >
          Au lieu de chercher la faille dans la garde adverse, il observe les micro-mouvements, la
          sudation, la dilatation des pupilles, voir même déranger l'adversaire pour le déstabiliser.
        </p>
        <p
          className="font-body italic"
          style={{
            fontSize:    'clamp(1rem, 1.5vw, 1.15rem)',
            lineHeight:  1.85,
            color:       '#e8d5b0',
            paddingLeft: '1rem',
            borderLeft:  '2px solid rgba(255,50,50,0.6)',
          }}
        >
          En combat, il semble « danser » de manière instable, on peut décrire son style comme une forme de{' '}
          <strong style={{ color: '#e8d5b0', fontStyle: 'normal' }}>« danse extatique »</strong>, c’est-à-dire 
          une pratique d’improvisation libre, avec très peu voire aucune structure imposée. 
          Durant les combats, être au front serait une erreur il se place toujours dans l'angle mort 
          de l'adversaire, là où{' '}
          <em style={{ color: '#cc0000' }}>« le sang hésite »</em>.
        </p>
      </div>
    </div>

    {/* ── SECTION 2 — Le Paradoxe de la Porphyrie ────────────────── */}
    <div style={{ marginBottom: 'clamp(3.5rem, 6vw, 5rem)' }}>
      <div
        style={{
          display:              'grid',
          gridTemplateColumns:  '1fr 1fr',
          gap:                  'clamp(2rem, 3.5vw, 3.5rem)',
          alignItems:           'start',
        }}
      >
        {/* Point Négatif */}
        <div
          className="parchment-block"
          style={{ padding: 'clamp(1.2rem, 2.5vw, 2rem)', transform: 'rotate(0.5deg)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
            <span
              className="font-noble font-black"
              style={{ fontSize: '0.75rem', color: '#ff3333', letterSpacing: '0.3em' }}
            >
              02a
            </span>
            <h3
              className="font-noble font-black"
              style={{
                fontSize:      'clamp(1rem, 1.8vw, 1.4rem)',
                color:         '#cc0000',
                letterSpacing: '0.05em',
              }}
            >
              Le Point Négatif
            </h3>
          </div>

          <p
            className="font-body italic"
            style={{
              fontSize:   'clamp(0.95rem, 1.4vw, 1.05rem)',
              lineHeight: 1.85,
              color:      '#e8d5b0',
            }}
          >
            La porphyrie le rend faible physiquement. Une exposition prolongée au soleil ou un effort trop violent
            déclenche des crises de douleurs atroces, comme des douleurs abdominales, tachycardie, et bien d'autres 
            symptômes. Il doit souvent se battre dans l'ombre ou sous la pluie de Kiri afin d'économiser son énergie.
          </p>
        </div>

        {/* Point Positif */}
        <div
          className="parchment-block"
          style={{ padding: 'clamp(1.2rem, 2.5vw, 2rem)', transform: 'rotate(-0.4deg)', marginTop: 'clamp(2rem, 4vw, 4rem)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
            <span
              className="font-noble font-black"
              style={{ fontSize: '0.75rem', color: '#ff3333', letterSpacing: '0.3em' }}
            >
              02b
            </span>
            <h3
              className="font-noble font-black"
              style={{
                fontSize:      'clamp(1rem, 1.8vw, 1.4rem)',
                color:         '#e8d5b0',
                letterSpacing: '0.05em',
              }}
            >
              Le Point Positif
            </h3>
          </div>

          <p
            className="font-body italic"
            style={{
              fontSize:   'clamp(0.95rem, 1.4vw, 1.05rem)',
              lineHeight: 1.85,
              color:      '#e8d5b0',
            }}
          >
            Cette maladie affecte la synthèse de l'hémoglobine. Isamu est obsédé par son propre
            sang parce qu'il le sent bouillir ou se glacer, cette explication est philosophique mais 
            prouve comment Isamu ressent les choses. Cette sensibilité extrême lui donne une{' '}
            <strong style={{ color: '#e8d5b0', fontStyle: 'normal' }}>intuition pré-visuelle du flux sanguin</strong>.
          </p>
          <p
            className="font-body italic"
            style={{
              fontSize:    'clamp(0.9rem, 1.3vw, 1rem)',
              lineHeight:  1.85,
              color:       '#e8d5b0',
              marginTop:   '0.8rem',
              paddingLeft: '1rem',
              borderLeft:  '2px solid rgba(204,0,0,0.5)',
            }}
          >
            En accédant à son Dōjutsu dans le futur, il pourra sentir la pression sanguine d'un ennemi
            proche, anticipant l'attaque avant même que le muscle ne bouge. Ses yeux perpétuellement
            injectés de sang créent une confusion terrifiante sur l'activation réelle de son 
            pouvoir, se tordant de douleur à chaque activation.
          </p>
        </div>
      </div>
    </div>

    {/* ── SECTION 3 — Tactiques de Combat ────────────────────────── */}
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
        <span
          className="font-noble font-black"
          style={{ fontSize: '0.75rem', color: '#ff3333', letterSpacing: '0.3em' }}
        >
          03
        </span>
        <h2
          className="font-noble font-black ink-bleed"
          data-text="TACTIQUES DE COMBAT"
          style={{
            fontSize:      'clamp(1.3rem, 2.5vw, 2rem)',
            color:         '#e8d5b0',
            letterSpacing: '0.06em',
          }}
        >
          TACTIQUES DE COMBAT
        </h2>
      </div>

      <div
        style={{
          display:              'grid',
          gridTemplateColumns:  '1fr 1fr',
          gap:                  'clamp(2rem, 3.5vw, 3.5rem)',
          alignItems:           'start',
        }}
      >
        {/* Poison / Saignée */}
        <div className="parchment-block" style={{ padding: 'clamp(1.2rem, 2.5vw, 2rem)', transform: 'rotate(-0.5deg)' }}>
          <h3
            className="font-noble font-black"
            style={{
              fontSize:      'clamp(1rem, 1.8vw, 1.4rem)',
              color:         '#e8d5b0',
              marginBottom:  '0.8rem',
              letterSpacing: '0.05em',
            }}
          >
            Poison & Saignée
          </h3>
          <p
            className="font-body italic"
            style={{
              fontSize:   'clamp(0.95rem, 1.4vw, 1.05rem)',
              lineHeight: 1.85,
              color:      '#e8d5b0',
            }}
          >
            Il préfère utiliser des aiguilles ou de petites lames cachées pour créer des
            micro-coupures, même si c'est anodin, un utilisateur du Ketsuryûgan serait ravi d'utiliser ses méthodes. 
            Pour lui, faire couler une seule goutte de sang adverse, c'est{' '}
            <em style={{ color: '#cc0000' }}>« ouvrir le livre »</em> et pouvoir enfin lire son ennemi, un certain
            fantasme malsain pour le sang.
          </p>
        </div>

        {/* Guerre Psychologique */}
        <div className="parchment-block" style={{ padding: 'clamp(1.2rem, 2.5vw, 2rem)', transform: 'rotate(0.3deg)', marginTop: '2rem' }}>
          <h3
            className="font-noble font-black"
            style={{
              fontSize:      'clamp(1rem, 1.8vw, 1.4rem)',
              color:         '#e8d5b0',
              marginBottom:  '0.8rem',
              letterSpacing: '0.05em',
            }}
          >
            Guerre Psychologique
          </h3>
          <p
            className="font-body italic"
            style={{
              fontSize:   'clamp(0.95rem, 1.4vw, 1.05rem)',
              lineHeight: 1.85,
              color:      '#e8d5b0',
              marginBottom: '1rem',
            }}
          >
            Il parle pendant qu'il se bat. Il pointe les insécurités de l'adversaire, bégaye des détails
            sur sa fréquence cardiaque, brisant la concentration par sa démence apparente.
          </p>

          {/* Citation d'Isamu en combat */}
          <div
            style={{
              padding:      '0.8rem 1rem',
              borderLeft:   '2px solid #3d0000',
              background:   'rgba(61,0,0,0.15)',
            }}
          >
            <StutterText
              as="p"
              intensity="med"
              className="font-body"
              style={{
                fontSize:  'clamp(1.05rem, 1.6vw, 1.2rem)',
                color:     '#cc0000',
                fontStyle: 'italic',
                lineHeight: 1.6,
              }}
            >
              T-t-ton cœur... il bat à 140... tu as p-p-peur de mourir ici ?
            </StutterText>
          </div>
        </div>
      </div>
    </div>
  </div>
);
