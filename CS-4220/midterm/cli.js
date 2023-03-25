const yargs = require('yargs/yargs');

const app = require('./app.js');

yargs(process.argv.slice(2))
   
    .usage('$0: Usage <command>')
    .command(
       
        'search <keyword>',
        'search for a hero or villain',
    
        (yargs) => {
       
            return (
                yargs
                    .positional('keyword', {
                        describe: 'name of the the hero or villain',
                        type: 'string',
                    })
            );
        },

        (args) => {
            if(args.keyword) {
                app.searchSuper(args);
            }
            else {
                console.log(`${args.keyword} was not found.`);
            }
           
        }
    )
    .help().argv;
