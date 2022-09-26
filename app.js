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
const cardsChosen = [];
const cardsChosenIds = [];



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
    console.log(cards);
    console.log('check for match');
    if(cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match');
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png');
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