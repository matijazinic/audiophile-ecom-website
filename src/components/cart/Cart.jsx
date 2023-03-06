import { formatter } from "@/constants";
import { cartAtom, cartToggle } from "@/state";
import { useAtom, useSetAtom } from "jotai";
import Link from "next/link";
import React from "react";
import CartItem from "./CartItem";

export default function Cart() {
  const setCartOpen = useSetAtom(cartToggle);
  const [cart, setCart] = useAtom(cartAtom);
  const totalPrice = cart.reduce(
    (acc, item) => +acc + +item.price * +item.quantity,
    [0]
  );

  function changeAmount(e, type) {
    setCart((prev) =>
      prev
        .map((item) =>
          +e.currentTarget.id === item.id
            ? {
                ...item,
                quantity:
                  type === "decrease" ? item.quantity - 1 : item.quantity + 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }
  console.log(cart);
  return (
    <div
      // onClick={() => setCartOpen(false)}
      className="absolute bg-black/20 top-24 inset-0 h-[100dvh] px-4 w-full z-10"
    >
      <div className="mt-4 rounded-lg bg-white w-auto mx-auto z-20">
        <div className="p-4 pb-6 flex flex-col gap-6">
          <div className="flex">
            <p className="font-bold text-lg">Cart</p>
            <button
              className="ml-auto underline text-black/50"
              onClick={() => {
                setCartOpen(false);
                setCart([]);
              }}
            >
              Remove all
            </button>
          </div>
          {cart.length <= 0 ? (
            <div>Your cart is empty</div>
          ) : (
            cart.map((item) => {
              return (
                <CartItem
                  key={item.name}
                  item={item}
                  changeAmount={changeAmount}
                />
              );
            })
          )}
          <div className="flex items-center mt-4">
            <p className="uppercase text-black/50 font-medium">Total</p>
            <p className="uppercase text-black text-lg font-bold ml-auto">
              {formatter.format(totalPrice)}
            </p>
          </div>
          <Link
            href="/checkout"
            className="uppercase text-white text-[13px] font-bold tracking-[1px] bg-brand hover:bg-brand-light text-center transition-all px-8 py-4"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
