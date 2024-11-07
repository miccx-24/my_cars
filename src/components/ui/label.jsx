import React from 'react';

export function Label({ className, children, ...props }) {
  return (
    <label
      className={`text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
} 