import React from "react";
import Error from "./Error";

export default function Input({ id, label, type, errors, register }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline">
        <label
          htmlFor={id}
          className={`font-bold text-sm ${
            errors?.[id] ? "text-red-500" : "text-black"
          }`}
        >
          {label}
        </label>
        {errors?.[id] && <Error message={errors[id].message} />}
      </div>
      <input
        type={type}
        id={id}
        {...register(id)}
        className={`w-full px-6 py-4 border-2 ${
          errors?.[id]
            ? "border-red-500 outline-1 outline-red-500"
            : "border-black/20"
        } outline-transparent focus-visible:border-brand focus:border-brand rounded-lg`}
      />
    </div>
  );
}
