import * as React from 'react';

export function MaxWidth ({children}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className='max-w-lg mx-auto'>
      {children}
    </div>
  );
}
