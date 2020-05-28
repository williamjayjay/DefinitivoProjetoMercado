import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, FlatList, Alert, Linking } from 'react-native';
import firebase  from '../../services/firebaseConnection'
import  Icon from 'react-native-vector-icons/MaterialIcons';
import  Icon2 from 'react-native-vector-icons/Entypo';
import  Icon3 from 'react-native-vector-icons/FontAwesome5';

const lateral = Dimensions.get('window').width;


class Notes extends Component {

  constructor(props){
    super(props)
    this.state={
      listax:[],
      meuTotal:0,
      mensagem:'',
      mensagemX:'',
      nomeCompra:'',
     
    };

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        firebase.database().ref('compras').child(user.uid).child('compraNow').on('value', (snapshot) => {
          let state = this.state
          state.xxs = snapshot.val().xxs
          state.meuTotal = snapshot.val().meuTotal,
          state.notification = snapshot.val().notification,
          state.theUser = snapshot.val().theUser   
          this.setState(state) //essencial    
        }),
        
        firebase.database().ref('aEntrega').child(user.uid).on('value', (snapshot) => {
          let state = this.state
          
         state.mensagem = snapshot.val().mensagem,
         this.setState(state)
                 
        })

  //   firebase.database().ref("compras").child(user.uid).child('buy').on('value', (snapshot) => {
  //     let state = this.state
  //     state.lista = []
  
  //     snapshot.forEach((childItem)=>{
  //       state.lista.push({
  //         key: childItem.key,
  //         compraNow: childItem.val().compraNow,
          
  //         xxs: childItem.val().xxs,
  //         // lala: childItem.val().lala,
  //         foto:childItem.val().foto,
  //         preco:childItem.val().preco,
  //         nome:childItem.val().nome,
  //         qtItem:childItem.val().qtItem,
  //         multiItem:childItem.val().multiItem,
  //         nomeAb:childItem.val().nomeAb,
          
        
          
  
  
  //       })
  
  //     } )
  
  //     this.setState(state)
  // })

  firebase.database().ref("aEntrega").child(user.uid).child('nomeCompra').on('value', (snapshot) => {
    let state = this.state
    state.listax = []

    snapshot.forEach((childItem)=>{
      state.listax.push({
        key: childItem.key,
        nome: childItem.val().nome,
        preco: childItem.val().preco,
        qtItem:childItem.val().qtItem,
        multiItem:childItem.val().multiItem,
        // cartaz: childItem.val().cartaz,

      })
      
    } )
    this.setState(state)

})

  


  firebase.database().ref("aEntrega").child(user.uid).on('value', (snapshot) => {
    let state = this.state
    state.lista = []

    state.mensagemX = snapshot.val().mensagem
    state.nomeCompra = snapshot.val().nomeCompra
    state.troco = snapshot.val().troco
    state.nome = snapshot.val().nome
    state.meuTotal = snapshot.val().meuTotal
    state.endereco = snapshot.val().endereco
    state.telefone = snapshot.val().telefone
    state.complemento = snapshot.val().complemento
    state.cartao = snapshot.val().cartao
    state.key = snapshot.key
    state.time = snapshot.val().time
    state.cancelada = snapshot.val().cancelada
  


    

    // snapshot.forEach((childItem)=>{
    //   state.lista.push({
    //     key: childItem.key,
    //     mensagem: childItem.val().mensagem,
    //     meuTotal: childItem.val().meuTotal,
    //     troco: childItem.val().troco,
    //     nome: childItem.val().nome,
    //     nomeCall: childItem.val().nomeCall,
    //     telefone: childItem.val().telefone,
    //     endereco: childItem.val().endereco,
    //     complemento: childItem.val().complemento,
    //     nomeCompra: childItem.val().nomeCompra
        
      
        


    //   })

    // } )

    this.setState(state)
})

// firebase.database().ref('aEntrega').on('value', (snapshot) => {
//   let state = this.state
  
//   state.key = snapshot.val().user
//  this.setState(state)
  
 
// })

}})

  }


//   componentDidMount(){
        
