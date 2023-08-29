import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import loggerAction from './share/logger'

async function boostrap() {
  try {
    
    await mongoose.connect(config.database_url as string)
    loggerAction.logger.info(`🛢   Database is connected successfully`)

    app.listen(config.port, () => {
      loggerAction.logger.info(`Application  listening on port ${config.port}`)
    })
  } catch (err) {
    loggerAction.Errorlogger.error('Failed to connect database', err)
  }
}

boostrap()