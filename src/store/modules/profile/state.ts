export type Profile = {
    picture: string,
    description: string,
    name: string
};


export type State = {
    item: Profile,
    name: string;
}

export const state: State = {
    item: {} as Profile,
    name: 'client'
}