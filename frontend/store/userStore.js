import { create } from "zustand";

const useUserStore = create((set) => ({
    user: null,
    session: false,
    setUser: (user) => set({ user }),
    logout: () => set({ user: null }),
    // fonction qui met session en false
    activeSession: () => set({ session: true }),
}));
export default useUserStore;
