import type { PropsWithChildren } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ItemComponent } from '../../components/item';

import * as S from './styles';
type HomeScreenProps = PropsWithChildren<{
  title: string;
}>;
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <S.Container insets={insets}>
      <ItemComponent />
    </S.Container>
  );
};
