import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import MainPage from "./pages/MainPage";
import ReservePage from "./pages/ReservePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index={true} path='/main' element={<MainPage/>}/>
                <Route path='/reservation' element={<ReservePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
