import { useListaDeParticipantes } from "./useListaDeParticipantes"

export const useSorteador = ( ) => {

    const participantes = useListaDeParticipantes()

    return () => {

        const totalDeParticipantes = participantes.length

        const embaralhado = participantes.sort(item => Math.random() < 0.5 ? -1 : 1)

        for

    }
}