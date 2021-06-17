const messages = (number) => {
    switch (number){
        case 1:
            return "Random message 1.";
            break;
        case 2:
            return "Random message 2";
            break;
        case 3:
            return "Random message 3";
            break;
        case 4:
            return "Random message 4";
            break;
        case 5:
            return "Random message 5";
            break;
        default:
            return "Please choose another number.";
    }
}

const numGen = () => {
    return Math.floor(Math.random()*6);
}

