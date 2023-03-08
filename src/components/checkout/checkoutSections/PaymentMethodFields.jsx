import React from "react";

export default function PaymentMethodFields({ register, errors }) {
  console.log(errors);
  return (
    <div className="flex flex-col gap-6">
      <div
        className={`flex items-center pl-4 border-2 ${
          errors?.paymentMethod
            ? "border-red-500 outline-1 outline-red-500"
            : "border-black/20"
        } hover:border-brand rounded-lg cursor-pointer transition-all`}
      >
        <input
          {...register("paymentMethod")}
          type="radio"
          id="eMoney"
          value="eMoney"
          className={`h-6 w-6 p-4 border-4 accent-brand ${
            errors?.paymentMethod
              ? "border-red-500 outline-1 outline-red-500"
              : "border-black/20"
          } outline-transparent focus-visible:border-brand focus:border-brand rounded-lg`}
        />
        <label
          htmlFor="eMoney"
          className="w-full py-5 ml-4 text-sm text-black font-bold cursor-pointer transition-all"
        >
          e-Money
        </label>
      </div>
      <div
        className={`flex items-center pl-4 border-2 ${
          errors?.paymentMethod
            ? "border-red-500 outline-1 outline-red-500"
            : "border-black/20"
        } hover:border-brand rounded-lg cursor-pointer transition-all`}
      >
        <input
          {...register("paymentMethod")}
          type="radio"
          id="cash"
          value="cash"
          className={`h-6 w-6 p-4 border-4 accent-brand ${
            errors?.paymentMethod
              ? "border-red-500 outline-1 outline-red-500"
              : "border-black/20"
          } outline-transparent focus-visible:border-brand focus:border-brand rounded-lg`}
        />
        <label
          htmlFor="cash"
          className="w-full py-5 ml-4 text-sm text-black font-bold cursor-pointer transition-all"
        >
          Cash on Delivery
        </label>
      </div>
      {errors?.paymentMethod && (
        <label role="alert" className="text-red-500 text-sm">
          {errors?.paymentMethod.message}
        </label>
      )}
    </div>
  );
}
