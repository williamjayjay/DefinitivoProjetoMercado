import React, { useState, Component } from 'react';
import { Platform, Dimensions, StyleSheet, View, TouchableOpacity, Text, ScrollView,
   Image, TouchableHighlight, TextInput, KeyboardAvoidingView  } from 'react-native';
import firebase from '../../services/firebaseConnection';
// import  { FontAwesome, Ionicons, MaterialIcons,Feather,
//   FontAwesome5 }  from 'react-native-vector-icons';

  import  Icon from 'react-native-vector-icons/Ionicons';
import  Icon2 from 'react-native-vector-icons/FontAwesome5';

import { Background, Container, Logo, AreaInput, Input,
         SubmitButton, SubmitText, SignInLink, SignInText, } from './styles';

export default function Pagamento({ navigation }){


     

  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [Tel, setTel] = useState('')
  const [nome, setNome] = useState('')

  const [mover, setMover] = useState('a')
  

  const [din, setDin] = useState('#ccc')
  const [txdin, setTxdin] = useState('#ccc')

  const [card, setCard] = useState('#ccc')
  const [txcard, setTxcard] = useState('#ccc')


  const lateral = Dimensions.get('window').width;

  async function handleSubmit(){
    if(email !== '' && password !== ''){
      firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error)=>{
        alert(error.code);
      })
    }
  }


  function oFim (){
    // alert('Compra finalizada com sucesso!') 
    if(endereco && complemento && Tel && nome !==''){
      // alert('okok')
      if(mover ==='a'){
        alert('Selecione um método de pagamento.')  //ajeitar o alert
      }else{
        navigation.navigate(mover)


        let uid = firebase.auth().currentUser.uid;
        // firebase.database().ref('compras').child(uid).child('entrega').set({

        //   nomeCall:nome,
        //   telefone: Tel,
        //   endereco: endereco,
        //   complemento: complemento,
          
        // });

        firebase.database().ref('aEntrega').child(uid).update({

          nomeCall:nome,
          telefone: Tel,
          endereco: endereco,
          complemento: complemento,
          
        });


      }
     
    }else{
      alert('Preencha todos os campos')
    }



    
  }

 function dina(){
 setDin('green')
 setTxdin('green')


 setCard('#ccc')
 setTxcard('#ccc')

 setMover('Fim')


  }

  function carda(){
    setDin('#ccc')
    setTxdin('#ccc')

    setCard('blue')
    setTxcard('blue')
   
    setMover('FimCard')
     }



  return(

    // <Background>
    <KeyboardAvoidingView  behavior='padding' >
        <View >
          

<TouchableOpacity style={{flexDirection:'row', alignItems:'center', paddingTop:5, paddingLeft:5, marginBottom:0}} onPress={()=>  
 navigation.navigate('Dashboard')} >
<Icon name="ios-arrow-back" size={45} color={'#1b2d4e'}  />
<Text style={{fontSize:16, color:'#1b2d4e', paddingLeft:8}} >Voltar  </Text>
</TouchableOpacity>
  

         </View>
         <ScrollView showsVerticalScrollIndicator={false}  >
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        
        <AreaInput style={{marginTop:0}} >
          <Input
            placeholder="Endereço"
            autoCorrect={false}
            autoCapitalize="none"
            value={endereco}
            onChangeText={(endereco)=> setEndereco(endereco)}
            placeholderTextColor='#999'
          />
        </AreaInput>

        <AreaInput style={{marginTop:0}} >
          <Input
            placeholder="Complemento"
            autoCorrect={false}
            autoCapitalize="none"
            value={complemento}
            onChangeText={(complemento)=> setComplemento(complemento)}
            placeholderTextColor='#999'
          />
        </AreaInput>

        <AreaInput style={{marginTop:0}} >
          <Input
             keyboardType='numeric'
             maxLength={15}
            placeholder="Telefone"
            autoCorrect={false}
            autoCapitalize="none"
            value={Tel}
            onChangeText={(Tel)=> setTel(Tel)}
            placeholderTextColor='#999'
          />
        </AreaInput>

        <AreaInput style={{marginBottom:0}} >
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChangeText={(nome)=> setNome(nome)}
            placeholderTextColor='#999'
          />
        </AreaInput>
       
       {/* <Pay  /> */}

       <View style={{ alignItems:'center',}} >
      
      <View  style={{flexDirection:'row', marginTop:30, }} >

       <TouchableOpacity style={{marginHorizontal:'20%', paddingTop:5}} onPress={()=> dina()  } //aqui din
        >  

       <Icon2 style={{marginBottom:-6}} name="money-bill-wave" size={60} color={din}  />
       <Text style={{color:txdin, fontSize:18, fontWeight:'bold', }}  >Dinheiro </Text>
     
       {/* <Din datinha= {this.state.din}  />  */}
       
       </TouchableOpacity>

       <TouchableOpacity    value={'blue'}   //AQUI CARD
            onChangeText={(din)=> setDin(din)}
              style={{marginHorizontal:'20%'}} onPress={()=> carda()} >
       <Icon style={{marginBottom:-10}} name="ios-card" size={75} color={card}  />
       <Text style={{ color:txcard, fontSize:18, fontWeight:'bold', }}  >Cartão </Text>
         
       {/* <Cart datinhaCart= {this.state.card}  />  */}
       </TouchableOpacity>

       
     
       </View>

    </View>
  


      </Container>


      </ScrollView>

      
      <View style={{ alignItems:'center', justifyContent:'center', margin:20, paddingTop:0  }} >
  <TouchableOpacity style={{   height: 45, width:200, backgroundColor:'#ef473a', borderRadius:100,
        alignItems:'center', justifyContent:'center', margin:10, }}onPress={()=> oFim()  } >
        <Text style={{color:'#f2f2f2', fontSize:18 }} >Avançar</Text>
        </TouchableOpacity>
       
  </View>
  


    </KeyboardAvoidingView>



    /* </Background> */
    
    
  )
} 

