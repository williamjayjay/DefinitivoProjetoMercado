import React, { useState } from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import firebase from '../../services/firebaseConnection';


import { Background, Container, Logo, AreaInput, Input,
         SubmitButton, SubmitText, SignUpText, SignInButton, SignInText} from './styles';

export default function ForgetPassword({ navigation }){

  const [esenha, setesenha] = useState('')

  async function handleSubmit(){
    if(esenha !== ''){
      firebase.auth().sendPasswordResetEmail(esenha)
      alert('Email enviado com sucesso!')
      .catch((error)=>{
        alert(error.code);
      })
    }
  }

  return(
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <View style={{paddingHorizontal:50}}  > 
        <SignInText style={{fontSize:30, margin:5 }} >Digite seu email, para redefinir sua senha.</SignInText>


        </View>

        <AreaInput style={{marginTop:0}} >
          <Input
            placeholder="esqueceu senha?"
            autoCorrect={false}
            autoCapitalize="none"
            value={esenha}
            onChangeText={(esenha)=> setesenha(esenha)}
          />
        </AreaInput>

        <SubmitButton onPress={handleSubmit}>
          <SubmitText>Enviar</SubmitText>
        </SubmitButton>

        <SignInButton onPress={()=> navigation.navigate('SignIn') }>
          <SignInText>Lembro da minha senha</SignInText>
        </SignInButton>

      </Container>
    </Background>
  )
} 