import {TodoModel} from './todoModel';

export type UserModel = {
  username: string,
  email: string,
  password: string
  todos: TodoModel[]
}
