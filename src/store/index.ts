import { create } from "zustand";

export const useZustandStore = create<ZustandState>((set) => ({
  user: {
    access_token: "",
  },
  companyRegister: {
    name: "",
    brandName: "",
    registrationNumber: "",
    phoneNumber: "",
    createdAt: "",
    email: "",
    state: "",
    city: "",
    address: "",
    companyEstablishmentAdvertise: undefined,
    completedProjects: undefined,
    customerConsent: undefined,
    certificates: undefined,
    tags: [],
  },
  setBasicInfo: (basicInfo) =>
    set((state) => ({
      companyRegister: { ...state.companyRegister, ...basicInfo },
    })),
}));
