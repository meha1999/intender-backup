import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  setCurrentPage: any;
  count?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  currentPage,
  setCurrentPage,
}) => {
  const showNumbers = pageNumberSetGenerator(currentPage, pageCount);

  return (
    <div className="flex flex-row-reverse items-center gap-1 overflow-auto rounded-xl bg-white px-5 py-4">
      <button className="flex h-full w-[30px] items-center justify-center rounded-full text-sm text-dark-gray">
        <MdArrowBackIosNew />
      </button>
      {showNumbers.map((index) => (
        <div
          key={index}
          className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-xs font-bold ${
            currentPage === index
              ? "bg-weeny text-white"
              : "bg-white text-dark-gray"
          }`}
          onClick={() => setCurrentPage(index)}
        >
          {index}
        </div>
      ))}
      <button className="flex h-full w-[30px] items-center justify-center rounded-full text-sm text-dark-gray">
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default Pagination;

const pageNumberSetGenerator = (
  currentPage: number,
  totalPage: number,
): Array<number | string> => {
  const etcPlaceLookUp = {
    1: "end",
    2: "end",
    3: "end",
    4: "end",
    [totalPage - 3]: "start",
    [totalPage - 2]: "start",
    [totalPage - 1]: "start",
    [totalPage]: "start",
  };
  const pageNumbers = [...Array.from({ length: totalPage }, (i, k) => k + 1)];

  let showNumbers: (string | number)[] = pageNumbers.splice(0, 5);
  if (totalPage > 5) {
    if (etcPlaceLookUp[currentPage] === "end") {
      showNumbers = [1, 2, 3, 4, 5, "...", totalPage];
    }
    if (etcPlaceLookUp[currentPage] === "start") {
      showNumbers = [
        1,
        "...",
        totalPage - 4,
        totalPage - 3,
        totalPage - 2,
        totalPage - 1,
        totalPage,
      ];
    }
    if (!etcPlaceLookUp[currentPage]) {
      showNumbers = [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPage,
      ];
    }
  } else {
    return showNumbers;
  }
  return currentPage <= totalPage ? showNumbers : ["error"];
};
