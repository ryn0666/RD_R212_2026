/* ================================
   EXERCICE 1 — MENU BURGER
   ================================ */

// Sélection des éléments du menu
const bouton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// Toggle du menu au clic + mise à jour de aria-expanded
bouton.addEventListener('click', () => {
  menu.classList.toggle('is-open');
  const isOpen = menu.classList.contains('is-open');
  bouton.setAttribute('aria-expanded', isOpen);
});


/* ================================
   EXERCICE 2 — MODALE ACCESSIBLE
   ================================ */

// Sélection des éléments de la modale
const btnOpen = document.querySelector('.modal-open');
const btnClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');

// Fonctions nommées pour éviter la duplication de code
function ouvrirModale() {
  modal.classList.add('is-visible');
  modal.setAttribute('aria-hidden', 'false');
}

function fermerModale() {
  modal.classList.remove('is-visible');
  modal.setAttribute('aria-hidden', 'true');
  btnOpen.focus(); // retour du focus sur le bouton d'ouverture
}

// Ouvrir et fermer via les boutons
btnOpen.addEventListener('click', ouvrirModale);
btnClose.addEventListener('click', fermerModale);

// Fermer en cliquant sur l'overlay (fond sombre)
// event.target = l'élément exact cliqué : si c'est la modale (le fond), on ferme
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    fermerModale();
  }
});


/* ================================
   GESTION DU CLAVIER (Escape)
   Fusionné en un seul écouteur pour le menu et la modale
   ================================ */

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    // Fermer le menu burger si ouvert
    if (menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      bouton.setAttribute('aria-expanded', false);
      bouton.focus();
    }
    // Fermer la modale si visible
    if (modal.classList.contains('is-visible')) {
      fermerModale();
    }
  }
});


/* ================================
   EXERCICE 3 — ACCORDÉON FAQ
   ================================ */

// Sélectionne toutes les questions de l'accordéon
const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const reponse = question.nextElementSibling; // div.faq-answer juste après
    const estDejaOuverte = reponse.classList.contains('is-visible');

    // Fermer toutes les réponses (un seul ouvert à la fois)
    document.querySelectorAll('.faq-answer').forEach((r) => {
      r.classList.remove('is-visible');
    });

    // Si la réponse n'était pas ouverte, on l'ouvre
    // (si elle était déjà ouverte, le clic la ferme — grâce à estDejaOuverte)
    if (!estDejaOuverte) {
      reponse.classList.add('is-visible');
    }
  });
});


/* ================================
   EXERCICE 4 (BONUS) — THÈME SOMBRE
   ================================ */

const btnTheme = document.querySelector('#theme-toggle');

// Toggle de la classe dark sur le body + mise à jour du texte du bouton
btnTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Opérateur ternaire : condition ? valeurSiVrai : valeurSiFaux
  const isDark = document.body.classList.contains('dark');
  btnTheme.textContent = isDark ? '☀️ Clair' : '🌙 Sombre';
});
