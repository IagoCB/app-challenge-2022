import React from "react";
import { Routes ,Route } from "react-router-dom";

import Home from "../pages/Home"
import Login from '../pages/Login';
import CreateUser from '../pages/CreateUser';
import Plans from "../pages/Plans"
import Usuario from "../pages/Usuario"
import Installers from "../pages/Instaladores"
import Erro from "../pages/Erro"

export default function Routers(){
    return(       
        <Routes>
            <Route exact path="/" element={<Login />}/>
            <Route exact path="/create" element={<CreateUser />} />
            <Route exact path="/home" element={<Home />} />            
            <Route exact path="/plans" element={<Plans />}/>
            <Route exact path="/user" element={<Usuario />} />            
            <Route exact path="/installers" element={<Installers />} />
            <Route exact path="*" element={<Erro />}/>
        </Routes>       
    )
}