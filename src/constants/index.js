import * as yup from "yup";

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

export const checkoutSchema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    // .min(1, "This field is required")
    .required("This field is required")
    .matches(
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      "Please enter a valid email address"
    ),
  phone: yup
    .string()
    .required("This field is required")
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      "Please enter a valid phone number"
    ),
  address: yup.string().required("This field is required"),
  zipCode: yup
    .string()
    .required("This field is required")
    .matches(/^[0-9]*$/, "Please enter a valid ZIP Code"),
  city: yup.string().required("This field is required"),
  country: yup.string().required("This field is required"),
  paymentMethod: yup.string().required("Please select a payment method"),
  eMoneyNumber: yup.string().when("paymentMethod", {
    is: "eMoney",
    then: () => yup.string().required("Enter your e-Money number"),
  }),
  eMoneyPin: yup.string().when("paymentMethod", {
    is: "eMoney",
    then: () => yup.string().required("Enter your PIN"),
  }),
});
