const citations = [
  "Si le traîneau avance, c’est que les étoiles reculent.",
  "Le vrai cadeau de Noël, c’est avec du scotch.",
  "La neige fond, mais les pensées restent, contrairement aux dindes.",
  "On peut tromper mille fois une personne, même un renne d'Angleterre",
  "Noël, c'est une histoire de boules.",
  "Si tu mets une guirlande sur une vache, c'est vache.",
  "Le Père Noël n’a pas de GPS, il suit l’odeur.",
  "La réponse à une question fermée, même à Noël, se termine rarement par un s.",
  "Les dindes boudhistes doivent-elle craindre la fin d'année ?",
  "Les cadeaux sont emballés, mais moi je suis toujours déballé.",
  "Le silence des flocons est-il plus bruyant que le silence de mille cloches?",
  "Le bonnet de Noël ne pense pas, mais il tient chaud aux idées.",
  "Si la bûche est glacée, c’est que le feu intérieur hésite.",
  "On peut emballer une vérité, mais elle finit toujours par se froisser.",
  "Le renne qui doute avance en zigzag, surtout en Laponie.",
  "Le sucre d’orge ne résout rien, sauf peut-être les conflits diplomatiques.",
  "Si tu mets une étoile sur une poule, est-ce encore une basse-cour ?",
  "Le sapin ne juge pas, même quand on le décore avec des chaussettes.",
  "Le traîneau ne freine jamais quand il est lancé par une émotion.",
  "Les cloches sonnent, mais personne ne sait si elles sont d’accord.",
  "Le flocon ne choisit pas où il tombe, sauf en cas de grève céleste.",
  "Le Père Noël ne dort pas, il médite.",
  "Si la dinde parle, écoute-la. Elle a peut-être des choses à dire.",
  "On peut croire au miracle, surtout quand le chocolat est gratuit.",
  "Le renne qui pense trop finit par oublier comment trotter.",
  "Noël, c’est quand les chaussettes deviennent des temples.",
  "Le cadeau le plus sincère est celui qui ne sait pas ce qu’il contient.",
  "Si tu mets un bonnet sur une idée, est-elle encore libre ?",
  "Si tu as un calendrier de l'année passée, c'est un calendrier de l'avant ?",
  "OH ! OH ! OH ! dit-il en portugais.",
  "Le traîneau avance, mais personne ne sait s’il a un plan de carrière.",
  "Les guirlandes brillent, mais parfois pas.",
];

const renne = document.getElementById("renne");
const citationBox = document.getElementById("citation");

function nouvelleCitation() {
  const randomIndex = Math.floor(Math.random() * citations.length);
  citationBox.textContent = citations[randomIndex];

  citationBox.style.animation = "none";
  citationBox.offsetHeight; // force le reflow
  citationBox.style.animation = "popIn 0.5s forwards";
}

renne.addEventListener("mouseover", nouvelleCitation);
renne.addEventListener("click", nouvelleCitation);
