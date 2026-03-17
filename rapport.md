C'est noté ! On adapte la template pour qu'elle réponde exactement aux deux questions spécifiques demandées dans les consignes du TD, tout en gardant la structure habituelle de ton rapport MMI.

Voici la version finale et complète :

Rapport — TD3
Points clés
1. Le modèle Événement → État → Rendu
Ce modèle est le moteur de l'interactivité. Un événement déclenche un changement d'état (la logique), ce qui provoque un nouveau rendu (le visuel).

Exemple : Un bouton "Mode Lecture" sur un article de journal.

Événement : L'utilisateur clique sur l'icône "Livre".

État : La page passe de l'état "normal" à l'état "lecture seule" (plus de pubs, texte agrandi).

Rendu : Le JavaScript ajoute une classe .reading-mode sur le texte, ce qui change la police et cache les éléments inutiles.

2. classList.toggle : la passerelle entre JS et CSS
classList.toggle agit comme un interrupteur intelligent : il ajoute la classe si elle est absente, et la retire si elle est déjà là. C'est la passerelle idéale car le JavaScript ne s'occupe que de l'action (cliquer pour changer d'état) sans toucher au style directement. Le CSS, lui, reste le seul maître de l'apparence en définissant ce que fait cette classe visuellement. Cette séparation rend le code beaucoup plus facile à maintenir.

Utilisation de l'IA
Démarche
J'ai utilisé Gemini 3 Flash (Paid tier) pour m'aider à comprendre les concepts théoriques du TD. Mon but était de clarifier le fonctionnement du JS et de trouver des exemples concrets pour illustrer le modèle Événement/État/Rendu, ainsi que de vérifier la syntaxe des commandes de la console.

Apports et limites
L'IA a été très utile pour expliquer la métaphore de l'interrupteur pour classList.toggle. Elle m'a aussi permis de corriger ma compréhension sur la manipulation du style (pourquoi utiliser des classes plutôt que .style.color). La limite est qu'elle ne peut pas voir ma console de navigateur, j'ai donc dû tester moi-même les sélecteurs pour m'assurer qu'ils fonctionnaient sur les sites choisis.

Prompts significatifs
"Explique-moi le modèle événement → état → rendu avec un exemple de site web." → Utile pour trouver un exemple original pour le point clé n°1.

"Pourquoi est-ce une mauvaise pratique d'utiliser .style en JavaScript ?" → M'a aidé à comprendre la séparation des responsabilités entre JS et CSS.

"Donne-moi les commandes JS pour sélectionner un paragraphe et changer son texte dans la console." → Utile pour l'exercice 3.2.