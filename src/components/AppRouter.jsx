import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Home from "../pages/home";
import Projects from "../pages/projects";
import About from "../pages/about";
import Snake from "../pages/snake";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />}/>
            <Route path="/projects/snake" element={<Snake />}/>
            <Route path="/about" element={<About />}/>
            <Route
                path="*"
                element={<Navigate to = "/home" replace />}
            />
        </Routes>
    );
};

export default AppRouter;