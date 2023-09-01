function tabuada(num){

    const array = new Array(10)
    var result = 0
    
    for (let index = 1; index < 11; index++) {
        result = index*num

        array[index] = `${index} * ${num} = ${result}`
        
    }
    

    return {
        message: array.forEach(function (item)) {
            message: (item)
        }
    }
}

module.exports = {tabuada}