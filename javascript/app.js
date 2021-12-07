function getCard(){
    const suits = ["Clubs","Spades","Hearts","Diamonds"];
    const values = ["1","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let suit = getRandomIndex(suits);
    let value = getRandomIndex(values);
    let obj = {value: value, suit: suit};
    return obj;
}

function getRandomIndex(arr){
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}