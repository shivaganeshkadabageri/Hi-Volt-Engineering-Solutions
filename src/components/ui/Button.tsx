import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-kod-indigo disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-kod-red text-white hover:opacity-90': variant === 'primary',
            'border border-kod-red text-kod-red bg-transparent hover:bg-kod-red hover:text-white': variant === 'secondary',
            'border border-gray-300 bg-transparent hover:bg-gray-100 text-kod-text': variant === 'outline',
            'hover:bg-gray-100 text-kod-text': variant === 'ghost',
            'h-9 px-4 py-2': size === 'default',
            'h-8 px-3 text-xs': size === 'sm',
            'h-10 px-8': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
