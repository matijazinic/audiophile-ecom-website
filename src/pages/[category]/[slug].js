import { useRouter } from "next/router";
import React from "react";
import data from "../../data.json";

export default function Product({ item }) {
  const router = useRouter();
  const { category, slug } = router.query;
  return (
    <div>
      Product {slug} from category &apos;{category}&apos;
    </div>
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
