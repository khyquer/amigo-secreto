import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaDeParticipanteState } from "../atom"

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaDeParticipanteState)
    
    const listaAtual = useRecoilValue(listaDeParticipanteState)

    const setErro = useSetRecoilState(erroState)

    return (nomeDoParticipante: string) => {

        const condition = listaAtual.includes(nomeDoParticipante)

        if(condition){
            setErro('Nome duplicados não são permitidos!')

            setTimeout(() => {
                setErro('')
            }, 5000)
            return
        }

        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}