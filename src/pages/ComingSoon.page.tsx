export default function ComingSoonPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-canvas px-6">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="text-6xl">🚧</div>

        <div className="flex flex-col gap-2">
          <h1 className="text-heading-xl text-text-primary">
            아직 공사 중이에요!
          </h1>

          <p className="text-body-md text-text-dim">
            이 페이지는 지금 열심히 만들고 있어요.
            <br />곧 만나요 👀
          </p>
        </div>
      </div>
    </div>
  );
}
