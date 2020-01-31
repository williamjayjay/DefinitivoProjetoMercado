import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import firebase  from '../firebaseConnection'
import { StackActions, NavigationActions } from 'react-navigation';

class Usuario extends Component {
  static navigationOptions = {
    tabBarLabel: 'Usuario',
    
  };

  constructor(props){
    super(props)
    this.state = {
      nome:'x',
      myprice:0
     }
    this.sair = this.sair.bind(this)


    firebase.auth().onAuthStateChanged((user)=>{
      if(user){

        firebase.database().ref('ouser').child(user.uid).on('value', (snapshot) => {
          let state = this.state
          state.myprice = snapshot.val().valTotal
          this.setState(state)
          
          // alert('seja bem vindo '+ nome)
        })

      }
    })
  }

  sair(){
     firebase.auth().signOut()
     alert('Deslogado com sucesso!')
    
    
    firebase.auth().onAuthStateChanged((user)=>{
          firebase.database().ref('ouser').child(user.uid).child('valTotal').set(0)

          firebase.database().ref('ouser').child(user.uid).child('listaCompra').set('')

          firebase.database().ref('ouser').child(user.uid).child('itemCar').set(1)
    })
    this.props.navigation.navigate('Login')
  }

  render(){
    return(
      <View  >
        <Text style={{textAlign:'center', fontSize:60, paddingTop:80}}>(Usuario)</Text>
        <Text style={{textAlign:'center', fontSize:20, paddingTop:10}}>{this.state.myprice} </Text>
        
        <Button title="Logout" onPress={this.sair} /> 
        
      </View>
    );
  }
}



export default Usuario;