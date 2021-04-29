import firebase from 'firebase'

export type User = {
    profile: Profile,
};

export type Profile = {
    id: string
    picture: string,
    email: string,
    name: string
};

export function toUser(firebaseUser: firebase.User): User {
    const user: User = {
        profile: {
            id: firebaseUser.uid,
            name: firebaseUser.displayName != null ? firebaseUser.displayName : '',
            picture: firebaseUser.photoURL != null ? firebaseUser.photoURL : '',
            email: firebaseUser.email != null ? firebaseUser.email : '',
        },
    }
    return user;
}