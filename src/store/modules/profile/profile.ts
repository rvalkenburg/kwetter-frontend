import jwtDecode, { JwtPayload } from "jwt-decode";
import firebase from 'firebase'

export type User = {
    profile: Profile,
    //authentication: Authentication
};

export type Profile = {
    id: string
    picture: string,
    email: string,
    name: string
};

// export type Authentication = {
//     token_type: string,
//     access_token: string,
//     id_token: string,
//     expires_at: number,
//     expires_in: number
// };

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