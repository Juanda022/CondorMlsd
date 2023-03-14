//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link}from "react-router-dom";
import {Login} from "./Login/login";
import {Register} from "./Login/registration";
import {Verify} from "./Login/validation";
import { Notas } from './Estudiante/notas';
import { VistaProf } from './Profesor/profes';

function App() {
  <Link to = "/verify"> Register </Link>

  return (
    <div className="App">
      <Router>
        <Link to = "/login"> Login </Link>
        <h1></h1>
        <Link to = "/register"> Register </Link>

        <Routes>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/verify' element ={<Verify/>}/>
          <Route path='/notas' element={<Notas/>}/>
          <Route path='/profes' element={<VistaProf/>}/>
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
