import  AuthDto from '@/models/AuthDto';
import jwtDecode, { JwtPayload } from "jwt-decode";

export type User = {
    profile: Profile,
    authentication: Authentication
};

export type Profile = {
    id: string
    picture: string,
    email: string,
    name: string
};

export type Authentication = {
    token_type: string,
    access_token: string,
    id_token: string,
    expires_at: number,
    expires_in: number
};

export function toUser(authDto: AuthDto): User {
    const payload: GoogleJwtPayload = jwtDecode<GoogleJwtPayload>(authDto.idToken);
    const user: User = {
        profile: {
            id: authDto.userId,
            name: payload.name,
            picture: payload.picture,
            email: payload.email
        },
        authentication: {
            token_type: authDto.tokenType,
            access_token: authDto.accessToken,
            expires_at: payload.iat,
            expires_in: payload.exp,
            id_token: authDto.idToken
        }
    }
    return user;
}

interface GoogleJwtPayload extends JwtPayload {
    email: string;
    email_verified: boolean;
    azp: string;
    at_hash: string;
    name: string;
    picture: string;
    given_name: string;
    locale: string;
    iat: number;
    exp: number;
}