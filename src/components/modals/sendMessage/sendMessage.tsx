import React from "react";
import Button from "../../common/Button";
import TextArea from "../../common/TextArea";

const SendMessageModal = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-[500px] flex-col gap-1">
        <TextArea placeHolder="پیام مورد نظر را ارسال کنید...|" />
      </div>
      <div className="flex justify-end gap-7">
        <Button className="rounded-xl bg-brand px-16 py-3 text-white">
          ارسال پیام
        </Button>
      </div>
    </div>
  );
};

export default SendMessageModal;
