import { AxiosResponse } from "axios";
import { BaseService } from "./base.service";

class TenderService extends BaseService {
  getTenders(params: {
    search?: string;
    tags__id?: number;
    service?: string;
    tender_type?: "PUBLIC" | "PRIVATE";
  }): Promise<AxiosResponse<Array<TendersListItem>>> {
    return this.axiosInstanceWithToken.get(`/api/v1/tenders/`, { params });
  }

  getMyTender(params: {
    search?: string;
    tags__id?: number;
    service?: string;
    tender_type?: "PUBLIC" | "PRIVATE";
  }): Promise<AxiosResponse<Array<TendersListItem>>> {
    return this.axiosInstanceWithToken.get(`/api/v1/tenders/me/`, { params });
  }

  getTender(id: string): Promise<AxiosResponse<Tender>> {
    return this.axiosInstanceWithToken.get(`/api/v1/tenders/${id}`);
  }

  createTender(data: any): Promise<AxiosResponse<Tender>> {
    const bodyFormData = new FormData();
    Object.keys(data).map((item) => {
      if (
        typeof data[item] === "object" &&
        (data[item]?.length || Array.from(data[item]).length)
      ) {
        if (item !== "inquiry") {
          if (item === "service") {
            Array.from(data[item]).map((srv: any) =>
              bodyFormData.append(item, srv),
            );
          } else {
            data[item]?.map((index: any) => bodyFormData.append(item, index));
          }
        } else {
          Array.from(data[item])?.map((inq: any) =>
            bodyFormData.append(item, inq),
          );
        }
      } else {
        bodyFormData.append(item, data[item]);
      }
    });
    return this.axiosInstanceWithToken.post(`/api/v1/tenders/`, bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  createBid(id: string, data: any): Promise<AxiosResponse<any>> {
    const bodyFormData = new FormData();
    Object.keys(data).map((item) => {
      bodyFormData.append(item, data[item]);
    });
    return this.axiosInstanceWithToken.post(
      `/api/v1/tenders/${id}/bids/`,
      bodyFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  }
}

export const tenderServiceHandler = new TenderService();
