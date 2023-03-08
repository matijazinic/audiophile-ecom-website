import Input from "./Input";

export default function ShippingInfo({ register, errors }) {
  return (
    <div>
      <h2 className="font-medium uppercase text-brand mb-8">Shipping info</h2>
      <div className="mb-6 md:mb-8">
        <Input
          id={"address"}
          label="Address"
          type="text"
          errors={errors}
          register={register}
        />
      </div>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8">
        <Input
          id={"zipCode"}
          label="ZIP Code"
          type="text"
          errors={errors}
          register={register}
        />
        <Input
          id={"city"}
          label="City"
          type="text"
          errors={errors}
          register={register}
        />
        <Input
          id={"country"}
          label="Country"
          type="text"
          errors={errors}
          register={register}
        />
      </div>
    </div>
  );
}
