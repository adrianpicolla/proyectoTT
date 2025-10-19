import { useState } from 'react'
// import RandomUser from './components/RandomUser'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Infaltables from "./components/Infaltables";

import Home from "./components/Home";
import Clientes from "./components/Clientes";
import Productos from "./components/Productos";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import Ofertas from "./components/Ofertas";
import Materiales from "./components/materiales";
import Login from "./components/Login";
import './App.css';


function App() {

  return (
        <Router>
          <Header/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/administracion" element={<Productos/>} />
              <Route path="/productos" element={<Productos/>} />
              <Route path="/servicios" element={<Servicios/>} />
              <Route path="/contacto" element={<Contacto/>} />
              <Route path="/ofertas" element={<Ofertas/>} />
              <Route path="/materiales" element={<Materiales/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/infaltables" element={<Infaltables/>} />
            </Routes>
          <Footer/>          
        </Router>
  )
}

export default App;