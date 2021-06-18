const messages = (number) => {
    let message = "";
    switch (number){
        case 0:
            message = "Random message 1.";
            break;
        case 1:
            message = "Random message 2.";
            break;
        case 2:
            message = "Random message 3.";
            break;
        case 3:
            message = "Random message 4.";
            break;
        case 4:
            message = "Random message 5.";
            break;
        default:
            return "Please choose another number.";
    };

    return message;
}

const numGen = () => {
    let ranNum = Math.floor(Math.random()*5);
    return ranNum;
}




