import { EdgeInsets } from 'react-native-safe-area-context/src/SafeArea.types';
import styled from 'styled-components/native';

export const Container = styled.View<{ insets: EdgeInsets }>`
  flex: 1;
  margin-top: ${props => props.insets.top}px;
`;

export const BottomContainer = styled.View`
  height: 60px;
  border: 1px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text``;
