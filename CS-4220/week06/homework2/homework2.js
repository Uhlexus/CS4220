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
        const start = Date.now();
        const response = await superagent.get(url);
        const duration = (Date.now() - start) / 1000;
        console.log(`url: ${url}`);
        console.log(`duration: ${duration}`)
        console.log(`status: ${response.statusCode}`);
        console.log(`content-type: ${response.headers['content-type']}`)
        console.log(`callee: ${callee}`)

    } catch (error) {
        console.log(`url: ${url}`);
        console.log(`status: ${error.response ? error.response.status : null}`)
        console.log(`callee: ${callee}`)
    }
};


// // # 3 - Invoke the requestPromise() using then/catch for each websites object above
requestPromise(websites.dummyjson.url, 'async/await')
    .then(response => console.log(response))
    .catch((error) => console.error(error));
requestPromise(websites.spotify.url, 'async/await')
    .then(response => console.log(response))
    .catch((error) => console.error(error));
requestPromise(websites.nasa.url, 'async/await')
    .then(response => console.log(response))
    .catch((error) => console.error(error));
requestPromise(websites.unknown.url, 'async/await')
    .then(response => console.log(response))
    .catch((error) => console.error(error));


// // # 4 - Write the requestWrapper() function which interacts with the requestPromise() function
async function requestWrapper(url, callee) {
    try {
        const response = await requestPromise(url, callee);
        console.log({
            url: response.url,
            duration: response.duration,
            status: response.statusCode,
            content: response.headers['content-type'],
            callee: callee
        });
    } catch (error) {
        console.log({
            url: error.url,
            status: error.statusCode,
            callee: callee
        });
    }
}


// // # 5 - Invoke the requestWrapper() for each websites object above
requestWrapper(websites.dummyjson.url, 'async/await');
requestWrapper(websites.spotify.url, 'async/await');
requestWrapper(websites.nasa.url, 'async/await');
requestWrapper(websites.unknown.url, 'async/await');