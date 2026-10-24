# Images — S.E. Maçonnerie

Toutes les images sont dans `public/assets/img/`. Les noms sont sensibles à la casse : gardez-les **en minuscules**.

| Fichier | Rôle |
|---|---|
| `logo.png` | Logo dans l'en-tête (640 px) |
| `favicon.png` | Icône de l'onglet (64 px) |
| `hero.jpg` | Photo de fond de l'accueil (1920 × 1080, assombrie par un dégradé) |
| `realisation-1.jpg` à `realisation-8.jpg` | Galerie « Nos réalisations » (carrées, 900 × 900) |

## Remplacer une photo

- Gardez le **même nom de fichier** : le site la prend automatiquement.
- Accueil : une photo en paysage (16:9), au moins 1600 px de large. Le texte est sur la gauche, alors un sujet à droite ou une texture fonctionne le mieux.
- Galerie : des photos carrées donnent le meilleur résultat. Les autres formats sont recadrés au centre.
- Passez les photos dans https://squoosh.app (JPEG qualité ~75–80) pour un site rapide.
- Pour ajouter une 9e réalisation, dupliquez une ligne `<li>` de la liste `.gallery` dans `public/index.html` et changez le numéro.
