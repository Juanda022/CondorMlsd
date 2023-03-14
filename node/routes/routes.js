import express from "express";
import { getTablaNotas } from "../controllers/ConsultaEstudiantes.js";
import { createEmail, deleteEmail, getAllEmail, getEmail, sendEmail1, updateEmail } from "../controllers/EmailController.js";
import { getAllEstudiante, getEstudiante } from "../controllers/EstudianteController.js";
import { confirmEmail, createUsuario, getAllUsuario, getUsuario, getUsuarioLogin, getUsuarioLoginCookies } from "../controllers/UsuarioController.js";
import email from "../models/EmailModel.js";

const router = express.Router()

//Login
router.post('/login',getUsuarioLogin)
router.get('/loginCook',getUsuarioLoginCookies)
router.get('/loginI/:id',getUsuario)
router.post('/creaUsua',createUsuario)
router.get('/allUsu',getAllUsuario)

//Prueba consulta
router.get('/tabla/:email',getTablaNotas)



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

export default router