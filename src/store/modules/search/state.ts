import { Search } from './search'

export type State = {
    results: Search[] | null,
}

export const state: State = {
    results: null,
}