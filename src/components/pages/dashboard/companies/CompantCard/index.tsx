import Button from "@/components/common/Button";

const CompanyCard: React.FC<CompanyListType> = ({
  id,
  name_en,
  name,
  national_id,
}) => {
  return (
    <div className="relative flex flex-col items-center gap-6 rounded-3xl bg-white p-5 shadow-company-card">
      <div className="flex flex-col items-center gap-1">
        <div className="h-20 w-20 rounded-full border-4 border-brand">
          <div className="h-full w-full rounded-full border-4 border-light-gray bg-white"></div>
        </div>
        <p className="text-sm font-bold text-black">{name}</p>
        <p className="text-xs text-secondary-light">{name_en}</p>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="text-sm font-semibold text-black">{"محصولات اصلی"}</p>
        <p className="text-sm font-semibold text-weeny">{national_id}</p>
      </div>
      <Button
        href={`/company/${id}`}
        className="flex w-full justify-center rounded-3xl border border-light-brand bg-light-brand py-2 font-semibold text-brand hover:bg-brand hover:text-light-brand"
      >
        {"مشاهده بیشتر"}
      </Button>
    </div>
  );
};

export default CompanyCard;
