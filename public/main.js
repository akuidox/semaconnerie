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

// Envoi du formulaire (Web3Forms), sans quitter la page
document.querySelectorAll('[data-form]').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    const button = form.querySelector('button[type="submit"]');
    status.className = 'form-status';
    status.textContent = 'Envoi en cours…';
    button.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'Erreur');
      form.reset();
      status.classList.add('ok');
      status.textContent = 'Demande envoyée. Nous vous revenons rapidement avec une soumission.';
    } catch (err) {
      status.classList.add('err');
      status.textContent = `L’envoi n’a pas fonctionné. Appelez-nous au ${form.dataset.phone}.`;
    } finally {
      button.disabled = false;
    }
  });
});

// Année courante dans le pied de page
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
