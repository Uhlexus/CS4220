const superagent = require('superagent');
const base = 'https://www.boredapi.com/api/activity';

const selectType = async (todoType) => {
    try {
        const typeURL = `${base}/`;
        const res = await superagent.get(typeURL);

        console.log(res.body);

        return res.body;

    } catch (error) {
        console.log(error);
    }
};
selectType();
//https://www.boredapi.com/api/activity/
//https://www.boredapi.com/api/activity?type=recreational

const selectRandom = async (randomType) => {
    try {
        const ranURL = `${base}?type=${randomType}`;
        const res = await superagent.get(ranURL);
        //console.log(res.body);
        return res.body;

    } catch (error) {
        console.log(error);
    }
};
//selectRandom('recreational');

module.exports = {
    selectType,
    selectRandom
};