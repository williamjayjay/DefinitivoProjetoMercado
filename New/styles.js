import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#262630', '#1B2D4E']
})`
  flex:1;
  align-items:center;
  
`;

export const Input = styled.TextInput.attrs({
  placehodlerTextColor: '#222'
})`
  height: 50px;
  width: 90%;
  background-color: rgba(255,255,255, 0.9);
  margin-top: 30px;
  font-size: 16px;

`;


export const SubmitButton = styled.TouchableOpacity`
  height: 50px;
  width: 90%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #222;
`;