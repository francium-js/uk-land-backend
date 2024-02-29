import { Router } from 'express'

import AchievementsController from 'src/controllers/achievements'
import { RoutesPath } from 'src/routes/types'

const router = Router()

// ✔️ ❌

router.get(RoutesPath.ACHIEVEMENTS, AchievementsController.findOne) // ✔️

export default router
