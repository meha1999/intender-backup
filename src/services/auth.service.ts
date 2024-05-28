import { AxiosResponse } from "axios";

import { BaseService } from "./base.service";

class AuthService extends BaseService {
  login(payload: {
    username: string;
    company_national_id: string;
    password: string;
  }): Promise<AxiosResponse<loginType>> {
    return this.axiosInstanceWithoutToken.post(`/api/v1/users/token/`, payload);
  }

  getProfile(): Promise<AxiosResponse<getProfileType>> {
    return this.axiosInstanceWithToken.get(`/api/v1/users/profile/`);
  }
}

export const authServiceHandler = new AuthService();
