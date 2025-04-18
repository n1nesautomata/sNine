window.addEventListener('resize', moveSidebarContentToFooter);

function moveSidebarContentToFooter() {
    const sidebarContent = document.querySelector('.sidebar__content');
    const footer = document.querySelector('.footer__root');

    if (window.innerWidth < 1140) {
        if (footer && sidebarContent && !footer.contains(sidebarContent)) {
            footer.appendChild(sidebarContent);
        }
    } else {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar && !sidebar.contains(sidebarContent)) {
            sidebar.appendChild(sidebarContent);
        }
    }
}

moveSidebarContentToFooter();


const popularCards = [
    { class: 'steam', imgSrc: './assets/icons/steam.svg', alt: 'steam', text: 'Пополнение Steam' },
    { class: 'valorant', imgSrc: './assets/icons/valorant.svg', alt: 'valorant', text: 'Valorant' },
    { class: 'pubg-mobile', imgSrc: './assets/icons/pubg-mobile.svg', alt: 'pubg-mobile', text: 'PUBG Mobile' },
    { class: 'lol', imgSrc: './assets/icons/lol.svg', alt: 'lol', text: 'LEAGUE Of LEGENDS' },
    { class: 'mobile-legends', imgSrc: './assets/icons/mobile-legends.svg', alt: 'mobile-legends', text: 'Mobile Legends: BANG BANG' }
];

const popularListContainer = document.getElementById('popular-list-container');

if (popularListContainer) {
    popularCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('app-card', card.class);

        cardElement.innerHTML = `
        <div class="app-card__bottom">
            <img src="${card.imgSrc}" alt="${card.alt}" class="app-card__img">
            <span>${card.text}</span>
        </div>
    `;

        popularListContainer.appendChild(cardElement);
    });
}



const gameCards = [
    { class: 'genshin-impact', alt: 'Genshin-Impact', text: 'Genshin Impact' },
    { class: 'Honkai-Star-Rail', alt: 'Honkai-Star-Rail', text: 'Honkai: Star Rail' },
    { class: 'Roblox', alt: 'Roblox', text: 'Roblox' },
    { class: 'Fortnite', alt: 'Fortnite', text: 'Fortnite' },
    { class: 'Apex-Legends', alt: 'Apex-Legends', text: 'Apex Legends' },
    { class: 'Counter-Strike-2', alt: 'Counter-Strike-2', text: 'Counter-Strike 2' },
    { class: 'Dota-2', alt: 'Dota-2', text: 'Dota 2' },
    { class: 'Armored-Warfare', alt: 'Armored-Warfare', text: 'Armored Warfare' },
    { class: 'World-Of-Tanks', alt: 'World-Of-Tanks', text: 'World Of Tanks' },
    { class: 'Free-Fire', alt: 'Free-Fire', text: 'Free Fire' },
    { class: 'Brawl-Stars', alt: 'Brawl-Stars', text: 'Brawl Stars' },
    { class: 'Crossout', alt: 'Crossout', text: 'Crossout' },
    { class: 'Deadlock', alt: 'Deadlock', text: 'Deadlock' },
    { class: 'Warface', alt: 'Warface', text: 'Warface' },
    { class: 'The-Elder-Scrolls-Online', alt: 'The-Elder-Scrolls-Online', text: 'The Elder Scrolls: Online' },
    { class: 'TERA-Online', alt: 'TERA-Online', text: 'TERA Online' },
    { class: 'Black-Desert-Online', alt: 'Black-Desert-Online', text: 'Black Desert Online' },
    { class: 'Fallout-76', alt: 'Fallout-76', text: 'Fallout 76' },
    { class: 'Rust', alt: 'Rust', text: 'Rust' },
    { class: 'Left-4-Dead', alt: 'Left-4-Dead', text: 'Left 4 Dead' },
]
const gameListContainer = document.getElementById('game-list-container');

if (gameListContainer) {
    gameCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('app-card', card.class);

        cardElement.innerHTML = `
        <div class="app-card__bottom">
            <span>${card.text}</span>
        </div>
    `;

        gameListContainer.appendChild(cardElement);
    });
}

const catalogCards = [
    { points: 240, newPrice: '167.5₽', oldPrice: '198₽' },
    { points: 475, newPrice: '328.5₽', oldPrice: '390₽' },
    { points: 550, newPrice: '400.9₽', oldPrice: '440₽' },
    { points: 1000, newPrice: '708.3₽', oldPrice: '805₽' },
    { points: 2050, newPrice: '1443.7₽', oldPrice: '1640₽' },
    { points: 3650, newPrice: '2490.9₽', oldPrice: '2815₽' },
    { points: 5350, newPrice: '3572.3₽', oldPrice: '4045₽' },
    { points: 8700, newPrice: '5132.1₽', oldPrice: '6111₽' },
    { points: 11000, newPrice: '6532.9₽', oldPrice: '7100₽' },
];

const catalogListContainer = document.getElementById('catalog-list-container');

if (catalogListContainer) {
    catalogCards.forEach(card => {
        const cardElement = document.createElement('a');
        cardElement.classList.add('catalog-card');
        cardElement.href = './basket.html';

        cardElement.innerHTML = `
        <img src="./assets/icons/basket.svg" alt="" class="catalog-card__basket">
        <p class="catalog-card__content">${card.points}VP</p>
        <p class="catalog-card__name">${card.points} Valorant Points</p>
        <div class="catalog-card__bottom">
            <div class="catalog-card__price">
                <span class="catalog-card__new-price">${card.newPrice}</span>
                <span class="catalog-card__old-price">${card.oldPrice}</span>
            </div>
            <img src="./assets/icons/russian.svg" alt="russian" class="catalog-card__country">
        </div>
    `;

        catalogListContainer.appendChild(cardElement);
    });
}
