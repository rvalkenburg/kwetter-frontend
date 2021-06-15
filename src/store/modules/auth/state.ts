import { Profile } from "../profile/profile"

export type State = {
    auth: Object | null,
    profile: Profile | null
    success: boolean
}

export const state: State = {
    auth: null,
    profile: null,
    success: false
}