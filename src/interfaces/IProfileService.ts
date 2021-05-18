import ProfileDto from '@/models/ProfileDto';
import SeachDto from '@/models/SearchDto';

export default interface IProfileService {
    post(avatar: string, displayName: string, email: string, googleId: string): Promise<ProfileDto>;
    get(userId: string): Promise<ProfileDto>;
    getByName(displayName: string, pageNumber: number, pageSize: number, id: string): Promise<SeachDto[]>;
    update(displayName: string, email: string, googleId: string): Promise<ProfileDto>;
}