import type { PropsWithChildren } from 'react';
import React from 'react';

import FoundationIcons from 'react-native-vector-icons/Foundation';

import * as S from './styles';
type ItemComponentProps = PropsWithChildren<{
  image: string;
  title: string;
  price: number;
  displayButtons: boolean;
  onPress: () => void;
}>;

export const ItemComponent = (props: ItemComponentProps) => {
  return (
    <S.Container onPress={props.onPress}>
      <S.Image source={props.image} />
      <S.ContentCenterContainer>
        <S.Text>{props.title}</S.Text>
        <S.Text>${props.price}</S.Text>
      </S.ContentCenterContainer>
      {props.displayButtons && (
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
      )}
    </S.Container>
  );
};
