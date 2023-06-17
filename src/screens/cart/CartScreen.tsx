import type { PropsWithChildren } from 'react';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ItemComponent } from '../../components/item';

import * as S from './styles';
type CartScreenProps = PropsWithChildren<{
  title: string;
}>;
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    price: Number(1.341),
    image: require('../../assets/image1.jpeg'),
  },
  {
    id: 'bd7acbea-df33-46c2-aed5-3ad53abb28ba',
    title: 'Second Item',
    price: Number(705.99),
    image: require('../../assets/image2.jpeg'),
  },
  {
    id: 'bd7acbea-c1b5-46c2-aed5-3ad53abb28ba',
    title: 'Thirds Item',
    price: Number(234.99),
    image: require('../../assets/image3.jpeg'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-sdfd-3ad53abb28ba',
    title: 'Forth Item',
    price: Number(199.99),
    image: require('../../assets/image4.jpeg'),
  },
];

export const CartScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <S.Container insets={insets}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <ItemComponent
            image={item.image}
            title={item.title}
            price={item.price}
          />
        )}
        keyExtractor={item => item.id}
      />
      <S.BottomContainer>
        <S.Text>Total: 123123</S.Text>
      </S.BottomContainer>
    </S.Container>
  );
};
