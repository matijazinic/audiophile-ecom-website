import { formatter } from "@/constants";
import { cartAtom } from "@/state";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddToCart({ item }) {
  const [quantity, setQuantity] = useState(1);
  const cart = useAtomValue(cartAtom);
  const setCart = useSetAtom(cartAtom);
  const itemAlreadyInCart = cart.some((it) => it.id === item.id);

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

    if (itemAlreadyInCart)
      toast.success(`Updated quantity of ${item.name}`, { autoClose: 3000 });
    else
      toast.success(`Item ${item.name} successfully added to cart`, {
        autoClose: 3000,
      });
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
    <div className="mt-8">
      <p className="text-xl font-bold">{formatter.format(item.price)}</p>
      <div className="flex mt-8">
        <div className="flex">
          <button
            className="bg-black/10 h-12 md:h-14 w-10 hover:text-brand disabled:text-black"
            onClick={() => setQuantity((prev) => prev - 1)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="bg-black/10 h-12 md:h-14 w-10 flex items-center justify-center">
            {quantity}
          </span>

          <button
            className="bg-black/10 h-12 md:h-14 w-10 hover:text-brand"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <div className="ml-auto relative">
          <button
            className="uppercase text-white text-[13px] font-bold tracking-[1px] bg-brand hover:bg-brand-light transition-all px-7 md:px-10 py-4 h-12 md:h-14"
            id={item.id}
            onClick={(e) => addToCart(e)}
          >
            Add to cart
          </button>
          {itemAlreadyInCart && (
            <p className="absolute text-yellow-600 top-12 md:top-14 flex items-center text-sm gap-1">
              <AiOutlineExclamationCircle /> Item already in cart
            </p>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
