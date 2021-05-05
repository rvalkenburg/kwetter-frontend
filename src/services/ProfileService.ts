import axios from "axios";
import IProfileService from '@/interfaces/IProfileService';
import ProfileDto from '@/models/ProfileDto';

const baseUrl = process.env.VUE_APP_BASEURL_PROFILE;

export default class ProfileService implements IProfileService {
    public async update(displayName: string, email: string, googleId: string): Promise<ProfileDto> {
        const body = {
            displayName:  displayName,
            email: email,
            googleId: googleId
        }
		const response = await axios.put(baseUrl + "/api/profile", body)
        const profileDto: ProfileDto = response.data;
        return profileDto;
    }
    public async get(id: string): Promise<ProfileDto> {
		const response = await axios.get(baseUrl + "/api/profile/" + id)
        const profileDto: ProfileDto = response.data.data;
        return profileDto;
    }
	public async post(avatar: string, displayName: string, email: string, googleId: string): Promise<ProfileDto> {
        const body = {
            avatar: avatar,
            displayName:  displayName,
            email: email,
            googleId: googleId
        }
		const response = await axios.post(baseUrl + "/api/profile", body)
        const profileDto: ProfileDto = response.data.data;
        return profileDto;
    }
}