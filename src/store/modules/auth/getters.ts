import { GetterTree } from 'vuex';
import { RootState } from '@/store';
import { State } from './state';
import { Profile } from '../profile/profile';

export type Getters = {
    auth(state: State): Object | null;
    profile(state: State): Profile | null;
}

export const getters: GetterTree<State, RootState> & Getters = {
  auth: (state) => {
      return state.auth
  },
  profile: (state) => {
    return state.profile
},
};
