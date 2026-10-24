// Photo manquante : on masque l'icône d'image brisée
document.querySelectorAll('.shot img').forEach((img) => {
  const hide = () => img.classList.add('missing');
  if (img.complete && img.naturalWidth === 0) hide();
  else img.addEventListener('error', hide);
});

// Agrandissement des photos
const box = document.querySelector('.lightbox');
if (box && typeof box.showModal === 'function') {
  const boxImg = box.querySelector('img');
  document.querySelectorAll('.shot').forEach((btn) =>
    btn.addEventListener('click', () => {
      boxImg.src = btn.dataset.full;
      boxImg.alt = btn.querySelector('img').alt;
      box.showModal();
    })
  );
  box.querySelector('.lightbox-close').addEventListener('click', () => box.close());
  box.addEventListener('click', (e) => { if (e.target === box) box.close(); });
}

// Année courante dans le pied de page
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
