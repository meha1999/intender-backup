import { AxiosResponse } from "axios";

import { BaseService } from "./base.service";

class CompanyService extends BaseService {
  getCompanies(): Promise<AxiosResponse<Array<CompanyListType>>> {
    return this.axiosInstanceWithToken.get(`/api/v1/companies/`);
  }

  getCompany(id: string): Promise<AxiosResponse<CompanyType>> {
    return this.axiosInstanceWithToken.get(`/api/v1/companies/${id}`);
  }
}

export const companyServiceHandler = new CompanyService();
