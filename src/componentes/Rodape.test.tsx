import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import Rodape from './Rodape'
import { useListaDeParticipantes } from '../state/hook/useListaDeParticipantes'
import ListaParticipantes from './ListaParticipantes'


jest.mock('../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

const prepararAmbienteDeTeste = () => {
    render(
        <RecoilRoot>
            <Rodape />
        </RecoilRoot>
    )
}

describe('quando não existe participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

    test('a brincadeira não pode ser iniciada', () => {
        prepararAmbienteDeTeste()

        const botao = screen.getByRole('button')

        expect(botao).toBeDisabled()
    })
})

describe('quando existem participantes suficientes', () => {
    const participantes = ['João', 'Maria', 'Ricardo']

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('a brincadeira pode ser iniciada', () => {
        prepararAmbienteDeTeste()

        const botao = screen.getByRole('button')

        expect(botao).not.toBeDisabled()
    })

    test('a brincadeira foi iniciada', () => {
        prepararAmbienteDeTeste()

        const botao = screen.getByRole('button')

        expect(botao).not.toBeDisabled()

        fireEvent.click(botao)

        expect(mockNavegacao).toHaveBeenCalled()
    })
})