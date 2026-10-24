# Images — S.E. Maçonnerie

Toutes les images vont dans `public/assets/img/`. Les noms sont sensibles à la casse : gardez-les **en minuscules**, exactement comme ci-dessous.

| Fichier | Statut |
|---|---|
| `public/assets/img/logo.png` | Déjà inclus (logo fourni, 640 px) |
| `public/assets/img/favicon.png` | Déjà inclus (icône du logo, 64 px) |
| `public/assets/img/realisation-1.jpg` | **À ajouter** (ancienne image : `wp-content/uploads/2022/09/img1.jpg`) |
| `public/assets/img/realisation-2.jpg` | **À ajouter** (ancienne image : `img3.jpg`) |
| `public/assets/img/realisation-3.jpg` | **À ajouter** (ancienne image : `img4.jpg`) |
| `public/assets/img/realisation-4.jpg` | **À ajouter** (ancienne image : `img5.jpg`) |
| `public/assets/img/realisation-5.jpg` | **À ajouter** (ancienne image : `img6.jpg`) |
| `public/assets/img/realisation-6.jpg` | **À ajouter** (ancienne image : `img7.jpg`) |
| `public/assets/img/realisation-7.jpg` | **À ajouter** (ancienne image : `img8.jpg`) |
| `public/assets/img/realisation-8.jpg` | **À ajouter** (ancienne image : `img9.jpg`) |

`realisation-1.jpg` sert aussi de photo dans la forme du logo, sur le bandeau d'accueil. Les photos verticales (environ 400 × 516) donnent le meilleur résultat.

## Récupérer les photos du site actuel

Depuis le dossier `public/assets/img/` :

```bash
i=1; for n in 1 3 4 5 6 7 8 9; do curl -L -o realisation-$i.jpg https://semaconnerie.com/wp-content/uploads/2022/09/img$n.jpg; i=$((i+1)); done
```

Ou directement sur GitHub : ouvrez le dossier `public/assets/img`, puis « Add file » → « Upload files ». Vérifiez que les noms sont bien `realisation-1.jpg` à `realisation-8.jpg`, en minuscules.

Si les fichiers sont en `.webp` ou `.png`, gardez leur vraie extension et dites-le-moi : il faudra ajuster `index.html`.

Conseil : passez les photos dans https://squoosh.app (JPEG qualité ~75, largeur max 1600 px) pour un site plus rapide.
