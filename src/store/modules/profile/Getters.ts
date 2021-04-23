import { GetterTree } from 'vuex';


import { RootState } from '@/store';

import { Profile, State } from './state';

export type Getters = {
  profile(state: State): Profile;
  profileName(state: State): string;
}

export const getters: GetterTree<State, RootState> & Getters = {
  profile: (state) => state.item,
  profileName: (state) => state.name,

};