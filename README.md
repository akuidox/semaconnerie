# semaconnerie.com — site statique

Site une page en HTML/CSS/JS pur, sans dépendances ni étape de build, déployé sur Cloudflare.

## Mise en ligne

1. **Photos** : déjà incluses dans `public/assets/img/` (voir `ASSETS.md` pour les remplacer).
2. **Formulaire** : créez une clé gratuite sur https://web3forms.com avec l'adresse qui doit recevoir les demandes (info@semaconnerie.com). Remplacez `VOTRE_CLE_WEB3FORMS` dans `public/index.html`.
3. **Cloudflare** : Workers & Pages → Créer → Importer un repo → `semaconnerie`.
   - Nom du projet : `semaconnerie`
   - Commande de build : *(vide)*
   - Commande de déploiement : `npx wrangler deploy` (par défaut)
   - La configuration est dans `wrangler.jsonc` : seul le dossier `public/` est publié.
4. **Domaine** : une fois le DNS du domaine géré par Cloudflare, dans le projet → Settings → Domains & Routes → Add → Custom domain → `semaconnerie.com`, puis `www.semaconnerie.com`.
   - **Attention aux courriels** : info@semaconnerie.com dépend des enregistrements MX. Vérifiez qu'ils sont bien importés dans Cloudflare avant de changer les serveurs de noms.
5. **Test** : ouvrez le site, envoyez une demande de test, vérifiez la réception.

Ensuite, chaque modification poussée sur `main` redéploie le site automatiquement.

## Personnaliser

- Couleurs : variables en haut de `public/styles.css` (le jaune du logo est `--yellow`).
- Photos : section `#realisations` (liste `.gallery`) de `public/index.html`.

## Fichiers

- `public/` — **le site publié** (tout ce qui est ici est en ligne)
  - `index.html`, `styles.css`, `main.js` (photos et formulaire), `404.html`
  - `assets/img/` — images
  - `_headers` (sécurité et cache), `_redirects` (anciennes URL WordPress), `robots.txt`, `sitemap.xml`
- `wrangler.jsonc` — configuration Cloudflare
- `README.md`, `ASSETS.md` — documentation (non publiée)
