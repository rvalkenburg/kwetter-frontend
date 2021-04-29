import { ActionContext, ActionTree } from 'vuex';
import { Mutations, MutationType } from './mutations';
import { State } from './state';
import { RootState } from '../../index'
import { Kweet } from './kweet';

export enum ActionTypes {
    SET_KWEETS = 'SET_KWEETS',
}

type ActionAugments = Omit<ActionContext<State, RootState>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}

export type Actions = {
    [ActionTypes.SET_KWEETS](
        { commit }: ActionAugments,
        payload: Kweet[]
    ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
    [ActionTypes.SET_KWEETS](
        { commit }: ActionAugments,
        payload: Kweet[]
    ): void {
        commit(MutationType.SetKweets, payload);
    }
}