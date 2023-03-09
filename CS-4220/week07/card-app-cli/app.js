const superagent = require('superagent');

//TODO WEEK 08 - refactor this into api.js

const base = 'https://deckofcardsapi.com/api/deck';

const buildDeck = async (deckCount) => {
    try {

        // https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
        const deckUrl = `${base}/new/shuffle/?deck_count=${deckCount}`;
        console.log(deckUrl);
        const res = await superagent.get(deckUrl);
        return res.body;
    } catch (error){
        console.error(error);
    }
};

const drawCards = async (deckId, count) => {
    try {
        // https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2
        const drawUrl = `${base}/${deckId}/draw/?count=${count}`;
        console.log(drawUrl);
        const res = await superagent.get(drawUrl);

        return res.body;

    }catch(error){
        console.error(error);
    }
};

// ------


// handle getting a deck, drawing cards, prompt user, replace cards
const playPoker = async (args) => {
    try {
        // hard code due to the rules if 5 or 7 card draw
        const deckCount = 1;

        //get the number of cards requested to play poker with
        const { cardCount } = args;

        //get a deck of cards
        const deckOfCards = await buildDeck(deckCount);

        // darw cards from the deck above
        const playerHand = await drawCards(deckOfCards.deck_id, cardCount);

        console.log(playerHand);

    }catch(error){
        console.error(error);
    }
};

module.exports = {
    playPoker
};

