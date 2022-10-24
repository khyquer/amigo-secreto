import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { useListaDeParticipantes } from '../state/hook/useListaDeParticipantes'
import Sorteio from './Sorteio'


jest.mock('../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('A página de sorteio', () => {
	const prepararAmbienteDeTeste = () => {
		return render(
			<RecoilRoot>
				<Sorteio />
			</RecoilRoot>
		)
	}

    const participantes = ['João', 'Maria', 'José']

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })


	test('todos os participantes podem exibir o seu amigo secreto', () => {
		prepararAmbienteDeTeste()

		const opcoes = screen.queryAllByRole('option')

        expect(opcoes).toHaveLength(participantes.length)
	})
})
