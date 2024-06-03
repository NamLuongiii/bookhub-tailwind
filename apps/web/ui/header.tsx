import * as React from 'react';
import { CATEGORY_LINKS } from '../lib/ constants';
import { MaxWidth } from './max-width';

export interface HeaderProps {
}

export function Header (props: HeaderProps) {
  return (
    <MaxWidth className='py-2 sticky top-0 border-b flex justify-between items-center'>
      <div className='inline-block w-6 aspect-video'>Logo</div>
      <ul className='flex items-center space-x-4'>
        <li>Home</li>
        <li>Danh mục sách</li>
      </ul>
    </MaxWidth>
  );
}
