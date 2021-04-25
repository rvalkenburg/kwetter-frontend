export default interface AuthDto {
    accessToken: string;
    refreshToken: string;
    scope: string;
    idToken: string;
    tokenType: string;
    expiresIn: string;
    userId: string;
}