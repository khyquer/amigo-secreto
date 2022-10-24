import { render, screen } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import Rodape from './Rodape'


const prepararAmbienteDeTeste = () => {
    render(
        <RecoilRoot>
            <Rodape />
        </RecoilRoot>
    )
}

describe('quando não existe participantes suficientes', () => {
    test('a brincadeira não pode ser iniciada', () => {
        prepararAmbienteDeTeste()

        const botao = screen.getByRole('button')

        expect(botao).toBeDisabled()
    })
})

describe('quando existem participantes suficientes', () => {
    test('a brincadeira pode ser iniciada', () => {
        prepararAmbienteDeTeste()

        const botao = screen.getByRole('button')

        expect(botao).toBeDisabled()
    })
})