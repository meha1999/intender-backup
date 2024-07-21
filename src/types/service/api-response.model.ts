interface MetaDataDto {
  total: number;
  next_page: number;
  totalPage: number;
}

interface ApiResponse<DataModel> {
  data: DataModel;
  message?: string;
  metadata?: MetaDataDto;
  status: number;
}

interface loginType {
  access: string;
  refresh: string;
}

interface preSignUpType {
  fullname: string;
  company_name: string;
  email: string;
  mobile: string;
}

interface getProfileType {
  is_applicant: boolean;
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  registration_status: string;
  user_type: string;
  access_level: string;
  position: string;
  company_national_id: string;
  company: {
    name: string;
    name_en: string;
    brand_name: string;
    brand_name_en: string;
    registration_number: string;
    from_date: Date;
    phone: string;
    company_type: string;
    email: string;
    province: string;
    address: string;
    description: string;
    is_foreigner: boolean;
    tags: Array<{
      id: number;
      name: string;
    }>;
    services: Array<{
      id: number;
      name: string;
    }>;
    documents: Array<{
      document_type: string;
      file: string;
    }>;
  } | null;
}

interface CompanyListType {
  id: number;
  name: string;
  name_en: string;
  national_id: string;
}

interface CompanyType {
  name: string;
  name_en: string;
  brand_name: string;
  brand_name_en: string;
  registration_number: string;
  from_date: string;
  phone: string;
  company_type: string;
  email: string;
  province: string;
  city: null;
  address: string;
  description: string;
  is_foreigner: false;
  tags: Array<{ id: number; name: string }>;
  services: Array<{ id: number; name: string }>;
  documents: Array<any>;
  products: Array<any>;
}

interface CompanyMember {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  user_type: string;
  access_level: string;
  position: string;
  is_active: boolean;
}

interface TendersListItem {
  id: number;
  name: string;
  deadline: "2024-07-15";
  description: string;
  tender_type: "PUBLIC" | "PRIVATE";
  project_name: string;
  tags: [
    {
      id: number;
      name: string;
    },
  ];
  service: {
    id: number;
    name: string;
  };
  inquiry: string;
}

interface CreateTender {
  name: string;
  deadline: any;
  start: any;
  description: string;
  tender_type: "PUBLIC" | "PRIVATE";
  project_name: string;
  tags: Array<string>;
  service: Array<number>;
  document: FileList;
  assigns: Array<number>;
  manager: number;
}

interface Tender {
  name: string;
  deadline: string;
  description: string;
  tender_type: "PUBLIC" | "PRIVATE";
  project_name: string;
  tags: Array<{
    id: number;
    name: string;
  }>;
  service: {
    id: number;
    name: string;
  };
  inquiry: string;
}

interface CreateBid {
  title: string;
  description: string;
  resume: FileList;
}

interface Bid {
  id: number;
  company_id: number;
  title: string;
  status: string;
  description: string;
  document: string;
  manager: number;
  offers: [
    {
      file: string;
      created_by: number;
      created_at: string;
    },
  ];
  comments: [
    {
      id: number;
      title: string;
      description: string;
      attachment: string;
      decipline: number;
      replies: [
        {
          title: string;
          description: string;
          attachment: string;
          decipline: number;
        },
      ];
    },
  ];
}
