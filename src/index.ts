import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import user from 'src/routes/user'
import achievements from 'src/routes/achievements'

dotenv.config()

const app = express()

const port = 8080

app.use(cors({ origin: '*' }))
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI).catch(error => {
  console.error('Error connecting to MongoDB:', error.message)
})

app.use('/', [user, achievements])

const start = async (): Promise<void> => {
  try {
    app.listen(port, () => console.log(`Server started on PORT = ${port}`))
  } catch (e) {
    console.log(e)
  }
}

start()
