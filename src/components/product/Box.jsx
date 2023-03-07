import React from "react";

export default function Box({ item }) {
  return (
    <div className="flex flex-col mt-20 md:grid md:grid-cols-2 px-6 lg:flex">
      <h2 className="text-3xl font-bold uppercase">In the box</h2>
      <ul className="mt-6 md:mt-0 lg:mt-10 lg:flex lg:flex-col lg:gap-2">
        {item.includes.map((it) => (
          <li key={it.item} className=" text-black/50">
            <span className="w-4 inline-block font-medium text-brand">
              {it.quantity}x
            </span>
            <span className="ml-6">{it.item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
