import { GetterTree } from 'vuex';
import { Profile } from './profile'
import { RootState } from '@/store';
import { State } from './state';

export type Getters = {
  user(state: State): Profile | null;
  profiles(state: State): Profile[] | null;
}

export const getters: GetterTree<State, RootState> & Getters = {
  user: (state) => { return state.profile },
  profiles: (state) => { return state.profiles }
  
};
