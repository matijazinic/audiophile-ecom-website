import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ZX7() {
  return (
    <div className="px-8 sm:px-16 lg:px-20 2xl:px-40 bg-[url(/assets/home/mobile/image-speaker-zx7.jpg)] md:bg-[url(/assets/home/tablet/image-speaker-zx7.jpg)] lg:bg-[url(/assets/home/desktop/image-speaker-zx7.jpg)] bg-cover h-[320px] pt-16 pb-12 rounded-md flex flex-col justify-center">
      <div className="flex flex-col justify-center text-black lg:text-left">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold uppercase">
          ZX7 Speaker
        </h2>
        <Link
          href={"/speakers/zx9-speaker"}
          className="uppercase text-black text-[13px] font-bold tracking-[1px] bg-transparent hover:bg-black hover:text-white border-black border-2 transition-all px-8 py-4 inline-block max-w-[180px] text-center mt-8 lg:mt-12"
        >
          See Product
        </Link>
      </div>
    </div>
  );
}
