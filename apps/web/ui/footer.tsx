import * as React from 'react';
import { MaxWidth } from './max-width';
import { CATEGORY_LINKS } from '../lib/ constants';
import Link from 'next/link';

export interface IFooterProps {
}

export function Footer (props: IFooterProps) {
  return (
    <footer>
        <MaxWidth>
            <section>
                <label>Danh mục sách</label>
                {CATEGORY_LINKS.map(item => <Link key={item.name} href={item.href}><span className='border rounded-sm bg-slate-50 p-2 mr-2'>{item.name}</span></Link>)}
            </section>
        </MaxWidth>
    </footer>
  );
}
