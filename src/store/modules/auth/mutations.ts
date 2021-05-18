import { MutationTree } from 'vuex';
import { Profile } from '../profile/profile';
import { State } from './state';

export enum MutationType {
    SET_AUTH = 'SET_AUTH',
    SET_PROFILE = 'SET_PROFILE',
}

export type Mutations = {
    [MutationType.SET_AUTH](state: State, payload: Object):void
    [MutationType.SET_PROFILE](state: State, payload: Profile):void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.SET_AUTH](state, item) {
        state.auth = item;
    },
    [MutationType.SET_PROFILE](state, item) {
        state.profile = item;
    },
}