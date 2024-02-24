import React, { useEffect } from "react";

interface UseOutSideClickProps {
  ref: React.RefObject<HTMLDivElement>;
  isOpened: boolean;
  setIsOpened: (state: boolean) => void;
}
export const useOutSideClick = (props: UseOutSideClickProps) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (props.ref.current && !props.ref.current.contains(event.target)) {
        props.setIsOpened(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props]);
};
