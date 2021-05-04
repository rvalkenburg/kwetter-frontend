import LikeDto from '@/models/LikeDto';

export default interface IKweetService {
    like(profileId: string, kweetId: string): Promise<LikeDto>;
    unLike(profileId: string, kweetId: string): Promise<LikeDto>
}