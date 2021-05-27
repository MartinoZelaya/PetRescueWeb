//IMPORTAR PG PARA ADMINISTRAR BASES DE DATOS
const { Pool } = require('pg');
//IMPORTAR EXPRESS
var express = require('express');
var app = express()

//CONFIGURAR LA BASE DE DATOS
const config = {
    host: 'localhost',
    user: 'postgres',
    password: 'kaxo8618',
    database: 'mascotas',
    port: 5432
}

//FUNCION ASYNC PARA HACER POST
app.post('/agregarmascotas',jsonParser, async (req, res) => {
    const {nombre,tipo,edad,descripcion,imagen} = req.body;
    const db = new Pool(config);
    console.log(req.body);
    let text = `INSERT INTO pet 
                (nombre,tipo,edad,descripcion,imagen) 
                VALUES 
                ('${nombre,tipo,edad,descripcion,imagen}');`
    const respuesta = await db.query(text)
        .then(response => {
            return response.rows;
        })
        .catch(e => console.error(e.stack))
        res.send(respuesta);
})
app.listen(4200);