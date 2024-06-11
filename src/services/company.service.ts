import { AxiosResponse } from "axios";

import { BaseService } from "./base.service";

class CompanyService extends BaseService {
  getCompanies(params: {
    search?: string;
    tags__id?: number;
    province?: string;
    company_type?: string;
    is_foreigner?: boolean;
  }): Promise<AxiosResponse<Array<CompanyListType>>> {
    return this.axiosInstanceWithToken.get(`/api/v1/companies/`, { params });
  }

  getCompany(id: string): Promise<AxiosResponse<CompanyType>> {
    return this.axiosInstanceWithToken.get(`/api/v1/companies/${id}`);
  }

  getMembers(): Promise<AxiosResponse<Array<CompanyMember>>> {
    return this.axiosInstanceWithToken.get(`/api/v1/companies/members/`);
  }

  addMember(data: {
    first_name: string;
    last_name: string;
    mobile: string;
    email: String;
    access_level: string;
    user_type: string;
    position: string;
  }): Promise<AxiosResponse<any>> {
    return this.axiosInstanceWithToken.post(`/api/v1/companies/members/`, data);
  }

  editMember(
    id: number,
    data: {
      first_name?: string;
      last_name?: string;
      mobile?: string;
      email?: String;
      access_level?: string;
      user_type?: string;
      position?: string;
      is_active?: boolean;
    },
  ): Promise<AxiosResponse<any>> {
    return this.axiosInstanceWithToken.patch(
      `/api/v1/companies/members/${id}`,
      data,
    );
  }
}

export const companyServiceHandler = new CompanyService();
