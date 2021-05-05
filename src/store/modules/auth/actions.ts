import { ActionContext, ActionTree } from 'vuex';
import { Mutations, MutationType } from './mutations';
import { State } from './state';
import { RootState } from '../../index'

export enum ActionTypes {
    SET_AUTH = 'SET_AUTH',
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
}

export const actions: ActionTree<State, RootState> & Actions = {
    [ActionTypes.SET_AUTH](
        { commit }: ActionAugments,
        payload: Object
    ): void {
        commit(MutationType.SET_AUTH, payload);
    },
}