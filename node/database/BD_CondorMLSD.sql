CREATE DATABASE IF NOT EXISTS `CondorMLSD` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
use CondorMLSD;

CREATE TABLE emails (
  email VARCHAR(50) PRIMARY KEY,
  createdAt date default '0000-00-00',
  updatedAt date default '0000-00-00'
);

CREATE TABLE sedes (
  id INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  createdAt date default '0000-00-00',
  updatedAt date default '0000-00-00'
);

CREATE TABLE semestres (
  id INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL,
  createdAt date default '0000-00-00',
  updatedAt date default '0000-00-00'
);

CREATE TABLE carreras (
  id INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  codigo VARCHAR(20) UNIQUE NOT NULL,
  createdAt date default '0000-00-00',
  updatedAt date default '0000-00-00'
);

CREATE TABLE profesors (
  id INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  telefono VARCHAR(20) NOT NULL,
  titulo VARCHAR(50) NOT NULL,
  createdAt date default '0000-00-00',
  updatedAt date default '0000-00-00'
);

CREATE TABLE estudiantes (
  id INT PRIMARY KEY,
  nombre_e VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  telefono VARCHAR(20) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  carrera_id INT NOT NULL,
  createdAt date default '0000-00-00',
  updatedAt date default '0000-00-00',
  FOREIGN KEY (carrera_id) REFERENCES carreras(id),
  FOREIGN KEY (email) REFERENCES emails(email)
);

CREATE TABLE usuarios(
	id INT PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(500) NOT NULL,
    role VARCHAR(10) default "user",
    estado bool default false,
    createdAt date default '0000-00-00',
	updatedAt date default '0000-00-00',
	FOREIGN KEY (email) REFERENCES emails(email)
);

CREATE TABLE asignaturas (
  id INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  codigo VARCHAR(20) UNIQUE NOT NULL,
  creditos INT NOT NULL,
  carrera_id INT NOT NULL,
  sede_id INT NOT NULL,
  createdAt date default '0000-00-00',
  updatedAt date default '0000-00-00',
  FOREIGN KEY (carrera_id) REFERENCES carreras(id),
  FOREIGN KEY (sede_id) REFERENCES sedes(id)
);

CREATE TABLE cursos (
  id INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  profesor_id INT NOT NULL,
  asignatura_id INT NOT NULL,
  semestre_id INT NOT NULL,
  sede_id INT NOT NULL,
  createdAt date default '0000-00-00',
  updatedAt date default '0000-00-00',
  FOREIGN KEY (profesor_id) REFERENCES profesors(id),
  FOREIGN KEY (asignatura_id) REFERENCES asignaturas(id),
  FOREIGN KEY (semestre_id) REFERENCES semestres(id),
  FOREIGN KEY (sede_id) REFERENCES sedes(id)
);

CREATE TABLE inscripciones (
id INT AUTO_INCREMENT PRIMARY KEY,
estudiante_id INT NOT NULL,
curso_id INT NOT NULL,
createdAt date default '0000-00-00',
updatedAt date default '0000-00-00',
FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id),
FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

CREATE TABLE notas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  estudiante_id INT NOT NULL,
  curso_id INT NOT NULL,
  nota FLOAT NOT NULL,
  createdAt date default '0000-00-00',
  updatedAt date default '0000-00-00',
  FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id),
  FOREIGN KEY (curso_id) REFERENCES cursos(id)
);
	
-- Datos de prueba

INSERT INTO emails (email) VALUES
('estudiante1@universidad.com'),
('estudiante2@universidad.com'),
('profesor1@universidad.com'),
('profesor2@universidad.com');

INSERT INTO sedes (id, nombre, direccion) VALUES
(1, 'Sede principal', 'Calle 10 #20-30'),
(2, 'Sede secundaria', 'Carrera 5 #15-25');

INSERT INTO semestres (id, nombre, fecha_inicio, fecha_fin) VALUES
(1, 'Primer semestre', '2023-01-10', '2023-05-20'),
(2, 'Segundo semestre', '2023-06-10', '2023-10-20');

INSERT INTO carreras (id, nombre, codigo) VALUES
(1, 'Ingeniería de Sistemas', 'IS001'),
(2, 'Administración de Empresas', 'AE001');

INSERT INTO profesors (id, nombre, email, telefono, titulo) VALUES
(1, 'Juan Perez', 'profesor1@universidad.com', '1234567', 'Doctorado en Ingeniería'),
(2, 'Maria Gomez', 'profesor2@universidad.com', '7654321', 'Maestría en Administración');

INSERT INTO estudiantes (id, nombre_e, email, telefono, direccion, fecha_nacimiento, carrera_id) VALUES
(1, 'Luisa Rodriguez', 'estudiante1@universidad.com', '1111111', 'Calle 15 #30-40', '2002-03-15', 1),
(2, 'Andres Gomez', 'estudiante2@universidad.com', '2222222', 'Carrera 20 #25-30', '2001-01-20', 2);

INSERT INTO usuarios (id, email, password) VALUES
(1, 'estudiante1@universidad.com', '$2b$10$.COHznhUqaTwyi7OAix1ou.uD6XSznTTz9dNx2kOO1g9Xuv1KU2y2'),
(2, 'estudiante2@universidad.com', '$2b$10$.COHznhUqaTwyi7OAix1ou.uD6XSznTTz9dNx2kOO1g9Xuv1KU2y2');

