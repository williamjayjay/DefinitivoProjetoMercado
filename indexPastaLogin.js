import React, {Component} from 'react';
import { 
  Plataform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  
} from 'react-native';
import firebase  from './firebaseConnection'
import { StackActions, NavigationActions } from 'react-navigation';

export default class Login extends Component{

    static navigationOptions = {
        title:'Login'
    }

  constructor(props){
    super(props)
    this.state = {
      email:'',
      senha:'',
     }

    this.logar = this.logar.bind(this)
    this.mover = this.mover.bind(this)

    firebase.auth().signOut(); //faz logout

    firebase.auth().onAuthStateChanged((user)=>{
        
      if(user){
        this.props.navigation.navigate('NavegaTab')
       
        
        
      }
    })



  }

  logar(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error)=>{
      if(error.code == 'auth/wrong-password'){
        alert('Senha incorreta.');
        // alert('Codigo de erro: '+ error.code) // msg para exibir o erro.
      }if(error.code == 'auth/invalid-email'){
        alert('Email inválido.')
      }

    })

  }

  mover(){
      
    this.props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions:[
            NavigationActions.navigate({routeName: 'CriarConta'})
        ]
    }))
  }



  render() {
    return(
      <View style={styles.container} >

        <Text style={{fontSize:30, textAlign:'center'}} >Entrar</Text>
        <TextInput placeholder="Email" placeholderTextColor='#999' style={styles.input} 
        underlineColorAndroid="transparent" onChangeText={(email)=>{this.setState({email})}}  />

        <TextInput placeholder="Senha" placeholderTextColor='#999' secureTextEntry={false} style={styles.input} 
        underlineColorAndroid="transparent" onChangeText={(senha)=>{this.setState({senha})}}  />

        <Button title="Entrar" onPress={this.logar} /> 
        <Button title="Criar Cadastro" onPress={this.mover} /> 

      </View>

    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20
  },
  input:{
    width:350,
    height:50,
    backgroundColor:'#CCC',
    fontSize:22,
    padding:5,
    margin:5
  }

})



