import React, { Component, useState } from 'react';
import { AsyncStorage, View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList,Picker,Alert } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import  Icon from 'react-native-vector-icons/Ionicons';
// import  Icon2 from 'react-native-vector-icons/FontAwesome5';

import firebase from '../../services/firebaseConnection';

import { Container, Title, Name, LogoutButton, LogoutText } from './styles';

export default function FimCard({ navigation }){

  const [cartao, setCartao] = useState('Débito');
  const [meuTotalx, setmeuTotal] = useState(0);
  
  // firebase.database().ref("cartao").on('value', (snapshot) => {
    
  //   // setCartaoNome = snapshot.val().xxx
  // } );

  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
  
      firebase.database().ref('compras').child(user.uid).child('compraNow').on('value', (snapshot) => {
        // let state = this.state
        // state.xxs = snapshot.val().xxs
        setmeuTotal(snapshot.val().meuTotal)
        
        // this.setState(state) //essencial
  
        //QUALQUER COISA SÓ REVERTER COM CTRL Z , MAS A PRINCIPRIO TA FUNFANDO
       
      })
      
    }
  })
  



  function finaliza (){


    Alert.alert(
      "Mercado",
      `Seu cartão é de ${cartao} ?`,
      [
        {
          text: "Sim",
          onPress: () => {
            let uid = firebase.auth().currentUser.uid;
           
            
      Alert.alert('Mercado:','Compra finalizada com sucesso, aguarde alguns instantes.')

      firebase.database().ref('compras').child(uid).child('buy').remove()
      
      firebase.database().ref('compras').child(uid).child('compraNow').update({
        // nome: 0,
        xxs : '0',
        meuTotal: 0,
        notification:'wait',
        // time: `\nHORA: ${new Date().toLocaleTimeString()}\nDATA: ${new Date().toLocaleDateString()}`
        
      });
            
            
            
            firebase.database().ref('aEntrega').child(uid).update({
        
              meuTotal: meuTotalx,
              cartao:cartao,
              mensagem: 'wait',
              time: `\nHORA: ${new Date().toLocaleTimeString()}\nDATA: ${new Date().toLocaleDateString()}`
              
            });

            navigation.navigate('New')

    
          }
          
        },
        { text: "Não",
      
      }
      ],
      { cancelable: false }
    );



    


  }


  return(


    
      
 
    <View style={{flex:1, padding:5,}} >
      <View   >
    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', paddingTop:15, paddingLeft:5, marginBottom:15, }} onPress={()=>  
 navigation.navigate('Pagamento')} >
<Icon name="ios-arrow-back" size={45} color={'#1b2d4e'}  />
<Text style={{fontSize:16, color:'#1b2d4e', paddingLeft:8}} >Voltar  </Text>
</TouchableOpacity>


      

</View>

<View style={{alignItems:'center'}} >

<Text style={{ fontSize:30, paddingBottom:25,  }} >
        Pagamento no cartão.
      </Text>

{/* <Contfim /> */}

</View>


  


      

<View style={{ alignItems:'center' }}  >

<Icon style={{marginRight:25 }} name="ios-card" size={150} color='blue'  />

<Picker 
        selectedValue={cartao}
        style={styles.picker}
        onValueChange={ (itemValue, itemIndex)=> setCartao(itemValue)   } >


          <Picker.Item label='Débito' value='Débito'/>
          <Picker.Item label="Crédito" value="Crédito"/>
          <Picker.Item label="Refeição" value="Refeição"/>
          <Picker.Item label="Alimentação" value="Alimentação"/>


        </Picker>


      {/* <View style={{ backgroundColor:'transparent' ,
          borderBottomWidth:2, borderBottomColor:'#ccc', borderRadius: 7, width:220, height:45, marginTop:8, marginHorizontal:8
          
        }} > */}

          {/* <View style={{ flexDirection:"row" }} > 

          <Text style={{fontSize:22, color:'#000'}} > Troco na entrega?</Text>
          <FontAwesome style={{paddingLeft:20 }} name="check-square" size={30} color='#ccc'  />
          </View> */}

      

    {/* <Text>
      AQUI VAI VIR UM PICKER COM OS CARTOES, OU UMA IMAGEM COM OS CARTOES ACEITOS
    </Text> */}

  {/* <TextInput style={{ fontSize:22, width:200, paddingTop:10  }}
            placeholder='Troco para quanto?'
            autoCorrect={false}
            autoCapitalize="none"
           keyboardType='numeric'
            placeholderTextColor='#999'
          /> */}

{/* </View  > */}





<View style={{ alignItems:'center', justifyContent:'center', margin:20, paddingTop:80  }} >
  <TouchableOpacity style={{   height: 45, width:200, backgroundColor:'#ef473a', borderRadius:100,
        alignItems:'center', justifyContent:'center', margin:10, }}onPress={()=> finaliza()  } >
        <Text style={{color:'#f2f2f2', fontSize:18 }} >Finalizar Compra</Text>
        </TouchableOpacity>
       
  </View>



        </View>

        

    </View>//fim
   
  )



  



}





class Contfim extends Component{

  constructor(props){
    super(props)
    this.state={
      meuTotal:0
   

        
    };
      // Card = this.nomeCard.bind(this);

      firebase.auth().onAuthStateChanged((user)=>{
        if(user){




        firebase.database().ref('compras').child(user.uid).child('compraNow').on('value', (snapshot) => {
          let state = this.state
          // state.xxs = snapshot.val().xxs
          state.meuTotal = snapshot.val().meuTotal
          
          this.setState(state) //essencial
         
        })
        
        


  
        }
      })



    

  };

   

  render(){
    return(

      <View>
               <Text style={{ fontSize:30, paddingBottom:5, color:'green',marginRight:15   }} >
        Valor: R$ {this.state.meuTotal}
      </Text>
      </View>

    )
  }
}


const styles = StyleSheet.create({

  picker:{
    height:20,
    width:160,
    transform: [{ scaleX:2.0}, {scaleY:2.0}],
    margin:20,
    color:'blue',
    
    
  }
})



