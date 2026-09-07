import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type MemberData = {
  id: string;
  name: string;
};

type RoomCreateState = {
  data: {
    title: string;
    totalBudget: number;
    members: MemberData[];
    thumbnailUrl: string;
  };

  setTitle: (value: string) => void;
  setTotalBudget: (value: number) => void;
  setThumbnailUrl: (value: string) => void;
  addMember: (member: MemberData) => void;
  deleteMember: (member: MemberData) => void;
  initState: () => void;
};

const INITIAL_STATE: RoomCreateState["data"] = {
  title: "",
  totalBudget: 0,
  members: [],
  thumbnailUrl: "",
};

const useRoomCreateStore = create<RoomCreateState>()(
  immer((set) => ({
    data: INITIAL_STATE,

    setTitle: (value) =>
      set((state) => {
        state.data.title = value;
      }),

    setTotalBudget: (value) =>
      set((state) => {
        state.data.totalBudget = value;
      }),

    setThumbnailUrl: (value) =>
      set((state) => {
        state.data.thumbnailUrl = value;
      }),

    addMember: (member) =>
      set((state) => {
        state.data.members.push(member);
      }),

    deleteMember: (member) =>
      set((state) => {
        state.data.members.filter((item) => item.id !== member.id);
      }),

    initState: () =>
      set((state) => {
        state.data = INITIAL_STATE;
      }),
  })),
);

export default useRoomCreateStore;
