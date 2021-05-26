import axios from "axios";
import IFollowService from '@/interfaces/IFollowService';
import FollowDto from "@/models/FollowDto";

const baseUrl = process.env.VUE_APP_BASEURL

export default class FollowService implements IFollowService {
     async getFollowStatus(userId: string, followId: string): Promise<FollowDto> {
        const options = {
            params: {
                userId: userId,
                followId: followId,
            }
        }
		const response = await axios.get(baseUrl + "/gateway/follow", options)
        const KweetDto: FollowDto = response.data.data;
        return KweetDto;
    }
    async follow(userId: string, followId: string): Promise<FollowDto> {
        const body = {
            ProfileId: userId,
            followId:  followId,
        }
		const response = await axios.post(baseUrl + "/gateway/follow", body)
        const followDto: FollowDto = response.data;
        return followDto;
    }
    async unFollow(userId: string, followId: string): Promise<FollowDto> {
        const response = await axios.delete(baseUrl + "/gateway/follow/" + userId + '/' + followId)
        const followDto: FollowDto = response.data.data;
        return followDto;
    }
}