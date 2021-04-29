import ProfileDto from '@/models/ProfileDto';

export default interface IAuthService {
    post(code: string): Promise<ProfileDto>;
}