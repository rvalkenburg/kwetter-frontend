import IAuthService from '../interfaces/IAuthService'
import AuthDto from '../models/AuthDto'
import axios from "axios";

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
		const response = await axios.post("http://localhost:5500/api/auth", body, options)
        const authDto: AuthDto = response.data.data;
        return authDto;
    }
}