import Button from "../components/ui/Button";
import CalculatorIcon from "../assets/svg/calculator.svg?react";
import UsersIcon from "../assets/svg/users.svg?react";
import CoinsIcon from "../assets/svg/coins.svg?react";
import VectorIcon from "../assets/svg/Vector.svg?react";

export default function MainLanding() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-surface-canvas text-text-primary px-5 py-4">
      <div className="flex flex-col items-center gap-4 mt-10">
        <div className="px-3 py-1 rounded-full bg-surface-card text-caption-strong text-brand-primary">
          RELEASE v1.0
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-heading-xl">정산정산</h1>
          <p className="text-body-regular text-text-muted">
            여행 정산, 한 번에 깔끔하게
          </p>
        </div>

        <Button variant="primary" onClick={() => {}}>
          정산방 생성하기
        </Button>
      </div>

      <div className="flex flex-col gap-3 mt-10">
        <FeatureCard
          icon={<CalculatorIcon />}
          title="간편한 영수증 정산"
          description="카메라로 찍거나 이미지를 올려 복잡한 영수증 내역을 즉시 분할할 수 있습니다."
        />
        <FeatureCard
          icon={<UsersIcon />}
          title="자유로운 멤버 관리"
          description="중도 참석자나 조기 귀가 멤버도 비율에 맞춰 실시간 오차 없이 계산합니다."
        />
        <FeatureCard
          icon={<CoinsIcon />}
          title="실시간 1인당 정산금 계산"
          description="예산 대비 남은 돈과 각자 내야 할 송금액을 원화 단위로 정확히 제공합니다."
        />
      </div>
      <button
        onClick={() => {}}
        className="flex items-center justify-center gap-2 h-[52px] rounded-[8px] border border-border-default text-body-emphasis mt-10 cursor-pointer hover:opacity-80"
      >
        <VectorIcon />
        친구에게 앱 초대 링크 공유하기
      </button>
    </div>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex gap-3 p-4 rounded-[12px] bg-surface-card border border-border-default">
      <div className="flex items-center justify-center w-[40px] h-[40px] rounded-[8px] border border-border-default bg-surface-canvas shrink-0">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-body-emphasis">{title}</span>
        <span className="text-caption-regular text-text-muted">
          {description}
        </span>
      </div>
    </div>
  );
}
