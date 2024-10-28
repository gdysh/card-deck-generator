// Создание колоды карт
const suits = ['♠', '♥', '♦', '♣']; // Масти
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']; // Значения

let deck = [];

// Генерация колоды
function generateDeck() {
    deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push(value + ' ' + suit); // Создание карты
        }
    }
}

// Перемешивание колоды
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Меняем местами карты
    }
}

// Вытягивание карты
function drawCard() {
    if (deck.length === 0) {
        cardDisplay.textContent = "Колода пуста!";
        return;
    }
    const card = deck.pop(); // Удаляем последнюю карту из колоды
    cardDisplay.textContent = `Вы вытянули: ${card}`; // Отображение карты
}

// Инициализация
generateDeck();
shuffleDeck();

const cardDisplay = document.getElementById('cardDisplay');
document.getElementById('drawCard').addEventListener('click', drawCard);
