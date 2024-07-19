"use client";
import SearchInput from "@/components/common/SearchInput";
import { BsSearch } from "react-icons/bs";
import { companyServiceHandler } from "@/services/company.service";
import useToggleSearchParam from "@/utils/useToggleSearchParam";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";

type Inputs = {
  search: string;
};

const TenderSearch = () => {
  const searchParams = useSearchParams();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({ values: { search: searchParams.get("search") ?? "" } });

  const search = useToggleSearchParam({ paramKey: "search" });
  return (
    <form
      onSubmit={handleSubmit((data) =>
        search.toggleAndPush({
          item: data.search,
        }),
      )}
    >
      <SearchInput
        hookFormProps={register("search")}
        placeHolder="جستجو مناقصه"
        Icon={
          <Button
            type="submit"
            className="cursor-pointer rounded-3xl border border-brand bg-brand px-5 py-2.5 text-center text-xl text-white hover:bg-white hover:text-brand"
          >
            <BsSearch />
          </Button>
        }
      />
    </form>
  );
};

export default TenderSearch;
