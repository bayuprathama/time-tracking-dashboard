import React from 'react';

export default function Container({ children }) {
  return (
    <div className="w-full min-h-screen px-6 py-6 sm:grid place-center ">
      {children}
    </div>
  );
}
