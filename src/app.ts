import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import globalErrorHandler from './app/modules/user/middlewars/globarErrorHandlers'
import userRouter from './app/modules/user/users.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Extend Class




//Testing
app.get('/', async (req: Request, res: Response, next: NextFunction) => {

    throw new Error("Error dichi kintu ekta")
})


app.use('/api/v1/users/', userRouter)
app.use(globalErrorHandler)

export default app