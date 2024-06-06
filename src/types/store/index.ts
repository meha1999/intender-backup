interface CompanySignUpType {
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
  address: string;
  description: string;
  is_foreigner: true;
  tags: Array<string> | any;
  services: Array<number> | any;
}

interface ZustandState {
  user: {
    access_token: string;
  };
  configs: any;
  tags: Array<{ name: string; id: number }>;
  services: Array<{ name: string; id: number }>;
  userProfile: getProfileType;
  companyRegister: {
    name: string;
    name_en: string;
    brand_name: string;
    brand_name_en: string;
    registration_number: string;
    from_date: string;
    phone: string;
    company_type: { text: string; value: string };
    email: string;
    province: { text: string; value: string };
    city: string;
    //step2
    address: string;
    companyEstablishmentAdvertise: any;
    completedProjects: any;
    customerConsent: any;
    //step3
    certificates: any;
    tags: Array<string>;
  };
  setBasicInfo: (basicInfo: any) => void;
  setUserProfile: (userProfile: getProfileType) => void;
  setConfigs: (configs: any) => void;
  setTags: (tags: any) => void;
  setServices: (services: any) => void;
}
