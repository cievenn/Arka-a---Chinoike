import React from 'react';
import { StutterText } from '../components/ui/StutterText';

/**
 * Objectives — "Objectifs RP"
 * Les 4 objectifs d'Isamu, présentés comme ses propres notes mentales.
 * Content faithfully from pointscategorie.md.
 */

const OBJECTIVES = [
  {
    id:       '01',
    kanji:    '壱',
    tag:      "L'Objectif Métaphysique",
    title:    "L'Exégèse du Premier Pulsation",
    body:     `Isamu est convaincu que le monde actuel est une traduction ratée. C'est à dire que les mots, les noms et 
    même les visages ne sont que des ratures sur un texte qui était pur à l'origine. L'existance humaine est une erreur 
    de système établi par les plus grands. Il cherche ce qu'il appelle « L'Origine du Flux », une source de vérité absolue 
    qui existait avant que les hommes ne commencent à mentir, et à pécher dans sa globalité.`,
    sub:      `Sans jamais nommer les mythes fondateurs du chakra, il traque les traces d'une puissance primordiale, voir 
    primitive. Il veut voir le monde à nu, sans le filtre des émotions humaines qu'il juge parasitaires, le pécheur 
    doit disparaître à ses yeux.`,
    rp:       `Trouver des parchemins interdits ou des lieux de pouvoir pour « réinitialiser » sa propre vision.`,
    rotate:   '-0.4deg',
    offset:   '0',
  },
  {
    id:       '02',
    kanji:    '弐',
    tag:      "L'Objectif Global",
    title:    'La Symphonie des Flux Synchronisés',
    body:     `Depuis l'expérience du laboratoire, Isamu ne supporte plus l'idée que chaque individu soit enfermé dans sa 
    propre peau. Pour lui, l'individualité est une erreur, un acte fondamentalement égoïste. L'égoïsme est une preuve 
    de déconnexion que beaucoup de gens semblent accepter sans broncher.`,
    sub:      `Utiliser la résonance du sang pour lier chaque habitant de Kirigakure dans un seul 
    système nerveux. Si tout le monde ressent la même douleur et la même joie au même instant, le mensonge devient 
    impossible, mais pour atteindre cet apogée, des sacrifices seront nécessaires.`,
    rp:       `Éveiller un Ketsuryūgan capable de lier les gens. Il ne veut pas régner sur Kiri, il veut que 
    Kiri devienne un seul être.`,
    rotate:   '0.3deg',
    offset:   'clamp(2rem, 5vw, 6rem)',
  },
  {
    id:       '03',
    kanji:    '参',
    tag:      `L'Objectif "Incohérent"`,
    title:    'La Correction des Aphasies Réelles',
    body:     `Cet objectif met en lumière sa folie. Isamu agit comme un correcteur. S'il perçoit une contradiction 
    entre le flux sanguin d'une personne et son discours, il considère cela comme une faute qu'il doit corriger 
    immédiatement.`,
    sub:      `Ce n'est pas une justice morale. Il pourrait laisser un meurtrier tranquille s'il tue avec honnêteté,
    mais tenter d'égorger un marchand parce que son pouls a accéléré de manière illogique en disant bonjour.`,
    rp:       `Créer des interactions imprévisibles. Isamu intervient pour réparer des situations que lui seul 
    juge anormales, souvent par la violence ou injures.`,
    rotate:   '-0.2deg',
    offset:   'clamp(1rem, 3vw, 3rem)',
  },
  {
    id:       '04',
    kanji:    '四',
    tag:      "L'Objectif de Survie & Jashinisme",
    title:    "Le Vaisseau de l'Hématose Pure",
    body:     `Isamu est un condamné. Sa porphyrie le ronge. Kurotsuchi lui murmure que son sang est trop faible pour 
    porter la vérité de ce monde, et que même s'il y arriverait, il mourra avant. Pour guérir, il doit devenir un vaisseau 
    capable d'accueillir les lignées les plus pures, il doit trouver une solution à sa malédiction, peu importe
    les moyens, il fera tout pour se sauver de cette galère.`,
    sub:      `Isamu commence à développer une fascination pour le sang et les rituels qui défient la mort. Il 
    ne connaît pas encore le culte Jashin, mais son intuition le pousse vers l'idée qu'un sacrifice rituel et 
    une douleur pourraient stabiliser sa maladie. Il cherche une forme d'immortalité biologique, non pas pour vivre 
    vieux, mais pour avoir le temps de trouver une solution pour sa maladie. Son corps le limite trop, vaincre ce 
    fléaux pourra l'élever chez les plus grands.`,
    rp:       `Traquer les membres des grands clans pour prélever des échantillons. Dans le futur, cette quête le 
    mènera naturellement vers les murmures du culte de Jashin.`,
    rotate:   '0.5deg',
    offset:   '0',
  },
];

