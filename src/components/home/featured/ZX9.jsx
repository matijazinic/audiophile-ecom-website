import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ZX9() {
  const ProductImage = () => {
    return (
      <>
        <Image
          src={"/assets/home/mobile/image-speaker-zx9.png"}
          height={207}
          width={172}
          alt="ZX9 Speaker"
          className="block md:hidden"
        />
        <Image
          src={"/assets/home/tablet/image-speaker-zx9.png"}
          height={237}
          width={197}
          alt="ZX9 Speaker"
          className="hidden md:block lg:hidden"
        />
        <Image
          src={"/assets/home/desktop/image-speaker-zx9.png"}
          height={493}
          width={410}
          alt="ZX9 Speaker"
          className="hidden lg:block -mb-4 overflow-hidden z-0"
        />
      </>
    );
  };
  return (
    <div className="px-8 lg:px-16 xl:px-24 2xl:px-40 bg-brand bg-[url(/assets/home/desktop/pattern-circles.svg)] pt-16 pb-12 rounded-md lg:pb-0">
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <div className="flex flex-col justify-center lg:grid lg:grid-cols-2 items-center gap-8">
          <ProductImage />
          <div className="text-white text-center lg:text-left">
            <h2 className="mt-8 lg:mt-0 text-3xl lg:text-4xl xl:text-5xl font-bold uppercase">
              ZX9 Speaker
            </h2>
            <p className="mx-auto w-full md:w-3/5 lg:w-full mt-8 lg:mt-12">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link
              href={"/speakers/zx9-speaker"}
              className="uppercase text-white text-[13px] font-bold tracking-[1px] bg-black hover:bg-[#4C4C4C] transition-all px-8 py-4 inline-block mt-12 lg:mt-12"
            >
              See Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
