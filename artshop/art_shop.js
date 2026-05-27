// artshop.js

function showCollection(id) {
  document.querySelectorAll('.shop-nav-item').forEach((item) => {
    item.classList.remove('active');
  });

  const activeNav = document.getElementById('nav-' + id);
  if (activeNav) {
    activeNav.classList.add('active');
  }

  document.querySelectorAll('.shop-sub').forEach((section) => {
    section.classList.remove('active');
  });

  const activeCollection = document.getElementById('col-' + id);
  if (activeCollection) {
    activeCollection.classList.add('active');
  }

  window.scrollTo(0, 0);
}

/* ═══════════════════════════════════════════
   ART SHOP — wall gallery + modal JS
   Load this before </body> in your HTML
   ═══════════════════════════════════════════ */

/**
 * openModal(btn)
 * Call onclick="openModal(this)" on each .wall-art button.
 * Reads data attributes from the button:
 *   data-title       — piece name
 *   data-price       — e.g. "$18.00"
 *   data-description — short blurb
 *   data-front       — path to front-of-card image
 *   data-back        — path to back-of-card image
 *   data-collection  — optional label shown in top tag (e.g. "June 2026")
 */
function openModal(btn) {
  const title = btn.dataset.title || 'Piece Name';
  const price = btn.dataset.price || '';
  const desc = btn.dataset.description || '';
  const front = btn.dataset.front || '';
  const back = btn.dataset.back || '';
  const collection = btn.dataset.collection || '';

  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-price').textContent = price;
  document.getElementById('modal-desc').textContent = desc;

  const tagEl = document.getElementById('modal-tag');
  if (tagEl) tagEl.textContent = collection;

  // front panel
  const frontEl = document.getElementById('modal-front');
  frontEl.innerHTML = front
    ? `<img src="${front}" alt="Front of ${title}"><div class="modal-panel-label">Front</div>`
    : `<div class="modal-panel-placeholder">
        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
        Front of card
       </div><div class="modal-panel-label">Front</div>`;

  // back panel
  const backEl = document.getElementById('modal-back');
  backEl.innerHTML = back
    ? `<img src="${back}" alt="Back of ${title}"><div class="modal-panel-label">Back</div>`
    : `<div class="modal-panel-placeholder">
        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
        Back of card
       </div><div class="modal-panel-label">Back</div>`;

  document.getElementById('shopModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('shopModal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('shopModal')) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/**
 * showCollection(id)
 * Switches sidebar active state and shows the matching .shop-sub panel.
 * e.g. showCollection('june') activates #nav-june and #col-june
 */
function showCollection(id) {
  document.querySelectorAll('.shop-nav-item').forEach(el => el.classList.remove('active'));
  const nav = document.getElementById('nav-' + id);
  if (nav) nav.classList.add('active');

  document.querySelectorAll('.shop-sub').forEach(el => el.classList.remove('active'));
  const col = document.getElementById('col-' + id);
  if (col) col.classList.add('active');

  window.scrollTo(0, 0);
}

/* ═══════════════════════════════════════════════════
   MODAL
   ═══════════════════════════════════════════════════ */

const modalImages = document.getElementById("modal-images");

function openModal(btn) {
  const title = btn.dataset.title || 'Piece Name';
  const price = btn.dataset.price || '';
  const desc = btn.dataset.description || '';
  const collection = btn.dataset.collection || '';
  const front = btn.dataset.front || '';
  const back = btn.dataset.back || '';

  document.getElementById('modal-tag').textContent = collection;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-price').textContent = price;
  document.getElementById('modal-desc').textContent = desc;

  // front panel
  const frontEl = document.getElementById('modal-front');
  frontEl.innerHTML = front
    ? `<img src="${front}" alt="Front of ${title}">
       <div class="modal-panel-label">Front</div>`
    : `<div class="modal-panel-placeholder">
         <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/>
         <circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
         Front of card
       </div>
       <div class="modal-panel-label">Front</div>`;

  // back panel
  const backEl = document.getElementById('modal-back');
  backEl.innerHTML = back
    ? `<img src="${back}" alt="Back of ${title}">
       <div class="modal-panel-label">Back</div>`
    : `<div class="modal-panel-placeholder">
         <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/>
         <circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
         Back of card
       </div>
       <div class="modal-panel-label">Back</div>`;

  document.getElementById('shopModal').classList.add('open');
  document.body.style.overflow = 'hidden';

  if (btn.dataset.layout === "horizontal") {

    modalImages.style.flexDirection = "column";
  
    modalImages.style.width = "42%";
  
    modalImages.style.gap = "12px";
  
    modalImages.style.justifyContent = "flex-start";
  
    modalImages.style.alignItems = "center";
  
    modalImages.style.paddingLeft = "20px";
    modalImages.style.paddingTop = "20px";
  
    modalImages.style.paddingBottom = "20px";
    modalImages.style.paddingRight = "20px";
  
    document.querySelectorAll(".modal-panel").forEach(panel => {
      panel.style.width = "100%";
      panel.style.flex = "none";
      panel.style.minHeight = "unset";
      panel.style.height = "auto";
    });
  
    document.querySelectorAll(".modal-panel img").forEach(img => {
      img.style.width = "82%";
      img.style.height = "auto";
      img.style.objectFit = "contain";
      img.style.display = "block";
    });
  
  } else {
  
    modalImages.style.flexDirection = "row";
  
    modalImages.style.width = "60%";
  
    modalImages.style.gap = "20px";
  
    modalImages.style.justifyContent = "";
  
    modalImages.style.alignItems = "";
  
    modalImages.style.paddingLeft = "20px";
    modalImages.style.paddingTop = "20px";
  
    modalImages.style.paddingRight = "80px";
  
    document.querySelectorAll(".modal-panel").forEach(panel => {
      panel.style.width = "260px";
      panel.style.flex = "none";
    });
  
    document.querySelectorAll(".modal-panel img").forEach(img => {
      img.style.width = "100%";
    });
  
  }
}

function closeModal() {
  document.getElementById('shopModal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('shopModal')) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
