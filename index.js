function writeCards(name, event){
    var array = []
    for (var i=0; i < name.length; i++){
        array.push("Thank you, " + name[i] + ", for the wonderful " + event + " gift!")
    }
    return array;
}

function countdown(number){
    while (0<=number){
        console.log(number)
        number = (number - 1)
    };
};