import type { PropsWithChildren } from 'react';
import React from 'react';

import FoundationIcons from 'react-native-vector-icons/Foundation';

import * as S from './styles';
type ItemComponentProps = PropsWithChildren<{
  title: string;
}>;

export const ItemComponent = () => {
  return (
    <S.Container>
      <S.Image />
      <S.ContentCenterContainer>
        <S.Text>Aasd</S.Text>
        <S.Text>Aasd</S.Text>
      </S.ContentCenterContainer>
      <S.ContentRightContainer>
        <S.Touchable>
          <FoundationIcons name={'plus'} color={'black'} size={26} />
        </S.Touchable>
        <S.CounterContainer>
          <S.Text>1</S.Text>
        </S.CounterContainer>
        <S.Touchable>
          <FoundationIcons name={'minus'} color={'black'} size={26} />
        </S.Touchable>
      </S.ContentRightContainer>
    </S.Container>
  );
};