//     setInterval(()=> {
//         this.setState({ hora: new Date().toLocaleTimeString() })
//     }, 1000 );

// };

// componentDidUpdate(){
//     console.log('Atualizou!!' )
// }

  

  render(){




    if(this.state.mensagem === 'free' || this.state.mensagem===''){
      return(
        <View style={{marginBottom:200,}} >

        <View style={{alignItems:'center', margin:5, backgroundColor:'#f5f5f5', borderBottomWidth:1, borderBottomColor:'#cccccc'  }}  >
        
        <Text style={{fontSize:16, color:'#1b2d4e', fontWeight:'bold'}} >REGISTRO SEM COMPRAS FINALIZADAS...</Text>
        <Icon2 name="emoji-happy" size={45} color={'#1b2d4e'}   />
  

        
        
        
        </View>
        
          </View>        
      )
    }else if( this.state.mensagem ==='wait' ){




    return(
     <View style={{marginBottom:200,}} >





<View style={{alignItems:'center', margin:5, backgroundColor:'#f5f5f5', borderBottomWidth:1, borderBottomColor:'#cccccc'  }}  >

<Text style={{fontSize:16, color:'#1b2d4e', fontWeight:'bold'}} >AGUARDE UM INSTANTE, SUA COMPRA ESTA SENDO VERIFICADA EM NOSSO SITEMA...</Text>
<Icon2 name="emoji-happy" size={45} color={'#1b2d4e'}   />
<Text style={{fontSize:24, fontWeight:'bold', 
              color:'#1b2d4e', paddingHorizontal:'5%'}} > Total da compra: R$ {parseFloat(this.state.meuTotal).toFixed(2)} </Text> 
              {/* <TouchableOpacity onPress={''} > wpp</TouchableOpacity> */}
{/* <Text>SUA COMPRA ESTA SENDO EMBALADA</Text> */}



{ this.state.troco >0 ?  
  <TouchableOpacity   onPress={()=>{
  Linking.openURL(`https://api.whatsapp.com/send?1=pt_BR&phone=5521965274997&text=*DADOS DA COMPRA*\n\n-NOME: ${this.state.nome}\n-ENDEREÇO: ${this.state.endereco} \n-COMPLEMENTO: ${this.state.complemento}\n-TELEFONE:${this.state.telefone}\n-TROCO PARA: ${parseFloat(this.state.troco).toFixed(2)} \n \n-ID: ${this.state.key} \n${this.state.time}`)


    


}  }  >
<Icon3 style={{margin:5 }} name="whatsapp" size={60} color='green'  />
<Text style={{color:'green', margin:5, fontSize:18, paddingLeft:25}} >Para verificarmos mais rápido, nos envie os dados da sua compra por Whatsapp...</Text>
</TouchableOpacity> :

<TouchableOpacity onPress={()=>{
  Linking.openURL(`https://api.whatsapp.com/send?1=pt_BR&phone=5521965274997&text=*DADOS DA COMPRA*\n\n-NOME: ${this.state.nome}\n-ENDEREÇO: ${this.state.endereco} \n-COMPLEMENTO: ${this.state.complemento}\n-TELEFONE:${this.state.telefone}\n-CARTÂO: ${this.state.cartao} \n\n-ID: ${this.state.key} \n${this.state.time}`)

}  }  >
  <View style={{flexDirection:'row' , justifyContent:'space-around', alignItems:'center'}}>
<Icon3 style={{margin:5, }} name="whatsapp" size={60} color='green'  />
<Text style={{color:'green', margin:5, fontSize:18, paddingLeft:25}} >Para verificarmos mais rápido, nos envie os dados da sua compra por Whatsapp...</Text>

  </View>
</TouchableOpacity>

}



</View>


       {/* <FlatList showsVerticalScrollIndicator={false} 
          
          // horizontal={true}
          data={this.state.lista}
          renderItem={({item})=> this._renderItem(item) }
          keyExtractor = {(item, index)=>index.toString()}
          
/> */}
<ScrollView  showsVerticalScrollIndicator={false}  style={{margin:10}} >
  

 { this.state.troco >0 ?  
   
 <View>
    <Text style={{color:'red'}}  >{this.state.cancelada} </Text>

 <Text style={{fontSize:22, color:'#1b2d4e', fontWeight:'bold'}} >

   {`-NOME: ${this.state.nome}\n-ENDEREÇO: ${this.state.endereco} \n-COMPLEMENTO: ${this.state.complemento}\n-TELEFONE:${this.state.telefone}\n-TROCO PARA: ${parseFloat(this.state.troco).toFixed(2)} \n \n-COMPRA: ${this.state.nomeCompra}\n`}
   
    </Text>   
   <FlatList 
                // horizontal={true}
                
                data={this.state.listax}
                renderItem={({item})=> this._renderItem(item) }
                keyExtractor = {(item, index)=>index.toString()}
        
                
      /> 

 </View>


    
    
   
    
    :
<View>
<Text style={{color:'red'}}  >
  {`${this.state.cancelada}`}
  </Text>
    
<Text style={{fontSize:20, color:'#1b2d4e', fontWeight:'bold'}} >

{`-NOME: ${this.state.nome}\n-ENDEREÇO: ${this.state.endereco} \n-COMPLEMENTO: ${this.state.complemento}\n-TELEFONE:${this.state.telefone}\n-CARTÂO: ${this.state.cartao} \n `}


 </Text>
 <FlatList 
                // horizontal={true}
                
                data={this.state.listax}
                renderItem={({item})=> this._renderItem(item) }
                keyExtractor = {(item, index)=>index.toString()}
        
                
      /> 
 
</View>
}





</ScrollView>



     </View>




    )

  }


    


      

  }

