interface BasicInfoType {
  name: string;
  brandName: string;
  registrationNumber: string;
  phoneNumber: string;
  createdAt: string;
  email: string;
  state: string;
  city: string;
  address: string;
}

interface ZustandState {
  user: {
    access_token: string;
  };
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
  setBasicInfo: (basicInfo: BasicInfoType) => void;
}
