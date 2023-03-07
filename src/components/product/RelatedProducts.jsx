import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

export default function RelatedProducts({ item }) {
  return (
    <section className="mt-28 lg:mt-40">
      <div className="container mx-auto flex flex-col items-center justify-center px-6">
        <h2 className="text-3xl font-bold uppercase text-center">
          You may also like
        </h2>
        <div className="mt-10 lg:mt-20 text-center md:grid md:grid-cols-3 md:gap-4 lg:gap-20">
          {item.others.map((it) => {
            return (
              <div key={it.name}>
                <Image
                  src={it.image.mobile}
                  height={120}
                  width={327}
                  alt={it.name}
                  className="block md:hidden"
                />
                <Image
                  src={it.image.tablet}
                  height={120}
                  width={327}
                  alt={it.name}
                  className="hidden md:block lg:hidden"
                />
                <Image
                  src={it.image.desktop}
                  height={120}
                  width={327}
                  alt={it.name}
                  className="hidden lg:block"
                />
                <h2 className="text-2xl font-bold uppercase text-center my-6 md:my-10">
                  {it.name}
                </h2>
                <Link
                  href={`/${it.category}/${it.slug}`}
                  className="uppercase text-white text-[13px] font-bold tracking-[1px] bg-brand hover:bg-brand-light transition-all px-8 py-4 inline-block mb-16"
                >
                  See product
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
