import React, { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  return (
    <input
      className="border border-[#dedede] rounded w-full h-[40px] p-1 font-raleway font-normal"
      ref={ref}
      {...props}
    />
  );
});
