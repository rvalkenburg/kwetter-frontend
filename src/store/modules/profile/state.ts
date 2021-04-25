import { User } from './profile'

export type State = {
    user: User,
}

export const state: State = {
    user: {} as User,
}