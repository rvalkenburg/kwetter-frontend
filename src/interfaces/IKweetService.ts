import AuthDto from '../models/AuthDto'

export default interface IKweetService {
    post(avatar: string, displayName: string, email: string): Promise<AuthDto>;
}