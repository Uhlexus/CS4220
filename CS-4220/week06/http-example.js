const https = require('https');

const url = 'https://api.cdnjs.com/libraries?limit=10';

https
    .get(url, (res) => {
        const contentType = res.headers['content-type'];
        let body = '';

        res.on('data', (result) => {
            // build up response body when the data event is emitted
            body += result;
        });

        res.on('end', () => {
            // when the end event is emitted
            // check the content type of the response
            if (contentType.includes('application/json')) {
                try {
                    // attempt to parse the response body from JSON to a javascript object
                    console.log(JSON.parse(body));
                } catch (err) {
                    console.log(err);
                }
            }
        });
    })
    .on('error', (err) => {
        console.log(err);
    });
