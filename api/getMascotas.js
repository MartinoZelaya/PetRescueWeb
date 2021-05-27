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

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//FUNCION ASYNC PARA HACER LAS REQUEST
app.get('/listarmascotas', async function (req, res) {

    const db = new Pool(config);
    let text = `SELECT * FROM pet`;
    const respuesta = await db.query(text)
        .then(response => {
            console.log(response.rows)
            return response.rows;
        })
        .catch(e => console.error(e.stack))
        res.send(respuesta);
})

app.listen(8080);


