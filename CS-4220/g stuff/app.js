/* eslint-disable linebreak-style */
const api = require('./api.js');
const history = require('./history.js');

const randomActivity = async () => {
    try {
        const activity = await api.selectType();
        const strActivity = JSON.stringify(activity);
        history.writeHistory();

        console.log(strActivity);
        return strActivity;
    } catch (error) {
        console.log(error);
    }
};

const randomSelection = async (args) => {
    try {
        const bored = await api.selectRandom(args);
        const strBored = JSON.stringify(bored);
        history.writeHistory();

        //console.log(strBored);
        return strBored;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    randomActivity,
    randomSelection
};