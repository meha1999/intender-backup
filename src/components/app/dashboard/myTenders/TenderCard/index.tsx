import Button from "@/components/common/Button";
interface TenderCardProps extends TendersListItem {
  index: number;
}

const TenderCard: React.FC<TenderCardProps> = ({
  index,
  id,
  name,
  description,
  deadline,
  tender_type,
  services,
  project_name,
}) => {
  return (
    <div className="flex w-full gap-5 rounded-3xl bg-white px-6 py-5">
      <div className="flex w-3/12 items-center gap-5">
        <p className="text-sm font-bold text-dark-gray">{index + 1}</p>
        <div className="flex items-center gap-2">
          <div className="h-16 w-16 rounded-full border-4 border-brand">
            <div className="h-full rounded-full border-4 border-light-gray"></div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-black">{name}</p>
            <div className="text-xs font-bold text-dark-gray">
              {services.map((item, index) => (
                <p key={item.id}>
                  {!!index && " - "} {item.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border border-light-gray" />
      <div className="flex w-5/12 items-center text-xs font-bold text-dark-gray">
        {description}
      </div>
      <div className="border border-light-gray" />
      <div className="flex w-1/12 flex-col items-center justify-between">
        <p className="text-sm font-bold text-black">{"نوع مناقصه"}</p>
        <p
          className={`rounded-2xl px-3 py-2 text-xs font-bold ${tender_type === "PUBLIC" ? "bg-light-weeny text-weeny" : "bg-light-brand text-brand"}`}
        >
          {tender_type === "PUBLIC" ? "عمومی" : "محدود"}
        </p>
      </div>
      <div className="border border-light-gray" />
      <div className="flex w-2/12 flex-col items-center justify-center gap-1.5 text-xs">
        <div className={`flex items-center gap-1 font-bold text-green-500`}>
          <div className={`h-2 w-2 rounded-full bg-green-500`} />
          <p>{project_name}</p>
        </div>
        <p className="font-bold text-black">{deadline}</p>
        <p className="font-bold text-dark-gray">#{id}</p>
      </div>
      <div className="border border-light-gray" />
      <div className="flex w-1/12 items-center">
        <Button
          href={`/dashboard/myTenders/${id}`}
          className="w-full rounded-xl border border-brand bg-brand py-2 text-center text-xs font-bold text-white hover:bg-white hover:text-brand"
        >
          {"مشاهده بیشتر"}
        </Button>
      </div>
    </div>
  );
};

export default TenderCard;
