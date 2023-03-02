// built in node module that allows for interacting with the file system
const fs = require('fs');

// built in module that provides utilities for working with files and directory paths
const path = require('path');
const { fileURLToPath } = require('url');

// read file and perform word count using fs with callbacks
const wordCount = (filename) => {
    const fullPath = path.resolve(__dirname, './files', filename);

    fs.readFile(fullPath, 'utf-8', (error, result) => {
        if (!error) {
            const wordArray = result.split(' ');

            console.log({
                filename,
                wordCount: wordArray.length
            });
        } else {
            console.error(error);
        }
    })
};
wordCount('large.txt');
wordCount('medium.txt');
wordCount('small.txt');

// read file and perform word count using fs with promises
const wordCountPromises = async (filename) => {
    const fullPath = path.resolve(__dirname, './files', filename);

    try {
        const result = await fs.promises.readFile(fullPath, 'utf-8');
        const wordArray = result.split(' ');

        console.log({
            filename,
            wordCount: wordArray.length,
            callee: 'async/await'
        });
    } catch (error) {
        console.error(error);
    }
};
wordCountPromises('large.txt');
wordCountPromises('medium.txt');
wordCountPromises('small.txt');
wordCountPromises('fake.txt');
