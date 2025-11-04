import React from 'react';

const marginMap = {
  1: 'mt-1',
  2: 'mt-2',
  4: 'mt-4',
  10: 'mt-10',
  20: 'mt-20',
};
//hi
const textSizeMap = {
  sm: 'text-sm',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '4xl': 'text-4xl',
};

const Footer = ({ margin = 10, textSize = 'xl', title = 'Footer' }) => {
  const marginClass = marginMap[margin] || 'mt-10';
  const textSizeClass = textSizeMap[textSize] || 'text-xl';

  return (
    <div className={marginClass}>
      <p className={`${textSizeClass} font-extrabold tracking-tight text-slate-900`}>
        {title}
      </p>
    </div>
  );
};

export default Footer;
