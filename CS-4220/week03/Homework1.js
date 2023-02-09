// soda machine
const sodaMachine = (args) => {
    const values = Object.values(args);
    let min = values[0];
    for( let i = 1; i < values.length; i++){
        if(min > values[i]){
            min = values[i];
        }
    }

    return min;
};

console.log(sodaMachine({ pepsi: 10, coke: 5, sprite: 4, redbull: 9 }));