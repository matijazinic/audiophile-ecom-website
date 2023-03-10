import { formatter } from "@/constants";
import Image from "next/image";
import React from "react";
import SummaryItem from "./SummaryItem";

export default function SummaryData({ data, viewMore, setViewMore }) {
  return (
    <div className="flex flex-col gap-6">
      <SummaryItem data={data[0]} />
      {data.length > 1 &&
        viewMore &&
        data.slice(1).map((item) => {
          return <SummaryItem key={item.name} data={item} />;
        })}
      {data.length > 1 && (
        <>
          <hr className="border-1 border-black/10 mt-6" />
          <button
            onClick={() => setViewMore((prev) => !prev)}
            className="text-center text-black/50 font-bold text-sm transition-all hover:text-brand"
          >
            {viewMore ? "Show less" : `and ${data.length - 1} other item(s)`}
          </button>
        </>
      )}
    </div>
  );
}
