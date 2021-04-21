import AuthDto from '../models/AuthDto'

export default interface IAuthService {
    post(code: string): Promise<AuthDto>;
}