import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Cart from "../cart/Cart";
import { atom, useAtom, useAtomValue, useSetAtom, useStore } from "jotai";
import { cartAtom, cartToggle, mobileToggle } from "@/state";
import { productCategories } from "@/constants";
import BrowseCategories from "./BrowseCategories";
import { useIsHome } from "@/helpers/isHome";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useAtom(mobileToggle);
  const [cartOpen, setCartOpen] = useAtom(cartToggle);
  const cartAmount = useAtomValue(cartAtom).length;
  const home = useIsHome();

  useEffect(() => {
    mobileOpen || cartOpen
      ? (document.body.className = "overflow-hidden bg-[#fafafa]")
      : (document.body.className = "overflow-auto bg-[#fafafa]");
  }, [mobileOpen, cartOpen]);

  const DesktopMenuLinks = () => {
    return (
      <div
        className={`hidden absolute lg:relative top-24 right-0 w-full lg:w-auto lg:inset-0 shadow-xl lg:shadow-none rounded-lg lg:rounded-none bg-white lg:bg-transparent text-black lg:text-white p-4 sm:p-6 md:p-8 lg:p-0 lg:flex flex-col lg:flex-row mx-auto gap-10 z-10`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-10 items-center justify-center">
          <li className="hidden lg:block">
            <Link
              href="/"
              className="uppercase text-sm tracking-[1px] lg:tracking-[2px] font-bold hover:text-brand transition-all"
            >
              Home
            </Link>
          </li>
          {productCategories.map((item) => {
            return (
              <li key={item.title} className="hidden lg:block">
                <Link
                  href={item.url}
                  className="uppercase text-sm tracking-[1px] lg:tracking-[2px] font-bold hover:text-brand transition-all"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <header className={`${home ? "bg-transparent" : "bg-black"} z-20 relative`}>
      <nav
        className="container mx-auto py-8 lg:py-12 px-4 md:px-8 lg:px-8 relative border-b border-b-white/10"
        aria-label="Main navigation"
        id="navbar"
      >
        <div className="container mx-auto flex flex-row items-center justify-between md:justify-start lg:justify-between">
          <button
            onClick={() => {
              setCartOpen(false);
              setMobileOpen((prev) => !prev);
            }}
            className="group lg:hidden"
            aria-label="Mobile navigation"
          >
            {mobileOpen ? (
              <AiOutlineClose color="white" size={32} />
            ) : (
              <AiOutlineMenu color="white" size={32} />
            )}
          </button>
          <div className="ml-auto md:ml-8 lg:ml-0">
            <Link
              href="/"
              onClick={() => {
                setCartOpen(false);
                setMobileOpen(false);
              }}
              aria-label="Logo link - Home"
            >
              <Image
                src="/assets/shared/desktop/logo.svg"
                width={143}
                height={25}
                className="object-cover"
                alt="Website logo"
              />
            </Link>
          </div>
          <DesktopMenuLinks />
          <button
            onClick={() => {
              setMobileOpen(false);
              setCartOpen((prev) => !prev);
            }}
            className="ml-auto relative"
            aria-label="Shopping cart"
          >
            <AiOutlineShoppingCart color="white" size={32} />
            {cartAmount > 0 && (
              <p className="absolute -top-2 -right-2 bg-red-500 text-sm rounded-full w-5 h-5 flex justify-center items-center text-white">
                {cartAmount}
              </p>
            )}
          </button>
        </div>
      </nav>
      {cartOpen && <Cart />}
      {mobileOpen && (
        <div className="lg:hidden absolute bg-black/50 top-24 inset-0 h-[100dvh] w-full z-30">
          <div className="container mx-auto px-4 relative lg:top-8">
            <div className="mt-4 rounded-lg p-10 md:py-16 bg-white w-auto lg:w-[32rem] md:mr-0 mx-auto z-20">
              <BrowseCategories isMobileMenu={true} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
