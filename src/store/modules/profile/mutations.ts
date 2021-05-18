import { MutationTree } from 'vuex';
import { State } from './state';
import { Profile } from './profile'

export enum MutationType {
    SET_PROFILE = 'SET_PROFILE',
    SET_VISITING_PROFILE = 'SET_VISITING_PROFILE',
    SET_PROFILES = 'SET_PROFILES',
    RESET_PROFILES = 'RESET_PROFILES',
}

export type Mutations = {
    [MutationType.SET_PROFILE](state: State, payload: Profile):void
    [MutationType.SET_VISITING_PROFILE](state: State, payload: Profile):void
    [MutationType.SET_PROFILES](state: State, payload: Profile[]):void
    [MutationType.RESET_PROFILES](state: State, payload: undefined):void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.SET_PROFILE](state, item) {
        state.profile = item;
    },
    [MutationType.SET_VISITING_PROFILE](state, item) {
        state.visitingProfile = item;
    },
    [MutationType.SET_PROFILES](state, item) {
        if(state.profiles == null){
            state.profiles = item;
        } else {
            state.profiles.push(...item)
        }
    },
    [MutationType.RESET_PROFILES](state, item) {
        state.profiles = null;
    },
}