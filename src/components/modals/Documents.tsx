import React from "react";
import Upload from "public/icons/dashboard/upload.svg";
import Uploaded from "public/icons/dashboard/uploaded.svg";
import Button from "../common/Button";

const Documents = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col items-center gap-5 rounded-3xl border-4 border-dashed border-secondary-light px-44 py-9">
        <Upload />
        {/* <Uploaded /> */}
        <p className="text-2xl font-bold">{"آپلود تصاویر/مدارک"}</p>
        {/* <p className="text-2xl font-bold">{"مشاهده مدارک آپلود شده"}</p> */}
      </div>
      <div className="flex justify-end">
        <Button className="disabled rounded-xl bg-brand px-16 py-3 text-white">
          تایید
        </Button>
      </div>
    </div>
  );
};

export default Documents;
