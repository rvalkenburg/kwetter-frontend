import { MutationTree } from 'vuex';
import { State } from './state';
import { User } from './profile'

export enum MutationType {
    SetUser = 'SET_USER',
}

export type Mutations = {
    [MutationType.SetUser](state: State, payload: User):void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.SetUser](state, item) {
        state.user = item;
    },
}