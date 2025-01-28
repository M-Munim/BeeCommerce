import Link from 'next/link';
import React from 'react';

const Button = ({ text, className, link = '#' }) => {
  return (
    <Link href={link}>
      <button className={`${className} capitalize font-semibold rounded-full h-11`} type="button">
        {text}
      </button>
    </Link>
  );
};

export default Button;