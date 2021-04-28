export default interface ProfileDto {
    accessToken: string;
    refreshToken: string;
    scope: string;
    idToken: string;
    tokenType: string;
    expiresIn: string;
    userId: string;
}