class Pay extends Component{

  constructor(props){
    super(props)
    this.state={
        din:'#ccc',
        card:'#ccc',
        nomeCard:'#ccc',
        nomeDin:'#ccc',

        dinSize:60,
        cardSize:75,


   
       

        
    };
    this.din = this.din.bind(this);
    this.card = this.card.bind(this);
    
    // this.nomeDin = this.nomeDin.bind(this);
    // this.nomeCard = this.nomeCard.bind(this);


    

  }

  din(){
    let state = this.state
    state.din = 'green'
    state.card = '#ccc'
    state.nomeCard = '#ccc'
    state.nomeDin = 'green'
    // state.dinSize = 80
    // state.cardSize = 75

  

    this.setState(state);
   
  
    


  }

  card(){
    let state = this.state
    state.card = 'blue'
    state.din = '#ccc'
    state.nomeDin = '#ccc'
    state.nomeCard = 'blue'

    // state.dinSize = 60
    // state.cardSize = 100

    this.setState(state);
    

    
    
  }

render(){


  return(
    <View style={{ alignItems:'center',}} >
      
      <View  style={{flexDirection:'row', paddingTop:0, }} >

       <TouchableOpacity style={{marginHorizontal:'20%', paddingTop:5}} onPress={this.din} //aqui din
        >  

       <Icon2 style={{marginBottom:-6}} name="money-bill-wave" size={this.state.dinSize} color={this.state.din}  />
       <Text style={{color:this.state.nomeDin, fontSize:18, fontWeight:'bold', }}  >Dinheiro </Text>
     
       {/* <Din datinha= {this.state.din}  />  */}
       
       </TouchableOpacity>

       <TouchableOpacity    value={'blue'}   //AQUI CARD
            onChangeText={(din)=> setDin(din)}
              style={{marginHorizontal:'20%'}} onPress={this.card} >
       <Icon style={{marginBottom:-10}} name="ios-card" size={this.state.cardSize} color={this.state.card}  />
       <Text style={{ color:this.state.nomeCard, fontSize:18, fontWeight:'bold', }}  >Cartão </Text>
         
       {/* <Cart datinhaCart= {this.state.card}  />  */}
       </TouchableOpacity>

       
     
       </View>

    </View>
  )
}

}




class Din extends Component{

  render(){
    
      if(this.props.datinha == 'green' ){
      return(
        <View>
      
        <View style={{ backgroundColor:'transparent' ,
          borderWidth:2, borderColor:'#ccc', borderRadius: 7,
          
        }} >
  <TextInput style={{ fontSize:16, width:80,  }}
            placeholder="Troco?"
            autoCorrect={false}
            autoCapitalize="none"
           keyboardType='numeric'
            placeholderTextColor='#999'
          />
        </View>

       
    
      </View>
      )
    }else{
      return(
        <>
        </>
      )
      
    }


  }


}


class Cart extends Component{

  render(){
    
      if(this.props.datinhaCart == 'blue' ){
      return(
        <View>
      
        <View style={{ backgroundColor:'transparent' ,
          borderWidth:2, borderColor:'#ccc', borderRadius: 7,
          
        }} >
        <TextInput style={{ fontSize:16, width:80, }}
            placeholder="Troco?"
            autoCorrect={false}
            autoCapitalize="none"
           keyboardType='numeric'
            placeholderTextColor='#999'
          />
        </View>

       
    
      </View>
      )
    }else{
      return(
        <>
        </>
      )
      
    }


  }


}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    
  },
 



})

// export default Pay;