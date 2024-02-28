import { Router } from 'express'

import AchievementsController from 'src/controllers/achievements'
import { RoutesPath } from 'src/routes/types'

const router = Router()

//✔️ ❌

router.get(RoutesPath.ACHIEVEMENT, AchievementsController.findOne) //✔️

export default router
