import { User } from './User';

export interface Message {
  text: String,
  date: String,
  user: User,
  notReaded: Boolean
}