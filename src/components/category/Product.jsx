import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Product({ item, index }) {
  const ProductImage = ({ item, index }) => {
    return (
      <>
        <Image
          src={item.categoryImage.mobile}
          alt={item.name}
          height={352}
          width={327}
          className="block md:hidden"
        />
        <Image
          src={item.categoryImage.tablet}
          alt={item.name}
          height={352}
          width={689}
          className="hidden md:block lg:hidden"
        />
        <Image
          src={item.categoryImage.desktop}
          alt={item.name}
          height={560}
          width={540}
          className={`${
            (index + 1) % 2 === 1 ? "order-1" : "order-2 justify-self-end"
          } hidden lg:block`}
        />
      </>
    );
  };
  return (
    <div
      key={item.slug}
      className="flex flex-col justify-center items-center gap-10 lg:grid lg:grid-cols-2 lg:max-w-7xl lg:mx-auto"
    >
      <ProductImage item={item} index={index} />
      <div
        className={`${
          (index + 1) % 2 === 1 ? "lg:order-2" : "lg:order-1"
        } text-center lg:text-left`}
      >
        {item.new && (
          <p className="tracking-[10px] uppercase text-brand mb-8">
            New Product
          </p>
        )}
        <h2 className="text-3xl tracking-[2px] font-bold uppercase mb-8">
          {item.name}
        </h2>
        <p className="text-black/50 px-4 lg:px-0 mb-14">{item.description}</p>
        <Link
          href={`${item.category}/${item.slug}`}
          className="uppercase text-white text-[13px] font-bold tracking-[1px] bg-brand hover:bg-brand-light transition-all px-8 py-4"
        >
          See Product
        </Link>
      </div>
    </div>
  );
}
