/*
    // Starting from a brand new Node.js project with NO package.json
    1. run: npm init
    2. answer the question prompts on your terminal
    3. verify: package.json was created
    4. run: npm install --save <npm module you need>
 */
const superagent = require('superagent');

const cdnjs = 'https://api.cdnjs.com/libraries?limit=10';

// use superagent with callbacks
const superagentCallbacks = (url) => {};
superagentCallbacks(cdnjs);

// use superagent with async/await
const superagentAsyncAwait = async (url) => {};
superagentAsyncAwait(cdnjs);
