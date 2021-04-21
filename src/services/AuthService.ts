import IAuthService from '../interfaces/IAuthService'
import AuthDto from '../models/AuthDto'
import axios from "axios";

export default class AuthService implements IAuthService {
	public async post(code: string): Promise<AuthDto> {
        const options = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
            },
            body: {
                code: code
            }
        }
		const response = await axios.post("http://localhost:5001/api/auth", options)
        const queryResponse: AuthDto = await response.data;
        console.log(response);
        console.log(queryResponse);

        return queryResponse;
    }
}