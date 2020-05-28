import React, { useState } from 'react';
import { Platform, Dimensions, StyleSheet, View, TouchableOpacity, Text  } from 'react-native';
import firebase from '../../services/firebaseConnection';

import { Background, Container, Logo, AreaInput, Input,
         SubmitButton, SubmitText, SignInLink, SignInText, } from './styles';

export default function SignIn({ navigation }){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [esenha, setesenha] = useState('')

  async function handleSubmit(){
    if(email !== '' && password !== ''){
      firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error)=>{
        alert(error.code);
      })
    }
  }
  
  return(

  
    <Background>
      <View style={{alignItems:'center'}} >
        <Logo  source={require('../../img/qnice.png')}/>
      </View>
      

      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        

        <AreaInput style={{marginTop:80}} >
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(email)=> setEmail(email)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText={(password)=> setPassword(password)}
          />
        </AreaInput>
        <View style={{paddingBottom:25, paddingLeft:200}}>
        <TouchableOpacity  onPress={()=> navigation.navigate('ForgetPassword')}>
          <Text style={{fontWeight:'bold', color:'#ef473a'}} >Esqueceu senha?</Text>
        </TouchableOpacity>
        </View>


        <SubmitButton onPress={handleSubmit}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <TouchableOpacity style={{   height: 45, width: '45%', backgroundColor:'#ef473a', borderRadius:100,
         alignItems:'center', justifyContent:'center', margin:10 }} onPress={()=>navigation.navigate('New')}>
          <Text style={{color:'#fafafa', }} >Entrar sem cadastro</Text>
        </TouchableOpacity>

       
        <SignInLink onPress={()=> navigation.navigate('SignUp')}>
          <SignInText>Criar conta gratuita</SignInText>
        </SignInLink>




        

      </Container>
      
    </Background>
    
  )
} 

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    
  },



})