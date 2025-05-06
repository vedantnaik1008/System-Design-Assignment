import type { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import React from 'react';

type InputSize = 'sm' | 'md' | 'lg';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    inputSize?: InputSize;
    icon?: React.ReactNode;
    errorMessage?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
    (
        { inputSize = 'md', icon, className, errorMessage, label, ...props },
        ref
    ) => {
        const sizeClasses = {
            sm: 'px-2 py-1 text-sm',
            md: 'px-3 py-2 text-base',
            lg: 'px-4 py-3 text-lg'
        };

        return (
            <div className='relative w-full flex flex-col'>
                <label className='mb-2 text-sm font-medium dark:text-gray-200 text-gray-500'>
                    {label}
                </label>
                {icon && (
                    <span className='absolute left-3 top-1/2 -translate-y-[20%] text-gray-500 dark:text-gray-200'>
                        {icon}
                    </span>
                )}
                <input
                    ref={ref}
                    className={clsx(
                        'border rounded w-full focus:outline-none transition',
                        icon ? 'pl-10' : '',
                        sizeClasses[inputSize],
                        errorMessage ? 'border-red-500' : 'border-gray-300',
                        'focus:ring-2 focus:ring-blue-500',
                        className
                    )}
                    {...props}
                />
                {errorMessage && (
                    <p className='mt-1 text-sm text-red-500' role='alert'>
                        {errorMessage}
                    </p>
                )}
            </div>
        );
    }
);

TextInput.displayName = 'TextInput';
