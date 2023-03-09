const yargs = require('yargs/yargs');

yargs( process.argv.slice(2))
    // $0 expands the name of the file
    //<> indicate the command is mandatory
    //[] indicate the command options are optional
    .usage('$0: Usage <command> [options]')
    .command(
        //command
        //<> command argument is mandatory
        'play <game>',
        //description
        'an app to play card game', 
        //builder
        (yargs) => {
            return yargs.positional('game', {
                description: 'name of the card game',
                type: 'string',
                choices: ['poker', 'go-fish']
            }).option('cardCount', {
                alias: 'c',
                describe: 'the number of cards to use when playing poker',
                default: 5,
                type: 'number'
            });
        },
        //handler
        (args) => {
            if (args.game === 'poker') {
                console.log(args);
            } else {
                console.log(`${args.game} is not ready`);
            }
        }
        
    );
