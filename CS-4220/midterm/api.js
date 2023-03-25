const superagent = require('superagent');

const token = '6113504278737850';

const superhero = `https://superheroapi.com/api/${token}`;

//https://superheroapi.com/api/6113504278737850/name
//https://superheroapi.com/api/6113504278737850/character-id/


const chooseHero = async (todoType) => {
    try {
        const heroURL = `${superhero}/`;
        const res = await superagent.get(heroURL);
        console.log(res.body);
        return res.body;
    } catch (error) {
        console.log(error);
    }
};
chooseHero();

//Getting hero by id
const randomHero = async (randomHero) => {
    try {
        const randomURL = `${superhero}?heroID=${randomHero}`;
        const res = await superagent.get(randomURL);
        return res.body;
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    chooseHero,
    randomHero
};