export const Objectives = () => (
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
        — V. Objectifs RP / Notes Mentales
      </p>

      <StutterText
        as="h1"
        intensity="med"
        className="font-noble font-black"
        style={{
          fontSize:      'clamp(3rem, 11vw, 12rem)',
          lineHeight:    0.88,
          color:         '#cc0000',
          letterSpacing: '-0.02em',
          display:       'block',
        }}
      >
        OBJECTIFS
      </StutterText>
    </div>

    {/* ── LISTE DES OBJECTIFS ────────────────────────────────────── */}
    <div
      style={{
        display:        'flex',
        flexDirection:  'column',
        gap:            'clamp(3rem, 6vw, 5rem)',
      }}
    >
      {OBJECTIVES.map((obj) => (
        <div
          key={obj.id}
          className="grid-responsive-num mobile-no-offset"
          style={{
            marginLeft:           obj.offset,
            transform:            `rotate(${obj.rotate})`,
          }}
        >
          {/* Numéro + Kanji */}
          <div style={{ textAlign: 'center', paddingTop: '0.3rem' }}>
            <div
              className="font-noble font-black"
              style={{
                fontSize:   'clamp(2rem, 4vw, 3.5rem)',
                color:      'rgba(255,50,50,0.7)',
                lineHeight: 1,
              }}
            >
              {obj.id}
            </div>
            <div
              className="font-kanji"
              style={{
                fontSize:  '0.85rem',
                color:     'rgba(204,0,0,0.45)',
                marginTop: '0.3rem',
              }}
            >
              {obj.kanji}
            </div>
          </div>

          {/* Contenu */}
          <div className="parchment-block" style={{ padding: 'clamp(1.2rem, 2.5vw, 2rem)' }}>
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
              {obj.tag}
            </p>

            <h2
              className="font-noble font-black"
              style={{
                fontSize:      'clamp(1.3rem, 2.5vw, 2rem)',
                color:         '#e8d5b0',
                letterSpacing: '0.04em',
                marginBottom:  '1rem',
                lineHeight:    1.15,
              }}
            >
              {obj.title}
            </h2>

            <p
              className="font-body italic"
              style={{
                fontSize:      'clamp(1rem, 1.5vw, 1.15rem)',
                lineHeight:    1.85,
                color:         '#e8d5b0',
                marginBottom:  '1rem',
              }}
            >
              {obj.body}
            </p>

            {/* Sous-texte — implication */}
            <p
              className="font-body italic"
              style={{
                fontSize:    'clamp(0.9rem, 1.3vw, 1.05rem)',
                lineHeight:  1.85,
                color:       '#e8d5b0',
                paddingLeft: '1rem',
                borderLeft:  '2px solid rgba(204,0,0,0.5)',
                marginBottom: '1rem',
              }}
            >
              {obj.sub}
            </p>

            {/* But RP */}
            <div
              style={{
                padding:    '0.6rem 1rem',
                background: 'rgba(61,0,0,0.12)',
                borderLeft: '2px solid #3d0000',
              }}
            >
              <p
                className="font-noble"
                style={{
                  fontSize:      '0.5rem',
                  letterSpacing: '0.3em',
                  color:         '#ff3333',
                  textTransform: 'uppercase',
                  marginBottom:  '0.3rem',
                }}
              >
                But RP
              </p>
              <p
                className="font-body"
                style={{
                  fontSize:   'clamp(0.9rem, 1.3vw, 1.05rem)',
                  lineHeight: 1.7,
                  color:      '#e8d5b0',
                  fontStyle:  'normal',
                }}
              >
                {obj.rp}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
