import mongoose, { Schema } from 'mongoose'

import type { Document } from 'mongoose'

interface Achievement {
  userName: string
  rating: number
  achievements: string[]
}

const AchievementSchema = new Schema<Achievement & Document>({
  userName: {
    type: String,
    required: [true, 'Set username'],
  },
  rating: {
    type: Number,
    required: [true, 'Set rating'],
  },
  achievements: {
    type: [String],
    default: [],
  },
})

const UserAchievementModel = mongoose.model(
  'UserAchievement',
  AchievementSchema,
  'user_achievements',
)

export { UserAchievementModel }
