import BillingDetails from "./checkoutSections/BillingDetails";
import PaymentDetails from "./checkoutSections/PaymentDetails";
import ShippingInfo from "./checkoutSections/ShippingInfo";

export default function Form({ register, errors, watch }) {
  return (
    <div className="mt-4 rounded-lg bg-white w-full p-8 lg:p-12 2xl:p-16">
      <h1 className="text-3xl lg:text-4xl uppercase font-bold mb-8 lg:mb-12">
        Checkout
      </h1>
      <div className="flex flex-col gap-12">
        <BillingDetails register={register} errors={errors} />
        <ShippingInfo register={register} errors={errors} />
        <PaymentDetails register={register} errors={errors} watch={watch} />
      </div>
    </div>
  );
}
