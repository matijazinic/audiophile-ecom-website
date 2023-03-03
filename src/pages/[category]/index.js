import Products from "@/components/category/Products";
import Title from "@/components/category/Title";
import Image from "next/image";
import data from "../../data.json";

export default function Category({ items }) {
  return (
    <>
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
