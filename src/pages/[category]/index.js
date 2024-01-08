import Products from "@/components/category/Products";
import Title from "@/components/category/Title";
import About from "@/components/global/About";
import BrowseCategories from "@/components/global/BrowseCategories";
import { capitalize } from "@/helpers/capitalize";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import data from "../../data.json";

export default function Category({ items }) {
  const router = useRouter();
  const { category } = router.query;

  const title = `${capitalize(category)} - Audiophile Ecommerce Website`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={`${capitalize(category)} - Audiophile Ecommerce Website`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Title items={items} />
      <section className="lg:mt-8">
        <Products items={items} />
      </section>
      <section className="mt-20">
        <div className="container px-6 mx-auto">
          <BrowseCategories isMobileMenu={false} />
        </div>
      </section>
      <section className="my-28 lg:my-40">
        <div className="container px-6 mx-auto">
          <About />
        </div>
      </section>
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
