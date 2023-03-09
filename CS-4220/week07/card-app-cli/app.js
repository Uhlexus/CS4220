const superagent = require('superagent');

//TODO WEEK 08 - refactor this into api.js

const base = 'https://deckofcardsapi.com/api/deck/';

const buildDeck = async (deckCount) => {
    try {

        // https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
        const deckUrl = `${base}/deck/new/shuffle/?deck_count=${deckCount}`;
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

    }catch(error){
        console.error(error);
    }
};