//   _renderItem(item){

//     let NewqtItem;
  
//     if(item.qtItem > 0){
//       NewqtItem = 'x'+item.qtItem
    
//     }else{
//       NewqtItem = ''
//     }

//    return(

//     //  item.key ==='w' ? 
//     //  <View>
//     //    {/* <Text>igual a WWWW</Text> */}
//     //  </View>  :

// <View>


// <View style={{width:lateral,  margin:10    }} >
// {/*   
// <Image  style={{width:lateral/6, height:lateral/6, borderRadius:100,margin:5, borderWidth:1, borderColor:'#1b2d4e' }} source={{uri:item.foto }} />
// <Text style={{ fontSize:16, fontWeight:'bold',color:'green', borderRadius:10, borderBottomWidth:2, borderBottomColor:'#cccccc'  }} >{`Id#${item.key} ${item.nome} ${NewqtItem} \nValor: ${parseFloat(item.multiItem).toFixed(2)} ` } </Text>
//       {/* <View style={{backgroundColor:'#1b2d4e', width:lateral/5.8, height:lateral/5.8, borderRadius:100, alignItems:'center', justifyContent:'center', margin:5}} >
//       </View>
//     */}
    
//     <Text style={{fontSize:18, margin:5}} > {item.nomeCompra  }   </Text>

// </View>




// </View>



  
//    )



    
//     }

  
_renderItem(item){

  // this.state.xxt

  let uid = firebase.auth().currentUser.uid;
  
  // for( let a = item.key; a< item.key.lenght; 
    
  // firebase.database().ref('laComprita').child(uid).set({
  //   // nome: 0,
       
  //      nomeA: item.nome+1,
  //       precoA: item.preco
      
        
        

      
      
  // })
  
  // )
  

  return(

    
    
    <View style={{borderWidth:2, margin:5}} >

      
      {/* <Text> {item.key} </Text> */}
<Text style={{fontSize:18, color:'#1b2d4e', fontWeight:'bold'}}  >{`#${item.key} ${item.nome}\n-Quantidade:*${item.qtItem}\n-Valor: ${item.preco}\n-Total: ${item.multiItem}`}</Text>
   


   
    </View>
    
  )
}



}

// let laVar = "notificatssions-active";

Notes.navigationOptions = {
  tabBarLabel: 'Notificações',
  tabBarIcon: ({ tintColor }) => (
    // <Icon name="md-checkmark-circle" size={24} color={tintColor} />
    <Icon name="notifications-active" size={24} color={tintColor} />
  )
};

export default Notes;
