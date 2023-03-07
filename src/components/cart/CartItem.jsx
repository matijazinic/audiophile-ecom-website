import { formatter } from "@/constants";
import { cartToggle } from "@/state";
import { useSetAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function CartItem({ item, changeAmount, isCart }) {
  const setCartOpen = useSetAtom(cartToggle);

  return (
    <div className="flex items-center gap-4">
      <Image
        src={item.image.mobile}
        alt={item.name}
        height={64}
        width={64}
        className="rounded"
      />
      <div className="">
        <Link
          href={`/${item.category}/${item.slug}`}
          onClick={() => setCartOpen(false)}
          className="font-bold transition-all hover:text-brand"
        >
          {item.name}
        </Link>
        <p className="text-sm text-black/50 font-bold">
          {formatter.format(item.price)}
        </p>
      </div>
      <div className="flex ml-auto">
        {isCart ? (
          <>
            <button
              className="bg-black/10 h-8 w-8 hover:text-brand transition-all"
              id={item.id}
              onClick={(e) => changeAmount(e, "decrease")}
            >
              -
            </button>
            <span className="bg-black/10 h-8 w-8 flex items-center justify-center font-bold">
              {item.quantity}
            </span>
            <button
              className="bg-black/10 h-8 w-8 hover:text-brand transition-all"
              id={item.id}
              onClick={(e) => changeAmount(e, "increase")}
            >
              +
            </button>
          </>
        ) : (
          <p className="text-black/50 font-bold">x{item.quantity}</p>
        )}
      </div>
    </div>
  );
}
