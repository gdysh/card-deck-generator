// Creating a deck of cards

const suits = ['♠', '♥', '♦', '♣']; // suits
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']; // values

let deck = [];

// Deck generation
function generateDeck() {
    deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push(value + ' ' + suit); // Creating a card
        }
    }
}

// Shuffling the deck
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap cards
    }
}

// Drawing a card
function drawCard() {
    if (deck.length === 0) {
        cardDisplay.textContent = "Колода пуста!";
        return;
    }
    const card = deck.pop(); // Removing the last card from the deck
    cardDisplay.textContent = `Вы вытянули: ${card}`; // Card display
}

// Initialization
generateDeck();
shuffleDeck();

const cardDisplay = document.getElementById('cardDisplay');
document.getElementById('drawCard').addEventListener('click', drawCard);
