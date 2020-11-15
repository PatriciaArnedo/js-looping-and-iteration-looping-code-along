// Code your solutions in this file

function writeCards(names, event){
    let resultArray = []
    for(let i = 0; i < names.length; i++){
        resultArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return resultArray
}

function countDown(integer){
    let counter = integer
    while (counter >= 0) {
        console.log(counter)
        counter --
    }
}