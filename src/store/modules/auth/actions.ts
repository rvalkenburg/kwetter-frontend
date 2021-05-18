import { ActionContext, ActionTree } from 'vuex';
import { Mutations, MutationType } from './mutations';
import { State } from './state';
import { RootState } from '../../index'
import { Profile } from '../profile/profile';

export enum ActionTypes {
    SET_AUTH = 'SET_AUTH',
    SET_PROFILE = 'SET_PROFILE',
}

type ActionAugments = Omit<ActionContext<State, RootState>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}

export type Actions = {
    [ActionTypes.SET_AUTH](
        { commit }: ActionAugments,
        payload: Object
    ): void;
    [ActionTypes.SET_PROFILE](
        { commit }: ActionAugments,
        payload: Profile
    ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
    [ActionTypes.SET_AUTH](
        { commit }: ActionAugments,
        payload: Object
    ): void {
        commit(MutationType.SET_AUTH, payload);
    },
    [ActionTypes.SET_PROFILE](
        { commit }: ActionAugments,
        payload: Profile
    ): void {
        commit(MutationType.SET_PROFILE, payload);
    },
}