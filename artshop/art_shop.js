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
