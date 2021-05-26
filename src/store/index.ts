import { createStore, createLogger } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import { store as profile, ProfileStore, State as ProfileState } from '@/store/modules/profile';
import { store as kweet, KweetStore, State as KweetState } from '@/store/modules/kweet';
import { store as auth, AuthStore, State as AuthState } from '@/store/modules/auth';
import { store as search, SearchStore, State as SearchState } from '@/store/modules/search';

export type RootState = {
  profile: ProfileState;
  kweet: KweetState
  auth: AuthState
  search: SearchState
};

export type Store = ProfileStore<Pick<RootState, 'profile'>> & KweetStore<Pick<RootState, 'kweet'>> & AuthStore<Pick<RootState, 'auth'>> & SearchStore<Pick<RootState, 'search'>>;

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

plugins.push(createPersistedState({ storage: window.sessionStorage, paths: ['profile', 'auth'] } ));

export const store = createStore({
  plugins,
  modules: {
    profile,
    kweet,
    auth,
    search
  },
});

export function useStore(): Store {
  return store as Store;
}