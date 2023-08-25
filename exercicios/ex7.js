export function trans_km(quilometro){
    const metro = parseFloat(quilometro*1000)
    const cent = parseFloat(quilometro*1000000)

    return `em metros: ${metro}, em centimetros: ${cent}`
}