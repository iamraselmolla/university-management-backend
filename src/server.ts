import { Server } from "http"
import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import loggerAction from './share/logger'

let server: Server;
async function boostrap() {

  try {

    await mongoose.connect(config.database_url as string)
    loggerAction.logger.info(`🛢   Database is connected successfully`)

    server = app.listen(config.port, () => {
      loggerAction.logger.info(`Application  listening on port ${config.port}`)
    })
  } catch (err) {
    loggerAction.Errorlogger.error('Failed to connect database', err)
  }
}
process.on("unhandledRejection", (error) => {
  console.log("Unhandle Error hoiche")
  if (server) {
    server.close(() => {
      loggerAction.Errorlogger.error(error);
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
})

boostrap()