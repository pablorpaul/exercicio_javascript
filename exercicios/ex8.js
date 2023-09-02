function tabuada(num){

    const array = new Array()
    var result = 0
    
    for (let index = 1; index < 11; index++) {
        result = index*num

        array[index-1] = `${index} x ${num} = ${result}`
        
    }

    return {
        message: `resultado: ${array.join(", ")}`
    }
}

module.exports = {tabuada}