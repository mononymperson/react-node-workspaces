import cors from 'cors'
import express from 'express'

import { SongRouter } from './routers/hello-world'

require('dotenv').config()

const app = express()

const router = express.Router()

app.use(cors())

app.use('/hello-world', SongRouter(router))

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`)
})
