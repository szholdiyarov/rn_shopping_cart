import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { ItemComponent } from '../../components/item';
import { RootState } from '../../state/store';

import * as S from './styles';

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const data = useSelector((state: RootState) => state.shopReducer.items);
  console.log(data);
  return (
    <S.Container insets={insets}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ItemComponent
            displayButtons={false}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        )}
        keyExtractor={item => item.id}
      />
    </S.Container>
  );
};
