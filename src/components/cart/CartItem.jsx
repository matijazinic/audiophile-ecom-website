import { formatter } from "@/constants";
import { cartToggle } from "@/state";
import { useSetAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CartItem({ item, changeAmount }) {
  const setCartOpen = useSetAtom(cartToggle);

  return (
    <div className="flex items-center gap-4">
      <Image src={item.image.mobile} alt={item.name} height={64} width={64} />
      <div className="">
        <Link
          href={`/${item.category}/${item.slug}`}
          onClick={() => setCartOpen(false)}
          className="font-bold transition-all hover:text-brand"
        >
          {item.name}
        </Link>
        <p className="text-sm text-black/50 font-medium">
          {formatter.format(item.price)}
        </p>
      </div>
      <div className="flex ml-auto">
        <button
          className="bg-black/10 h-8 w-8"
          id={item.id}
          onClick={(e) => changeAmount(e, "decrease")}
        >
          -
        </button>
        <span className="bg-black/10 h-8 w-8 flex items-center justify-center font-bold">
          {item.quantity}
        </span>
        <button
          className="bg-black/10 h-8 w-8"
          id={item.id}
          onClick={(e) => changeAmount(e, "increase")}
        >
          +
        </button>
      </div>
    </div>
  );
}
