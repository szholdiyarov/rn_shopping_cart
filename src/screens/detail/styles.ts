import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const DescriptionContainer = styled.View`
  height: 160px;
  justify-content: center;
  align-items: center;
  margin-left: 22px;
  margin-right: 22px;
  margin-top: 22px;
  border: 1px;
  border-radius: 4px;
`;

export const BottomContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 80px;
  margin-bottom: 40px;
`;

export const Text = styled.Text``;

export const CounterContainer = styled.View`
  height: 24px;
  width: 24px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-radius: 4px;
`;

export const Touchable = styled.TouchableOpacity``;
export const Button = styled.TouchableOpacity`
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 4px;
  border-width: 1px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;
