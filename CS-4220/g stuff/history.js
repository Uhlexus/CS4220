
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const fs = require('fs');

const writeHistory = () => {
    const data = new Uint8Array(Buffer.from('app.js'));
    fs.writeFile('history.json', data, error => {
        if (error) console.log('Failed to write file.');
        else console.log('File written.');
    });
};

module.exports = {
    writeHistory
};