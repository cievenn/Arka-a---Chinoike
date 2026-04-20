import React from 'react';
import { StutterText }    from '../components/ui/StutterText';
import { ParanoiaReveal } from '../components/ui/ParanoiaReveal';

/** ─── Diary — "Journal Intime" ─────────────────────────────────
 *  Mise en page RADICALEMENT asymétrique — comme un journal déchiré
 *  épinglé sur un mur ensanglanté.
 *  Aucune grille symétrique, des rotations chaotiques, du texte
 *  géant qui interrompt les paragraphes, des fragments épinglés.
 */

// ── Composant Fragment de journal ────────────────────────────
const JournalEntry = ({
  date,
  content,
  style = {},
  fragmentStyle = {},
  children,
}) => (
  <div
    className="parchment-block"
    style={{
      padding:      'clamp(1rem, 2.5vw, 2rem)',
      position:     'relative',
      ...fragmentStyle,
    }}
  >
    {/* Coin déchiré simulé */}
    <div
      aria-hidden="true"
      style={{
        position:    'absolute',
        top:         0,
        right:       0,
        width:       '40px',
        height:      '40px',
        background:  'linear-gradient(225deg, rgba(139,0,0,0.4) 50%, transparent 50%)',
        pointerEvents: 'none',
      }}
    />

    {date && (
      <p
        className="font-noble"
        style={{
          fontSize:      '0.5rem',
          letterSpacing: '0.4em',
          color:         'rgba(139,0,0,0.5)',
          textTransform: 'uppercase',
          marginBottom:  '0.8rem',
        }}
      >
        {date}
      </p>
    )}

    <div
      className="font-body"
      style={{
        fontSize:   'clamp(0.95rem, 1.5vw, 1.1rem)',
        fontStyle:  'italic',
        lineHeight:  1.9,
        color:      'rgba(232,213,176,0.65)',
        ...style,
      }}
    >
      {content || children}
    </div>
  </div>
);

// ── Composant Annotation en marge ────────────────────────────
const Annotation = ({ children, rotate = '90deg', side = 'left', color = 'rgba(139,0,0,0.5)' }) => (
  <div
    className="font-noble font-black"
    style={{
      writingMode:   side === 'left' ? 'vertical-rl' : 'vertical-lr',
      transform:     `rotate(${rotate})`,
      fontSize:      'clamp(0.55rem, 0.8vw, 0.7rem)',
      letterSpacing: '0.3em',
      color,
      textTransform: 'uppercase',
      userSelect:    'none',
    }}
    aria-hidden="true"
  >
    {children}
  </div>
);

