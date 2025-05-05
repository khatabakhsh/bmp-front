import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-white font-bold text-base leading-[20px] mb-6">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full text-white placeholder:text-[#C5C5C5] border-0 border-b border-[#2F2F2F] focus:border-b-[#FFCC00] focus:ring-0 focus:outline-none text-lg font-normal pb-4 mb-2 min-h-[120px] resize-none',
            error && 'border-b-red-500 focus:border-b-red-500',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
