import React from 'react';

const sizeMap = {
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl'
};

// Reusable Button Component
const Button = ({
  bgColor = 'bg-blue-500',
  textColor = 'text-white',
  size = 'md',
  text = 'Click Me',
  borderRadius = 'rounded-md',
  padding = 'p-3',
  onClick
}) => {
  const sizeClass = sizeMap[size] || sizeMap['md'];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${bgColor} ${textColor} ${sizeClass} ${borderRadius} ${padding} hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
