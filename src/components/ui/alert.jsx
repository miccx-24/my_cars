import React from 'react';

export function Alert({ className, children, variant = 'default', ...props }) {
  return (
    <div
      role="alert"
      className={`relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground ${
        variant === 'destructive' ? 'border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function AlertDescription({ className, children, ...props }) {
  return (
    <div
      className={`text-sm [&_p]:leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </div>
  );
} 