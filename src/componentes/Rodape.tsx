import { useRecoilValue } from "recoil"
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"

const Rodape = () => {
    
    const participantes = useListaDeParticipantes()

    const buttonIsDisabledWhen = participantes.length <= 2

    return (
        <footer>
            <button disabled={buttonIsDisabledWhen}>Iniciar Brincadeira</button>
        </footer>
    )
}

export default Rodape