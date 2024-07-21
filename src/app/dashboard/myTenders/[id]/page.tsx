import MyTednerList from "@/components/app/dashboard/myTenders/MyTenderList";
import { BaseService } from "@/services/base.service";
import { tenderServiceHandler } from "@/services/tender.service";
import { cookies } from "next/headers";

const MyTedner = async ({ params: { id } }: { params: { id: string } }) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  BaseService.setToken(token || "");
  const res = await tenderServiceHandler.getTenderBids(id);

  return (
    <div className="flex flex-col gap-4 h-full">
      <MyTednerList data={res.data} />
    </div>
  );
};

export default MyTedner;
