import express from "express";
import { getInfoEstudiante, getTablaNotas } from "../controllers/ConsultaEstudiantes.js";
import { getTablaCursos, getTablaNotasC } from "../controllers/ConsultaProfesor.js";
import { createEmail, deleteEmail, getAllEmail, getEmail, sendEmail1, updateEmail } from "../controllers/EmailController.js";
import { createEstudiante, getAllEstudiante, getEstudiante } from "../controllers/EstudianteController.js";
import { updateNota } from "../controllers/NotaController.js";
import { confirmEmail, createUsuario, getAllUsuario, getUsuario, getUsuarioLogin, getUsuarioLoginCookies } from "../controllers/UsuarioController.js";

const router = express.Router()

//Login
router.post('/login',getUsuarioLogin)
router.get('/loginCook',getUsuarioLoginCookies)
router.get('/loginI/:id',getUsuario)
router.post('/creaUsua',createUsuario)
router.get('/allUsu',getAllUsuario)

//Consulta vista estudiante
router.get('/tabla/:email',getTablaNotas)
router.get('/DataUser/:email',getInfoEstudiante)


//Consulta vista Profesor
router.get('/cursos/:email',getTablaCursos)
router.get('/Notas/:email/:id',getTablaNotasC)

//Modificar notas
router.put('/UpNota/:id',updateNota)

router.get('/getUsu/:id',getUsuario)

//Email
router.get('/allEmail',getAllEmail)
router.get('/email/:email',getEmail)
router.post('/creaEmail',createEmail)
router.put('/:id',updateEmail)
router.delete('/:email',deleteEmail)

router.put('/sendEmail/:email',sendEmail1)
router.put('/verify/:id',confirmEmail)

//Estudiante
router.get('/allEstudi',getAllEstudiante)
router.get('/Estudi/:id',getEstudiante)
router.post('/creaEstudi',createEstudiante)
//router.get('/setCookie', app.use)

export default router