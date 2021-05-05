import { GetterTree } from 'vuex';
import { RootState } from '@/store';
import { State } from './state';

export type Getters = {
    auth(state: State): Object | null;
}

export const getters: GetterTree<State, RootState> & Getters = {
    auth: (state) => {
      return state.auth
  },
};
