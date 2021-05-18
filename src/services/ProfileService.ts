import axios from "axios";
import IProfileService from '@/interfaces/IProfileService';
import ProfileDto from '@/models/ProfileDto';
import SeachDto from "@/models/SearchDto";

const baseUrl = process.env.VUE_APP_BASEURL;

export default class ProfileService implements IProfileService {
    public async getByName(displayName: string, pageNumber: number, pageSize: number, id: string): Promise<SeachDto[]> {
        const options = {
            params: {
                pageNumber: pageNumber,
                pageSize: pageSize,
                name: displayName,
                id: id
            }
        }
		const response = await axios.get(baseUrl + "/gateway/search", options)
        const searchDto: SeachDto[] = response.data.data;
        return searchDto;
    }
    public async update(displayName: string, email: string, googleId: string): Promise<ProfileDto> {
        const body = {
            displayName:  displayName,
            email: email,
            googleId: googleId
        }
		const response = await axios.put(baseUrl + "/gateway/profile", body)
        const profileDto: ProfileDto = response.data;
        return profileDto;
    }
    public async get(id: string): Promise<ProfileDto> {
		const response = await axios.get(baseUrl + "/gateway/profile/" + id)
        const profileDto: ProfileDto = response.data;
        return profileDto;
    }
	public async post(avatar: string, displayName: string, email: string, googleId: string): Promise<ProfileDto> {
        const body = {
            avatar: avatar,
            displayName:  displayName,
            email: email,
            googleId: googleId
        }
		const response = await axios.post(baseUrl + "/gateway/profile", body)
        const profileDto: ProfileDto = response.data;
        return profileDto;
    }
}