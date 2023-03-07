export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const productCategories = [
  {
    image: {
      src: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
      width: 100,
      height: 134,
    },
    title: "Headphones",
    url: "/headphones",
  },
  {
    image: {
      src: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
      width: 104,
      height: 131,
    },
    title: "Speakers",
    url: "/speakers",
  },
  {
    image: {
      src: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
      width: 132,
      height: 134,
    },
    title: "Earphones",
    url: "/earphones",
  },
];
