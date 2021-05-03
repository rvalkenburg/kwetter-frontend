import ProfileDto from '@/models/ProfileDto';

export default interface IProfileService {
    post(avatar: string, displayName: string, email: string, googleId: string): Promise<ProfileDto>;
    get(userId: string): Promise<ProfileDto>;
    update(displayName: string, email: string, googleId: string): Promise<ProfileDto>;
}