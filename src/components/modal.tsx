import Outside from "./outside";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export default function Modal({ children, onClose, isOpen }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-40 grid place-content-center bg-gray-500 bg-opacity-50 w-[100vw] h-[100vh]">
      <Outside onClick={onClose}>{children}</Outside>
    </div>
  );
}
