import { AxiosResponse } from "axios";

import { BaseService } from "./base.service";

class CompanyService extends BaseService {
  getCompanies(): Promise<AxiosResponse<Array<CompanyListType>>> {
    return this.axiosInstanceWithToken.get(`/api/v1/companies/`);
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
}

export const companyServiceHandler = new CompanyService();
