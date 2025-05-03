import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-full text-base transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black",
  {
    variants: {
      variant: {
        default: 'bg-black text-white hover:bg-neutral-800 focus-visible:ring-white font-bold',
        outline:
          'bg-transparent border border-black text-black hover:bg-black/5 focus-visible:ring-black',
      },
      size: {
        default: 'h-12 px-8',
        sm: 'h-10 px-6 text-sm',
        lg: 'h-[75px] px-10 text-lg',
        icon: 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  startIcon,
  endIcon,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {startIcon && <span className="mr-2 flex items-center">{startIcon}</span>}
      <span className="flex items-center">{children}</span>
      {endIcon && <span className="ml-2 flex items-center">{endIcon}</span>}
    </Comp>
  );
}

export { Button, buttonVariants };
