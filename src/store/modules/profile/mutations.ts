import { MutationTree } from 'vuex';
import { State, Profile } from './state';

export enum MutationType {
    SetUser = 'SET_USER',
    SetName = 'SET_NAME',
}

export type Mutations = {
    [MutationType.SetUser](state: State, payload: Profile):void
    [MutationType.SetName](state: State, payload: string):void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.SetUser](state, item) {
        state.item = item;
    },
    [MutationType.SetName](state, item) {
        state.name = item;
    },
}