INSERT INTO asignaturas (id, nombre, codigo, creditos, carrera_id) VALUES
(1, 'Programación I', 'PRG001', 3, 1),
(2, 'Administración Financiera', 'AF001', 4, 2);

INSERT INTO cursos (id, nombre, profesor_id, asignatura_id, semestre_id, sede_id) VALUES
(1, 'Programación I - Grupo 1', 1, 1, 1, 1),
(2, 'Administración Financiera - Grupo 2', 2, 2, 2, 2),
(3, 'Programación I - Grupo 2', 1, 1, 1, 1);

INSERT INTO inscripciones (estudiante_id, curso_id) VALUES
(1, 1),
(2, 2),
(2, 1);

insert into inscripciones (id, estudiante_id, curso_id) VALUES (4,10255,1);

INSERT INTO notas (estudiante_id, curso_id, nota) VALUES
(1, 1, 4.5),
(2, 2, 3.8),
(1, 2, 4.8),
(2, 1, 3.0);

SELECT cursos.nombre AS curso_nombre, estudiantes.nombre_e AS estudiante_nombre
FROM (
  SELECT *
  FROM cursos
  WHERE cursos.profesor_id = (
    SELECT id
    FROM profesors
    WHERE email = 'profesor2@universidad.com'
  )
) AS cursos
JOIN inscripciones ON cursos.id = inscripciones.curso_id
JOIN estudiantes ON inscripciones.estudiante_id = estudiantes.id;

delete from notas where id = 4; 
delete from inscripciones where id = 5; 

select * from emails;
select * from estudiantes;
select * from usuarios;
select * from asignaturas;
select * from notas;
select * from cursos;
select * from carreras;
select * from profesors;
select * from inscripciones;

/*Inscritos a un curso*/
SELECT estudiantes.nombre_e, cursos.nombre
FROM estudiantes
JOIN inscripciones ON estudiantes.id = inscripciones.estudiante_id
JOIN cursos ON cursos.id = inscripciones.curso_id
WHERE cursos.nombre = 'Programación I - Grupo 1';

/*Estudiantes sin nota*/
SELECT e.id, e.nombre_e, e.email
FROM estudiantes e
LEFT JOIN inscripciones i ON e.id = i.estudiante_id
LEFT JOIN cursos c ON i.curso_id = c.id
LEFT JOIN profesors p ON c.profesor_id = p.id
LEFT JOIN notas n ON e.id = n.estudiante_id AND c.id = n.curso_id
WHERE p.email = 'profesor1@universidad.com'
AND n.nota IS NULL and c.id = 1;

/*Notas Estudiante*/
SELECT n.id, a.nombre as asignatura, n.nota 
FROM notas n 
JOIN cursos c ON n.curso_id = c.id 
JOIN asignaturas a ON c.asignatura_id = a.id 
JOIN estudiantes e ON n.estudiante_id = e.id where e.email = "estudiante1@universidad.com";

/*Datos usuario*/
SELECT estudiantes.id, estudiantes.nombre_e, carreras.nombre
FROM estudiantes
JOIN carreras ON estudiantes.carrera_id = carreras.id
JOIN emails ON estudiantes.email = emails.email
WHERE emails.email = 'estudiante1@universidad.com';

-- Consulta Profesor
/*Editar las notas*/
SELECT notas.id, asignaturas.nombre AS asignatura, estudiantes.nombre_e AS estudiante, notas.nota
FROM notas
JOIN cursos ON notas.curso_id = cursos.id
JOIN profesors ON cursos.profesor_id = profesors.id
JOIN asignaturas ON cursos.asignatura_id = asignaturas.id
JOIN estudiantes ON notas.estudiante_id = estudiantes.id
WHERE profesors.email = 'profesor1@universidad.com' and cursos.id = 3;

/*Cursos asignados*/
SELECT cursos.id,cursos.nombre as nombre_curso
FROM cursos
JOIN profesors ON cursos.profesor_id = profesors.id
JOIN emails ON profesors.email = emails.email
WHERE emails.email = 'profesor1@universidad.com';

/*Cursos Disponibles*/
SELECT asignaturas.nombre, asignaturas.codigo, asignaturas.creditos 
FROM asignaturas 
JOIN carreras ON asignaturas.carrera_id = carreras.id 
WHERE carreras.id = 1;

/**/
SELECT cursos.nombre, cursos.id 
FROM cursos 
WHERE cursos.id NOT IN (
    SELECT inscripciones.curso_id 
    FROM inscripciones 
    WHERE inscripciones.estudiante_id = 10255
);

SELECT * FROM cursos WHERE asignatura_id = 1;

/*Asignaturas que no ha inscrito*/
	SELECT asignaturas.nombre, asignaturas.id 
	FROM asignaturas 
	WHERE asignaturas.id NOT IN (
		SELECT cursos.asignatura_id 
		FROM inscripciones 
		INNER JOIN cursos ON cursos.id = inscripciones.curso_id 
		WHERE inscripciones.estudiante_id = 10255
	);

delete from usuarios where id = 4;
delete from estudiantes where id = 10255;
delete from emails where email = "robayotorres05@gmail.com";

INSERT INTO usuarios (id, email, password,role,estado) VALUES
(3, 'profesor1@universidad.com', '$2b$10$.COHznhUqaTwyi7OAix1ou.uD6XSznTTz9dNx2kOO1g9Xuv1KU2y2','admin',true);
update usuarios set estado = true where id= 1;
update usuarios set role = "admin" where id= 2;



