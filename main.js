let lastVisibleItem = 0;
const numItemsToShowOnMobile = 25; // Nombre d'éléments à afficher à chaque fois sur mobile
const numItemsToShowOnPC = 100; // Nombre d'éléments à afficher à chaque fois sur PC

// Détecter si l'utilisateur utilise un téléphone ou un PC
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Définir le nombre d'éléments à afficher en fonction du type d'appareil
const numItemsToShow = isMobile ? numItemsToShowOnMobile : numItemsToShowOnPC;

function showMoreItems() {
  // Affichage des éléments suivants
  for (let i = lastVisibleItem + 1; i <= lastVisibleItem + numItemsToShow; i++) {
    const item = document.querySelector(`#myList a:nth-of-type(${i})`);
    if (item) {
      item.style.display = "block";
    }
  }
  lastVisibleItem += numItemsToShow;
}

// Affichage initial des éléments
showMoreItems();

const tolerance = 200;

window.addEventListener("scroll", () => {
  if (window.innerHeight + Math.round(window.scrollY) + tolerance >= document.body.scrollHeight) {
    showMoreItems();
  }
});