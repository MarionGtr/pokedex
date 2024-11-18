import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar'
import HomePage from './Pages/HomePage'
import TypePage from './Pages/typePage'
import './App.css'

function App() {

    return <>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true, }}>
            <NavBar />
                <Routes>
                    <Route path='/' element={<HomePage></HomePage>}></Route>
                    <Route path='/TypePage' element={<TypePage></TypePage>}></Route>
                </Routes>
        </BrowserRouter>

    </>
}

export default App