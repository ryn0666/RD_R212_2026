# Rapport — TP2

## Points clés

### 1. Le modèle Événement → État → Rendu

Toutes les interactions du TP reposent sur ce même schéma : on écoute un événement (clic, touche clavier), on met à jour un état (classe CSS présente ou non), et le rendu suit automatiquement via le CSS. C'est ce qui permet de ne jamais toucher à `element.style` en JavaScript.

### 2. La gestion d'état avant modification

Dans l'accordéon, j'ai compris qu'il faut lire l'état *avant* de tout modifier. Si on ferme toutes les réponses d'abord, on perd l'information sur celle qui était ouverte — on ne peut alors plus distinguer "ouvrir" de "fermer". Stocker `estDejaOuverte` avant la boucle de fermeture résout ce problème.

### 3. Les fonctions nommées pour éviter la duplication

Plutôt que de répéter le même code à plusieurs endroits (fermer la modale au clic du bouton, via Escape, via l'overlay), regrouper ces actions dans une fonction `fermerModale()` rend le code plus lisible et plus facile à maintenir.

## Utilisation de l'IA

### Démarche

J'ai utilisé Claude (claude.ai, Claude Sonnet) pendant la séance pour de la correction et de la relecture de mon code, du débogage, et pour mieux comprendre certains comportements JavaScript.

J'avais codé moi-même le menu burger et la modale avant de soumettre mon travail à l'IA. L'accordéon et le thème sombre ont été réalisés avec l'aide de Claude pour la relecture et les corrections.

### Apports et limites

Claude m'a aidé à identifier deux bugs que je n'avais pas vus : un double `addEventListener` sur le bouton d'ouverture de la modale (qui déclenchait l'ouverture deux fois), et deux écouteurs `keydown` séparés alors qu'un seul suffit. Il m'a aussi expliqué pourquoi `aria-expanded` devait être remis à `false` lors de la fermeture via Escape, ce que j'avais oublié.

Ce que j'ai dû vérifier moi-même : s'assurer que les corrections proposées correspondaient bien à la structure HTML fournie, notamment l'ordre des éléments dans le DOM pour `nextElementSibling`.

### Prompts significatifs

1. "Voila mon html et mon js" *(avec les fichiers en pièce jointe)* → Claude a analysé mon code complet et identifié les bugs (doublon d'écouteurs, aria-expanded manquant sur Escape) avec une estimation de note détaillée par critère.
2. "Oui" *(en réponse à la proposition de générer un script.js corrigé)* → Claude a produit une version corrigée et commentée du fichier, avec les corrections expliquées.
3. "Parfait, merci, et là on en est où ?" → Claude a récapitulé la note estimée après corrections (20/20) et listé les points résolus.
