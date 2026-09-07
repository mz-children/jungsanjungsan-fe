import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type ModalType = "ADD_MEMBER" | "CONFIRM" | "SELECT" | null;

type ModalStoreState = {
  data: {
    // isOpen: boolean;
    type: ModalType;
  };

  // toggleModal: () => void;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
};

const useModalStore = create<ModalStoreState>()(
  immer((set) => ({
    data: {
      // isOpen: false,
      type: null,
    },

    // toggleModal: () =>
    //   set((state) => {
    //     state.data.isOpen = !state.data.isOpen;
    //   }),

    openModal: (type) =>
      set((state) => {
        state.data.type = type;
      }),

    closeModal: () =>
      set((state) => {
        state.data.type = null;
      }),
  })),
);

export default useModalStore;
