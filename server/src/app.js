const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const PORT = 8081

// Require db config
const db = require('./config/db_config')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// check connection
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  // db.sync({force: true})

// require Routes
require('./routes')(app)

app.listen(process.env.PORT || PORT, () => console.log(`Server running on port ${PORT} ...`))