"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const useToggleSearchParam = ({ paramKey }: { paramKey: string }) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleAndPush = ({
    item,
    objectKey,
    resetPagination,
  }: {
    item: any;
    objectKey?: string;
    resetPagination?: boolean;
  }) => {
    // now you got a read/write object
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    if (!item && item !== 0) {
      current.delete(paramKey!);
    } else {
      current.set(paramKey!, objectKey ? item[objectKey] : item);
    }

    if (resetPagination) {
      current.set("page", "1");
    }

    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    push(`${pathname}${query}`);
  };

  return { toggleAndPush };
};

export default useToggleSearchParam;
