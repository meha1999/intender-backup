import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Logo from "public/icons/smallLogo.svg";

interface ModalProps {
  children: any;
  onClose?: () => void;
  className?: string;
  isModalOpen?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  className,
  onClose = () => {},
  isModalOpen = false,
}) => {
  const [mounted, setMounted] = useState(false);

  const [isModalOpenLocalState, setIsModalOpenLocalState] =
    useState(isModalOpen);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!isModalOpen) {
      const timer = setTimeout(() => setIsModalOpenLocalState(false), 500);
      return () => clearTimeout(timer);
    } else {
      setIsModalOpenLocalState(true);
    }
  }, [isModalOpen]);

  const ref = useRef(null);

  if (mounted) {
    return isModalOpenLocalState
      ? createPortal(
          <div className="absolute left-0 top-0 z-30 h-screen w-screen text-common">
            <span
              className={`fixed left-0 top-0 h-full w-full bg-[#0006] backdrop-blur-sm ${
                isModalOpen ? "" : "fade-out"
              }`}
            />
            <div
              ref={ref}
              className={`
              ${
                isModalOpen
                  ? true
                    ? "swipe"
                    : "pop-in-mobile-swipe"
                  : "swipe-out"
              }
              ${
                className || ""
              } fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center`}
              onClick={(e) => {
                if (e.target === ref.current) {
                  onClose();
                }
              }}
            >
              <div className="flex flex-col gap-12 rounded-3xl bg-white px-8 py-6">
                <div className="flex items-start justify-between">
                  <IoIosCloseCircleOutline
                    className="cursor-pointer text-2xl text-gray-400 shadow-info-card"
                    onClick={onClose}
                  />
                  <Logo className="text-black" />
                </div>
                {children}
              </div>
            </div>
          </div>,
          document.getElementById("portal")!,
        )
      : null;
  } else {
    return <div className="hidden">{children}</div>;
  }
};
export default Modal;
