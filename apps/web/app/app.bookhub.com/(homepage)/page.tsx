'use client'

import * as React from 'react';
import { toast } from 'sonner';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div>
      <p>app.bookhub.com</p>
      <button onClick={() => {
        toast('hello')
      }}>toast sonner</button>
    </div>
  );
}
