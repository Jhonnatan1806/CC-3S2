import React from 'react'

type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props}>
      {children}
    </button>
  );
}

export default Button;