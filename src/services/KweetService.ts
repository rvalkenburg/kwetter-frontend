import axios from "axios";
import KweetDto from '@/models/KweetDto';
import IKweetService from '@/interfaces/IKweetService'

const baseUrl = process.env.VUE_APP_BASEURL_KWEET;

export default class KweetService implements IKweetService {
    public async get(pageNumer: number, pageSize: number, userId: string): Promise<KweetDto[]> {
        const options = {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                pageNumber: pageNumer,
                pageSize: pageSize,
                profileId: userId,
            }
            
        }
		const response = await axios.get(baseUrl + "/api/kweet", options)
        const KweetDto: KweetDto[] = response.data.data;
        return KweetDto;
    }
	public async post(userId: string, message: string): Promise<KweetDto> {
        const body = {
            message: message,
            ProfileId:  userId,
        }
        const options = {
            headers: {
                'Content-Type': 'application/json',
            },
            
        }
		const response = await axios.post(baseUrl + "/api/kweet", body, options)
        const KweetDto: KweetDto = response.data.data;
        return KweetDto;
    }
}