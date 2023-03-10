import Image from "next/image";
import React from "react";

export default function Images({ item }) {
  const images = Object.values(item.gallery);
  const ProductImage = ({ it, item, index }) => {
    return (
      <>
        <Image
          src={it.mobile}
          alt={item.name}
          height={352}
          width={327}
          className="block md:hidden rounded-xl"
        />
        <div
          className={`relative hidden md:block lg:hidden rounded-xl ${
            index === 2 ? "row-span-2 order-2 h-[21rem]" : "h-40"
          } ${index === 1 && "order-3"}`}
        >
          <Image
            src={it.tablet}
            alt={item.name}
            fill
            className={`hidden md:block lg:hidden rounded-xl ${
              index === 2 && "row-span-2 order-2"
            } ${index === 1 && "order-3"}`}
          />
        </div>
        <div
          className={`relative hidden lg:block rounded-xl ${
            index === 2 ? "row-span-2 order-2 h-[592px]" : "h-[280px]"
          } ${index === 1 && "order-3"}`}
        >
          <Image
            src={it.desktop}
            alt={item.name}
            fill
            className={`hidden lg:block rounded-xl ${
              index === 2 && "row-span-2 order-2"
            } ${index === 1 && "order-3"}`}
          />
        </div>
      </>
    );
  };
  return (
    <div className="container mx-auto flex flex-col">
      <div className="px-6 flex flex-col gap-6 justify-center items-center md:grid md:grid-cols-[2fr_3fr] md:gap-4 lg:gap-6">
        {images.map((it, index) => {
          return (
            <ProductImage key={it.desktop} item={item} it={it} index={index} />
          );
        })}
      </div>
    </div>
  );
}
