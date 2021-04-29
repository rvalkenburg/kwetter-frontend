import { Kweet } from './kweet'

export type State = {
    kweets: Kweet[],
}

export const state: State = {
    kweets: []
}