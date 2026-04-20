/** @deprecated Remplacé par BloodDropIntro.jsx */
export const PremiumSchizoIntro = ({ onComplete }) => {
  // Déclenche onComplete immédiatement si appelé par erreur
  if (typeof onComplete === 'function') {
    setTimeout(onComplete, 100);
  }
  return null;
};
