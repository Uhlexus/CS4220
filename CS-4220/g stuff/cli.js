/* eslint-disable no-undef */
const yargs = require('yargs/yargs');
//const { selectRandom } = require('./api');
const app = require('./app.js');

yargs(process.argv.slice(2))
    // $0 expands the file name
    // <> indicate that the command is mandatory
    // [] indicate that options are optional
    .usage('$0: Usage <command> [options]')
    .command(
        //command
        //<> indicates the command argument named to-do is required
        'find <to-do>',
        //description for the command
        'find something to do',
        //builder function to build out our command aruguments and options 
        //the argument inside the function below reporesents an instance of yargs
        (yargs) => {
        //configures a command argument based off the name
        //first argument below must match the name given in the <>
        //second argument is an options object
            return yargs.positional('to-do', {
                describe: 'name of the type of activity',
                type: 'string',
                choices:['Random', 'Type', 'Price']
            });
        },
        //handler function for handling parsed command, command arguments and options
        (args) => {
            if (args.toDo === 'Random') {
                //invoke a function to select random to-do
                app.randomSelection(args);
            } else if (args.toDo === 'Type') {
                app.randomActivity(args);
            } else {
                console.log(`${args.toDo} not available option`); 
            }
        }
    ).help().argv;
//help() builds a help menu using the details from our yargs setup
//.argv gets the arguments as a plain javascript object and passes them to handler (when used)

