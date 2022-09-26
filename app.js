const cardArr = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

/*
    sort method works by comparing two values. compares the value and sorts through it.
    math.random returns any number from 0 to -1, we are checking that it's either smaller than 0.5 or larger than it
    so it will shuffle on the basis of that.
*/ 
cardArr.sort(() => 0.5 - Math.random());

// # -> we are looking for an id.
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');

let cardsChosen = [];
let cardsChosenIds = [];

const cardsWon = [];

function createBoard() {
    for(let i = 0; i < cardArr.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.append(card);
    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    
    console.log(cards);
    console.log('check for match');

    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('You clicked on the same image.');
    }

    if(cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!!');

        // background color to white for matched cards
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        
        // removing event listeners 
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry, try again :(');
    }

    resultDisplay.textContent = cardsWon.length

    // Restarting the whole process again.
    cardsChosen = []; 
    cardsChosenIds = [];

    // 12 cards -> 6 matches
    if(cardsWon.length == (cardArr.length) / 2){
        resultDisplay.textContent = 'Congratulations, you found them all :)';
    }
}

function flipCard() {
    console.log(cardArr);
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArr[cardId].name);
    cardsChosenIds.push(cardId);

    this.setAttribute('src', cardArr[cardId].img);

    if(cardsChosen.length == 2) {
        setTimeout(checkMatch, 500);
    }
}