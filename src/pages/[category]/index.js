import Products from "@/components/category/Products";
import Title from "@/components/category/Title";
import { capitalize } from "@/hooks/capitalize";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import data from "../../data.json";

export default function Category({ items }) {
  const router = useRouter();
  const { category } = router.query;
  return (
    <>
      <Head>
        <title>{capitalize(category)} - Audiophile Ecommerce Website</title>
        <meta
          name="description"
          content={`${capitalize(category)} - Audiophile Ecommerce Website`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Title items={items} />
      <Products items={items} />;
    </>
  );
}

export async function getStaticPaths() {
  const paths = data.map((item) => ({
    params: { category: item.category },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const items = data
    .filter((item) => item.category === params.category)
    .sort((a, b) => b.id - a.id);

  return { props: { items } };
}
