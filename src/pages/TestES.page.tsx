import ReceiptItem from "../components/ui/ReceiptItem";

function TestES() {
  return (
    <div className="flex flex-col gap-3 min-h-screen bg-surface-canvas p-4">
      <ReceiptItem merchantName="올레시장" amount={150000} payerName="시원" />
    </div>
  );
}

export default TestES;
