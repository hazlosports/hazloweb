import * as React from "react";

import { clsx } from "clsx";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={clsx(
          "bg-[#21242A] w-full rounded-lg border border-[#D9D9D9] text-white text-base px-2.5 h-[45px] placeholder-[#888]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
