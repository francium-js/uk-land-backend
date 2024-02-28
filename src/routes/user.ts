import { Router } from 'express'

import UserController from 'src/controllers/User'
import { RoutesPath } from 'src/routes/types'

const router = Router()

//✔️ ❌

router.get(RoutesPath.USER, UserController.getAll) //✔️

export default router
