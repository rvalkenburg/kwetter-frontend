import { MutationTree } from 'vuex';
import { State } from './state';
import { Kweet } from './kweet'

export enum MutationType {
    SET_KWEETS = 'SET_KWEETS',
    ADD_KWEET = 'ADD_KWEET',
}

export type Mutations = {
    [MutationType.SET_KWEETS](state: State, payload: Kweet[]):void
    [MutationType.ADD_KWEET](state: State, payload: Kweet):void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.SET_KWEETS](state, item) {
        console.log(...item)
        state.kweets.push(...item);
    },
    [MutationType.ADD_KWEET](state, item) {
        state.kweets.unshift(item);
    },
}