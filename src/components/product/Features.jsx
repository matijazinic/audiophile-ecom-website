import React from "react";
import he from "he";

export default function Features({ item }) {
  console.log(item.features);
  return (
    <div className="flex flex-col mt-20">
      <div className="px-6">
        <h2 className="text-3xl font-bold uppercase">Features</h2>

        {item.features.map((it) => (
          <p key={it} className="mt-6 lg:mt-10 text-black/50">
            {it}
          </p>
        ))}
      </div>
    </div>
  );
}
