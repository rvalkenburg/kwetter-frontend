export default interface AuthDto {
    access_token: string;
    refresh_token: string;
    scope: string;
    id_token: string;
    token_type: string;
    expires_in: string;
    user_id: string;
}