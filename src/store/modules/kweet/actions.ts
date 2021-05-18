import { ActionContext, ActionTree } from 'vuex';
import { Mutations, MutationType } from './mutations';
import { State } from './state';
import { RootState } from '../../index'
import { Kweet } from './kweet';

export enum ActionTypes {
    SET_KWEETS = 'SET_KWEETS',
    ADD_KWEET = 'ADD_KWEET',
    UPDATE_KWEET = 'UPDATE_KWEET',
    RESET_KWEET = 'RESET_KWEET',
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
    [ActionTypes.ADD_KWEET](
        { commit }: ActionAugments,
        payload: Kweet
    ): void;
    [ActionTypes.UPDATE_KWEET](
        { commit }: ActionAugments,
        payload: Kweet
    ): void;
    [ActionTypes.RESET_KWEET](
        { commit }: ActionAugments,
    ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
    [ActionTypes.SET_KWEETS](
        { commit }: ActionAugments,
        payload: Kweet[]
    ): void {
        commit(MutationType.SET_KWEETS, payload);
    },
    [ActionTypes.ADD_KWEET](
        { commit }: ActionAugments,
        payload: Kweet
    ): void {
        commit(MutationType.ADD_KWEET, payload);
    },
    [ActionTypes.UPDATE_KWEET](
        { commit }: ActionAugments,
        payload: Kweet
    ): void {
        commit(MutationType.UPDATE_KWEET, payload);
    },
    [ActionTypes.RESET_KWEET](
        { commit }: ActionAugments,
    ): void {
        commit(MutationType.RESET_KWEET, undefined);
    },
}