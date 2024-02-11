'use client';

import clsx from 'clsx';
import {ReactNode} from 'react';

interface buttonProps {
  type?: 'button' | 'submit' | 'reset';
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
}

const Button = ({type, text, onClick, actionButton}: buttonProps) => (
  <>
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        actionButton && `rounded-full bg-orange-700 p-2 text-white`,
        `bg-orange-700 px-2 text-white`,
      )}>
      {text}
    </button>
  </>
);

export default Button;
