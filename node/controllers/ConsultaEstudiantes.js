import db from "../database/db.js";


export const getTablaNotas = async (req,res)=>{
    try {
        const email = await db.query(
        `SELECT n.id, a.nombre as asignatura,
        n.nota FROM notas n JOIN cursos c ON n.curso_id = c.id 
        JOIN asignaturas a ON c.asignatura_id = a.id JOIN estudiantes e 
        ON n.estudiante_id = e.id where e.email = "${req.params.email}";`)
        res.json(email[0]) 
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getInfoEstudiante = async(req,res)=>{
    try {
        const email = await db.query(
           `SELECT estudiantes.id, estudiantes.nombre_e, carreras.nombre
           FROM estudiantes
           JOIN carreras ON estudiantes.carrera_id = carreras.id
           JOIN emails ON estudiantes.email = emails.email
           WHERE emails.email = "${req.params.email}";`)
           res.json(email[0])
    } catch (error) {
        res.json({message: error.message})
    }
}