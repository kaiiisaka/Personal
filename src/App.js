import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import NavBar from "./components/NavBar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import home from "./pages/home";
import about from "./pages/about";
import projects from "./pages/projects";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    </div>
  );
}

export default App;
