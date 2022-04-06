const cardContainer = document.querySelector('.card-container');
const cardConArray = Array.from(cardContainer.children);
const prevArrow = document.getElementById('left');
const nextArrow = document.getElementById('right');
const disCard = document.querySelector('.stylest-card');
disCard.style.display = 'flex';

let cardWidth = cardConArray[0].getBoundingClientRect().width;
window.addEventListener('resize', e => {
    cardWidth = cardConArray[0].getBoundingClientRect().width;
    cardConArray.forEach(setCardPostion);
    const currentCard = cardContainer.querySelector('.isVis');
    moveCard(cardContainer, currentCard, currentCard);
})
console.log(cardWidth);
//set scard position

const setCardPostion = (cardPos, index) => {
    cardPos.style.left = cardWidth * index + 'px';
};
cardConArray.forEach(setCardPostion);
//move cards
const moveCard = (cardContainer, currentCard, visCard) => {
    cardContainer.style.transform = 'translateX(-' + visCard.style.left + ')';
    currentCard.classList.remove('isVis');
    visCard.classList.add('isVis');
}

const arrowVis = (arrow, currentCard, cardConArray) => {
    const cardIndex = cardConArray.findIndex(card => card === currentCard);
    const indexLength = cardConArray.length - 1;
    console.log(cardIndex);
    console.log(indexLength);
    if (cardIndex === 0) {
        prevArrow.style.display = 'none';
        nextArrow.style.display = 'initial';
    } else if (cardIndex === indexLength) {
        nextArrow.style.display = 'none';
        prevArrow.style.display = 'initial';
    } else {
        nextArrow.style.display = 'initial';
        prevArrow.style.display = 'initial';
    }

}


//slide right
nextArrow.addEventListener('click', e => {
    const cardWidth = cardConArray[0].getBoundingClientRect().width;
    const currentCard = cardContainer.querySelector('.isVis');
    const nextCard = currentCard.nextElementSibling;

    moveCard(cardContainer, currentCard, nextCard);
    arrowVis("right", nextCard, cardConArray)
})


//slide left
prevArrow.addEventListener('click', e => {
    const cardWidth = cardConArray[0].getBoundingClientRect().width;
    const currentCard = cardContainer.querySelector('.isVis');
    const prevCard = currentCard.previousElementSibling;


    moveCard(cardContainer, currentCard, prevCard);
    arrowVis("right", prevCard, cardConArray)

})