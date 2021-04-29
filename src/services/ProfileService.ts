import axios from "axios";
import IProfileService from '@/interfaces/IProfileService';
import ProfileDto from '@/models/ProfileDto';

const baseUrl = process.env.VUE_APP_BASEURL_PROFILE;

export default class ProfileService implements IProfileService {
    public async get(userId: string): Promise<ProfileDto> {
        const options = {
            headers: {
                'Content-Type': 'application/json',
            },
            
        }
		const response = await axios.get(baseUrl + "/api/kweet" + userId, options)
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
        const options = {
            headers: {
                'Content-Type': 'application/json',
            },
            
        }
		const response = await axios.post(baseUrl + "/api/profile", body, options)
        const profileDto: ProfileDto = response.data.data;
        return profileDto;
    }
}