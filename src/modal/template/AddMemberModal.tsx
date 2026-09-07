import { useState } from "react";
import useRoomCreateStore from "../../store/roomCreateStore";
import useModalStore from "../store/modalStore";

export default function AddMemberModal() {
  const { addMember } = useRoomCreateStore();
  const { closeModal } = useModalStore();

  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) return;

    addMember({ id: crypto.randomUUID(), name: trimmedName });
    closeModal();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6"
      onClick={() => closeModal()}
    >
      <form
        onSubmit={handleSubmit}
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-[312px] rounded-[12px] bg-surface-card border border-border-default p-6"
      >
        <h2 className="text-heading-lg text-text-primary">여행 멤버 추가</h2>

        <div className="mt-4">
          <input
            autoFocus
            type="text"
            value={name}
            placeholder="멤버 이름을 입력하세요"
            onChange={(e) => setName(e.target.value)}
            className="h-[48px] w-full rounded-[8px] border border-border-default bg-surface-sub px-4 text-text-primary outline-none"
          />
        </div>

        <div className="mt-5 flex gap-2">
          <button
            type="button"
            onClick={() => closeModal()}
            className="h-[48px] cursor-pointer flex-1 rounded-[8px] border border-border-default bg-surface-sub text-text-primary text-body-highlight"
          >
            취소
          </button>

          <button
            type="submit"
            className="h-[48px] cursor-pointer flex-1 rounded-[8px] bg-brand-primary text-text-on-primary text-body-highlight"
          >
            추가
          </button>
        </div>
      </form>
    </div>
  );
}
