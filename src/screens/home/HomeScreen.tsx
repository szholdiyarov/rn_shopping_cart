import type { PropsWithChildren } from 'react';

import * as S from './styles';
type HomeScreenProps = PropsWithChildren<{
  title: string;
}>;

export const HomeScreen = () => {
  return <S.Container />;
};
