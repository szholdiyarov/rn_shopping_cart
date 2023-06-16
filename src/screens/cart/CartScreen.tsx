import type { PropsWithChildren } from 'react';

import * as S from './styles';
type CartScreenProps = PropsWithChildren<{
  title: string;
}>;

export const CartScreen = () => {
  return <S.Container />;
};
