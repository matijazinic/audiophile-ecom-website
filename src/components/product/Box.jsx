import React from "react";

export default function Box({ item }) {
  return (
    <section className="container mx-auto flex flex-col mt-20">
      <div className="px-6">
        <h2 className="text-3xl font-bold uppercase">In the box</h2>
        <ul className="mt-6">
          {item.includes.map((it) => (
            <li key={it.item} className="mt-2 text-black/50">
              <span className="w-4 inline-block font-medium text-brand">
                {it.quantity}x
              </span>
              <span className="ml-6">{it.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
