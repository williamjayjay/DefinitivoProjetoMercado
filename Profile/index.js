import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import  Icon from 'react-native-vector-icons/FontAwesome';

import firebase from '../../services/firebaseConnection';

import { Container, Title, Name, LogoutButton, LogoutText } from './styles';

export default function Profile({ navigation }){

  const [nome, setNome] = useState('');

  useEffect(()=> {



    async function loadName(){

      const nomeStorage = await AsyncStorage.getItem('@nome');
      if(nomeStorage){
        setNome(nomeStorage);
      }else{

        let uid = firebase.auth().currentUser.uid;
        await firebase.database().ref('aEntrega').child(uid)
        .once('value').then((snapshot)=> {
          setNome(snapshot.val().nome);
        });
        await AsyncStorage.setItem('@nome', nome);

      }

    }

    loadName();

  }, []);

   function handleLogout(){
     firebase.auth().signOut();
     AsyncStorage.removeItem('@nome');
     navigation.navigate('SignUp');

  }

  let minhaVar = ''
  let meuTittle =''
  let leNome = ''

  if(nome === ''){
    minhaVar = 'Entrar'
    leNome = ''
  }else{
    minhaVar = 'Sair';
    meuTittle = 'Bem-vindo(a)'
    leNome = nome
  }

  return(
    <Container>
      <Title>{meuTittle}</Title>
      <Name> {leNome} </Name>

      <LogoutButton onPress={handleLogout}>
        <LogoutText>{minhaVar}</LogoutText>
      </LogoutButton>
    </Container>
  )
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ tintColor }) => (
    // <Icon name="md-checkmark-circle" size={24} color={tintColor} />
    <Icon name="user-circle-o" size={24} color={tintColor} />
  )
};
