import type { Request, Response, NextFunction } from 'express'

import AchievementService from 'src/services/AchievementService'

class AchievementsController {
  static async findOne(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | Error> {
    const { userName } = req.query

    if (!userName) {
      res.status(400).send({ message: 'В URL відсутній параметр для пошуку.' })
      return
    }

    const result = await AchievementService.findOne(String(userName))

    if (!result) {
      res.status(400).send({ message: `Данного гравця не знайдено: ${userName}` })
      return
    }

    return res.status(200).send(result)
  }
}

export default AchievementsController
