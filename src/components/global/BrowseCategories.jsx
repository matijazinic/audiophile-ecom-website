import { productCategories } from "@/constants";
import { mobileToggle } from "@/state";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiChevronRight } from "react-icons/hi";

export default function BrowseCategories({ isMobileMenu }) {
  const [mobileOpen, setMobileOpen] = useAtom(mobileToggle);
  console.log(mobileOpen);
  return (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-10 items-center justify-center">
      {productCategories.map((item) => {
        return (
          <li
            key={item.title}
            className=" bg-[#f1f1f1] shadow-lg relative p-6 w-full md:w-60 lg:w-96 rounded-md mt-10"
          >
            <Link
              onClick={() => setMobileOpen(false)}
              href={item.url}
              className="flex flex-col items-center justify-center group"
            >
              <Image
                src={item.image.src}
                width={isMobileMenu ? item.image.width : item.image.width * 1.4}
                height={
                  isMobileMenu ? item.image.height : item.image.height * 1.4
                }
                alt={item.title}
                className="object-contain absolute -top-9"
              />
              <p
                className={`uppercase text-sm lg:text-lg tracking-[1px] lg:tracking-[2px] font-bold ${
                  isMobileMenu ? "mt-12" : "mt-20"
                } transition-all`}
              >
                {item.title}
              </p>
              <p className="uppercase text-sm text-black/50 tracking-[1px] lg:tracking-[2px] font-bold group-hover:text-brand mt-4 transition-all">
                Shop{" "}
                <HiChevronRight
                  size={20}
                  className="inline text-brand text-base -mt-[1.5px]"
                />
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
