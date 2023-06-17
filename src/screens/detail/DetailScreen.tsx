import type { PropsWithChildren } from 'react';
import React from 'react';

import FoundationIcons from 'react-native-vector-icons/Foundation';

import { ItemComponent } from '../../components/item';

import * as S from './styles';
type DetailScreenProps = PropsWithChildren<{
  title: string;
}>;

export const DetailScreen = () => {
  return (
    <S.Container>
      <ItemComponent
        image={require('../../assets/image1.jpeg')}
        title={'asd'}
        price={12}
      />
      <S.DescriptionContainer>
        <S.Text>details of the product</S.Text>
      </S.DescriptionContainer>
      <S.BottomContainer>
        <S.Touchable>
          <FoundationIcons name={'plus'} color={'black'} size={26} />
        </S.Touchable>
        <S.CounterContainer>
          <S.Text>1</S.Text>
        </S.CounterContainer>
        <S.Touchable>
          <FoundationIcons name={'minus'} color={'black'} size={26} />
        </S.Touchable>
      </S.BottomContainer>
      <S.Button>
        <S.Text>Add to cart</S.Text>
      </S.Button>
    </S.Container>
  );
};
