import { act, fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Formuario from './Formulario'

describe('o comportamento do formulário.tsx', () => {
	const prepararAmbienteDeTeste = () => {
		render(
			<RecoilRoot>
				<Formuario />
			</RecoilRoot>
		)

		const input = screen.getByPlaceholderText(
			'Insira os nomes dos participantes'
		)
		const botao = screen.getByRole('button')

		return [input, botao]
	}

	test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
		const [input, botao] = prepararAmbienteDeTeste()

		expect(input).toBeInTheDocument()
		expect(botao).toBeDisabled()
	})

	test('adicionar um participante caso exista um nome preenchido', () => {
		const [input, botao] = prepararAmbienteDeTeste()

		fireEvent.change(input, {
			target: {
				value: 'Ana Catarina',
			},
		})

		fireEvent.click(botao)

		expect(input).toHaveFocus()

		expect(input).toHaveValue('')
	})

	test('lista não pode receber nome repetido', () => {
		const [input, botao] = prepararAmbienteDeTeste()

		fireEvent.change(input, {
			target: {
				value: 'Ana Catarina',
			},
		})

		fireEvent.click(botao)

		fireEvent.change(input, {
			target: {
				value: 'Ana Catarina',
			},
		})

		fireEvent.click(botao)

		expect(input).toHaveFocus()

		expect(input).toHaveValue('')

		const mensagemDeErro = screen.getByRole('alert')

		expect(mensagemDeErro.textContent).toBe(
			'Nome duplicados não são permitidos!'
		)
	})

	test('testar se a mensagem de erro some após 3 segundos', () => {
		jest.useFakeTimers()

		const [input, botao] = prepararAmbienteDeTeste()

		fireEvent.change(input, {
			target: {
				value: 'Ana Catarina',
			},
		})

		fireEvent.click(botao)

		fireEvent.change(input, {
			target: {
				value: 'Ana Catarina',
			},
		})

		fireEvent.click(botao)

		expect(input).toHaveFocus()

		expect(input).toHaveValue('')

		let mensagemDeErro = screen.queryByRole('alert')

		expect(mensagemDeErro).toBeInTheDocument()

		act(() => {
			jest.runAllTimers()
		})

		mensagemDeErro = screen.queryByRole('alert')

		expect(mensagemDeErro).toBeNull()
	})
})
