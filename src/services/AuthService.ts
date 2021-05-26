import IAuthService from "@/interfaces/IAuthService";
import AuthDto from "@/models/AuthDto";
import axios from "axios";

const baseUrl = process.env.VUE_APP_BASEURL

export default class AuthService implements IAuthService {

    async post(jwt: string): Promise<AuthDto> {
            const body = {
                jwt: jwt,
            }
            const response = await axios.post(baseUrl + "/gateway/Authorization", body)
            const authDto: AuthDto = response.data;
            return authDto;
    }
}