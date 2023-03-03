import { capitalize } from "@/hooks/capitalize";
import { useRouter } from "next/router";
import React from "react";

export default function Title({ items }) {
  const router = useRouter();
  const { category } = router.query;

  return (
    <section className="bg-black">
      <div className="container mx-auto text-white text-center py-10">
        <h1 className="text-3xl tracking-[2px] font-bold uppercase">
          {category}
        </h1>
      </div>
    </section>
  );
}
