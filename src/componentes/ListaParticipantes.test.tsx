import { render, screen } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { useListaDeParticipantes } from '../state/hook/useListaDeParticipantes'
import ListaParticipantes from './ListaParticipantes'


jest.mock('../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

const prepararAmbienteDeTeste = () => {
    render(
        <RecoilRoot>
            <ListaParticipantes />
        </RecoilRoot>
    )
}

describe('uma lista vazia de participantes', () => {

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

	test('a lista de participantes deve começar vazia', () => {
		prepararAmbienteDeTeste()

		const itens = screen.queryAllByRole('listitem')

		expect(itens).toHaveLength(0)
	})
})


describe('uma lista com participantes', () => {

    const participantes = ['João', 'Maria']

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })

	test('a lista de participantes deve receber 2 participantes', () => {
		prepararAmbienteDeTeste()

		const itens = screen.queryAllByRole('listitem')

		expect(itens).toHaveLength(participantes.length)
	})
})
