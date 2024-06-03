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
        user_type: "",
        access_level: "",
        position: "",
        company_national_id: "",
        company: null,
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
      setUserProfile: (userProfile) => set(() => ({ userProfile })),
    }),
    {
      name: "intender-storage",
      partialize(state) {
        return { ...state, companyRegister: null };
      },
    },
  ),
);
