import React from 'react';

type CheckboxVariantTypes = 'success' | 'error';
type CheckboxProps = {
  id?: string;
  value?: string;
  className?: string;
  variant: CheckboxVariantTypes;
  checked: boolean;
  onChange: () => void;
};

const Checkbox = ({ id, value, variant, checked, className, onChange }: CheckboxProps) => {
  const getClassName = (variant: CheckboxVariantTypes) => {
    switch (variant) {
      case 'success':
        return 'text-cyan-600 focus:ring-cyan-500 dark:focus:ring-cyan-800 checked:bg-cyan-600 dark:checked:bg-cyan-600';
      case 'error':
        return 'text-red-600 focus:ring-red-500 dark:focus:ring-red-800 checked:bg-red-600 dark:checked:bg-red-600';
    }
  };
  return (
    <input
      id={id}
      type="checkbox"
      onChange={onChange}
      checked={checked}
      value={value}
      className={`w-6 h-6 rounded-full focus:ring-2 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 ${getClassName(
        variant
      )} ${className}`}
    />
  );
};

export default Checkbox;
