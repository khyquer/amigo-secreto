import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Formuario from './componentes/Formulario'

function App() {
	return (
		<BrowserRouter>
			<RecoilRoot>
				<Routes>
					<Route path='/' element={Formuario} />
				</Routes>
			</RecoilRoot>
		</BrowserRouter>
	)
}

export default App
