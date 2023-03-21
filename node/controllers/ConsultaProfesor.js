import db from "../database/db.js";


export const getTablaCursos = async (req,res)=>{
    try {
        const email = await db.query(
        `SELECT cursos.id,cursos.nombre as nombre_curso
        FROM cursos
        JOIN profesors ON cursos.profesor_id = profesors.id
        JOIN emails ON profesors.email = emails.email
        WHERE emails.email = "${req.params.email}";`)
        res.json(email[0]) 
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getTablaNotasC = async (req,res)=>{
    try {
        const email = await db.query(
        `SELECT notas.id, asignaturas.nombre AS asignatura, estudiantes.nombre_e AS estudiante, notas.nota
        FROM notas
        JOIN cursos ON notas.curso_id = cursos.id
        JOIN profesors ON cursos.profesor_id = profesors.id
        JOIN asignaturas ON cursos.asignatura_id = asignaturas.id
        JOIN estudiantes ON notas.estudiante_id = estudiantes.id
        WHERE profesors.email = "${req.params.email}" and cursos.id = ${req.params.id};`)
        res.json(email[0]) 
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getTablaCrearNotas = async (req,res) =>{
    try{
        const email = await db.query(`SELECT e.id, e.nombre_e, e.email
        FROM estudiantes e
        LEFT JOIN inscripciones i ON e.id = i.estudiante_id
        LEFT JOIN cursos c ON i.curso_id = c.id
        LEFT JOIN profesors p ON c.profesor_id = p.id
        LEFT JOIN notas n ON e.id = n.estudiante_id AND c.id = n.curso_id
        WHERE p.email = '${req.params.email}'
        AND n.nota IS NULL and c.id = ${req.params.id};`)
        res.json(email[0])
    } catch (error){
        res.json({message: error.message})
    }
}