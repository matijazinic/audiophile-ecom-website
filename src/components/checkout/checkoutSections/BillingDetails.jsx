import Input from "./Input";

export default function BillingDetails({ register, errors }) {
  return (
    <div>
      <h2 className="font-medium uppercase text-brand mb-8">Billing details</h2>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8">
        <Input
          id={"name"}
          label="Name"
          type="text"
          errors={errors}
          register={register}
        />
        <Input
          id={"email"}
          label="Email address"
          type="email"
          errors={errors}
          register={register}
        />
        <Input
          id={"phone"}
          label="Phone"
          type="text"
          errors={errors}
          register={register}
        />
      </div>
    </div>
  );
}
