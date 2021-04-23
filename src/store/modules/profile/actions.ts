import { ActionContext, ActionTree } from 'vuex';
import { Mutations, MutationType } from './mutations';
import { State } from './state';
import { RootState } from '../../index'

export enum ActionTypes {
    GetUser = 'GET_USER',
    SetUser = 'SET_USER',
    SetName = 'SET_NAME'
}

type ActionAugments = Omit<ActionContext<State, RootState>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}

export type Actions = {
    [ActionTypes.SetName](
        { commit }: ActionAugments,
        payload: string
    ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
    [ActionTypes.SetName](
        { commit }: ActionAugments,
        payload: string
    ): void {
        commit(MutationType.SetName, payload);
    }
}