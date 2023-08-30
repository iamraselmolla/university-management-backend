import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './app/modules/user/middlewars/globarErrorHandlers'
import userRouter from './app/modules/user/users.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Extend Class




//Testing
app.get('/',  (req: Request, res: Response) => {

    Promise.reject(new Error('Ami ki korbo'))
})


app.use('/api/v1/users/', userRouter)
app.use(globalErrorHandler)

export default app