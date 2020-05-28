import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, FlatList, Alert } from 'react-native';
import firebase  from '../../services/firebaseConnection';

import  Icon from 'react-native-vector-icons/MaterialIcons';
import  Icon2 from 'react-native-vector-icons/Feather';



const lateral = Dimensions.get('window').width;


class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state={
       lista:[],
       key:'',
       xxs:'',
       compraNow:'',
       foto:'',
       preco:'',
       nome:'',
       xss:'',
       qtItem:0,
       multiItem:0,
       meuTotal: 0,
       theUser:'',
       cancelada:''
       
       
      //  nomeCompra:''
      //  notification:''


        
    };
   
  
     

         firebase.auth().onAuthStateChanged((user)=>{
            if(user){


              firebase.database().ref("aEntrega").child(user.uid).on('value', (snapshot) => {
                let state = this.state
                // state.lista = [],
                state.cancelada =  snapshot.val().cancelada
                // fifi = pipi
               
          
                // snapshot.forEach((childItem)=>{
                //   state.lista.push({
                //     key: childItem.key,
                //     // nomeCompra: snapshot.val().nomeCompra,
                
                   
                //   })
          
                // } )
          
                this.setState(state)
            } );


              // firebase.database().ref('compras').child(user.uid).on('value', (snapshot) => {
              //   let state = this.state
              //   state.lista = snapshot.val().xxs
                
                
               
              // })

                           //asdasd
                            //aqui valor dos id vindo do fb

              firebase.database().ref("compras").child(user.uid).child('buy').on('value', (snapshot) => {
                let state = this.state
                state.lista = []
          
                snapshot.forEach((childItem)=>{
                  state.lista.push({
                    key: childItem.key,
                    compraNow: childItem.val().compraNow,
                    
                    xxs: childItem.val().xxs,
                    // lala: childItem.val().lala,
                    foto:childItem.val().foto,
                    preco:childItem.val().preco,
                    nome:childItem.val().nome,
                    qtItem:childItem.val().qtItem,
                    multiItem:childItem.val().multiItem,
                    nomeAb: childItem.val().nomeAb,
                    
                  
                    
    
          
                  })
          
                } )
          
                this.setState(state)
            },
            
            firebase.database().ref('compras').child(user.uid).child('compraNow').on('value', (snapshot) => {
              let state = this.state
              state.xxs = snapshot.val().xxs
              state.meuTotal = snapshot.val().meuTotal,
              state.notification = snapshot.val().notification,
              state.theUser = snapshot.val().theUser
             
              this.setState(state)
              // this.setState(state) //essencial
             
            }),

            // firebase.database().ref('aEntrega').child(user.uid).on('value', (snapshot) => {
            //   let state = this.state
            //   state.mensagem = snapshot.val().mensagem
              
            //   this.setState(state)
             
            // })
            
            
            
            
            
            );



 
      
            }
          })


}


  render(){

    // if( this.state.theUser !== 'no' ){

      // return(
      //   <View>
      //     <Text>asdiusadisad</Text>
      //   </View>

      // )



    // }else{

      return(
      

        <View style={styles.container} >
  
          <View style={{width:lateral, backgroundColor:'#ef473a', paddingVertical:5,  
          alignItems:'center', flexDirection:'row', justifyContent:'space-between', 
          paddingHorizontal:'2%', paddingTop:10, borderBottomEndRadius:0,borderBottomStartRadius:0,
           borderTopEndRadius:0, borderTopStartRadius:0   }} >
  
             
  
  
  
        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>  {



            if(this.state.notification ==='free' ){
  
              // firebase.auth().onAuthStateChanged((user)=>{
              // if(user){
              
          if( this.state.key === '0' || this.state.xxs === '0'  ){
            Alert.alert('Mercado:','Você não tem produtos para remover.')
  
          }
             
          // else if( !user ){
          //   alert('faca login')
          // }
          // else if(user){
  
          // }
          
          else if( this.state.key !== '0' || this.state.xxs !== '0'  ){
            Alert.alert('Mercado:','Você removeu todos os itens da lista de compras.')
     
  
          // firebase.database().ref('aEntrega').child(uid).update({
          //   // nome: 0,
          //   cancel : '',
          //   nomeCompra: '*'
            
          // });
  
          // firebase.database().ref('aEntrega').child(uid).update({
  
          //   // nomeE:'',
          //   telefone: '',
          //   endereco: '',
          //   complemento: '',
          //   cancelada : '',
          //   nomeCompra: ''
            
          // });

                 let uid = firebase.auth().currentUser.uid;
          firebase.database().ref('compras').child(uid).child('buy').remove()
          
          firebase.database().ref('compras').child(uid).child('compraNow').update({
            // nome: 0,
            xxs : '0',
            meuTotal: 0
            
          });

          firebase.database().ref('aEntrega').child(uid).update({
            // nome: 0,
            cancelada :'',
            myCompra: ''
            
          });
  
  
          } 
  
      
  
      //   }else{
      //     alert('Faça login');
      //     this.props.navigation.navigate('Profile')
      //   }
  
      // })
   
  
        }else if( this.state.notification ==='wait' ){
          alert('Você ja tem compras em andamento, aguarde a confirmação.')
      }
      else {
        alert('Faça login')
      }
  
    }}
    >
            <Icon name="cancel" size={45} color={'#1b2d4e'}   />
              <Text style={{fontSize:16, color: '#1b2d4e', paddingRight:'0%'}} >{'Limpar \n Lista'} </Text>
              </TouchableOpacity>
  
  
              <Text style={{fontSize:24, fontWeight:'bold', 
              color:'white', paddingHorizontal:'5%'}} >R$ {parseFloat(this.state.meuTotal).toFixed(2)} </Text>
  
  
              <TouchableOpacity style={{flexDirection:'row', alignItems:'center', paddingRight:2,}} onPress={()=> {

              
               if( this.state.key ==='0' || this.state.xxs === '0' && this.state.notification==='free'  ){

                alert('Escolha seus produtos')

               }else if(this.state.notification ==='wait'  ){
                  alert('Você ja tem compras em andamento, aguarde a confirmação.')
  
                }else if(this.state.notification ==='free'){
  
                  this.props.navigation.navigate('Pagamento')
  
                }else{
                  alert('Faça login')
                }
                

               

         
                
               
              
            
              
 
              
    
              }} >

  <Text style={{fontSize:16, color:'#1b2d4e', fontWeight:'bold'}} >Pagar</Text>
  <Icon name="payment" size={45} color={'#1b2d4e'}  />
  </TouchableOpacity>
  
      
            
           
            {/* <Text>AQUI VAI UMA NAVEGACAO PARA ENDERECOS E FORMA DE PAGAMENTO E UM ICONE PARA CANCELAR TODA A COMPRA</Text> */}
  
          </View>
        
          
          <FlatList showsVerticalScrollIndicator={false} 
          
                  // horizontal={true}
                  data={this.state.lista}
                  renderItem={({item})=> this._renderItem(item) }
                  keyExtractor = {(item, index)=>index.toString()}
                  
        />
  
  
        </View>
      )

    // }




    
    
            
  }

  

  _renderItem(item){

    let cancelada = ''


   firebase.auth().onAuthStateChanged((user)=>{
            if(user){
    firebase.database().ref("aEntrega").child(user.uid).on('value', (snapshot) => {
     
      // state.lista = [],
      cancelada =  snapshot.val().cancelada

  } );

}
})
 

    let NewqtItem;
    let newPreco;
    let xixi;
    if(item.qtItem > 0){
      NewqtItem = ' x'+item.qtItem
    
    }else{
      NewqtItem = ''
    }

    let squash = item.multiItem
    // squash.toFixed(2)

    if (item.key === 'w'  ) {


      
      
    } else {


      

      return(

      
      
        <View  >
  
          {/* <Image style={{width:200, height:150 , borderRadius:100}}
          resizeMode="contain"
          source={{uri:item.cartaz}} /> */}
  
        <View  >
  
          
  
          <View style={{width:400, height:110 ,flexDirection:'row', alignItems:'center', backgroundColor:'#f5f5f5', margin:5, borderRadius:10, borderBottomWidth:2, borderBottomColor:'#cccccc'  }} >
            <View style={{ alignItems:'center', justifyContent:'center', margin:5}} >
              <TouchableOpacity onPress={()=>{ alert(item.nome) }} >
              <Image  style={{width:lateral/5, height:lateral/5, borderRadius:100, borderWidth:2, borderColor:'#1b2d4e'  }} source={{uri:item.foto }} />
              
              </TouchableOpacity>
 
            </View>

           

            <Text style={{margin:0, fontSize:16, fontWeight:'bold',color:'green', paddingRight:180   }} >{`ID#${item.key} ${NewqtItem}\n${item.nome}\nValor: ${parseFloat(item.multiItem).toFixed(2)}`} </Text>

         
           

            
          <TouchableOpacity style={{ marginLeft:-175, }}   onPress={()=>  { 
            Alert.alert(
              "Mercado",
              "Você realmente deseja excluir um item do carrinho?",
              [
                {
      text: "Sim",
      onPress: () => {
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref('compras').child(uid).child('buy').child(item.key).remove()
        firebase.database().ref('aEntrega').child(uid).child('nomeCompra').child(item.key).remove()  //aqui remove da no aEntrega
        
        firebase.database().ref('compras').child(uid).child('compraNow').update({
          // nome: 0,
          meuTotal : this.state.meuTotal -= item.multiItem
          
          
        });
        
        Alert.alert('Mercado:','Você removeu o item '+item.nome+' da lista de compras.')
        // alert(this.state.meuTotal)
        
        
        
        // let intXXS =  parseInt(this.state.xxs)  //aqui converte 1(string) para 1(int)
        // intXXS --
        // this.state.xxs =  intXXS.toString()
        // firebase.database().ref('compras').child(uid).child('compraNow').set({
          // // nome: 0,
          // xxs : this.state.xxs,
          
          
          // });
        
          //FAZER O CALCULO REVERSO DO XXS, PARA REDUZIR OS NUMEROS PARA SETAR 0 COMO STRING NO FIREBASE.
          //E DEPOIS MOSTRAR O NOME DOS ITENS, A IMAGEM E O PRECO 
          
          
          
          if(this.state.meuTotal <= 0 ){
            let uid = firebase.auth().currentUser.uid;
          
            firebase.database().ref('aEntrega').child(uid).set({
              // nome: 0,
              cancelada:'', 
              myCompra:'',
              // nome:'',
              telefone: '',
              endereco: '',
              complemento: ''
              
        });

        firebase.database().ref('aEntrega').child(uid).child('nomeCompra').remove()

        // let uid = firebase.auth().currentUser.uid;
        firebase.database().ref('compras').child(uid).child('buy').remove()
        
        firebase.database().ref('compras').child(uid).child('compraNow').update({
          // nome: 0,
          xxs : '0',
          meuTotal: 0
          
        });
        
        // firebase.database().ref('aEntrega').set({
          
          //   nome:'',
          //   telefone: '',
          //   endereco: '',
          //   complemento: '',
          
          // });
          
        }else{
          
          firebase.database().ref('aEntrega').child(uid).update({
            // nome: 0,
          cancelada: `${this.state.cancelada}  ${item.nome} Id# ${item.key} \n  Cancelado pelo usuario. \n`
            
           } );
            
            
            
          }

        }
        
      },
      { text: "Não" }
    ],
    { cancelable: false }
    );
    
    
    
    
    //now
    
  }} >
    
  <Icon   name="remove-shopping-cart" size={30} color={"red"}  />
 


   
  </TouchableOpacity>
  
             
  
          
          </View>
  
        
        </View>
   
        </View>
        
      )


    }


}

}
  
  


const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    flex:1,
    // paddingTop:5,
    alignItems:'center',
    // padding:4
    
   
    
  }


})

Dashboard.navigationOptions = {
  tabBarLabel: 'Entrega',
  tabBarIcon: ({ tintColor }) => (
    // <Icon name="md-checkmark-circle" size={24} color={tintColor} />
    <Icon2 name="package" size={28} color={tintColor} />
  )
};



export default Dashboard; 

