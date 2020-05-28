import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Background = styled(LinearGradient).attrs({
  colors: ['#fafafa', '#fafafa']
})`
  flex: 1;
`; 

export const Container = styled.KeyboardAvoidingView`
  flex:1;
  align-items: center;
  justify-content: center;
`;

export const SignUpText = styled.Text`
  margin-bottom: 15px;
  color: #FFF;
  font-size: 25px;
  font-weight: bold;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background: transparent;
  color: #222;
  font-size: 17px;
  border-radius: 7px;
  width: 90%;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom-width:2;
  border-bottom-color:#cacaca;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #ef473a;
  height: 45px;
  width: 60%;
  border-radius: 100px;
  margin-top: 10px;
`;

export const SubmitText = styled.Text`
  color: #fafafa;
  font-size: 18px;
`;

export const SignInButton = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const SignInText = styled.Text`
  color: #1B2D4E;
  font-size: 15px;
  padding-bottom: 12px;
`;




