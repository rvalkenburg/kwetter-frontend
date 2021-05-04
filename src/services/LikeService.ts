import axios from "axios";
import ILikeService from '@/interfaces/ILikeService';
import LikeDto from '@/models/LikeDto';

const baseUrl = process.env.VUE_APP_BASEURL_LIKE

export default class LikeService implements ILikeService {
    async like(profileId: string, kweetId: string): Promise<LikeDto> {
        const body = {
            kweetId: kweetId,
            ProfileId:  profileId,
        }
        const options = {
            headers: {
                'Content-Type': 'application/json',
            },
            
        }
		const response = await axios.post(baseUrl + "/api/like", body, options)
        const LikeDto: LikeDto = response.data;
        return LikeDto;
    }
    async unLike(profileId: string, kweetId: string): Promise<LikeDto> {
		const response = await axios.delete(baseUrl + "/api/like/" + profileId + '/' + kweetId)
        const LikeDto: LikeDto = response.data.data;
        return LikeDto;
    }

}