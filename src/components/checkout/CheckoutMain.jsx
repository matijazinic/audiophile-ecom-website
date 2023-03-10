import { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "./Form";
import Summary from "./Summary";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema, formatter } from "@/constants";
import Modal from "react-modal";
import Image from "next/image";
import { useAtom, useSetAtom } from "jotai";
import { cartAtom, cartToggle } from "@/state";
import Link from "next/link";
import SummaryData from "./SummaryData";
import { useRouter } from "next/router";
Modal.setAppElement("#navbar");

export default function CheckoutMain() {
  const {
    register,
    handleSubmit,
    watch,
    reset,

    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(checkoutSchema), mode: "onTouched" });
  const router = useRouter();
  const [cart, setCart] = useAtom(cartAtom);
  const setCartOpen = useSetAtom(cartToggle);
  const [summaryData, setSummaryData] = useState([]);
  const [userData, setUserData] = useState({});
  const [viewMore, setViewMore] = useState(false);
  const totalPrice = summaryData.reduce(
    (acc, item) => +acc + +item.price * +item.quantity,
    [0]
  );

  const onSubmit = (data) => {
    console.log("Form submitted");
    console.log(data);
    setUserData(data);
    setSummaryData(cart);

    setCart([]);
    setCartOpen(false);
    reset();
    setViewMore(false);

    return;
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="self-start px-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="transition-all hover:text-brand"
          >
            Go back
          </button>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center gap-12 lg:grid lg:grid-cols-2/1 lg:gap-6 xl:gap-8 lg:items-start">
          <Form register={register} errors={errors} watch={watch} />
          <Summary />
        </div>
      </form>
      {summaryData[0] && (
        <Modal
          isOpen={isSubmitSuccessful}
          style={{
            overlay: {
              position: "fixed",
              zIndex: 9999,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: "100dvh",
              width: "100dvw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            },
          }}
          className={
            "relative max-w-4xl max-h-[calc(100dvh-4rem)] overflow-y-auto"
          }
        >
          <div className="container mx-auto px-4">
            <div className="rounded-lg bg-white w-auto mx-auto z-20 md:py-8 xl:py-12">
              <div className="p-12 pb-6 flex flex-col gap-8">
                <Image
                  src={"/assets/checkout/icon-order-confirmation.svg"}
                  width={64}
                  height={64}
                  alt="Order Confirmation"
                />
                <h1 className="font-bold text-3xl lg:text-5xl uppercase">
                  Thank you for your order
                </h1>
                <p className="text-black/50 font-medium">
                  You will receive an email confirmation shortly at{" "}
                  <span className="font-bold">{userData?.email}</span>.
                </p>
                <div className="flex flex-col md:grid md:grid-cols-2">
                  <div className="bg-[#f1f1f1] px-4 md:px-6 py-12 rounded-tl-lg rounded-tr-lg md:rounded-bl-lg md:rounded-tr-none">
                    <SummaryData
                      data={summaryData}
                      viewMore={viewMore}
                      setViewMore={setViewMore}
                    />
                  </div>
                  <div className="bg-black pl-12 flex flex-col justify-center gap-4 pr-6 py-8 rounded-bl-lg rounded-br-lg md:rounded-bl-none md:rounded-tr-lg">
                    <p className="text-white/50 uppercase tracking-[1px] text-lg">
                      Grand total
                    </p>
                    <p className="text-white uppercase font-bold text-lg">
                      {formatter.format(totalPrice)}
                    </p>
                  </div>
                </div>
                <Link
                  href={"/"}
                  onClick={() => setSummaryData([])}
                  type="button"
                  className="uppercase text-white text-[13px] font-bold tracking-[1px] bg-brand hover:bg-brand-light text-center transition-all px-8 py-4 mt-4 xl:py-6 xl:text-base"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
