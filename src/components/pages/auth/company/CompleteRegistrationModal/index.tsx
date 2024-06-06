import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
interface CompleteRegistrationModalProps {
  onClose: () => void;
  isModalOpen: boolean;
}
const CompleteRegistrationModal: React.FC<CompleteRegistrationModalProps> = ({
  onClose,
  isModalOpen,
}) => {
  return (
    <Modal isModalOpen={isModalOpen} onClose={onClose}>
      <div className="flex min-w-96 flex-col gap-12">
        <h2>{"ثبت شرکت با موفقیت انجام شد"}</h2>
        <p>{"آیا مایل به تکمیل اطلاعات شرکت هستید ؟"}</p>
        <div className="flex items-center gap-8">
          <Button className="w-full rounded-3xl bg-brand px-5 py-2 text-center text-sm font-bold text-white">
            {"تکمیل اطلاعات شرکت"}
          </Button>
          <Button
            href={"/dashboard"}
            className="w-full rounded-3xl bg-weeny px-5 py-2 text-center text-sm font-bold text-white"
          >
            {"بعدا تکمیل میکنم"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CompleteRegistrationModal;
