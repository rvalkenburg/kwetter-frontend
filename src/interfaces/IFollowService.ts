import FollowDto from '@/models/FollowDto';

export default interface IKweetService {
    getFollowStatus(profileId: string, kweetId: string): Promise<FollowDto>;
    follow(userId: string, followId: string): Promise<FollowDto>
    unFollow(userId: string, followId: string): Promise<FollowDto>

}