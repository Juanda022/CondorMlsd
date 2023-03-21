import express from "express";
import cors from 'cors';
import db from "./database/db.js"
import Routes from './routes/routes.js'

//Sesiones
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express()

app.use( cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true
}))
app.use(express.json())

//Manejo de cookies
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))

app.use(session({
    key: "userId",
    secret: "prueba",
    resave:false,
    saveUninitialized: false,
    cookie:{
        expires: 900000,
    },
}));

app.get('/setcookie',(req,res) => {
    res.cookie('my cookie name','my cookie',{
        maxAge:10000,
        httpOnly: true,
        secure: true,
        sameSite: 'lax'
    })
    res.send("Hola")
})


app.get('/getcookies',(req,res)=>{
    console.log(req.cookies)
    res.send('leyendo cookies')
})


app.use('/Route',Routes)


try {
    await db.authenticate()
    console.log("Conexion existosa")
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}

app.listen(3001, () => {
    console.log('Server UP running in http://localhost:3001/')
})
