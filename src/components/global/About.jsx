import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2">
      <Image
        src={"/assets/shared/mobile/image-best-gear.jpg"}
        height={300}
        width={327}
        alt="Bringing you the best audio gear"
        className="object-cover block md:hidden rounded-md"
      />
      <Image
        src={"/assets/shared/tablet/image-best-gear.jpg"}
        height={300}
        width={689}
        alt="Bringing you the best audio gear"
        className="object-cover hidden md:block lg:hidden rounded-md"
      />
      <Image
        src={"/assets/shared/desktop/image-best-gear.jpg"}
        height={588}
        width={540}
        alt="Bringing you the best audio gear"
        className="object-cover hidden lg:block lg:order-2 lg:justify-self-end rounded-md"
      />

      <div className="mt-10 text-center lg:text-left md:px-16 lg:pl-0 lg:pr-20 lg:order-1">
        <h2 className="text-3xl lg:text-4xl lg:tracking-[1px] font-bold uppercase md:px-20 lg:px-0">
          Bringing you the <span className="text-brand">best</span> audio gear
        </h2>
        <p className="text-base lg:text-lg font-medium text-black/50 mt-8">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
