import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native'
import firebase from './src/firebaseConnection'

import { StackActions, NavigationActions } from 'react-navigation';
// import {  } from 'react-navigation'

export default class App extends Component{


    constructor(props){
        super(props)
        this.state = {
            email:'',
            senha:'',
            valTotal:0,
            listaCompra:''
            
        }
        this.cadastrar = this.cadastrar.bind(this)
        this.sair = this.sair.bind(this)

        // firebase.auth().signOut();

        firebase.auth().onAuthStateChanged((user)=>{
          if(user){
            firebase.database().ref('ouser').child(user.uid).set({
                valTotal:0,
                listaCompra:'',
                itemCar:1
                
              });

            //   alert('Cadastrado com sucesso!!');

            //   this.props.navigation.dispatch(StackActions.reset({
            //     index: 0,
            //     actions:[
            //         NavigationActions.navigate({routeName: 'Login'})
            //     ]
                
            // }))

            

          }
        });


    }

    cadastrar(){


 

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .catch((error)=>{
          if(error.code == 'auth/weak-password'){
            alert('Sua senha deve ter pelo menos 6 Caracteres.');
            // alert('Codigo de erro: '+ error.code) // msg para exibir o erro.
          }if(error.code == 'auth/invalid-email'){
            alert('Email inválido.')
          }
    
        })
    
      }
    

    sair(){
        firebase.auth().signOut()
        
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions:[
                NavigationActions.navigate({routeName: 'Login'})
            ]
        }))
      }

    render(){
        return(
            <View style={styles.container} >
                <Text style={{fontSize:30, textAlign:'center'}} > Criar CADASTRO </Text>

                <TextInput style={styles.input} placeholder="Email" placeholderTextColor='#888' 
                underlineColorAndroid="transparent" onChangeText={(email)=>{this.setState({email})}} />

               
                <TextInput style={styles.input} placeholder="senha" placeholderTextColor='#888' 
                underlineColorAndroid="transparent" secureTextEntry={true} onChangeText={(senha)=>{this.setState({senha})}} />

                <Button title="Cadastrar" onPress={this.cadastrar} />
                <Button title="Voltar para LogIn" onPress={this.sair} /> 

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#999'
    },
    input:{
        width:350,
        height:50,
        backgroundColor: '#CCC',
        fontSize:22,
        padding:5,
        margin:5
    }
})