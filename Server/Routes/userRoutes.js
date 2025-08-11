import express from 'express'
import handler from '../controllers/Usercontroller.js'

const userRouter = express.Router()

userRouter.post('/webhooks',handler)

export default userRouter