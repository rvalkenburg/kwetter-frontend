import AuthDto from '@/models/AuthDto';
import ProfileDto from '@/models/ProfileDto';
import SeachDto from '@/models/SearchDto';

export default interface IAuthService {
    post(jwt: string): Promise<AuthDto>;
}