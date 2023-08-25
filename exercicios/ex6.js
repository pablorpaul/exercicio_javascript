export function trans_tempo(segundo){
    const minuto = parseInt((segundo/60)%60)
    const hora = parseInt((segundo/60)/60)
    const sobra_seg = parseInt(segundo%60)
    const resultado = `duração ${hora} h, ${minuto} m, ${sobra_seg} s `

    return resultado;
}