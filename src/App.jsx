import './App.css'
import {Routes, Route} from 'react-router-dom'


import MainPage from "./components/MainPage.jsx";
import Layout from "./components/Layout.jsx";
import CartPage from "./components/CartPage.jsx";

function App() {


    return(
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<MainPage/>}/>
                    <Route path='cart' element={<CartPage />}/>
                    <Route path='*' element={<h1>не найдено</h1>}/>
                </Route>
            </Routes>
        </>
    )

}

export default App
