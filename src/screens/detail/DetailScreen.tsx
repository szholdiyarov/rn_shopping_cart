import type { PropsWithChildren } from 'react';

import * as S from './styles';
type DetailScreenProps = PropsWithChildren<{
  title: string;
}>;

export const DetailScreen = () => {
  return <S.Container />;
};
