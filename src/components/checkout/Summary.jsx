import React from "react";
import { cartAtom } from "@/state";
import { useAtomValue } from "jotai";
import CartItem from "../cart/CartItem";
import { formatter } from "@/constants";
import Link from "next/link";

export default function Summary() {
  const cart = useAtomValue(cartAtom);
  const totalPrice = cart.reduce(
    (acc, item) => +acc + +item.price * +item.quantity,
    [0]
  );
  const shipping = 50;
  console.log(cart);
  return (
    <div className="mt-4 rounded-lg bg-white w-full">
      <div className="p-4 pb-6 flex flex-col gap-6">
        <div className="flex">
          <p className="font-bold text-lg uppercase">Summary</p>
        </div>
        {cart.length <= 0 ? (
          <div>Your cart is empty</div>
        ) : (
          cart.map((item) => {
            return <CartItem key={item.name} item={item} isCart={false} />;
          })
        )}
        {cart.length > 0 && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center mt-4">
              <p className="uppercase text-black/50 font-medium">Total</p>
              <p className="uppercase text-black text-lg font-bold ml-auto">
                {formatter.format(totalPrice)}
              </p>
            </div>
            <div className="flex items-center">
              <p className="uppercase text-black/50 font-medium">Shipping</p>
              <p className="uppercase text-black text-lg font-bold ml-auto">
                {formatter.format(shipping)}
              </p>
            </div>
            <div className="flex items-center">
              <p className="uppercase text-black/50 font-medium">
                VAT(Included)
              </p>
              <p className="uppercase text-black text-lg font-bold ml-auto">
                {formatter.format(totalPrice / 5)}
              </p>
            </div>
            <div className="flex items-center mt-6">
              <p className="uppercase text-black/50 font-medium">Grand total</p>
              <p className="uppercase text-brand text-lg font-bold ml-auto">
                {formatter.format(totalPrice + shipping)}
              </p>
            </div>
          </div>
        )}
        <Link
          href={cart.length <= 0 ? "/" : "/checkout"}
          onClick={() => setCartOpen(false)}
          className="uppercase text-white text-[13px] font-bold tracking-[1px] bg-brand hover:bg-brand-light text-center transition-all px-8 py-4"
        >
          {cart.length <= 0 ? "Start shopping" : "Continue & pay"}
        </Link>
      </div>
    </div>
  );
}
