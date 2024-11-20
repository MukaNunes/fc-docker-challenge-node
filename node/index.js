require('dotenv').config();

const express = require('express')
const mysql = require('mysql2/promise')


const app = express()
const port = 3000
const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database:process.env.DB_NAME
};

const peopleQuery = async function() {
    const connection = await mysql.createConnection(config);

    const sql = `INSERT INTO people(name) values('Samuel')`
    await connection.execute(sql)

    const sql_select = 'SELECT name FROM people;';
    const [rows, _] =  await connection.execute(sql_select);

    connection.end()

    return rows;
}

const peopleList = function(data) {
    const list = data.map(people => `<li>${people.name}</li>`);
    return `<url>${list.join("")}</ul>`;
}

app.get('/', async (req,res) => {
    const data = await peopleQuery();
    const list = peopleList(data);

    const response = `<h1>Full Cycle Rocks!</h1><br>${list}`;
    res.send(response);
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})