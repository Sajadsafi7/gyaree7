const menu = [
  {name:'Cappuccino',category:'Varm Dryck',desc:'En klassisk cappuccino med perfekt balans mellan espresso, mjölk och skum.',img: 'assets/Italian+Capuccino+with+chocolate+1080x1440_1080x1440.jpg', price: { small: "49 Kr", large: "59 Kr" }},
  {name:'Latte',category:'Varm Dryck',desc:'Krämig latte med silkeslent mjölkskum, perfekt för en lugn stund.',img: 'assets/cafe-latte1-recipe_resized.jpg',  price: { small: "39 Kr", large: "59 Kr" }},
  {name:'Espresso',category:'Varm Dryck',desc:'Ren, intensiv espresso med kraftfull arom och smak.',img:'assets/creamy-expresso.png',  price: { small: "20 Kr", large: "35 Kr" }},
  {name:'Islatte',category:'Kall Dryck',desc:'Kall brygd latte med is, len och uppfriskande på varma dagar.',img:'assets/Recipes_Banner8_1200x1200_IcedLatte.jpeg',  price: { small: "40 Kr", large: "59 Kr" }},
  {name:'Frappé',category:'Kall Dryck',desc:'Kaffedrink blandad med is och mjölk – perfekt sommardryck.',img:'assets/senseo-oppskrifter-frappe.webp' ,  price: { small: "65 Kr", large: "80 Kr" }},
  {name:'Varm Choklad',category:'Varm Dryck',desc:'Krämig varm choklad toppad med vispgrädde och chokladsås.',img:'assets/images.jpg',  price: { small: "40 Kr", large: "60 Kr" }},
  {name:'Apelsinjuice',category:'Juice',desc:'Färskpressad apelsinjuice, rik på smak och energi.',img:'assets/två-lager-kombination-mellan-apelsinjuice-och-svart-kaffe-apelsin-kaffecocktail-på-träbakgrunden-iskaffe-mi-glaskaffe-blandat-194364082.webp',  price: { small: "35 Kr", large: "45 Kr" }},
  {name:'Äppeljuice',category:'Juice',desc:'Klar, fruktig och naturligt söt äppeljuice.',img:'assets/images (1).jpg',  price: { small: "35 Kr", large: "45 Kr" }},
  {name:'Kycklingmacka',category:'Mat',desc:'Grillad kycklingmacka med fräscha grönsaker och aioli.',img:'assets/images (2).jpg',  price: { small: "60 Kr", large: "95 Kr" }},
  {name:'Croissant',category:'Mat',desc:'Smörig croissant – perfekt till kaffet.',img:'assets/Croissant-Petr_Kratochvil.jpg',  price: { small: "25 Kr", large: "40 Kr" }},
  {name: "Pannini med Kyckling",category: "Mat",desc: "Saftig kyckling med lätt rökig eller grillad ton beroende på tillagning.", img: "assets/picture.jpg", price:{ small: "--", large: "109" } },
  {name:"Focaccia",category: "Mat",desc: "Mild, lite salt med en tydlig smak av olivolja.",img: "assets/flower-focaccia-creative-idea-cooking-260nw-1731539524.webp", price:{ small: "--", large:"135" } },
]

let filteredMenu = [...menu];

// DOM elements
const grid = document.getElementById('grid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const applyBtn = document.getElementById('applyBtn');
const lightbox = document.getElementById('lightbox');
const lbImage = document.getElementById('lbImage');
const lbName = document.getElementById('lbName');
const lbDesc = document.getElementById('lbDesc');
const lbPrice = document.getElementById('lbPrice');
const closeLB = document.getElementById('closeLB');


function render(list) {
  grid.innerHTML = '';
  list.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="body">
        <h3>${item.name}</h3>
        <p>${item.desc.substring(0,60)}...</p>
        <p class="price">Liten: ${item.price.small} kr • Stor: ${item.price.large} kr</p>
      </div>
    `;
    card.addEventListener('click', () => openLightbox(item));
    grid.appendChild(card);
  });
}

function openLightbox(item) {
  lbImage.src = item.img;
  lbName.textContent = item.name;
  lbDesc.textContent = item.desc;
  lbPrice.textContent = `Liten: ${item.price.small} kr • Stor: ${item.price.large} kr`;
  lightbox.classList.add('show');
}

function closeLightbox() {
  lightbox.classList.remove('show');
}

applyBtn.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase();
  const cat = categoryFilter.value;

  filteredMenu = menu.filter(p => {
    return (
      (p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query)) &&
      (cat === 'all' || p.category === cat)
    );
  });

  render(filteredMenu);
});

closeLB.addEventListener('click', closeLightbox);

// Init render
render(menu);