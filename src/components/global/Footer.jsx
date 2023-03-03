import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  const year = new Date().getFullYear();
  const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Headphones",
      url: "/headphones",
    },
    {
      title: "Speakers",
      url: "/speakers",
    },
    {
      title: "Earphones",
      url: "/earphones",
    },
  ];
  return (
    <footer className="bg-[#101010]">
      <div className="container mx-auto px-4 md:px-8 lg:px-8">
        <div className="flex flex-col justify-center items-center md:block pb-12 relative">
          <div className="border-t-4 border-brand w-28 pb-16 lg:pb-20" />
          <div className="lg:flex flex-row">
            <Link href="/" aria-label="Logo link - Home">
              <Image
                src="/assets/shared/desktop/logo.svg"
                width={143}
                height={25}
                className="object-cover"
                alt="Website logo"
              />
            </Link>
            <nav className="mt-14 lg:mt-0 lg:ml-auto lg:justify-center">
              <ul className="text-center uppercase flex flex-col gap-6 md:flex-row">
                {navItems.map((item) => {
                  return (
                    <li
                      key={item.url}
                      className="text-white text-[13px] leading-6 font-bold tracking-[2px] transition-all hover:text-brand"
                    >
                      <Link key={item.url} href={item.url}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col items-center lg:grid lg:grid-cols-2 md:items-end">
            <p className="text-white/50 w-[80%] md:w-full mx-auto text-center md:text-left text-base font-medium mt-14 order-1">
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a week.
            </p>
            <SocialMedia className="mt-12 md:mt-20 lg:ml-auto flex justify-center items-center md:items-end lg:items-center gap-4 order-3 md:order-2" />
            <p className="text-white/50 md:ml-0 mx-auto text-center md:text-left text-base font-bold mt-12 md:-mt-5 lg:mt-16 order-2 md:order-3">
              Copyright {year}. All Rights Reserved
            </p>
          </div>
          <div className="block md:flex md:flex-row"></div>
        </div>
      </div>
    </footer>
  );
}
