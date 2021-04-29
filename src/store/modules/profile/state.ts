import { User } from './profile'

export type State = {
    user: User | null,
}

export const state: State = {
    user: null
}