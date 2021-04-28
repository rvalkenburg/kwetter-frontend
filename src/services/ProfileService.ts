import AuthDto from '../models/AuthDto'
import axios from "axios";
import IProfileService from '@/interfaces/IProfileService';

export default class ProfileService implements IProfileService {
	public async post(avatar: string, displayName: string, email: string): Promise<AuthDto> {
        const body = {
            avatar: avatar,
            displayName:  displayName,
            email: email
        }
        const options = {
            headers: {
                'Content-Type': 'application/json',
            },
            
        }
		const response = await axios.post("http://localhost:5000/api/profile", body, options)
        const authDto: AuthDto = response.data.data;
        return authDto;
    }
}