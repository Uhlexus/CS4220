## How to Use the Card App CLI Dependencies

1. Go into the `card-app-cli-part-02` folder. Once inside the folder run: `npm install`. This will install all the dependencies listed in the package.json.

2. To view the help directions for the CLI run: `node cli.js --help`. To view help directions for the play command run: `node cli.js play --help`

3. To run the `card-app-cli-part-02` CLI:

```
    // run the play command with the game argument without passing any options
    // this will run the game with the default cardCount of 5
    node cli.js play poker

    // run the play command with the game argument and pass cardCount as a number
    // this will run the game with the cardCount of 7
    node cli.js play poker --cardCount 7
```
