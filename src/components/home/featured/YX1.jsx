import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ZX7() {
  return (
    <div className="rounded-md mb-10 flex flex-col md:grid md:grid-cols-2 justify-center gap-2 lg:gap-8">
      <div className="relative h-[320px] rounded-md">
        <Image
          src={"/assets/home/mobile/image-earphones-yx1.jpg"}
          fill
          alt="YX1 Earphones"
          className="block md:hidden rounded-md"
        />
        <Image
          src={"/assets/home/tablet/image-earphones-yx1.jpg"}
          height={320}
          width={339}
          alt="YX1 Earphones"
          className="hidden md:block lg:hidden rounded-md"
        />
        <Image
          src={"/assets/home/desktop/image-earphones-yx1.jpg"}
          fill
          alt="YX1 Earphones"
          className="hidden lg:block object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col justify-center text-black lg:text-left bg-[#F1F1F1] rounded-md px-8 sm:px-16 py-16 xl:pl-20 2xl:pl-32">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold uppercase">
          YX1 Earphones
        </h2>
        <Link
          href={"/earphones/yx1-earphones"}
          className="uppercase text-black text-[13px] font-bold tracking-[1px] bg-transparent hover:bg-black hover:text-white border-black border-2 transition-all px-8 py-4 inline-block max-w-[180px] text-center mt-8 lg:mt-12"
        >
          See Product
        </Link>
      </div>
    </div>
  );
}
