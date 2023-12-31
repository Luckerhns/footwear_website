import $api from "@/http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
    
    static async registration(email: string, password: string):Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/users/login', {email, password})
    }

    static async login(email: string, password: string):Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/users/login', {email, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/users/logout')
    }
}