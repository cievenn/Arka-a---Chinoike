import React from 'react';
import { DOSSIER_DATA }    from '../data';
import { StutterText }     from '../components/ui/StutterText';
import { ParanoiaReveal }  from '../components/ui/ParanoiaReveal';

/** ─── PageGeneral — "Matière Première" ─────────────────────────
 *  Présentation brute du sujet : identité, clan, Dojutsu, menace.
 *  Mise en page asymétrique — pas de grille symétrique.
 */
export const PageGeneral = () => (
  <div style={{ position: 'relative' }}>

    {/* ── TITRE GÉANT — voix écrasante ─────────────────────── */}
    <div
      style={{
        position:    'relative',
        marginBottom: 'clamp(2rem, 6vw, 5rem)',
        overflow:    'visible',
      }}
    >
      {/* Kanji de fond — texture */}
      <div
        className="font-kanji font-black select-none pointer-events-none"
        style={{
          position:   'absolute',
          top:        '-0.3em',
          right:      '-0.15em',
          fontSize:   'clamp(10rem, 30vw, 40rem)',
          color:      'rgba(139,0,0,0.04)',
          lineHeight:  1,
          zIndex:      0,
          userSelect: 'none',
        }}
        aria-hidden="true"
      >
        血
      </div>

      {/* Sous-titre */}
      <p
        className="font-noble"
        style={{
          fontSize:      'clamp(0.6rem, 0.9vw, 0.75rem)',
          letterSpacing: '0.5em',
          color:         'rgba(139,0,0,0.7)',
          textTransform: 'uppercase',
          marginBottom:  '0.8rem',
          position:      'relative',
          zIndex:         1,
        }}
      >
        — Dossier Noir / Sujet {DOSSIER_DATA.id}
      </p>

      {/* Nom ISAMU — déborde intentionnellement */}
      <div style={{ position: 'relative', zIndex: 1, overflow: 'visible' }}>
        <StutterText
          as="h1"
          intensity="med"
          className="font-noble font-black"
          style={{
            fontSize:         'clamp(5rem, 18vw, 20rem)',
            lineHeight:       0.85,
            color:            'transparent',
            WebkitTextStroke: '1.5px rgba(232,213,176,0.85)',
            letterSpacing:    '-0.03em',
            overflow:         'visible',
            whiteSpace:       'nowrap',
            display:          'block',
          }}
        >
          ISAMU
        </StutterText>
      </div>

      {/* Clan — second niveau */}
      <div
        style={{
          display:      'flex',
          alignItems:   'baseline',
          gap:          'clamp(1rem, 2vw, 2rem)',
          marginTop:    '0.5rem',
          position:     'relative',
          zIndex:       1,
        }}
      >
        <span
          className="font-noble font-black"
          style={{
            fontSize:   'clamp(1.4rem, 4vw, 3.5rem)',
            color:      '#8b0000',
            letterSpacing: '0.1em',
          }}
        >
          CHINOIKE
        </span>
        <span
          className="font-kanji font-black"
          style={{
            fontSize:   'clamp(1.8rem, 5vw, 4rem)',
            color:      'rgba(139,0,0,0.6)',
            lineHeight:  1,
          }}
        >
          {DOSSIER_DATA.kanji}
        </span>
      </div>
    </div>

    {/* ── CORPS — Asymétrique ───────────────────────────────── */}
    <div
      style={{
        display:      'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)',
        gap:          'clamp(2rem, 4vw, 4rem)',
        alignItems:   'start',
      }}
    >
      {/* Colonne gauche — données froides du dossier */}
      <div
        style={{
          transform: 'rotate(-0.5deg)',
          marginTop: '3rem',
        }}
      >
        <div
          className="parchment-block"
          style={{ padding: 'clamp(1.2rem, 2.5vw, 2rem)' }}
        >
          <p
            className="font-noble"
            style={{
              fontSize:      '0.6rem',
              letterSpacing: '0.4em',
              color:         'rgba(139,0,0,0.6)',
              textTransform: 'uppercase',
              marginBottom:  '1.5rem',
            }}
          >
            ⬛ Données Biométriques
          </p>

          {[
            { label: 'Village',          value: 'Kirigakure no Sato' },
            { label: 'Rang',             value: 'Anomalie classifiée' },
            { label: 'Groupe Sanguin',   value: DOSSIER_DATA.bloodType },
            { label: 'Localisation',     value: DOSSIER_DATA.location },
            { label: 'Niveau de Menace', value: DOSSIER_DATA.threatLevel, danger: true },
          ].map(({ label, value, danger }) => (
            <div
              key={label}
              style={{
                borderBottom: '1px solid rgba(232,213,176,0.06)',
                paddingBottom: '0.8rem',
                marginBottom:  '0.8rem',
              }}
            >
              <div
                className="font-noble"
                style={{
                  fontSize:      '0.55rem',
                  letterSpacing: '0.35em',
                  color:         'rgba(232,213,176,0.6)',
                  textTransform: 'uppercase',
                  marginBottom:  '0.2rem',
                }}
              >
                {label}
              </div>
              <div
                className="font-body"
                style={{
                  fontSize:   'clamp(0.85rem, 1.3vw, 1rem)',
                  color:      danger ? '#8b0000' : 'rgba(232,213,176,0.8)',
                  fontWeight: danger ? 600 : 400,
                  fontStyle:  danger ? 'normal' : 'italic',
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Colonne droite — texte narratif avec paranoïa */}
      <div>
        {/* Titre de section — encre qui bave */}
        <h2
          className="font-noble font-black ink-bleed"
          data-text="PROTOCOLE ZÉRO"
          style={{
            fontSize:      'clamp(1.5rem, 3vw, 2.5rem)',
            color:         'rgba(232,213,176,0.9)',
            letterSpacing: '0.08em',
            marginBottom:  'clamp(1rem, 2.5vw, 2rem)',
            borderLeft:    '3px solid #3d0000',
            paddingLeft:   '1rem',
          }}
        >
          PROTOCOLE ZÉRO
        </h2>

        <div
          className="font-body"
          style={{
            fontSize:   'clamp(1rem, 1.6vw, 1.2rem)',
            lineHeight:  1.8,
            color:      'rgba(232,213,176,0.9)',
            fontStyle:  'italic',
          }}
        >
          <p style={{ marginBottom: '1.5rem' }}>
            Le sujet souffre d'hallucinations hématiques sévères.{' '}
            <ParanoiaReveal
              surface="Il entend les corps des gens autour de lui."
              hidden="IL LIT NOS INTENTIONS DANS NOS VEINES."
              size="md"
            />
          </p>

          <p
            style={{
              marginBottom:  '1.5rem',
              paddingLeft:   '1.5rem',
              borderLeft:    '1px solid rgba(139,0,0,0.3)',
            }}
          >
            <ParanoiaReveal
              surface="Ne jamais lui tourner le dos."
              hidden="IL CALCULE DÉJÀ L'ANGLE D'INCISION."
              size="sm"
            />
            {' '}S'il fixe vos veines ou si la température de la pièce chute soudainement,{' '}
            <strong style={{ color: '#8b0000', fontStyle: 'normal' }}>
              neutralisation immédiate autorisée.
            </strong>
          </p>

          <p style={{ color: 'rgba(232,213,176,0.6)', fontSize: '0.9em' }}>
            <ParanoiaReveal
              surface="Profil psychologique : instable chronique."
              hidden="IL EST CONSCIENT. IL FAIT SEMBLANT."
              size="sm"
            />
          </p>
        </div>
      </div>
    </div>
  </div>
);
