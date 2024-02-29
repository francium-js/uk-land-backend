import type { Request, Response } from 'express'

import UserService from 'src/services/UserService'

class UserController {
  static async getAll(req: Request, res: Response): Promise<Response> {
    const result = await UserService.getAll()

    if (!result) return res.status(400).send({ message: 'Щось не так... х-х' })

    return res.status(200).send(result)
  }
}

export default UserController
