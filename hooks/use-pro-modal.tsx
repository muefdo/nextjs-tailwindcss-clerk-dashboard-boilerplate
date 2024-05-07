import { create } from "zustand";

interface useProModalState {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}


export const useProModal = create<useProModalState>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));