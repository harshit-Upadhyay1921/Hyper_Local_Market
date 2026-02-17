import React from 'react';

const marginMap = {
  1: 'mb-1',
  2: 'mb-2',
  4: 'mb-4',
  10: 'mb-10',
  20: 'mb-20',
};
//hi
const textSizeMap = {
  sm: 'text-sm',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '4xl': 'text-4xl',
};

const Header = ({ margin = 10, textSize = 'xl', title = 'Footer' }) => {
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

export default Header;
