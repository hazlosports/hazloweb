"use client";

import React, { cloneElement, isValidElement } from "react";
import clsx from "clsx";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "destructive" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  asChild = false,
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      // Variant styles
      "bg-[linear-gradient(to_right,#0EA8F5,#692EF8)] text-white hover:bg-[linear-gradient(to_right,#0EA8F5,#692EF8)]/90":
        variant === "primary",
      "bg-[linear-gradient(to_right,#FFBD55,#FF7009)] text-white hover:bg-[linear-gradient(to_right,#FFBD55,#FF7009)]/90":
        variant === "secondary",
      "border border-border text-white bg-background hover:bg-background":
        variant === "outline",
      "bg-destructive text-destructive-foreground hover:bg-destructive/90":
        variant === "destructive",
      "text-white underline-offset-4 hover:underline": variant === "link",

      // Size styles
      "h-10 px-4 py-2": size === "default",
      "h-9 rounded-md px-3": size === "sm",
      "h-11 rounded-lg px-8": size === "lg",
      "h-10 w-10": size === "icon",
    },
    className
  );

  if (asChild && isValidElement(children)) {
    return cloneElement(children as React.ReactElement, {
      className: clsx(
        classes,
        (children as React.ReactElement).props.className
      ),
      ...props,
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

interface SubmitButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "outline" | "destructive" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  isPending: boolean;
}
export function SubmitButton({
  text,
  variant,
  size,
  className,
  isPending,
}: SubmitButtonProps) {
  return (
    <>
      {isPending ? (
        <Button
          disabled
          variant="outline"
          className={`w-fit ${className}`}
          size={size}
        >
          <Loader2 className="size-4 mr-2 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button
          className={`w-fit ${className}`}
          type="submit"
          variant={variant}
          size={size}
        >
          {text}
        </Button>
      )}
    </>
  );
}
