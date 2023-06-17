import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ItemComponent } from 'components/item';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import { addToCart, removeOneItem } from 'state/cartSlice';
import { RootState } from 'state/store';

import { Props } from '../../App';

import * as S from './styles';

export const DetailScreen = ({ route }: Props) => {
  const dispatch = useDispatch();
  const { id } = route!.params!;

  const items = useSelector((state: RootState) => state.shopReducer.items);
  const itemToDisplay = items.find(item => item.id === id);
  let quantity = 0;

  const cartItems = useSelector((state: RootState) => state.cartReducer.items);
  if (cartItems.length !== 0) {
    const indexOfItemInCart = cartItems.findIndex(
      cartItem => cartItem.shopItem.id === id,
    );
    if (indexOfItemInCart > -1) {
      quantity = cartItems[indexOfItemInCart].quantity;
    }
  }
  return (
    <S.Container>
      <ItemComponent
        displayButtons={false}
        image={itemToDisplay!.image}
        title={itemToDisplay!.title}
        price={itemToDisplay!.price}
      />
      <S.DescriptionContainer>
        <S.Text>details of the product</S.Text>
      </S.DescriptionContainer>
      <S.BottomContainer>
        <S.Touchable onPress={() => dispatch(addToCart(itemToDisplay!))}>
          <FoundationIcons name={'plus'} color={'black'} size={26} />
        </S.Touchable>
        <S.CounterContainer>
          <S.Text>{quantity}</S.Text>
        </S.CounterContainer>
        <S.Touchable onPress={() => dispatch(removeOneItem(itemToDisplay!))}>
          <FoundationIcons name={'minus'} color={'black'} size={26} />
        </S.Touchable>
      </S.BottomContainer>
      <S.Button onPress={() => dispatch(addToCart(itemToDisplay!))}>
        <S.Text>Add to cart</S.Text>
      </S.Button>
    </S.Container>
  );
};
