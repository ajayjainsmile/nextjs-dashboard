import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-gray-800",
        outline: "border border-gray-300 bg-white hover:bg-gray-100",
      },
      size: {
        default: "h-10 px-6 py-2",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
