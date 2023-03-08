import Image from "next/image";
import Input from "./Input";
import PaymentMethodFields from "./PaymentMethodFields";

export default function PaymentDetails({ register, errors, watch }) {
  const paymentMethod = watch("paymentMethod");

  return (
    <div>
      <h2 className="font-medium uppercase text-brand mb-8">Payment Details</h2>
      <div className="md:grid md:grid-cols-2 md:gap-8">
        <p className="font-bold text-sm mb-6">Payment Method</p>
        <PaymentMethodFields register={register} errors={errors} />
      </div>
      {paymentMethod === "eMoney" && (
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8 mt-12">
          <Input
            id={"eMoneyNumber"}
            label="e-Money Number"
            type="text"
            errors={errors}
            register={register}
          />
          <Input
            id={"eMoneyPin"}
            label="e-Money PIN"
            type="text"
            errors={errors}
            register={register}
          />
        </div>
      )}
      {paymentMethod === "cash" && (
        <div className="mt-12 flex flex-col md:flex-row items-center gap-8">
          <Image
            src={"/assets/checkout/icon-cash-on-delivery.svg"}
            width={48}
            height={48}
            alt={"Cash on Delivery"}
          />
          <p className="text-black/50">
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </div>
  );
}
