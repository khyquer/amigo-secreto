import React from 'react'
import { render } from 'react-dom'
import { RecoilRoot } from 'recoil'
import ListaParticipantes from './ListaParticipantes'

describe('uma lista vazia de participantes', () => {
	const prepararAmbienteDeTeste = () => {
		render(
			<RecoilRoot>
				<ListaParticipantes />
			</RecoilRoot>
		)
	}

	test('a lista de participantes deve começar vazia', () => {
		prepararAmbienteDeTeste()

		const itens = screen.queryAllByRole('listitem')

		expect(itens).toHaveLength(0)
	})
})
