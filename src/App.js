import React from 'react'
import "./Styles/App.scss";
import "./Styles/header.scss";
import "./Styles/home.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Services from './Components/Services';
import "./Styles/mediaqueries.scss";





const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/services' element={<Services/>}></Route>
               
            </Routes>
            <Footer/>

        </BrowserRouter>
    )
}

export default App

