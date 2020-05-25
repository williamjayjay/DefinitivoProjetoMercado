import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet, 
  ScrollView,
  FlatList,
  Image,
  Button,
  TextInput,
  Picker,
  TouchableOpacity
  
  } from 'react-native';

  import Conversor from '../conversor'
  import firebase from 'firebase'


class Entrega extends Component{
    state = {user: ''}
    updateUser = (user) => {
       this.setState({ user: user })
    }
  static navigationOptions={
  
    header:null
  }

  constructor(props){
    super(props)
    this.state = {
        nomecliente:'',
        end:'',
        casa:''
      

     };

     this.enviar = this.enviar.bind(this)

 

      // Initialize Firebase
      if (!firebase.apps.length) {
         firebase.initializeApp(config) }

    firebase.database().ref("mercado/higiene").on('value', (snapshot) => {
      let state = this.state
      state.lista = []

      snapshot.forEach((childItem)=>{
        state.lista.push({
          key: childItem.key,
          nome: childItem.val().nome,
          preco: childItem.val().preco,
          cartaz: childItem.val().cartaz
          
        })

      } )

      this.setState(state)
  } );
        
  }


  enviar(){

        if(this.state.user === 'Dinheiro' || 'Cartão'){
            alert(this.state.user+this.state.casa+this.state.end+this.state.nomecliente )
        }else if(this.state.user === ''){
            alert('adasdsa')
        }
         
    

   


  }
  

render() {

 

  return (
    <View style={styles.container} >
        
     
     <Text style={{fontSize:30, textAlign:'center'}} >Entrar</Text>
        <TextInput placeholder="Endereço" placeholderTextColor='#999' style={styles.input} 
        underlineColorAndroid="transparent" onChangeText={(end)=>{this.setState({end})}}  />

        <TextInput placeholder="Casa" placeholderTextColor='#999' style={styles.input} 
        underlineColorAndroid="transparent" onChangeText={(casa)=>{this.setState({casa})}}  />

        <TextInput placeholder="Nome" placeholderTextColor='#999' style={styles.input} 
        underlineColorAndroid="transparent" onChangeText={(nomecliente)=>{this.setState({nomecliente})}}  />

         <Text style={{fontSize:30, textAlign:'center'}} >Formas de Pagamento:</Text>

         <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
              
               <Picker.Item label = "Dinheiro" value = "Dinheiro" />
               <Picker.Item label = "Cartão" value = "Cartão" />



            

            </Picker>

            <Text style={{fontSize:30, textAlign:'center'}} > {this.state.user}  </Text>

            <TouchableOpacity  onPress={this.enviar} >
                <Text> CONFIRMAR </Text>
            </TouchableOpacity>


            



  </View>

  )
}

}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FF3E',
    flex:1,
    
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

export default Entrega
