import { toast } from "react-toastify";

const errorHandler = (error: any) => {
  try {
    console.log();

    if (error.response.status != 500) {
      const errorObj = error?.response?.data;
      if (errorObj) {
        Object.keys(errorObj).map((item) => {
          errorObj[item].length && typeof errorObj[item] !== "string"
            ? errorObj[item].map((err: any) =>
                toast.error(
                  `${item === "non_field_errors" ? "" : `${item} : `}${err}`,
                ),
              )
            : toast.error(errorObj[item]);
        });
      } else {
        toast.error("خطای سرور");
      }
    } else {
      toast.error("خطای سرور");
    }
  } catch (error) {
    console.log(error);
    toast.error("خطای سرور");
  }
};

export default errorHandler;
