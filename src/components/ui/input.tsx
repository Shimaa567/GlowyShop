import type * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  containerClassName?: string;
}

function Input({
  className,
  containerClassName,
  type,
  startIcon,
  endIcon,
  ...props
}: InputProps) {
  if (!startIcon && !endIcon) {
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-12 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
    );
  }

  return (
    <div className={cn("relative w-full", containerClassName)}>
      {startIcon && (
        <div className="absolute -translate-y-1/2 pointer-events-none left-3 top-1/2 text-muted-foreground">
          {startIcon}
        </div>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-12 w-full min-w-0 rounded-md border bg-transparent py-1 text-base  transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          startIcon && "pl-9",
          endIcon && "pr-9",
          !startIcon && !endIcon && "px-3",
          className
        )}
        {...props}
      />
      {endIcon && (
        <div className="absolute -translate-y-1/2 pointer-events-none right-3 top-1/2 text-muted-foreground">
          {endIcon}
        </div>
      )}
    </div>
  );
}

export { Input };
