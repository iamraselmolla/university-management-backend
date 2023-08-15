import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import userRouter from './app/modules/user/users.route'
import userServices from "./app/modules/user/users.service"
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Testing
app.get('/', async (req: Request, res: Response) => {
  await userServices.createUser({
    id: '999',
    password: '1234',
    role: 'user'
  })
  res.send('Working Successfully')
})
app.use('/api/v1/users/', userRouter)

export default app