import IAuthService from '../interfaces/IAuthService'
import AuthDto from '../models/AuthDto'
import axios from "axios";

const baseUrl = process.env.VUE_APP_BASEURL

export default class AuthService implements IAuthService {
	public async post(code: string): Promise<AuthDto> {
        const body = {
             code: code 
        }
        const options = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            
        }
		const response = await axios.post(baseUrl + ":5500/api/auth", body, options)
        const authDto: AuthDto = response.data.data;
        return authDto;
    }
}