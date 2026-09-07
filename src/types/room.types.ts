export type RoomCreatePayload = {
  title: string;
  totalBudget: number;
  // Testing convention until the backend's optional-image contract is available.
  thumbnailFileId: string | null;
  members: { name: string }[];
};
