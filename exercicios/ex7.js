function trans_km(quilometro){
    const metro = parseFloat(quilometro*1000)
    const cent = parseFloat(quilometro*100000)

    return `em metros: ${metro}, em centimetros: ${cent}`
}

module.exports = { trans_km }