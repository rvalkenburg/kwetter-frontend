import { ActionContext, ActionTree } from 'vuex';
import { Mutations, MutationType } from './mutations';
import { State } from './state';
import { RootState } from '../../index'
import { Search } from './search';

export enum ActionTypes {
    SET_SEARCH = 'SET_SEARCH',
    ADD_SEARCH = 'ADD_SEARCH',
    RESET_SEARCH = 'RESET_SEARCH',
    UPDATE_SEARCH = 'UPDATE_SEARCH',
}

type ActionAugments = Omit<ActionContext<State, RootState>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}

export type Actions = {
    [ActionTypes.SET_SEARCH](
        { commit }: ActionAugments,
        payload: Search[]
    ): void;
    [ActionTypes.RESET_SEARCH](
        { commit }: ActionAugments,
        payload: undefined
    ): void;
    [ActionTypes.ADD_SEARCH](
        { commit }: ActionAugments,
        payload: Search[]
    ): void;
    [ActionTypes.UPDATE_SEARCH](
        { commit }: ActionAugments,
        payload: Search
    ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
    [ActionTypes.SET_SEARCH](
        { commit }: ActionAugments,
        payload: Search[]
    ): void {
        commit(MutationType.SET_SEARCH, payload);
    },
    [ActionTypes.RESET_SEARCH](
        { commit }: ActionAugments,
        payload: undefined
    ): void {
        commit(MutationType.RESET_SEARCH, payload);
    },
    [ActionTypes.ADD_SEARCH](
        { commit }: ActionAugments,
        payload: Search[]
    ): void {
        commit(MutationType.ADD_SEARCH, payload);
    },
    [ActionTypes.UPDATE_SEARCH](
        { commit }: ActionAugments,
        payload: Search
    ): void {
        commit(MutationType.UPDATE_SEARCH, payload);
    },
}