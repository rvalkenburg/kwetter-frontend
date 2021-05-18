import { Profile } from './profile'

export type State = {
    profile: Profile | null,
    profiles: Profile[] | null,
    visitingProfile: Profile | null,
}

export const state: State = {
    profile: null,
    visitingProfile: null,
    profiles: null
}