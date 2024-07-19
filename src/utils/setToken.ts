import { BaseService } from "@/services/base.service";
import { cookies } from "next/headers";

const setServerSideToken = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  BaseService.setToken(token || "");
};

export { setServerSideToken };
