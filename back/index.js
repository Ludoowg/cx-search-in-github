const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')

const app = express()
const PORT = 3001



const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host: '127.0.0.1',
    user: 'user',
    database: 'github_users'
  }
})

knex.schema.createTableIfNotExists('github_users', function (table) {
  table.increments(); // integer id
  table.string('login');
  table.jsonb('details');
}).then(async () => { })

app.use(cors);
app.get('/users/:username', async (req, res) => {
  const username = req.params.username;

  const resultsFromDb /* tableau */ = await knex('github_users').where({
    login: username,
  }).select('*')

  if (resultsFromDb.length > 0) { /* Si l'utilisateur existe dans la base postgre*/
    const user = resultsFromDb[0];

    const userData = JSON.parse(user.details);

    userData.origin = 'database'

    res.status(200).send(userData);
  } else { /* S'il existe pas */
    const response = await fetch('https://api.github.com/users/' + username);

    const data = await response.json();
  
    await knex('github_users').insert({ login: username, details: JSON.stringify(data) })
  
    data.origin = 'github';
  
    res.status(200).send(data);
  }
})

app.delete('/users', async () => {
    console.log("testdelete");
});

app.listen(PORT, () => console.log('Server listening to localhost:' + PORT))