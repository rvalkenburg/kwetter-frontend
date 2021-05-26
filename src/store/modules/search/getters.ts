import { GetterTree } from 'vuex';
import { Search } from './search'
import { RootState } from '@/store';
import { State } from './state';

export type Getters = {
  results(state: State): Search[] | null;
}

export const getters: GetterTree<State, RootState> & Getters = {
  results: (state) => { return state.results },
};
