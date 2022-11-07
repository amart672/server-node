/* eslint-disable no-template-curly-in-string */
import './helpers/dontenv'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import basicAuth from 'express-basic-auth'
import logger from './helpers/logger'
import router from './routes'
import { notFound, errorHandler } from './helpers/errors'

const port = Number(process.env.PORT, 10)
const app = express()
app.use(
  basicAuth({
    users: { [process.env.ADMIN_USER]: process.env.ADMIN_PASSWORD },
  }),
)
app.use(morgan(process.env.MORGAN_LOG))
app.use(cors({ origin: process.env.ORIGIN }))
app.use(helmet())
app.use(bodyParser.json())
app.use(router)
app.use(notFound)
app.use(errorHandler)

app.listen(port, () =>
  logger.info('Application started at http://localhost${PORT}'),
)
