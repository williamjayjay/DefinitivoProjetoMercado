import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet, 
  ScrollView,
  FlatList,
  Image,
  Button
  
  } from 'react-native';

  import Conversor from '../conversor'
  import firebase from 'firebase'
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import Home from './src/Home'


  // const AppNavigator = createDrawerNavigator({
  //   Home:{
  //     screen: Home
  //   },

  // },
  
  // { 
  //     initialRouteName: 'Home',
    
  // })


//https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad
class Limpeza extends Component{

  static navigationOptions={
    header:null
  }


  constructor(props){
    super(props)
    this.state = {
      lista:[],

     };
    

      let config = {
        apiKey: "AIzaSyCIrlS_enEKQn6oiCxTyFuuQu6BVq3363g",
        authDomain: "meuapp-ccb25.firebaseapp.com",
        databaseURL: "https://meuapp-ccb25.firebaseio.com",
        projectId: "meuapp-ccb25",
        storageBucket: "meuapp-ccb25.appspot.com",
        messagingSenderId: "904396632718",
        appId: "1:904396632718:web:a4931fdb66cc6b68e10fdf",
        measurementId: "G-9G6C5NYD3Q"
      };
      // Initialize Firebase
      if (!firebase.apps.length) {
         firebase.initializeApp(config) }

    //adiciona um ouvinte.
    //    firebase.database().ref(this.props.precoMerca).once('value', (snapshot) => {
    //     let state = this.state
    //     state.precoFireBase = snapshot.val()
    //     this.setState(state)
    // } );

    //listafirebase
    firebase.database().ref("mercado/limpeza").on('value', (snapshot) => {
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
  
render() {

  const precao = (this.state.precoFireBase)  //aqui transformamos numa constante a propriedade que traz a info do firebase.
 
  return (
    <View style={styles.container} >
     
      {/* <Conversor moedaA="USD" moedaB="BRL" />   */}
     

      <FlatList data={this.state.lista}
                renderItem={({item})=> <Conversor data={item} /> }
        
      />

      {/* <Conversor  mercadoria= 'https://images.diarioitapora.com.br/data/noticias/9/49294/big_1537298416c3ce2539e0d748f670984fbaedf4f8e9.png' 
                  nomeMerca= 'Cartela de Ovos' 
                  precoMerca= "mercado/laticineos/ovos"
                  
                  />  

      <Conversor  mercadoria= 'https://superprix.vteximg.com.br/arquivos/ids/175796-292-292/Leite-UHT-Elege-Integral-1l.png?v=636367815627770000' 
                  nomeMerca= 'Leite Elege'
                  precoMerca= "mercado/laticineos/leite"
                  /> 

      <Conversor  mercadoria= 'https://superprix.vteximg.com.br/arquivos/ids/174676-210-210/819ca3d2-1584-462b-973e-08e6b7fa6cff06032015210342.png?v=636217450146500000' 
                  nomeMerca= 'Toddynho 200ml'
                  precoMerca= "mercado/laticineos/todynho"
                  />  

       <Conversor  mercadoria= 'https://superprix.vteximg.com.br/arquivos/ids/178273-210-210/Margarina-Qualy-Cremosa-com-Sal-250g.png?v=636777272734700000' 
                  nomeMerca= 'Margarina Qualy 250g'
                  precoMerca="mercado/laticineos/margarinaQualy"
                  />                                  */}

      

      
    
   
  </View>

  )
}


}


const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FF3E',
    flex:1,
    justifyContent:'center',  // aaqui alinha ao centro de cima para baixo.
    alignItems:'center'  //aqui alinha ao centro da esquerda para a direita, centro da tela.
  }
})

export default Limpeza
