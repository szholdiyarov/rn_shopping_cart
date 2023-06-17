import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { ItemComponent } from 'components/item';
import { RootState } from 'state/store';

import { addToCart, removeOneItem } from '../../state/cartSlice';

import * as S from './styles';

export const CartScreen = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.cartReducer.items);
  const total = useSelector((state: RootState) => state.cartReducer.total);

  return (
    <S.Container insets={insets}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ItemComponent
            onAddPress={() => dispatch(addToCart(item.shopItem!))}
            onRemovePress={() => dispatch(removeOneItem(item.shopItem!))}
            quantity={item.quantity}
            image={item.shopItem.image}
            title={item.shopItem.title}
            price={item.shopItem.price}
            displayButtons={true}
          />
        )}
        keyExtractor={item => item.shopItem.id}
      />
      <S.BottomContainer>
        <S.Text>Total: {total.toFixed(2)}</S.Text>
      </S.BottomContainer>
    </S.Container>
  );
};
