const path = require('path')
const chalk = require('chalk')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const passport = require('passport')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors');
require('dotenv/config')

// import routes
const authRoutes = require('./routes/v1/auth')
const userRoutes = require('./routes/v1/user')
const riderRoutes = require('./routes/v1/rider')
const agentRoutes = require('./routes/v1/agent')
const vehicleRoutes = require('./routes/v1/vehicle')
const pickupstoreRoutes = require('./routes/v1/pickupstore')

// define app 
const app = express()

// config port
const port = process.env.PORT || 8000

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
  });

  const conn = mongoose.connection;
  conn.on('error', console.error.bind(console, 'connection error:'))
  conn.once('open',() => {
      console.log(`${chalk.green('✓')} ${chalk.blue('connected to database!')}`)
  })

//  middlewares 
app.use(morgan('dev')); 
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(passport.initialize())

// routes middleware
app.use('/api/v1', authRoutes)
app.use('/api/v1', userRoutes)
app.use('/api/v1', riderRoutes)
app.use('/api/v1', agentRoutes)
app.use('/api/v1', vehicleRoutes)
app.use('/api/v1', pickupstoreRoutes)

// main route handler
app.get('/', (req, res) => {
    res.send('Welcome to Soko Janja Delivery System')
})

// listen to port 8000
app.listen(port, () => {
    console.log(`
    ${chalk.green('✓')} ${chalk.blue(
        `Connected on port  ${port}.` )}`)
}) 
