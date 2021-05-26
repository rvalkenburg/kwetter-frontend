import { MutationTree } from 'vuex';
import { State } from './state';
import { Search } from './search'

export enum MutationType {
    SET_SEARCH = 'SET_SEARCH',
    ADD_SEARCH = 'ADD_SEARCH',
    RESET_SEARCH = 'RESET_SEARCH',
    UPDATE_SEARCH = 'UPDATE_SEARCH',
}

export type Mutations = {
    [MutationType.SET_SEARCH](state: State, payload: Search[]):void
    [MutationType.ADD_SEARCH](state: State, payload: Search[]):void
    [MutationType.RESET_SEARCH](state: State, payload: undefined):void
    [MutationType.UPDATE_SEARCH](state: State, payload: Search):void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.SET_SEARCH](state, item) {
        state.results = item;
    },
    [MutationType.ADD_SEARCH](state, item) {
        state.results?.push(...item);
    },
    [MutationType.RESET_SEARCH](state, item) {
        state.results = null;
    },
    [MutationType.UPDATE_SEARCH](state, item) {
        if(state.results != null) {
            const index: number = state.results.findIndex(x => x.id == item.id) as number;
            state.results.splice(index, 1, item)
        }
    },
}