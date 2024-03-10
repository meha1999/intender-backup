import { TiEdit } from "react-icons/ti";

const Profile = () => {
  return (
    <div className="flex flex-col gap-7 px-12 py-16">
      <p className="text-lg font-bold text-brand">{"اطلاعات شرکت"}</p>
      <div className="flex flex-col gap-2.5">
        <p className="font-bold text-brand">{"راه های ارتباطی"}</p>
        <div className="flex flex-col gap-4 rounded-xl bg-milky px-6 py-4">
          <div className="flex justify-between">
            <div className="flex w-1/4 flex-col items-center gap-4">
              <p className="text-sm font-bold text-dark-gray">{"شماره تماس"}</p>
              <div className="flex items-center gap-11 text-sm font-bold text-black">
                <p>{"021-7777**77"}</p>
                <p>{"0912-52**111"}</p>
              </div>
            </div>
            <div className="h-16 border border-secondary-light" />
            <div className="flex w-1/4 flex-col items-center gap-4">
              <p className="text-sm font-bold text-dark-gray">
                {"پست الکترونیک"}
              </p>
              <p className="flex items-center gap-11 text-sm font-bold text-black">
                {"ez@gmail.com"}
              </p>
            </div>
            <div className="h-16 border border-secondary-light" />
            <div className="flex w-1/4 flex-col items-center gap-4">
              <p className="text-sm font-bold text-dark-gray">{"کد پستی"}</p>
              <p className="flex items-center gap-11 text-sm font-bold text-black">
                {"***1216511"}
              </p>
            </div>
            <div className="h-16 border border-secondary-light" />
            <div className="flex w-1/4 cursor-pointer items-center justify-center gap-2 text-weeny">
              <p className="text-xs font-bold">{"ویرایش اطلاعات"}</p>
              <TiEdit />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-dark-gray">{"نشانی شرکت"}</p>
            <p className="text-xs text-black">
              {
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. "
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
