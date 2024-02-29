import type { Request, Response } from 'express'

import AchievementService from 'src/services/AchievementService'

class AchievementsController {
  static async findOne(req: Request, res: Response): Promise<Response | Error> {
    const { userName } = req.query

    if (!userName)
      return res
        .status(400)
        .send({ message: 'В URL відсутній параметр для пошуку.' })

    const result = await AchievementService.findOne(String(userName))

    if (!result)
      return res
        .status(400)
        .send({ message: `Данного гравця не знайдено: ${userName}` })

    return res.status(200).send(result)
  }
}

export default AchievementsController
