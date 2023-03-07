import About from "@/components/global/About";
import BrowseCategories from "@/components/global/BrowseCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
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
      <section className="relative h-[600px] sm:h-[684px] md:h-[768px] 2xl:h-[900px] bg-black/50 -mt-[calc(6rem+2px)] lg:-mt-[calc(8rem+2px)] max-w-[2560px] mx-auto">
        <Hero />
      </section>
      <section className="mt-20">
        <div className="container mx-auto px-8">
          <BrowseCategories isMobileMenu={false} />
        </div>
      </section>
      <section className="mt-20 lg:mt-32">
        <div className="container mx-auto px-6 flex flex-col gap-8 md:gap-8 xl:gap-12">
          <FeaturedProducts />
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