// ── PAGE PRINCIPALE ──────────────────────────────────────────
export const Diary = () => (
  <div style={{ position: 'relative', overflow: 'visible' }}>

    {/* ── EN-TÊTE — Titre journal ───────────────────────────── */}
    <div style={{ marginBottom: 'clamp(4rem, 8vw, 7rem)', position: 'relative' }}>
      <StutterText
        as="h1"
        intensity="low"
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(4rem, 13vw, 15rem)',
          lineHeight:    0.85,
          color:         'transparent',
          WebkitTextStroke: '1px rgba(232,213,176,0.5)',
          letterSpacing: '0.02em',
          overflow:      'visible',
        }}
      >
        JOURNAL
      </StutterText>

      {/* "INTIME" en rouge plein, décalé */}
      <StutterText
        as="div"
        intensity="med"
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(4rem, 13vw, 15rem)',
          lineHeight:    0.85,
          color:         '#8b0000',
          letterSpacing: '0.02em',
          overflow:      'visible',
          marginLeft:    'clamp(5rem, 12vw, 15rem)',
          marginTop:     '-0.15em',
          textShadow:    '0 0 80px rgba(139,0,0,0.3)',
        }}
      >
        INTIME
      </StutterText>

      {/* Date — annotation */}
      <p
        className="font-noble"
        style={{
          fontSize:      '0.6rem',
          letterSpacing: '0.4em',
          color:         'rgba(232,213,176,0.25)',
          textTransform: 'uppercase',
          marginTop:     '1rem',
        }}
      >
        — Fragments récupérés / Secteur 7, Kiri / Non datés
      </p>
    </div>

    {/* ── MUR DE NOTES — Layout radicalement asymétrique ──────── */}

    {/* LIGNE 1 : Fragment + Texte géant + Fragment */}
    <div
      style={{
        display:    'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap:        'clamp(2rem, 4vw, 4rem)',
        marginBottom: 'clamp(2rem, 4vw, 4rem)',
        alignItems: 'start',
      }}
    >
      <JournalEntry
        date="Entrée 001"
        fragmentStyle={{ transform: 'rotate(-1.2deg)' }}
      >
        <ParanoiaReveal
          surface="Il m'a regardé ce matin dans le couloir."
          hidden="IL CHERCHAIT MES POINTS FAIBLES."
          size="md"
        />
        <p style={{ marginTop: '0.8rem' }}>
          Personne ne comprend pourquoi je parle si fort. Moi je sais.{' '}
          <ParanoiaReveal
            surface="C'est pour qu'on m'entende."
            hidden="C'EST POUR QU'ILS N'ENTENDENT PAS CE QUE JE PENSE."
            size="sm"
          />
        </p>
      </JournalEntry>

      {/* Fragment épinglé vertical */}
      <div style={{ paddingTop: '3rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <Annotation>Kirigakure</Annotation>
        <JournalEntry
          date="Entrée 007"
          fragmentStyle={{ transform: 'rotate(1.8deg)' }}
        >
          Le sang ne ment pas. Mes yeux ne mentent pas.{' '}
          <strong style={{ color: '#8b0000', fontStyle: 'normal' }}>
            Reijin m'a souri.
          </strong>
          <ParanoiaReveal
            surface=" Ça, ça ment."
            hidden=" SON SOURIRE CACHAIT UNE PEUR. J'AI SENTI SA CAROTIDE ACCÉLÉRER."
            size="sm"
          />
        </JournalEntry>
      </div>
    </div>

    {/* ── INTERRUPTION — Phrase unique gigantesque ─────────────── */}
    <div
      style={{
        position:    'relative',
        marginLeft:  '-clamp(1.5rem, 18vw, 20rem)',
        marginRight: '-clamp(1.5rem, 5vw, 5rem)',
        padding:     'clamp(1.5rem, 3vw, 3rem) clamp(1.5rem, 5vw, 5rem)',
        marginBottom: 'clamp(3rem, 6vw, 5rem)',
        overflow:    'hidden',
      }}
    >
      {/* Tache d'encre */}
      <div
        aria-hidden="true"
        style={{
          position:     'absolute',
          left:         '30%',
          top:          '-20px',
          width:        '300px',
          height:       '200px',
          background:   'radial-gradient(ellipse, rgba(61,0,0,0.4) 0%, transparent 70%)',
          borderRadius: '50%',
          filter:       'blur(20px)',
          pointerEvents: 'none',
        }}
      />

      <StutterText
        as="div"
        intensity="high"
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(3rem, 10vw, 12rem)',
          lineHeight:    0.9,
          color:         'rgba(139,0,0,0.8)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          textShadow:    '0 0 60px rgba(139,0,0,0.3)',
          overflow:      'visible',
        }}
      >
        TOUT LE MONDE MENT
      </StutterText>
      <div
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(1.5rem, 4vw, 5rem)',
          lineHeight:    1,
          color:         'rgba(232,213,176,0.2)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginLeft:    'clamp(8rem, 20vw, 25rem)',
          overflow:      'visible',
        }}
      >
        — sauf moi
      </div>
    </div>

    {/* LIGNE 2 : Trois fragments décalés */}
    <div
      style={{
        display:    'grid',
        gridTemplateColumns: '1fr 1.3fr 0.9fr',
        gap:        'clamp(1.5rem, 3vw, 3rem)',
        marginBottom: 'clamp(3rem, 6vw, 5rem)',
        alignItems: 'start',
      }}
    >
      <JournalEntry
        date="Entrée 012"
        fragmentStyle={{ transform: 'rotate(0.8deg)', marginTop: '4rem' }}
      >
        Ils mo-mo-m'ont demandé de répondre aux questions.
        {' '}<ParanoiaReveal
          surface="J'ai répondu poliment."
          hidden="JE LEUR AI DIT EXACTEMENT CE QU'ILS VOULAIENT ENTENDRE. CE N'EST PAS LA RÉALITÉ."
          size="sm"
        />
      </JournalEntry>

      {/* Fragment central — plus grand */}
      <JournalEntry
        date="Entrée 019"
        fragmentStyle={{ transform: 'rotate(-0.5deg)' }}
        style={{ fontSize: 'clamp(1.05rem, 1.7vw, 1.3rem)' }}
      >
        <p style={{ marginBottom: '1rem' }}>
          Aujourd'hui j'ai failli.{' '}
          <strong style={{ color: '#8b0000', fontStyle: 'normal' }}>
            Failli me laisser croire que l'infirmière était réelle.
          </strong>
        </p>
        <ParanoiaReveal
          surface="Elle m'a apporté de l'eau et souri."
          hidden="ELLE VOULAIT QUE JE BAISSE MA GARDE. J'AI VU SES VEINES PALPITER PLUS VITE EN M'APPROCHANT."
          size="md"
        />
        <p style={{ marginTop: '1rem', color: 'rgba(232,213,176,0.4)', fontSize: '0.85em' }}>
          Je ne recommencerai pas l'erreur de faire confiance.
        </p>
      </JournalEntry>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginTop: '1rem' }}>
        <Annotation side="right" rotate="-90deg">Non daté</Annotation>
        <JournalEntry
          fragmentStyle={{ transform: 'rotate(-1.5deg)' }}
        >
          <p style={{ color: '#8b0000', fontStyle: 'normal', fontFamily: '"Cinzel", serif', fontWeight: 900, fontSize: '1.1em' }}>
            LE SANG VOIT<br />CE QUE LES YEUX<br />REFUSENT.
          </p>
        </JournalEntry>
      </div>
    </div>

    {/* ── DERNIÈRE ENTRÉE — La plus terrifiante ─────────────────── */}
    <div style={{ transform: 'rotate(0.4deg)' }}>
      <p
        className="font-noble"
        style={{
          fontSize:      '0.6rem',
          letterSpacing: '0.4em',
          color:         'rgba(139,0,0,0.5)',
          textTransform: 'uppercase',
          marginBottom:  '1rem',
        }}
      >
        — Dernière Entrée Connue
      </p>

      <div
        style={{
          display:  'grid',
          gridTemplateColumns: '1fr 1fr',
          gap:      'clamp(2rem, 4vw, 4rem)',
        }}
      >
        <JournalEntry fragmentStyle={{ transform: 'rotate(-0.8deg)' }}>
          <p>
            Je ne suis plus pr-pr-pressé.{' '}
            <ParanoiaReveal
              surface="La paix viendra."
              hidden="QUAND TOUT LE MONDE AURA CESSÉ DE BATTRE."
              size="md"
            />
          </p>
          <p style={{ marginTop: '1rem' }}>
            J'entends chaque cœur dans ce bâtiment.{' '}
            <em style={{ color: 'rgba(232,213,176,0.4)' }}>
              Trente-deux personnes. Toutes des menteurs.
            </em>
          </p>
        </JournalEntry>

        {/* Kanji de conclusion */}
        <div
          style={{
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            position:       'relative',
          }}
        >
          <div
            className="font-kanji font-black"
            style={{
              fontSize:   'clamp(6rem, 15vw, 18rem)',
              color:      'rgba(139,0,0,0.15)',
              lineHeight:  1,
              userSelect: 'none',
              textShadow: '0 0 80px rgba(139,0,0,0.2)',
            }}
            aria-hidden="true"
          >
            血
          </div>

          {/* Signature */}
          <div
            className="font-noble"
            style={{
              position:      'absolute',
              bottom:        '10%',
              right:         '0',
              fontSize:      'clamp(0.6rem, 1vw, 0.8rem)',
              letterSpacing: '0.3em',
              color:         'rgba(139,0,0,0.5)',
              textTransform: 'uppercase',
            }}
          >
            — I.C. —
          </div>
        </div>
      </div>
    </div>
  </div>
);
