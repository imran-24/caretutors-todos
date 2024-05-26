import React, { useEffect } from "react";
import Task from "./task";
import Masonry from "react-masonry-css";
import PaginationControls from "./pagination-control";
import { Params } from "../page";
import { useMediaQuery } from "usehooks-ts";

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
  data: {
    id: string;
    title: string;
    description: string;
  }[];
  onClick: (data: any) => void;
};

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  800:2,
  600: 1,
};

const TaskList = ({data, onClick, searchParams}: Props) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  // const []
  let page =  searchParams['page'] ?? '1'
  let per_page = searchParams['per_page'] ?? '9'


  const start = (Number(page) - 1) * Number(per_page) 
  const end = start + Number(per_page) 
  const entries = data.slice(start, end)

  return (
    <div className="flex-1 py-2  overflow-y-auto pr-2">
      <div className="pb-2 px-2">
        <h2>All Tasks</h2>
      </div>
      {/* <div  className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4"> */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid gap-x-2 gap-y-2 pl-9"
      >
        {entries.map((item) => (
          <div key={item.id} className="pb-2">
            <Task onSelect={(data) => onClick(data)} data={item} />
          </div>
        ))}
      </Masonry>
      <PaginationControls
        hasNextPage={end < data.length}
        hasPrevPage={start > 0}
        total={data.length}
      />

      {/* </div> */}
    </div>
  );
};

export default TaskList;
