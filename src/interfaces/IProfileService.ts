import AuthDto from '../models/AuthDto'

export default interface IProfileService {
    post(avatar: string, displayName: string, email: string): Promise<AuthDto>;
}