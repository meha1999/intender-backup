import { useZustandStore } from "@/store";

const Tags = () => {
  const {
    userProfile: { company },
  } = useZustandStore();

  return (
    <div className="flex w-full flex-col gap-2">
      <p className="text-xl font-bold text-black">{"برچسب ها"}</p>
      <div className="flex flex-wrap items-center gap-2">
        {company?.tags.map((item) => (
          <div
            className="bg-light-weeny px-6 py-2 text-center text-sm text-weeny rounded-3xl"
            key={item.id}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
