import { GetterTree } from 'vuex';
import { Kweet } from './kweet'
import { RootState } from '@/store';
import { State } from './state';

export type Getters = {
  kweets(state: State): Kweet[] | null;
}

export const getters: GetterTree<State, RootState> & Getters = {
    kweets: (state) => {
      return state.kweets

  },
};
