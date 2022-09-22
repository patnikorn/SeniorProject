import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'

import constants from './configs/constants'
import responseCode from './configs/responseCode'

import route from './routes'

const appname = constants.APP_NAME
const port = constants.PORT

const app = express()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('connection to db established'))

app.use(logger('combined'))
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.use(route)


app.use((req, res) => {
    return res.status(responseCode.ERROR_NOT_FOUND).send({
        code: responseCode.ERROR_NOT_FOUND,
        message: 'Route' + req.url + ' Not found.'
    })
})


app.listen(port, () => console.log(`${appname} app listening on port ${port}!`))