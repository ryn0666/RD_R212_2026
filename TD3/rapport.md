# Rapport — TD3

## Points clés

### 1. Le modèle événement → état → rendu

Chaque interaction sur une page Web suit toujours le même schéma en trois étapes. Par exemple, pour un bouton "J'aime" : l'événement est le clic, l'état qui change est le nombre de likes (3 → 4), et le rendu est la mise à jour du texte affiché à l'écran. Ce modèle est universel — il s'applique à tous les composants interactifs qu'on codera ce semestre.

### 2. classList.toggle, la passerelle entre JS et CSS

Le JavaScript ne doit pas gérer l'apparence directement (pas de `element.style.color`). À la place, il ajoute ou retire des classes CSS, et c'est le CSS qui définit ce que ces classes changent visuellement. `classList.toggle` est le raccourci parfait pour ça : si la classe est présente, il la retire ; si elle est absente, il l'ajoute. Le JS gère *quand* ça change, le CSS gère *comment* ça change.

### 3. querySelector utilise les sélecteurs CSS

`querySelector` fonctionne avec exactement les mêmes sélecteurs que le CSS — `.classe`, `#id`, `nav a`, etc. Ce n'est pas une nouvelle syntaxe à apprendre, c'est ce qu'on sait déjà appliquer différemment.

## Utilisation de l'IA

### Démarche

J'ai utilisé Claude (claude.ai, Claude Sonnet) pendant la séance pour mieux comprendre certains concepts du TD et vérifier mes réponses aux exercices écrits (quiz de prédiction, exercice 6.1).

### Apports et limites

L'IA m'a aidé à reformuler le modèle événement → état → rendu avec mes propres exemples, et à vérifier que mes réponses au quiz de prédiction étaient correctes. La limite : il faut quand même avoir essayé soi-même avant, sinon on ne retient pas vraiment le raisonnement derrière.

### Prompts significatifs

1. "Peux-tu m'expliquer le modèle événement → état → rendu avec un exemple simple ?" → Claude a illustré le concept avec un exemple de compteur de likes, ce qui m'a aidé à le comprendre autrement que dans le sujet.
2. "Est-ce que mes réponses au quiz de prédiction JS sont correctes ?" *(avec mes réponses)* → Claude a confirmé les bonnes réponses et expliqué les erreurs sans donner directement les solutions.
