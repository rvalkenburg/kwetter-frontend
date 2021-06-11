import axios from "axios";
import KweetDto from '@/models/KweetDto';
import IKweetService from '@/interfaces/IKweetService'
import Configuration from "@/configuration";

const baseUrl = Configuration.value('VUE_APP_BASEURL');

export default class KweetService implements IKweetService {

    public async getByProfile(pageNumer: number, pageSize: number, userId: string): Promise<KweetDto[]> {
        const options = {
            params: {
                pageNumber: pageNumer,
                pageSize: pageSize,
                profileId: userId,
            }
        }
		const response = await axios.get(baseUrl + "/gateway/kweet", options)
        const KweetDto: KweetDto[] = response.data.data;
        return KweetDto;
    }
    public async getByTimeline(pageNumer: number, pageSize: number, userId: string): Promise<KweetDto[]> {
        const options = {
            params: {
                pageNumber: pageNumer,
                pageSize: pageSize,
                profileId: userId,
            }
        }
		const response = await axios.get(baseUrl + "/gateway/kweet/timeline", options)
        const KweetDto: KweetDto[] = response.data.data;
        return KweetDto;
    }
	public async post(userId: string, message: string): Promise<KweetDto> {
        const body = {
            message: message,
            ProfileId:  userId,
        }
		const response = await axios.post(baseUrl + "/gateway/kweet", body)
        const KweetDto: KweetDto = response.data.data;
        return KweetDto;
    }
}