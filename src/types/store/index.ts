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
  tags: Array<string>;
  services: Array<number>;
}

interface ZustandState {
  user: {
    access_token: string;
  };
  userProfile: getProfileType;
  companyRegister: {
    name: string;
    brandName: string;
    registrationNumber: string;
    phoneNumber: string;
    createdAt: string;
    email: string;
    state: string;
    city: string;
    address: string;
    //step2
    companyEstablishmentAdvertise: any;
    completedProjects: any;
    customerConsent: any;
    //step3
    certificates: any;
    tags: Array<string>;
  };
  setBasicInfo: (basicInfo: CompanySignUpType) => void;
  setUserProfile:(userProfile:getProfileType)=>void
}
