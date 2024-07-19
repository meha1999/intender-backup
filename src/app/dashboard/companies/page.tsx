import SearchInput from "@/components/common/SearchInput";
import SelectInput from "@/components/common/SelectInput";
import CompanyCard from "@/components/app/dashboard/companies/CompantCard";
import { listItemVariants, listVariants } from "@/utils/variants";
import { Suspense, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";
import CompanyList from "@/components/app/dashboard/companies/CompanyList";
import { companyServiceHandler } from "@/services/company.service";
import { Button } from "@nextui-org/react";
import CompanySearch from "@/components/app/dashboard/companies/CompanySearch";
import { useForm } from "react-hook-form";

const Companies = async ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  // const [filter, setFilter] = useState();
  // const [order, setOrder] = useState<"desc" | "asc">("asc");

  const res = await companyServiceHandler.getCompanies({ ...searchParams });

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <Suspense
            key={`search=${JSON.stringify(searchParams)}`}
            fallback={<></>}
          >
            <CompanySearch />
          </Suspense>
        </div>
        <div className="w-1/4">
          {/* <SelectInput
            data={[
              { text: "مناقصات برتر", value: "superior" },
              { text: "سابقه", value: "history" },
              { text: "محصول", value: "product" },
            ]}
            value={filter}
            setValue={setFilter}
            order={order}
            setOrder={setOrder}
          /> */}
        </div>
      </div>
      <div className="w-full border border-gray-200" />
      <CompanyList data={res.data} />
    </div>
  );
};

export default Companies;
