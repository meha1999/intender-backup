import MyTenderFilters from "@/components/app/dashboard/myTenders/TenderFilters";
import TendersList from "@/components/app/dashboard/myTenders/TendersList";
import { BaseService } from "@/services/base.service";
import { tenderServiceHandler } from "@/services/tender.service";
import { cookies } from "next/headers";

const MyTenders = async ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  BaseService.setToken(token || "");
  const res = await tenderServiceHandler.getMyTender(searchParams);

  return (
    <div className="flex flex-col gap-10 pb-10">
      <MyTenderFilters searchParams={searchParams} />
      <TendersList data={res.data} />
    </div>
  );
};

export default MyTenders;
