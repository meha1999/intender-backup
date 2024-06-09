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
