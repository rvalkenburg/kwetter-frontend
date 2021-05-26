import ProfileDto from '@/models/ProfileDto';
import SeachDto from '@/models/SearchDto';

export default interface IProfileService {
    get(userId: string): Promise<ProfileDto>;
    getByName(displayName: string, pageNumber: number, pageSize: number, id: string): Promise<SeachDto[]>;
    update(displayName: string, email: string, googleId: string): Promise<ProfileDto>;
}