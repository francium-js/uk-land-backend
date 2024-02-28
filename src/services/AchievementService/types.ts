import { ObjectId } from 'mongodb'

export type AchievementCollectionT = {
  _id: ObjectId
  userName: string
  rating: number
  achievements: string[]
}
