import React from 'react'

type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-md px-4 py-2 bg-slate-900 text-slate-100 hover:bg-slate-700">
      {children}
    </button>
  );
}

export default Button;