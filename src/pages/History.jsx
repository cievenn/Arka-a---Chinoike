import React from 'react';
import { StutterText } from '../components/ui/StutterText';

/**
 * History — "Histoire"
 * Trois chapitres de la vie d'Isamu, fidèlement adaptés de pointscategorie.md.
 * Mise en page narrative — comme un manuscrit déchiré et recollé.
 */

// ─── Composant de bloc narratif avec coin déchiré ─────────────
const NarrativeBlock = ({ children, style: extraStyle = {} }) => (
  <div
    className="parchment-block"
    style={{
      padding:  'clamp(1.5rem, 3vw, 2.5rem)',
      position: 'relative',
      ...extraStyle,
    }}
  >
    <div
      aria-hidden="true"
      style={{
        position:    'absolute',
        top:         0,
        right:       0,
        width:       '30px',
        height:      '30px',
        background:  'linear-gradient(225deg, rgba(255,50,50,0.6) 50%, transparent 50%)',
        pointerEvents: 'none',
      }}
    />
    {children}
  </div>
);

// ─── Composant de citation (dialogue d'Isamu ou Kurotsuchi) ───
const Quote = ({ children, speaker, stutter = false }) => (
  <div
    style={{
      padding:    'clamp(1rem, 2vw, 1.8rem)',
      borderLeft: '2px solid #3d0000',
      background: 'rgba(61,0,0,0.1)',
      marginTop:  '1.5rem',
      marginBottom: '1.5rem',
    }}
  >
    {speaker && (
      <p
        className="font-noble"
        style={{
          fontSize:      '0.5rem',
          letterSpacing: '0.35em',
          color:         '#ff3333',
          textTransform: 'uppercase',
          marginBottom:  '0.5rem',
        }}
      >
        — {speaker}
      </p>
    )}
    {stutter ? (
      <StutterText
        as="p"
        intensity="med"
        className="font-body"
        style={{
          fontSize:   'clamp(1.05rem, 1.6vw, 1.2rem)',
          color:      '#cc0000',
          fontStyle:  'italic',
          lineHeight: 1.7,
        }}
      >
        {children}
      </StutterText>
    ) : (
      <p
        className="font-body italic"
        style={{
          fontSize:   'clamp(1.05rem, 1.6vw, 1.2rem)',
          lineHeight: 1.7,
          color:      '#cc0000',
        }}
      >
        {children}
      </p>
    )}
  </div>
);

// ─── Séparateur de chapitre ───────────────────────────────────
const ChapterDivider = () => (
  <div
    style={{
      margin:     'clamp(3rem, 6vw, 5rem) 0',
      height:     '1px',
      background: 'linear-gradient(90deg, transparent 0%, rgba(255,50,50,0.6) 30%, rgba(255,50,50,0.6) 70%, transparent 100%)',
    }}
  />
);

// ─── Paragraphe narratif standard ─────────────────────────────
const Para = ({ children, indent = false, dim = false }) => (
  <p
    className="font-body italic"
    style={{
      fontSize:    'clamp(1rem, 1.5vw, 1.15rem)',
      lineHeight:  1.9,
      color:       dim ? '#e8d5b0' : '#e8d5b0',
      marginBottom: '1.2rem',
      paddingLeft: indent ? '1.2rem' : 0,
      borderLeft:  indent ? '2px solid rgba(204,0,0,0.45)' : 'none',
    }}
  >
    {children}
  </p>
);

