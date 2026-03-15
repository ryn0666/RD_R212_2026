# Rapport — TD1

## Points clés

### 1. Analyse des zones principales
Lors de l’observation de la page Casper, j’ai identifié les grandes zones : le **header** pour la navigation, le **hero** avec le message principal et le bouton CTA, le **main** avec plusieurs sections de contenu (features, articles), et le **footer** pour les informations complémentaires.

### 2. Contenus répétitifs
Dans le main, certains éléments se répètent : trois cartes images pour les features, un carrousel de vidéos, et des blocs de texte similaires pour des questions complémentaires. Cette répétition permet de structurer la page de façon claire et lisible.

### 3. Découpage logique vs graphique
L’interface a été découpée en blocs sémantiques afin de respecter la logique du contenu, pas seulement l’apparence visuelle. Cela facilite la réutilisation des blocs et la hiérarchie des informations.

## Utilisation de l'IA

### Démarche
Aucune IA utilisée lors de cette séance.  
Le travail a été réalisé en groupe et reformulé individuellement.

## Tableau des blocs et balises HTML

| N° | Rôle du bloc | Réutilisable ? | Balise HTML |
|---|----------------------------|----------------|-------------|
| 1 | Header / navigation principale | Oui | `<header>` + `<nav>` |
| 2 | Hero (titre + bouton CTA + image) | Non | `<main>` + `<section>` |
| 3 | Section features (3 cartes) | Oui | `<section>` + `<article>` |
| 4 | Footer (liens et informations) | Oui | `<footer>` |

## Structure HTML proposée

```html
<body>
  <header>
    <nav>
      <ul>
        <li>Mattresses</li>
        <li>Bundles</li>
        <li>Pillows</li>
        <li>Furniture</li>
        <li>Bedding</li>
        <li>Accessories</li>
        <li>Explore</li>
        <li>Sale</li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="hero">
      <h1>Discover the Casper difference.</h1>
      <button>Take the quiz</button>
    </section>

    <section class="features">
      <article>What's keeping you up at night?</article>
      <article>We make sleep easy.</article>
      <article>Sleep now, pay over time.</article>
    </section>
  </main>

  <footer>
    <p>Copyright 2026</p>
  </footer>
</body>