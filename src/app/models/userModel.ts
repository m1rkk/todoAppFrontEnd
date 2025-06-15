import {TodoModel} from './todoModel';

export type UserModel = {
  id: string,
  username: string,
  email: string,
  password: string
  todos: Array<TodoModel>
}
