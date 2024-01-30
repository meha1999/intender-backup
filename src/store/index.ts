import { create } from "zustand";

export const useZustandStore = create<ZustandState>((set) => ({
  count: 0,
  user: {
    access_token: "",
  },
  setCount: () => set((state) => ({ count: state.count + 1 })),
}));
