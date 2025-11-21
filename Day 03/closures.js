function counterGame(){

    count = 1

    function increaseNumber(){
        count += 1
    }

    function decreaseNumber(){
        count -= 1
    }

    function getTotal(){
        return count
    }

    return {increaseNumber,decreaseNumber,getTotal}
}

counter = counterGame()

counter.increaseNumber()
counter.increaseNumber()
counter.decreaseNumber()
console.log(counter.getTotal())