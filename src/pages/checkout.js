import CheckoutMain from "@/components/checkout/CheckoutMain";
import Head from "next/head";

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
      <section className="relative">
        <div className="container mx-auto px-8 mt-12 lg:mt-20 mb-28">
          <CheckoutMain />
        </div>
      </section>
    </>
  );
}
