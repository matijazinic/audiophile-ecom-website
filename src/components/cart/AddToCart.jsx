import { formatter } from "@/constants";
import { cartAtom } from "@/state";
import { useAtom, useSetAtom } from "jotai";
import React, { useState } from "react";

export default function AddToCart({ item }) {
  const [quantity, setQuantity] = useState(1);
  const setCart = useSetAtom(cartAtom);

  function addToCart(e) {
    const cartItem = {
      id: item.id,
      name: item.shortName,
      quantity: quantity,
      price: item.price,
      image: item.image,
      category: item.category,
      slug: item.slug,
    };
    const currentTarget = e.currentTarget;
    setCart((prev) => {
      if (prev.length > 0) {
        const exists = prev.some((it) => it.id === +currentTarget.id);

        return exists
          ? prev.map((it) => {
              return it.id === +currentTarget.id
                ? it.quantity === quantity
                  ? it
                  : { ...it, quantity: quantity }
                : it;
            })
          : prev.concat(cartItem);
      } else return [cartItem];
    });
  }

  return (
    <>
      <p className="text-xl font-bold">{formatter.format(item.price)}</p>
      <div className="flex mt-8">
        <div className="flex">
          <button
            className="bg-black/10 h-12 w-10"
            onClick={() => setQuantity((prev) => prev - 1)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="bg-black/10 h-12 w-10 flex items-center justify-center">
            {quantity}
          </span>

          <button
            className="bg-black/10 h-12 w-10"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button
          className="ml-auto uppercase text-white text-[13px] font-bold tracking-[1px] bg-brand hover:bg-brand-light transition-all px-8 py-4 h-12"
          id={item.id}
          onClick={(e) => addToCart(e)}
        >
          Add to cart
        </button>
      </div>
      {}
    </>
  );
}
