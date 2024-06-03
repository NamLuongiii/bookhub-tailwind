import * as React from 'react';
import { Feature } from './feature';

export interface IBookNewFeatureProps {
}

export function BookNewFeature (props: IBookNewFeatureProps) {
  return (
    <Feature title='Sách mới thêm vào hệ thống'>
        New books listing
    </Feature>
  );
}
