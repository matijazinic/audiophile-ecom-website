import { useRouter } from "next/router";
import React from "react";
import data from "../../data.json";
import Description from "@/components/product/Description";
import Head from "next/head";
import AddToCart from "@/components/cart/AddToCart";
import Features from "@/components/product/Features";
import Box from "@/components/product/Box";
import Images from "@/components/product/Images";
import RelatedProducts from "@/components/product/RelatedProducts";
import BrowseCategories from "@/components/global/BrowseCategories";
import About from "@/components/global/About";

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
      <section>
        <Description item={item} />
      </section>
      <section className="mt-12 lg:mt-20">
        <div className="container mx-auto lg:grid lg:grid-cols-[3fr_1fr] lg:gap-20">
          <Features item={item} />
          <Box item={item} />
        </div>
      </section>
      <section className="mt-20 lg:mt-32">
        <Images item={item} />
      </section>
      <RelatedProducts item={item} />
      <section className="mt-20">
        <div className="container mx-auto px-6">
          <BrowseCategories isMobileMenu={false} />
        </div>
      </section>
      <section className="my-28 lg:my-40">
        <div className="container mx-auto px-6">
          <About />
        </div>
      </section>
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
