import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useZustandStore = create<ZustandState>()(
  persist(
    (set) => ({
      user: {
        access_token: "",
      },
      userProfile: {
        is_applicant: false,
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        registration_status: "",
        decipline: "",
        access_level: "",
        position: "",
        company_national_id: "",
        company: null,
      },
      companyRegister: {
        name: "",
        name_en: "",
        brand_name: "",
        brand_name_en: "",
        registration_number: "",
        from_date: "",
        phone: "",
        company_type: {
          text: "",
          value: "",
        },
        email: "",
        province: {
          text: "",
          value: "",
        },
        address: "",
        companyEstablishmentAdvertise: undefined,
        completedProjects: undefined,
        customerConsent: undefined,
        certificates: undefined,
        tags: [],
        city: ""
      },
      configs: null,
      tags: [],
      services: [],
      setBasicInfo: (basicInfo) =>
        set((state) => ({
          companyRegister: { ...state.companyRegister, ...basicInfo },
        })),
      setUserProfile: (userProfile) => set(() => ({ userProfile })),
      setConfigs: (configs) => set(() => ({ configs })),
      setTags: (tags) => set(() => ({ tags })),
      setServices: (services) => set(() => ({ services })),
    }),
    {
      name: "intender-storage",
      partialize(state) {
        return { ...state };
      },
    },
  ),
);
