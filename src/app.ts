import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import globalErrorHandler from './app/modules/user/middlewars/globarErrorHandlers'
import { generateFacultyId } from './app/modules/user/users.utlis'
import router from './app/routes'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Extend Class




app.use('/api/v1', router)
app.use(globalErrorHandler);
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'Not found',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'API Not Found'
            }
        ]

    });

})
generateFacultyId().then(data => console.log(data)).catch(err => console.log(err))

export default app