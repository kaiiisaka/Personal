import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/UI/navbar/NavBar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./components/UI/footer/footer";
import React from "react";


function App() {
  return (
    <div className="AppContent">
        <div className='appContainer'>
            <BrowserRouter>
                <NavBar/>
                <AppRouter/>
            </BrowserRouter>
        </div>
            <hr style={{marginLeft: '80px', marginRight: '80px'}}/>
            <Footer/>
    </div>
  );
}

export default App;

