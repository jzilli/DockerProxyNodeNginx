const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'people'
  })
  
app.get('/', (req, res) => {
    const name = 'Júnior Zilli'; 
    const insertSql = `INSERT INTO people (name) VALUES ('${name}')`
  
    connection.query(insertSql, (err, result) => {
      if (err) throw err
  
      connection.query('SELECT * FROM people', (err, rows) => {
        if (err) throw err
  
        const names = rows.map(row => `<span class="name">${row.name}</span>`).join('<br>');
        const message = '<h1>Full Cycle Rocks!</h1>'
  
        const style = '<style>.name { font-weight: bold; font-size: 24px; }</style>';
        res.send(message + style + names)

      })
    })
  })
  
app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})