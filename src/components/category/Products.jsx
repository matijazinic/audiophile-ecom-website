import React from "react";
import Product from "./Product";

export default function Products({ items }) {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-28 lg:gap-40 lg:px-8 py-16">
        {items.map((item, index) => {
          return <Product key={item.name} item={item} index={index} />;
        })}
      </div>
    </>
  );
}
