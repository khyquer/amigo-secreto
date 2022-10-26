import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaDeParticipanteState } from "../atom"

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaDeParticipanteState)
    
    const listaAtual = useRecoilValue(listaDeParticipanteState)

    const setErro = useSetRecoilState(erroState)

    return (nomeDoParticipante: string) => {

        const nomeDoParticipanteUPPERCASE = nomeDoParticipante.toUpperCase()

        const condition = listaAtual.includes(nomeDoParticipanteUPPERCASE)

        if(condition){
            setErro('Nome duplicados não são permitidos!')

            setTimeout(() => {
                setErro('')
            }, 5000)
            return
        }


        const condition2 = nomeDoParticipanteUPPERCASE.length === 1 ? true : false

        if(condition2){
            setErro('Nome muito curto!')

            setTimeout(() => {
                setErro('')
            }, 5000)
            return
        }

        return setLista(listaAtual => [...listaAtual, nomeDoParticipanteUPPERCASE])
    }
}