import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { WelcomePage } from "../pages/WelcomePage";
import { ConfirmPresence } from "../pages/ConfirmPresence";
import Historia from "../pages/Historia";

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/details" element={<WelcomePage/>}/>
            <Route path="/confirm" element={<ConfirmPresence/>}/>
            <Route path="/historia" element={<Historia/>}/>
        </Routes>
        </BrowserRouter>
    )
}