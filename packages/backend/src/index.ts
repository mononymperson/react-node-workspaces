import cors from 'cors'
import express from 'express'

import { HelloWorld } from './routers/hello-world'

require('dotenv').config()

const app = express()

const router = express.Router()

app.use(cors())

app.use('/hello-world', HelloWorld(router))

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`)
})
