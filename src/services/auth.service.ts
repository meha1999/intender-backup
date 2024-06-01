import { AxiosResponse } from "axios";

import { BaseService } from "./base.service";

class AuthService extends BaseService {
  signup(payload: {
    first_name: string;
    last_name: string;
    email: string;
    mobile: string;
    password: string;
    company_national_id: string;
    position: string;
  }): Promise<AxiosResponse<{ verification_token: string }>> {
    return this.axiosInstanceWithoutToken.post(
      `/api/v1/users/signup/`,
      payload,
    );
  }

  signupVerification(payload: {
    verification_token: string;
    verification_code: number;
  }): Promise<AxiosResponse<{ verification_token: string }>> {
    return this.axiosInstanceWithoutToken.post(
      `/api/v1/users/signup/verification/`,
      payload,
    );
  }

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
