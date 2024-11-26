import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar'
import HomePage from './Pages/HomePage'
import TypePage from './Pages/TypePage'
import PokemonDetailsPage from './Pages/PokemonDetailsPage'
import GenerationPage from './Pages/GenerationPage'
import VersionPage from './Pages/VersionPage'

import './App.css'


function App() {

    return <>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true, }}>
            <NavBar />
                <Routes>
                    <Route path='/' element={<HomePage></HomePage>}></Route>
                    <Route path='/pokemon/:id' element={<PokemonDetailsPage></PokemonDetailsPage>}></Route>
                    <Route path='/type/:type' element={<TypePage></TypePage>}></Route>
                    <Route path='/gen/:gen' element={<GenerationPage></GenerationPage>}></Route>
                    <Route path='/version/:version' element={<VersionPage></VersionPage>}></Route>
                </Routes>
        </BrowserRouter>

    </>
}

export default App