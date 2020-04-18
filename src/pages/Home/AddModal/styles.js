import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

export const Wrapper = styled.Modal``;

export const Container = styled(Animatable.View)`
  background-color: rgba(0, 0, 0, 0.4);
  flex: 1;
  justify-content: center;
`;

export const Box = styled(LinearGradient).attrs({
  colors: ['#fff', '#EFEFEF'],
})`
  margin: 30px;
  border-radius: 4px;
  elevation: 2;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 30,
  },
})``;

export const Title = styled.Text`
  font-size: 24px;
  color: #eb3349;
  font-family: 'OpenSans-Bold';
  margin-bottom: 20px;
  text-align: center;
`;

export const InputLabel = styled.Text`
  color: #eb3349;
  font-size: 16px;
  text-align: left;
  font-family: 'OpenSans-Regular';
`;

export const Label = styled.Text`
  color: #eb3349;
  font-size: 14px;
  text-align: left;
  font-family: 'OpenSans-Bold';
`;

export const SelectorBox = styled.View``;

export const DateHolder = styled.View`
  align-self: stretch;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.disabled ? 0.2 : 1)};
  margin: 0 20px;
`;
export const Input = styled.TextInput`
  align-self: stretch;
  background-color: #eb3349;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 8px 15px;
  color: #fff;
  font-family: 'OpenSans-Regular';
`;

export const CheckHolder = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: 5px;
`;

export const CancelHolder = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  margin-top: 20px;
`;

export const Instruction = styled.Text`
  color: #eb3349;
  text-align: center;
  font-family: 'OpenSans-Bold';
  font-size: 16px;
  margin: 10px 0px;
`;

export const CancelLabel = styled.Text`
  color: #eb3349;
  font-family: 'OpenSans-Bold';
  text-decoration: underline;
`;

export const ErrorLabel = styled.Text`
  font-size: 12px;
  color: #120369;
  font-family: 'OpenSans-Regular';
  text-align: left;
  margin-top: -10px;
  margin-bottom: 10px;
`;
