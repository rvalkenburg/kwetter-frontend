import axios from "axios";
import ILikeService from '@/interfaces/ILikeService';
import LikeDto from '@/models/LikeDto';
import Configuration from "@/configuration";

const baseUrl = Configuration.value('VUE_APP_BASEURL');

export default class LikeService implements ILikeService {
    async like(profileId: string, kweetId: string): Promise<LikeDto> {
        const body = {
            kweetId: kweetId,
            ProfileId:  profileId,
        }
		const response = await axios.post(baseUrl + "/gateway/like", body)
        const LikeDto: LikeDto = response.data;
        return LikeDto;
    }
    async unLike(profileId: string, kweetId: string): Promise<LikeDto> {
		const response = await axios.delete(baseUrl + "/gateway/like/" + profileId + '/' + kweetId)
        const LikeDto: LikeDto = response.data.data;
        return LikeDto;
    }

}