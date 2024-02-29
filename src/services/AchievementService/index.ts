import type { AchievementCollectionT } from 'src/services/AchievementService/types'
import { UserAchievementModel } from 'src/models/achievement'

class AchievementService {
  static findOne = async (userName: string): Promise<AchievementCollectionT> => {
    const result = await UserAchievementModel.findOne({ userName })

    return result
  }
}

export default AchievementService
