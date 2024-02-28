import { UsersIdCollectionT } from 'src/services/UserService/types'
import { UserModel } from 'src/models/user'

class UserService {
  static getAll = async (): Promise<UsersIdCollectionT[]> => {
    const result = await UserModel.find().sort({ userName: 'asc' })
    return result
  }
}

export default UserService
