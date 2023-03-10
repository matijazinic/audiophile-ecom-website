import { formatter } from "@/constants";
import Image from "next/image";
import React from "react";

export default function SummaryItem({ data }) {
  return (
    <div className="flex items-start">
      <Image src={data.image.desktop} width={48} height={48} alt={data.name} />
      <div className="ml-2 lg:ml-6 font-bold pr-4 sm:pr-8">
        <p>{data.name}</p>
        <p className="text-black/50">{formatter.format(data.price)}</p>
      </div>
      <p className="ml-auto font-medium text-black/50">x{data.quantity}</p>
    </div>
  );
}
