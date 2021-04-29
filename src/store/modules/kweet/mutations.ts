import { MutationTree } from 'vuex';
import { State } from './state';
import { Kweet } from './kweet'

export enum MutationType {
    SetKweets = 'SET_KWEETS',
}

export type Mutations = {
    [MutationType.SetKweets](state: State, payload: Kweet[]):void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.SetKweets](state, item) {
        state.kweets = item;
    },
}