import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet, 
  ScrollView,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
  Dimensions
  
  } from 'react-native';

  import Conversor from '../conversor'
  import firebase from 'firebase'
  // import Carrinho from '../Carrinho'

  import  Icon from 'react-native-vector-icons/Ionicons';
  const lateral = Dimensions.get('window').width;





//https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad
class Enlatados extends Component{

  

  static navigationOptions={
  
    header:null
  }



  constructor(props){
    super(props)
    this.state = {
      lista:[],
      listaId:[],
      lista45:[],
      // myprice:0

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


  //*********************************** */


  firebase.auth().onAuthStateChanged((user)=>{

    
    if(user){

      // firebase.database().ref('compras').child(user.uid).on('value', (snapshot) => {
      //   let state = this.state
      //   // state.myprice = snapshot.val().valTotal
      //   state.listaCompra = snapshot.val().listaCompra
      //   this.setState(state)
        
      // })

    }
  })

  //****************************// */
    
    firebase.database().ref("mercado/enlatados").on('value', (snapshot) => {
      let state = this.state
      state.lista = []

      snapshot.forEach((childItem)=>{
        state.lista.push({
          key: childItem.key,
          nome: childItem.val().nome,
          preco: childItem.val().preco,
          cartaz: childItem.val().cartaz,
          Kilo: childItem.val().Kilo,

        })

      } )

      this.setState(state)
  } );


 


     
                
  }


  
render() {
  

  const precao = (this.state.precoFireBase)  //aqui transformamos numa constante a propriedade que traz a info do firebase.
  
  return (

    
    <View style={styles.container} >
      
        {/* <View style={{ alignItems:'center', justifyContent:'center',  backgroundColor:'#ff4c4c', height:80,}} >
       
        <TouchableOpacity onPress={()=>  this.props.navigation.navigate('New')} >
<Ionicons name="ios-arrow-back" size={45} color={"white"} style={{ paddingLeft:10 }} />
</TouchableOpacity>



          <Text style={{fontSize:25, color:'#fff', textAlign:"center" }} >R$ {this.state.myprice.toFixed(2)}</Text>
          <Text style={{fontSize:18, color:'#000', fontWeight:'bold', }} >Açougue</Text>
         
        </View> */}
     
      {/* <Conversor moedaA="USD" moedaB="BRL" />   */}
      {/* <Button 
          title="Voltar"
          //aqui abaixo temos uma função chamada goBack que volta uma navegação para trás.
          onPress={()=> this.props.navigation.goBack() } />  */}
 <View style={{width:lateral, backgroundColor:'#ef473a' , paddingVertical:5 , alignItems:'center',
 flexDirection:'row', justifyContent:'space-between' ,paddingHorizontal:'1.5%', paddingTop:0, 
 borderBottomEndRadius:0,borderBottomStartRadius:0, borderTopEndRadius:0, borderTopStartRadius:0 }} >



<TouchableOpacity style={{flexDirection:'row', alignItems:'center',}} onPress={()=>  
  this.props.navigation.navigate('New')} >
<Icon name="ios-arrow-back" size={45} color={'#fff'}  />
<Text style={{fontSize:16, color:'#fff', paddingLeft:8}} >Voltar  </Text>
</TouchableOpacity>


  <Text style={{fontSize:24, fontWeight:'bold', color:'white', paddingRight:lateral/3.2}} >
            Enlatados
            </Text>

            {/* <Ionicons name="ios-arrow-back" size={45}  /> */}
         


</View>


      <FlatList showsVerticalScrollIndicator={false} data={this.state.lista}
      // datax={this.state.lista45}
                renderItem={({item})=> <Conversor datax={item} data={item} /> }
        
      />
   

  
  </View>

  )
}


}


const styles = StyleSheet.create({
  container:{
    // padding:4,
    backgroundColor:'#fff',
    flex:1,
    justifyContent:'center',  // aaqui alinha ao centro de cima para baixo.
    // alignItems:'center'  //aqui alinha ao centro da esquerda para a direita, centro da tela.
  }
})

export default Enlatados
