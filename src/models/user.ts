import mongoose, { Schema } from 'mongoose'

import type { Document } from 'mongoose'

interface User {
  userName: string
  rating: number
}

const UserSchema = new Schema<User & Document>({
  userName: {
    type: String,
    required: [true, 'Set username'],
  },
  rating: {
    type: Number,
    required: [true, 'Set rating'],
  },
})

const UserModel = mongoose.model('Users', UserSchema, 'users')

export { UserModel }
