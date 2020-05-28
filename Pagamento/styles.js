import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';


export const Background = styled(LinearGradient).attrs({
  colors: ['#fafafa', '#fafafa']
})`
  flex: 1;
  /* padding-bottom: 50; */

  /* align-items:center; */
`; 

export const Container = styled.KeyboardAvoidingView`
  flex:1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  /* margin-bottom: 25px; */
  height:150;
  width:350;
  margin-top:25px
  /* margin:25px; */
`;

export const AreaInput = styled.View`
  flex-direction: row;
  padding-top :3 ;

  
`;

export const Input = styled.TextInput`
  background: transparent;
  color: #222;
  font-size: 17px;
  border-radius: 7px;
  width: 90%;
  margin-bottom: 15px;
  padding: 10px;
  /* margin-bottom:30 ; */
  margin:15px;
  border-bottom-width:2;
  border-bottom-color:#999;

  
  
  
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #ef473a;
  height: 45px;
  width: 80%;
  border-radius: 100px;
  margin: 10px;
  margin:12px
`;

export const SubmitText = styled.Text`
  color: #fafafa;
  font-size: 18px;
  /* margin:12px */
`;

export const SignInLink = styled.TouchableOpacity`
  margin:5px;
   
`;

export const SignInText = styled.Text`
color: #1B2D4E;
  font-size: 16px;
  margin-top: 15px;
  /* font-weight:bold; */
  
`;


