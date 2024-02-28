import { ObjectId } from 'mongodb'

export type UsersIdCollectionT = {
  _id: ObjectId
  rating: number
  userName: string
}
