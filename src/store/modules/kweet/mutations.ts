import { MutationTree } from 'vuex';
import { State } from './state';
import { Kweet } from './kweet'

export enum MutationType {
    SET_KWEETS = 'SET_KWEETS',
    ADD_KWEET = 'ADD_KWEET',
    UPDATE_KWEET = 'UPDATE_KWEET',
    RESET_KWEET = 'RESET_KWEET',
}

export type Mutations = {
    [MutationType.SET_KWEETS](state: State, payload: Kweet[]):void
    [MutationType.ADD_KWEET](state: State, payload: Kweet):void
    [MutationType.UPDATE_KWEET](state: State, payload: Kweet):void
    [MutationType.RESET_KWEET](state: State, payload: undefined):void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.SET_KWEETS](state, item) {
        if(state.kweets == null){
            state.kweets = item;
        } else {
            state.kweets.push(...item)
        }
    },
    [MutationType.ADD_KWEET](state, item) {
        if(state.kweets != null){
            state.kweets.unshift(item);
        }

    },
    [MutationType.UPDATE_KWEET](state, item) {
        if(state.kweets != null) {
            const index: number = state.kweets.findIndex(x => x.id == item.id) as number;
            state.kweets.splice(index, 1, item)
        }
    },
    [MutationType.RESET_KWEET](state, item) {
        state.kweets = null;
    },
}