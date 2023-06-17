import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FoundationIcons from 'react-native-vector-icons/Foundation';
import { addToCart, removeOneItem } from 'state/cartSlice';

import { Props } from '../../App';
import { ItemComponent } from '../../components/item';
import { RootState } from '../../state/store';

import * as S from './styles';

export const DetailScreen = ({ route, navigation }: Props) => {
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.shopReducer.items);
  const itemToDisplay = items.find(item => item.id === route!.params!.id);
  let quantity = 0;

  const cartItems = useSelector((state: RootState) => state.cartReducer.items);
  if (cartItems.length !== 0) {
    const indexOfItemInCart = cartItems.findIndex(
      cartItem => cartItem.shopItem.id === route!.params!.id,
    );
    if (indexOfItemInCart > -1) {
      quantity = cartItems[indexOfItemInCart].quantity;
    }
  }
  return (
    <S.Container>
      <ItemComponent
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
