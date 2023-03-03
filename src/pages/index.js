import Hero from "@/components/home/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Audiophile Ecommerce Website</title>
        <meta name="description" content="Audiophile Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Hero />
    </>
  );
}
