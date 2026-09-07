import AddMemberModal from "../modal/template/AddMemberModal";
import useModalStore from "../modal/store/modalStore";

export default function ModalRenderer() {
  const {
    data: { type },
  } = useModalStore();

  return (
    <>
      {type === "CONFIRM" && <AddMemberModal />}
      {type === "SELECT" && <AddMemberModal />}
      {type === "ADD_MEMBER" && <AddMemberModal />}
    </>
  );
}
