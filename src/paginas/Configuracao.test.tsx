import { render } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import Configuracao from './Configuracao'

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('A página de configuração', () => {
	const prepararAmbienteDeTeste = () => {
		return render(
			<RecoilRoot>
				<Configuracao />
			</RecoilRoot>
		)
	}

	test('deve ser renderizada corretamente', () => {
		const {container} = prepararAmbienteDeTeste()

		expect(container).toMatchSnapshot()
	})
})
