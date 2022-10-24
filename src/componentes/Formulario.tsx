import { useState, useRef } from 'react'
import { useAdicionarParticipante } from '../state/hook/useAdicionarParticipante'
import { useMensagemDeErro } from '../state/hook/useMensagemDeErro'

import './Formulario.css'

const Formuario = () => {
	const [nome, setNome] = useState('')

	const inputRef = useRef<HTMLInputElement>(null)

	const adicionarParticipante = (
		evento: React.FormEvent<HTMLFormElement>
	) => {
		evento.preventDefault()

		adicionarNaLista(nome)
		setNome('')
		inputRef.current?.focus()
	}

	const adicionarNaLista = useAdicionarParticipante()

	const mensagemDeErro = useMensagemDeErro()

	return (
		<form onSubmit={adicionarParticipante}>
			<div className='grupo-input-btn'>
				<input
					ref={inputRef}
					type='text'
					value={nome}
					onChange={(evento) => setNome(evento.target.value)}
					placeholder='Insira os nomes dos participantes'
				/>

				<button disabled={!nome}>Adicionar</button>
			</div>

			{mensagemDeErro && <p className="alerta erro" role='alert'>{mensagemDeErro}</p>}
		</form>
	)
}

export default Formuario
