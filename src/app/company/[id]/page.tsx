import Button from "@/components/common/Button";
import Logo from "public/icons/dashboardLogo.svg";

const Comapny = () => {
  return (
    <div className="bg-company-background flex h-screen flex-col overflow-y-auto bg-light-gray bg-cover bg-center bg-no-repeat">
      <div className="min-h-60 bg-primary bg-company-header bg-no-repeat">
        <div className="container mx-auto flex h-full items-center justify-end">
          <Logo />
        </div>
      </div>
      <div className="container mx-auto -mt-10 flex flex-col gap-10">
        <div className="flex gap-10 rounded-3xl bg-white px-10 py-7 max-lg:flex-col max-lg:items-center">
          <div className="h-64 w-64 rounded-full border-8 border-brand">
            <div className="h-full rounded-full border-8 border-light-gray"></div>
          </div>
          <div className="flex grow flex-col justify-between">
            <div className="flex flex-col gap-8">
              <p className="text-2xl font-bold text-black max-lg:text-center">
                {"لورم ایپسوم"}
              </p>
              <div className="flex justify-between max-xl:flex-col">
                <div className="flex flex-col gap-5">
                  <div className="flex gap-7 max-lg:justify-center">
                    <p className="text-dark-gray text-lg font-medium">
                      {"دفتر مرکزی"}
                    </p>
                    <p className="font-medium text-black">
                      {"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم"}
                    </p>
                  </div>
                  <p className="text-dark-gray font-normal">
                    {
                      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است."
                    }
                  </p>
                </div>
                <div className="flex gap-12 max-xl:pt-3 max-lg:justify-center">
                  <div className="flex flex-col gap-3.5">
                    <p className="text-dark-gray text-xl font-medium">
                      {"صنعت"}
                    </p>
                    <p className="text-sm text-black">{"اینترنت"}</p>
                  </div>
                  <div className="flex flex-col gap-3.5">
                    <p className="text-dark-gray text-xl font-medium">
                      {"نوع"}
                    </p>
                    <p className="text-sm text-black">{"شرکت خصوصی"}</p>
                  </div>
                  <div className="flex flex-col gap-3.5">
                    <p className="text-dark-gray text-xl font-medium">
                      {"سال تاسیس"}
                    </p>
                    <p className="text-sm text-black">{"۱۳۸۴"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between max-lg:flex-col max-lg:gap-4 max-lg:pt-4">
              <div className="flex gap-8 text-lg text-black">
                <div className="flex gap-4 font-medium">
                  <p>{"تلفن:"}</p>
                  <p dir="ltr">{"+۹۸ ۹۳۳ ۶۵ ۷۳"}</p>
                </div>
                <p className="text-lg">{"وب‌سایت: www.netsazan.ir"}</p>
              </div>
              <Button className="rounded-2xl border border-brand bg-brand px-16 py-3.5 font-bold text-white hover:bg-white hover:text-brand">
                {"ثبت درخواست"}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="flex w-2/5 flex-col gap-10">
            <div className="flex flex-col gap-6 rounded-3xl bg-white px-10 py-7">
              <p className="font-bold text-black">{"معرفی محصولات"}</p>
              <div className="h-56 w-full rounded-3xl bg-gray-200"></div>
              <p className="text-dark-gray bg-light-gray px-5 py-4 rounded-3xl">
                {
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                }
              </p>
            </div>
            <div className="flex gap-10 rounded-3xl bg-white px-10 py-7"></div>
          </div>
          <div className="flex w-3/5 flex-col gap-10">
            <div className="flex  flex-col gap-8 rounded-3xl bg-white px-10 py-7">
              <div className="flex flex-col gap-5">
                <p className="font-bold text-black">{"درباره ما"}</p>
                <p className="text-dark-gray text-sm font-medium">
                  {
                    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                  }
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-bold text-black">{"تخصص ها"}</p>
                <p className="text-dark-gray text-sm font-medium">
                  {
                    "حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                  }
                </p>
              </div>
            </div>
            <div className="flex h-[1000px] gap-10 rounded-3xl bg-white px-10 py-7"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comapny;
