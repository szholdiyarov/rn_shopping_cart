import { EdgeInsets } from 'react-native-safe-area-context/src/SafeArea.types';
import styled from 'styled-components/native';

export const Container = styled.View<{ insets: EdgeInsets }>`
  flex: 1;
  margin-top: ${props => props.insets.top}px;
`;
