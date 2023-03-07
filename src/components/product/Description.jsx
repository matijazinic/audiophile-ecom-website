import { cartAtom } from "@/state";
import { useAtomValue } from "jotai";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCart from "../cart/AddToCart";

export default function Description({ item }) {
  console.log(item);
  const cart = useAtomValue(cartAtom);
  const itemAlreadyInCart = cart.some((it) => it.id === item.id);
  console.log(itemAlreadyInCart);
  console.log(cart);
  const ProductImage = ({ item }) => {
    return (
      <>
        <Image
          src={item.image.mobile}
          alt={item.name}
          height={352}
          width={327}
          className="block md:hidden"
        />
        <Image
          src={item.image.tablet}
          alt={item.name}
          height={352}
          width={689}
          className="hidden md:block lg:hidden"
        />
        <Image
          src={item.image.desktop}
          alt={item.name}
          height={560}
          width={540}
          className={`hidden lg:block`}
        />
      </>
    );
  };
  return (
    <div className="container mx-auto flex flex-col gap-4 items-center md:px-6">
      <div className="mt-6 self-start px-4">
        <Link href={`/${item.category}`}>Go back</Link>
      </div>
      <div className="mt-6 flex flex-col items-center gap-8 md:grid md:grid-cols-2 md:gap-4">
        <ProductImage item={item} />
        <div className="px-6 md:pr-0">
          {item.new && (
            <p className="tracking-[10px] uppercase text-brand mb-6">
              New Product
            </p>
          )}
          <h1 className="text-3xl font-bold uppercase tracking-[1px] mb-6">
            {item.name}
          </h1>
          <p className="text-base text-black/50 font-medium">
            {item.description}
          </p>
          <AddToCart item={item} />
        </div>
      </div>
    </div>
  );
}
