import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/UI/navbar/NavBar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";


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
