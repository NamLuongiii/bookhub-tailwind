import * as React from 'react';

export interface IFeatureProps {
    title: string 
    children: React.ReactNode
}

export function Feature ({title, children}: IFeatureProps) {
  return (
    <div className='mb-8'>
      <h2>{title}</h2>
      <div>
        {children}
      </div>
    </div>
  );
}
