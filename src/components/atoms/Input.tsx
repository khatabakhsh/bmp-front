'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-white font-bold text-lg leading-[20px] mb-6">{label}</label>
        )}
        <input
          type={type}
          className={cn(
            'w-full text-white placeholder:text-[#C5C5C5] border-0 border-b border-[#2F2F2F] focus:border-b-[#FFCC00] focus:ring-0 focus:outline-none text-lg font-normal pb-4 mb-2',
            error && 'border-b-red-500 focus:border-b-red-500',
            className
          )}
          ref={ref}
          suppressHydrationWarning
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
