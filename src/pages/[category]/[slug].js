import { useRouter } from "next/router";
import React from "react";
import data from "../../data.json";
import Description from "@/components/product/Description";
import Head from "next/head";
import AddToCart from "@/components/cart/AddToCart";
import Features from "@/components/product/Features";
import Box from "@/components/product/Box";
import Images from "@/components/product/Images";

export default function Product({ item }) {
  const router = useRouter();
  const { category, slug } = router.query;
  return (
    <>
      <Head>
        <title>{item.name} - Audiophile Ecommerce Website</title>
        <meta
          name="description"
          content={`${item.name} - Audiophile Ecommerce Website`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Description item={item} />
      <section className="container mx-auto px-6 mt-8">
        <AddToCart item={item} />
      </section>
      <Features item={item} />
      <Box item={item} />
      <Images item={item} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = data.map((item) => ({
    params: { category: item.category, slug: item.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const item = data.filter(
    (item) => item.slug === params.slug && item.category === params.category
  )[0];

  return { props: { item } };
}
