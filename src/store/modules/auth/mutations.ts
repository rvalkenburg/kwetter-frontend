import { MutationTree } from 'vuex';
import { State } from './state';

export enum MutationType {
    SET_AUTH = 'SET_AUTH',
}

export type Mutations = {
    [MutationType.SET_AUTH](state: State, payload: Object):void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.SET_AUTH](state, item) {
        state.auth = item;
    },
}