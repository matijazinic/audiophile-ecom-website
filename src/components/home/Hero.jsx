import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroImage = () => {
  return (
    <>
      <Image
        src={"/assets/home/mobile/image-header.jpg"}
        alt="Hero image"
        fill
        className="absolute inset-0 h-full w-full mix-blend-multiply block md:hidden"
      />
      <Image
        src={"/assets/home/tablet/image-header.jpg"}
        alt="Hero image"
        fill
        className="absolute inset-0 h-full w-full mix-blend-multiply hidden md:block lg:hidden"
      />
      <Image
        src={"/assets/home/desktop/image-hero.jpg"}
        alt="Hero image"
        fill
        className="absolute inset-0 h-full w-full mix-blend-multiply hidden lg:block"
      />
    </>
  );
};

export default function Hero() {
  return (
    <section className="relative h-[600px] sm:h-[684px] md:h-[768px] 2xl:h-[900px] bg-black/50 -mt-[calc(6rem+2px)] lg:-mt-[calc(8rem+2px)] max-w-[2560px] mx-auto">
      <div className="container mx-auto">
        <HeroImage />
        <div className="pt-[calc(6rem+2px)] md:pt-[calc(8rem+2px)] relative z-10 text-white text-center lg:text-left">
          <div className="flex flex-col justify-center items-center lg:items-start h-[calc(600px-8rem+2px)] sm:h-[calc(684px-8rem+2px)] md:h-[calc(768px-8rem+2px)] max-w-md w-[80%] mx-auto lg:ml-8 xl:ml-8">
            <p className="tracking-[10px] uppercase text-white/50 mb-6">
              New Product
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl 2xl:leading-[1.2] font-bold tracking-[1.3px] uppercase mb-8 2xl:mb-12">
              XX99 Mark II Headphones
            </h1>
            <p className="font-medium text-[15px] leading-[25px] text-white/60 mb-12 2xl:mb-16">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link
              href={"/headphones/xx99-mark-two-headphones"}
              className="uppercase text-white text-[13px] font-bold tracking-[1px] bg-brand hover:bg-brand-light transition-all px-8 py-4"
            >
              See Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
