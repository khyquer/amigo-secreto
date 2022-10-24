 const realizarSorteio = (participantes: string[]) => {
    const totalDeParticipantes = participantes.length

    const embaralhado = participantes.sort(item => Math.random() < 0.5 ? -1 : 1)

    const resultado = new Map<string, string>()

    for( let index = 0; index < totalDeParticipantes; index++){
        const indiceDoAmigo = index == (totalDeParticipantes - 1) ? 0 : index + 1

        resultado.set(embaralhado[index], embaralhado[indiceDoAmigo])
    }
    
    return resultado
}

export default realizarSorteio