// ─── COMPOSANT PRINCIPAL ──────────────────────────────────────
export const History = () => (
  <div style={{ position: 'relative', overflow: 'visible' }}>

    {/* ── TITRE GLOBAL ──────────────────────────────────────────── */}
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
        — IV. Archives / Dossier Médico-Historique
      </p>

      <StutterText
        as="h1"
        intensity="low"
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(4rem, 13vw, 14rem)',
          lineHeight:    0.85,
          color:         'transparent',
          WebkitTextStroke: '1px #e8d5b0',
          letterSpacing: '0.02em',
          display:       'block',
        }}
      >
        HISTOIRE
      </StutterText>
    </div>


    {/* ═══════════════════════════════════════════════════════════
        CHAPITRE I — L'ENFANT DU SILENCE
       ═══════════════════════════════════════════════════════════ */}
    <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '1.5rem' }}>
        <span className="font-noble font-black" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: '#ff3333', lineHeight: 1 }}>I</span>
        <h2
          className="font-noble font-black"
          style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', color: '#e8d5b0', letterSpacing: '0.06em' }}
        >
          L'Enfant du Silence
        </h2>
      </div>

      <NarrativeBlock style={{ transform: 'rotate(-0.3deg)' }}>
        <Para>
          À Kirigakure, le brouillard prend une place majeur dans le village, c'est là où toutes les atrocités sont commises.
          La naissance d'<strong style={{ color: '#e8d5b0', fontStyle: 'normal' }}>Isamu Chinoike</strong> ne
          fut célébrée par aucun cri de joie. Elle fut simplement actée par le grincement d'une plume sur un 
          registre jauni et le silence de ses parents remplis de honte.
        </Para>

        <Para indent>
          Dans les bureaux des hauts gradés, Isamu était vu comme un 
          <strong style={{ color: '#e8d5b0', fontStyle: 'normal' }}>unité biologique</strong> et non comme pauvre 
          un nourrisson affilié à une branche secondaire d'un clan dont on surveillait la dangerosité comme on surveille
          un incendie couvant sous la cendre. Il n'est pas né d'une lignée de héros, il est né d'un inventaire.
        </Para>

        <Para>
          Son enfance se déroula dans les codes d'un ninja. Élevé au sein du clan
          Chinoike sous l'œil des surveillants de Kiri, Isamu grandit dans un monde de comparaisons
          constantes. Il était le sujet qu'on mesurait face aux lignées plus prestigieuses, l'enfant
          qu'on jugeait trop frêle, trop défaillant. Atteint d'une{' '}
          <strong style={{ color: '#cc0000', fontStyle: 'normal' }}>porphyrie variegata</strong>,
          il arborait une pâleur maladive et une silhouette si fine qu'elle semblait pouvoir se dissoudre
          dans la brume de Kiri.
        </Para>

        <Para dim>
          Il était « monsieur tout le monde », une ombre parmi les ombres, l'élève qu'on oublie au fond
          de la classe de l'Académie.
        </Para>

        <Para>
          Pourtant, sous cette apparence de fragilité ordinaire, une mécanique étrange s'était déjà
          mise en marche dans son esprit. Isamu ne mentait jamais, mais il ne disait jamais la vérité que
          les autres voulaient entendre. Il reformulait le réel de chacun à sa manière. Pour lui, un silence 
          n'était pas un vide, c'était
          une <strong style={{ color: '#e8d5b0', fontStyle: 'normal' }}>phrase non prononcée</strong> qu'il
          fallait déchiffrer. Ou bien un regard n'était pas un geste, c'était
          une <strong style={{ color: '#e8d5b0', fontStyle: 'normal' }}>intention codée</strong>.
        </Para>
      </NarrativeBlock>

      {/* La citation de l'enfant */}
      <Quote speaker="Isamu, 7 ans — exercice de perception sensorielle du clan Chinoike">
        « Je vois quelque chose qui... qui hésite à exister. Ça bat, mais ça ne veut pas rester.
        Êtes-vous sûr que ce flux de chakra est consentant d'être là ? »
      </Quote>

      <NarrativeBlock style={{ transform: 'rotate(0.2deg)' }}>
        <Para dim>
          Les encadrants rirent, notant sur leurs tablettes « imagination débordante ». Ils ne comprirent pas 
          qu'Isamu ne faisait pas de poésie. Il décrivait littéralement sa propre instabilité de la réalité.
          Seuls quelques anciens du clan, dont les pupilles avaient vu trop d'horreurs, cessèrent de rire et haussent du
          sourcils.
        </Para>

        <Para>
          Cette singularité finit par remonter les échelons. Un projet naquit dans l'ombre du village, caché sous 
          le nom d'une:{' '}
          <strong style={{ color: '#cc0000', fontStyle: 'normal' }}>
            « étude biologique avancée des lignées sensibles »
          </strong>.
          Officiellement, recherche scientifique. Officieusement, le début d'une destruction lente.
        </Para>

        <Para indent>
          Isamu qui est jugé comme physiquement vulnérable, fut sélectionné. On convoqua sa famille, et on leur parla 
          d'un certain suivi médical spécialisé pouvant guérir sa porphyrie. 
          Un certificat médical fut envoyé à l'Académie, actant son absence temporaire en classe. Mais malheursement
          Isamu ne rentra jamais chez lui ce soir-là...
        </Para>

        <Para dim>
          L'enfant du silence venait d'entrer dans la machine qui allait, pièce par pièce, construire le monstre.
        </Para>
      </NarrativeBlock>
    </div>

    <ChapterDivider />


    {/* ═══════════════════════════════════════════════════════════
        CHAPITRE II — LE LABORATOIRE DE BRUME
       ═══════════════════════════════════════════════════════════ */}
    <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '1.5rem' }}>
        <span className="font-noble font-black" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: '#ff3333', lineHeight: 1 }}>II</span>
        <h2
          className="font-noble font-black"
          style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', color: '#e8d5b0', letterSpacing: '0.06em' }}
        >
          Le Laboratoire de Brume
        </h2>
      </div>

      <NarrativeBlock style={{ transform: 'rotate(0.3deg)' }}>
        <Para>
          Ces médecins promis aux parents d'Isamu un léger départ dans un hôpital. En réalité, l'installation 
          n'avait pas de nom. Ce n'était ni la violence des geôles, ni la discipline de l'Académie. 
          C'était un{' '}
          <strong style={{ color: '#e8d5b0', fontStyle: 'normal' }}>laboratoire</strong>,
          qui était de pointe où les membres du clan Chinoike étaient traités avec une politesse imparable, on peut comparer
          cela à des oeuvres d'art trop rares pour être brisées par mégarde.
        </Para>

        <Para indent>
          L'objectif était clair : disséquer le{' '}
          <strong style={{ color: '#cc0000', fontStyle: 'normal' }}>Ketsuryūgan</strong> avant même qu'il
          ne perce la pupille, transformer le flux sanguin en données, et anticiper l'éveil du Dōjutsu
          par des stimulations sensorielles constantes.
        </Para>

        <Para>
          Isamu se distinguait par son habitude à <strong style={{ color: '#e8d5b0', fontStyle: 'normal' }}>à tout analyser</strong>.
          Car il ne se contentait pas de simplement regarder, il dévorait chaque détail, chaque mouvement de blouse
          blanche, chaque ombre portée sur le sol carrelé.
        </Para>

        <Para>
          C'est là qu'il se rapprocha d'un autre jeune Chinoike, un garçon dont le nez était
          perpétuellement plongé dans des livres. Isamu le trouvait étrange, tellement étrange qu'il finira 
          par le suivre tout les jours, se cachant près de son épaule pour regarder ce qu'il lit, ou bien crier 
          à tout va pour ses réactions. Mais la seule interaction qu'il aura avec lui sera de lui demander 
          de lui prêter un livre. Cet ami répondit bizarrement et froidement à la demande.
        </Para>
      </NarrativeBlock>

      <Quote speaker="L'ami — séance d'observation">
        « Le sang ne ment jamais, Isamu... mais il peut être mal compris. »
      </Quote>

      {/* ── Le point de rupture ──────────────────────────────────── */}
      <NarrativeBlock style={{ transform: 'rotate(-0.2deg)' }}>
        <Para>
          Cet ami ne voyait pas leur héritage comme un don ou une malédiction, mais comme
          un <strong style={{ color: '#e8d5b0', fontStyle: 'normal' }}>système de survie</strong> qui finira
          par un point rupture. Le point de rupture arriva lors du protocole de « Synchronisation de Flux ». Isamu et
          plusieurs autres sujets furent connectés à une machine, censée harmoniser leurs
          fréquences de chakra.
        </Para>

        <Para>
          Dès que le processus s'enclencha, la perception d'Isamu se décomposa.
          <strong style={{ color: '#cc0000', fontStyle: 'normal' }}>Le « Moi »</strong> commença
          à fuir. La chair de sa propre peau se mirent à fondre. Il ne sentait plus seulement son
          sang, il sentait celui de sa voisine de gauche, celui de son ami à droite, celui des scientifiques
          derrière la vitre. Les battements de cœur fusionnèrent en un tambour démentiel.
          Isamu cessa de voir des individus. Il voyait un{' '}
          <strong style={{ color: '#e8d5b0', fontStyle: 'normal' }}>unique organisme global</strong>,
          une bête de chair et de flux.
        </Para>

        <Para>
          Et dans cette tempête,{' '}
          <strong style={{ color: '#cc0000', fontStyle: 'normal' }}>quelqu'un répondit</strong>.
          Cette voix lui glaça le sang, ressemblant à une être surnaturelle qui
          s'imposa devant lui, le brouillard de Kirigakure se propage dans toute la salle.
        </Para>
      </NarrativeBlock>

      {/* ─ Naissance de Kurotsuchi ─ */}
      <div
        style={{
          position:    'relative',
          padding:     'clamp(1.5rem, 3vw, 3rem) 0',
          margin:      'clamp(2rem, 3vw, 3rem) 0',
          borderTop:   '1px solid rgba(204,0,0,0.45)',
          borderBottom: '1px solid rgba(204,0,0,0.45)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(61,0,0,0.15) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <p
          className="font-noble font-black"
          style={{
            fontSize:      'clamp(1rem, 1.8vw, 1.4rem)',
            letterSpacing: '0.15em',
            color:         '#ff3333',
            textTransform: 'uppercase',
            marginBottom:  '0.5rem',
            textAlign:     'center',
          }}
        >
          Naissance de Kurotsuchi
        </p>
        <StutterText
          as="div"
          intensity="high"
          className="font-noble font-black"
          style={{
            fontSize:   'clamp(2rem, 6vw, 6rem)',
            lineHeight: 0.95,
            color:      '#cc0000',
            display:    'block',
            textAlign:  'center',
          }}
        >
          LAISSE-MOI FAIRE LE TRI.
        </StutterText>
      </div>

      <NarrativeBlock style={{ transform: 'rotate(0.15deg)' }}>
        <Para>
          Isamu rouvrit les yeux. La salle d'expérimentation était plongée dans une pénombre écarlate.
          Il tourna la tête vers son ami, celui qui voulait « comprendre et survivre ». Mais il n'y avait
          personne à sa droite.
        </Para>

        <Para>
          Ses mains étaient couvertes d'un sang qui n'était pas le sien. Les scientifiques derrière la vitre
          le regardaient avec une peur noire, car ils n'avaient pas assisté à une séance de
          synchronisation, mais à un{' '}
          <strong style={{ color: '#cc0000', fontStyle: 'normal' }}>massacre solitaire</strong>.
        </Para>

        <Para dim>
          Isamu comprit le boulversement de sa vie : l'ami, les livres, les discussions
          sur le sens du sang, tout cela n'était que le premier délire de son esprit fragmenté.
          Il était seul dans ce laboratoire depuis le premier jour.
        </Para>

        <Para>
          Et maintenant, il n'était même plus seul dans sa tête.
        </Para>
      </NarrativeBlock>
    </div>

    <ChapterDivider />


    {/* ═══════════════════════════════════════════════════════════
        CHAPITRE III — APRÈS L'EXPÉRIENCE
       ═══════════════════════════════════════════════════════════ */}
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '1.5rem' }}>
        <span className="font-noble font-black" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: '#ff3333', lineHeight: 1 }}>III</span>
        <h2
          className="font-noble font-black"
          style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', color: '#e8d5b0', letterSpacing: '0.06em' }}
        >
          Après l'Expérience
        </h2>
      </div>

      <NarrativeBlock style={{ transform: 'rotate(-0.25deg)' }}>
        <Para>
          Le projet s'est éteint dans un silence de dossiers classés
          « Secret Défense ». L'administration de Kirigakure a fait ce qu'elle fait de mieux : elle a
          segmenté l'horreur. Les sujets survivants furent séparés, les installations nettoyées, le
          protocole officiellement suspendu.
        </Para>

        <Para>
          Pour Isamu, cela signifiait un retour à sa vie de ninja de Kiri où il serait obligé de rester avec 
          ces hypocrites qui pourront le faire couler à n'importe quel moment, la loi du plus fort lui fait
          terriblement peur. Isamu était une arme dont on ne connaissait pas encore le mode d'emploi, 
          mais dont le potentiel de destruction justifiait qu'on ne l'élimine pas tout de suite, à vrai dire
          ce n'était pas lui qu'on voulait, mais l'être qui a rejoint son esprit.
        </Para>

        <Para indent>
          Le retour à l'Académie ne fut pas une libération, mais une nouvelle forme de captivité. Isamu
          n'était plus un élève, il était un{' '}
          <strong style={{ color: '#e8d5b0', fontStyle: 'normal' }}>sujet d'observation dans un zoo</strong>.
          Ses camarades, instinctivement, s'écartaient sur son passage. On ne le brutalisait pas, on
          l'ignorait avec une crainte polie.
        </Para>
      </NarrativeBlock>

      <Quote speaker="L'esprit d'Isamu — en classe">
        « Il ment. Son flux saccadé à la troisième phrase indique une incertitude. La loyauté
        envers la Brume est une construction chimique pour masquer la peur de l'extinction. »
      </Quote>

      <NarrativeBlock style={{ transform: 'rotate(0.2deg)' }}>
        <Para>
          Un après-midi, coincé au fond de la classe, le monde devint insupportable. Isamu commença
          à se gratter l'arrière du crâne. Ses doigts fins s'enfonçaient dans son cuir chevelu. Il gratta
          jusqu'à ce que la douleur devienne une pulsation, jusqu'à ce que le sang vienne s'infiltrer sous ses ongles.
        </Para>

        <Para>
          La douleur était la seule chose qui semblait{' '}
          <strong style={{ color: '#e8d5b0', fontStyle: 'normal' }}>vraie</strong>.
        </Para>

        <Para>
          C'est alors que la réalité se déforma. La lumière passera au pourpre, les ombres s'allongèrent
          comme des épées de la brume étudiée en cours. Au milieu de cette distorsion, une silhouette se dessina :{' '}
          <strong style={{ color: '#cc0000', fontStyle: 'normal', textDecoration: 'line-through' }}>Kurotsuchi</strong>.
          Il se tenait là, debout devant le tableau, imperturbable, le regard brillant d'une lucidité
          cruelle que personne d'autre ne semblait percevoir.
        </Para>
      </NarrativeBlock>

      <Quote speaker="Kurotsuchi" stutter>
        C'est moi ton ami, Kurotsuchi... Je t'appele tout les jours, mais tu ne réponds jamais. Ne te fais pas d-d-de mal 
        pour leurs mensonges, Isamu. Le monde est un manuscrit raturé,
        écrit avec de la mauvaise encre. Arrêtons de lire entre les lignes et commençons à réécrire
        la vérité avec ce qui coule dans leurs veines.
      </Quote>

      <NarrativeBlock style={{ transform: 'rotate(-0.15deg)' }}>
        <Para>
          Isamu leva les yeux, les doigts ensanglantés, et pour la première fois, un sourire convulsif
          étira ses lèvres pâles. Il n'était plus seul. Il n'avait plus besoin de comprendre le monde.
        </Para>

        <Para>
          <strong style={{ color: '#e8d5b0', fontStyle: 'normal' }}>Il allait le traduire.</strong>
        </Para>
      </NarrativeBlock>
    </div>
  </div>
);
