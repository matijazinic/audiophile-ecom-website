import Form from "@/components/checkout/Form";
import Summary from "@/components/checkout/Summary";
import { cartAtom } from "@/state";
import { useAtomValue } from "jotai";
import Head from "next/head";
import React from "react";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Checkout - Audiophile Ecommerce Website</title>
        <meta
          name="description"
          content="Checkout - Audiophile Ecommerce Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <section>
        <div className="container mx-auto px-8 flex flex-col items-center justify-center gap-6 lg:grid lg:grid-cols-2/1 xl:grid-cols-3/1">
          <Form />
          <Summary />
        </div>
      </section>
    </>
  );
}
