const BlogSkeleton = () => {
  return (
    <div className="border-b border-slate-200 p-4 w-screen max-w-screen-md cursor-pointer ">
      <div className="flex gap-2">
        <div className="flex flex-col justify-center">
          <svg
            className="w-6 h-6 me-3 text-gray-200 dark:text-gray-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
        </div>
        <div className="font-extralight text-sm flex flex-col justify-center">
          <div className="h-2 bg-gray-200 rounded-full w-32"></div>
        </div>
        <div className="flex flex-col justify-center text-xs">&#9679;</div>
        <div className="font-thin text-slate-500 text-sm flex flex-col justify-center">
          <div className="h-2 bg-gray-200 rounded-full w-32"></div>
        </div>
      </div>
      <div className="text-xl font-semibold pt-2">
        <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
      </div>
      <div className="text-md font-extralight">
        <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
      </div>
      <div className="text-slate-500 text-sm font-thin pt-4">
        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
