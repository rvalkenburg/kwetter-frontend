import { ActionContext, ActionTree } from 'vuex';
import { Mutations, MutationType } from './mutations';
import { State } from './state';
import { RootState } from '../../index'
import { Profile } from './profile';

export enum ActionTypes {
    SET_PROFILE = 'SET_PROFILE',
    SET_VISITING_PROFILE = 'SET_VISITING_PROFILE',
    SET_PROFILES = 'SET_PROFILES',
    RESET_PROFILES = 'RESET_PROFILES',
}

type ActionAugments = Omit<ActionContext<State, RootState>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}

export type Actions = {
    [ActionTypes.SET_PROFILE](
        { commit }: ActionAugments,
        payload: Profile
    ): void;
    [ActionTypes.SET_VISITING_PROFILE](
        { commit }: ActionAugments,
        payload: Profile
    ): void;
    [ActionTypes.SET_PROFILES](
        { commit }: ActionAugments,
        payload: Profile[]
    ): void;
    [ActionTypes.RESET_PROFILES](
        { commit }: ActionAugments,
        payload: undefined
    ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
    [ActionTypes.SET_PROFILE](
        { commit }: ActionAugments,
        payload: Profile
    ): void {
        commit(MutationType.SET_PROFILE, payload);
    },
    [ActionTypes.SET_VISITING_PROFILE](
        { commit }: ActionAugments,
        payload: Profile
    ): void {
        commit(MutationType.SET_VISITING_PROFILE, payload);
    },
    [ActionTypes.SET_PROFILES](
        { commit }: ActionAugments,
        payload: Profile[]
    ): void {
        commit(MutationType.SET_PROFILES, payload);
    },
    [ActionTypes.RESET_PROFILES](
        { commit }: ActionAugments,
        payload: undefined
    ): void {
        commit(MutationType.RESET_PROFILES, payload);
    }
}