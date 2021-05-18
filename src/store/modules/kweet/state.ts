import { Kweet } from './kweet'

export type State = {
    kweets: Kweet[] | null,
}

export const state: State = {
    kweets: null
}