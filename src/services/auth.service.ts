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

  editUser(payload: {
    first_name: string;
    last_name: string;
    email: string;
    position: string;
  }): Promise<AxiosResponse<any>> {
    return this.axiosInstanceWithToken.patch(`/api/v1/users/profile/`, payload);
  }

  changePassword(payload: {
    old_password: string;
    new_password: string;
  }): Promise<AxiosResponse<any>> {
    return this.axiosInstanceWithToken.post(
      `/api/v1/users/profile/password/`,
      payload,
    );
  }

  signupVerification(payload: {
    verification_token: string;
    verification_code: number;
  }): Promise<AxiosResponse<loginType>> {
    return this.axiosInstanceWithoutToken.post(
      `/api/v1/users/signup/verification/`,
      payload,
    );
  }

  resetPasswordVerification(payload: {
    verification_token: string;
    verification_code: number;
  }): Promise<AxiosResponse<loginType>> {
    return this.axiosInstanceWithoutToken.post(
      `/api/v1/users/reset-pass/verification/`,
      payload,
    );
  }

  resetPassword(payload: {
    mobile: string;
    company_national_id: string;
    new_password: string;
  }): Promise<AxiosResponse<{ verification_token: string }>> {
    return this.axiosInstanceWithoutToken.post(
      `/api/v1/users/reset-pass/`,
      payload,
    );
  }

  signupCompany(payload: CompanySignUpType): Promise<AxiosResponse<any>> {
    return this.axiosInstanceWithToken.post(
      `/api/v1/users/signup/company/`,
      payload,
    );
  }


  preSignUp(payload: preSignUpType): Promise<AxiosResponse<any>> {
    return this.axiosInstanceWithToken.post(
      `/api/v1/users/signup/pre/`,
      payload,
    );
  }
  reviewCompany(): Promise<AxiosResponse<any>> {
    return this.axiosInstanceWithToken.post(`/api/v1/users/signup/review/`);
  }

  login(payload: {
    username: string;
    company_national_id?: string;
    password: string;
  }): Promise<AxiosResponse<loginType>> {
    return this.axiosInstanceWithoutToken.post(`/api/v1/users/token/`, payload);
  }

  getProfile(): Promise<AxiosResponse<getProfileType>> {
    return this.axiosInstanceWithToken.get(`/api/v1/users/profile/`);
  }

  getConfigs(): Promise<AxiosResponse<any>> {
    return this.axiosInstanceWithoutToken.get(`/api/v1/info/configs/`);
  }

  getTags(): Promise<AxiosResponse<any>> {
    return this.axiosInstanceWithToken.get(`/api/v1/info/tags/`);
  }

  getServices(): Promise<AxiosResponse<any>> {
    return this.axiosInstanceWithToken.get(`/api/v1/info/services/`);
  }
}

export const authServiceHandler = new AuthService();
