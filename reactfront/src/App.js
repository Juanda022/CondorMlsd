//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link, BrowserRouter, Navigate}from "react-router-dom";
import {Login} from "./Login/login";
import {Register} from "./Login/registration";
import {Verify} from "./Login/validation";
import { Notas } from './Estudiante/notas';
import { Cursos } from './Profesor/cursos';
import {Saludo} from './components/saludo';
import NavBarExample from './layouts/navbarEs';
import NavBarProfe from './layouts/navbarPro';
import { NotaCrs } from './Profesor/notasCrs';
import { UpdateNota } from './Profesor/editarNota';


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
          <Route path='/'element={<Login/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/verify' element ={<Verify/>}/>


          <Route path='/estu' element={<NavBarExample/>}>
            <Route index element = {<Saludo/>}/>
            <Route path='/estu/notas' element={<Notas/>}/>
            <Route path='*' element={<Navigate replace to={"/estu"}/>}/>
          </Route>

          <Route path='/prof' element={<NavBarProfe/>}>
            <Route index element = {<Saludo/>}/>
            <Route path='/prof/cursos' element={<Cursos/>}/>
            <Route path='/prof/notas' element={<NotaCrs/>}/>
            <Route path='/prof/nota' element={<UpdateNota/>}/>
            <Route path='*' element={<Navigate replace to={"/prof"}/>}/>
          </Route>


      </Routes>
      </BrowserRouter>
    </div>

    
  );
}

export default App;
