import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/modules/user/middlewars/globarErrorHandlers'
import userRouter from './app/modules/user/users.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Extend Class




//Testing
// app.get('/', async (req: Request, res: Response) => {
 
//   throw new ApiError(400, 'Generic Error,')
// })

app.use(globalErrorHandler)

app.use('/api/v1/users/', userRouter)

export default app