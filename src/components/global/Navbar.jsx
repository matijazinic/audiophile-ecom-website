import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mobileMenuItems = [
    {
      image: {
        src: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
        width: 100,
        height: 134,
      },
      title: "Headphones",
      url: "/headphones",
    },
    {
      image: {
        src: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
        width: 104,
        height: 131,
      },
      title: "Speakers",
      url: "/speakers",
    },
    {
      image: {
        src: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
        width: 132,
        height: 134,
      },
      title: "Earphones",
      url: "/earphones",
    },
  ];
  const MenuLinks = () => {
    return (
      <div
        className={`${
          mobileOpen ? "flex" : "hidden"
        } absolute lg:relative top-24 right-0 w-full lg:w-auto lg:inset-0 shadow-xl lg:shadow-none rounded-lg lg:rounded-none bg-white lg:bg-transparent text-black lg:text-white p-4 sm:p-6 md:p-8 lg:p-0 lg:flex flex-col lg:flex-row mx-auto gap-10 z-10`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-10 items-center justify-center">
          <li className="hidden lg:block">
            <Link
              href="/"
              className="uppercase text-sm tracking-[1px] lg:tracking-[2px] font-bold hover:underline hover:underline-offset-4"
            >
              Home
            </Link>
          </li>
          {mobileMenuItems.map((item) => {
            return (
              <li
                key={item.title}
                className="flex flex-col items-center justify-center bg-gray-100 lg:bg-transparent relative p-6 lg:p-0 w-full md:w-60 lg:w-auto rounded-md mt-10 lg:mt-0"
              >
                <Image
                  src={item.image.src}
                  width={item.image.width}
                  height={item.image.height}
                  alt={item.title}
                  className="lg:hidden object-contain absolute -top-9"
                />
                <a
                  href={item.url}
                  className="uppercase text-sm tracking-[1px] lg:tracking-[2px] font-bold hover:underline hover:underline-offset-4 mt-12 lg:mt-0"
                >
                  {item.title}
                </a>
                <a
                  href={item.url}
                  className="uppercase text-sm text-black/50 lg:text-white tracking-[1px] lg:tracking-[2px] font-bold hover:underline hover:underline-offset-4 mt-4 lg:hidden"
                >
                  Shop{" "}
                  <HiChevronRight
                    size={20}
                    className="inline text-brand text-base -mt-[1.5px]"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <header className="bg-black">
      <nav
        className="py-8 sm:pb-10 lg:py-12 px-4 lg:px-8 relative"
        aria-label="Main navigation"
      >
        <div className="container mx-auto flex flex-row items-center justify-between md:justify-start lg:justify-between">
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="group lg:hidden"
            aria-label="Mobile navigation"
          >
            <GiHamburgerMenu color="white" size={32} />
          </button>
          <div className="ml-auto md:ml-8 lg:ml-0">
            <Link href="/" aria-label="Logo link - Home">
              <Image
                src="/assets/shared/desktop/logo.svg"
                width={143}
                height={25}
                className="object-cover"
                alt="Website logo"
              />
            </Link>
          </div>
          <MenuLinks />
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="ml-auto"
            aria-label="Shopping cart"
          >
            <BsCart color="white" size={32} />
          </button>
        </div>
      </nav>
    </header>
  );
}
