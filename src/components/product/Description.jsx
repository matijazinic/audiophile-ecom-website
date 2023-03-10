import { cartAtom } from "@/state";
import { useAtomValue } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import AddToCart from "../cart/AddToCart";

export default function Description({ item }) {
  const cart = useAtomValue(cartAtom);
  const router = useRouter();
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
      <div className="mt-12 self-start px-4">
        <button
          onClick={() => router.back()}
          className="transition-all hover:text-brand"
        >
          Go back
        </button>
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
