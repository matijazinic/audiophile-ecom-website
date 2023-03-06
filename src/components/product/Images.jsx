import Image from "next/image";
import React from "react";

export default function Images({ item }) {
  console.log(item.gallery);
  const images = Object.values(item.gallery);
  console.log(images);
  const ProductImage = ({ it, item }) => {
    return (
      <>
        <Image
          src={it.mobile}
          alt={item.name}
          height={352}
          width={327}
          className="block md:hidden rounded-xl"
        />
        <Image
          src={it.tablet}
          alt={item.name}
          height={352}
          width={689}
          className="hidden md:block lg:hidden rounded-xl"
        />
        <Image
          src={it.desktop}
          alt={item.name}
          height={560}
          width={540}
          className="hidden lg:block rounded-xl"
        />
      </>
    );
  };
  return (
    <section className="container mx-auto flex flex-col mt-20">
      <div className="px-6 flex flex-col gap-6">
        {images.map((it) => {
          return <ProductImage key={it.desktop} item={item} it={it} />;
        })}
      </div>
    </section>
  );
}
