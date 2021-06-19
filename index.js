const ranNumGen = () => {
    return Math.floor(Math.random()*5);
}

const randomMessageGen = (num) => {
    let randomMessage = '';
    if(num === 0){
        randomMessage = 'Random Message 1';
    }
    else if(num === 1){
        randomMessage = 'Random Message 2';
    }
    else if(num === 2){
        randomMessage = 'Random Message 3';
    }
    else if(num === 3){
        randomMessage = 'Random Message 4';
    }
    else if(num === 4){
        randomMessage = 'Random Message 5';
    }

    return randomMessage;
}

console.log(randomMessageGen(ranNumGen));



