import { cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

type ButtonProps = HTMLAttributes<HTMLElement> &
  HTMLAttributes<HTMLButtonElement> & {
    variant?: "fill" | "outline";
  };

export function Button({ variant, ...props }: ButtonProps) {
  return <button className={buttonVariants({ variant })} {...props} />;
}

const buttonVariants = cva(
  "py-2 px4 rounded-md font-semibold hover:opacity-50",
  {
    variants: {
      variant: {
        fill: "bg-gradient-to-r from-primary-500 to-primary-700 text-black",
        outline: "bg-grayscale-700 text-white",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);
