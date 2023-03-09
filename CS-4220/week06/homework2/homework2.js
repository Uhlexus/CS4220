//websites
const websites = {
    dummyjson: {
        name: 'Dummy JSON',
        url: 'https://dummyjson.com/products/1'
    },
    spotify: {
        name: 'Spotify',
        url: 'http://www.spotify.com/us/'
    },
    nasa: {
        name: 'NASA',
        url: 'https://www.nasa.gov/error/'
    },
    unknown: {
        name: 'Unknown',
        url: null
    }
};

const superagent = require('superagent');

// // # 2 - Write the requestPromise() function which uses your http request module

const requestPromise = async (url, callee) => {
    try {
        const response = await superagent.get(url);
        console.log(response.statusCode);
        console.log(response.headers);
        console.log(response.body);
    } catch (error){
        console.log(error);
    }
};

// // # 3 - Invoke the requestPromise() using then/catch for each websites object above

// // # 4 - Write the requestWrapper() function which interacts with the requestPromise() function

// // # 5 - Invoke the requestWrapper() for each websites object above


