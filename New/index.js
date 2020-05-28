import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, 
  FlatList, ActivityIndicator, Alert } from 'react-native';
import firebase  from '../../services/firebaseConnection'
import  Icon from 'react-native-vector-icons/MaterialIcons';
import  Icon2 from 'react-native-vector-icons/FontAwesome';

const lateral = Dimensions.get('window').width;


class New extends Component {

  

  constructor(props){
    super(props)
    this.state = {
      lista:[],
      listaId:[],
      lista45:[],
      myprice:0,
      lamess:'',
      notinha:''
     

     };

    

     firebase.database().ref("mercado/acougue").on('value', (snapshot) => {
      let state = this.state
      state.lista = []

      snapshot.forEach((childItem)=>{
        state.lista.push({
          key: childItem.key,
          nome: childItem.val().nome,
          preco: childItem.val().preco,
          cartaz: childItem.val().cartaz,

        })

      } )

      this.setState(state)
  },

  

  firebase.auth().onAuthStateChanged((user)=>{
   

    if(user){
    

    firebase.database().ref('aEntrega').child(user.uid).on('value', (snapshot) => {
      let state = this.state
      
     state.lamess = snapshot.val().mensagem,
     this.setState(state)
      
     
    })

  }

})







  

  
  
  
  
  );


  


  }

  

  render(){

    // this.state.lamess =='' ?  this.state.notinha = "notifications-none" :   this.state.notinha = 'notifications-active'

    // if(this.state.lamess ==''){
  
    //   this.state.notinha = "notifications-none"
        
    // }else {
    //   this.state.notinha = 'notifications-active'
    // }

    return(
      
      <View style={styles.container} >

        <ScrollView showsVerticalScrollIndicator={false}   >
         
        <View style={{   justifyContent:'space-around', flexDirection:"row", alignItems:'center' , backgroundColor:'#ef473a',
         paddingTop:0,  borderBottomEndRadius:0, borderBottomStartRadius:0 ,width:lateral,  paddingVertical:5, paddingTop:0}}  >
          
        

          <Image style={styles.qnice}  source={require('../../img/qnice.png')} />

          <Text style={{fontSize:28 , fontWeight:'bold', color:'#1B2D4E',paddingRight:0 }}  > Mercado   </Text>

          
          <TouchableOpacity onPress={()=> 
            {

              
      Alert.alert('Mercado:','Sua compra esta sendo verificada em nosso sistema...')


            }} > 

          {  this.state.lamess ==='free' || this.state.lamess==='' ?  <Icon name="notifications-none" size={34} style={{color:'#fff', paddingRight:0 }}  /> : 
               <Icon name='notifications-active' size={34} style={{color:'yellow', paddingRight:0 }}  />  }
          {/* <MaterialIcons name={this.state.notinha} size={34} style={{color:'#fff', paddingRight:0 }}  /> */}
          </TouchableOpacity>
   
         

         
          </View>

          <View style={{backgroundColor:'#fafafa',height:50,   }} >
          <Text style={{fontSize:22 , color:'#1B2D4E' ,  borderBottomWidth:2, borderBottomColor:'#cccccc', marginTop:5, marginLeft:10}} >Para você</Text>
         
          </View>
     
          <View  style={{backgroundColor:'#fafafa',borderBottomLeftRadius:0,borderBottomRightRadius:0, marginHorizontal:0,flexDirection:'row' }}  >
          
          <View style={styles.botoesMargem} >

            <TouchableOpacity style={styles.botoesSessoes} onPress={()=> {

        

            this.props.navigation.navigate('Acougue')
            // firebase.auth().onAuthStateChanged((user)=>{
            //   if(user){
            //     navigation.navigate('Acougue', {uid: user.uid});
            //   }else{
            //     navigation.navigate({ routeName: 'SignIn' });
            //   }
            // })
            
            
            
          } }  >
            <Image source={require('../../img/iconAcougue.png')} style={styles.icones} />
            <Text style={styles.nomeSessao} >Açougue</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botoesSessoes} onPress={()=>  this.props.navigation.navigate('Bebidas')}  >
            <Image source={require('../../img/iconBebidas.png')} style={styles.icones} />
            <Text style={styles.nomeSessao} >Bebidas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botoesSessoes} onPress={()=> this.props.navigation.navigate('Despensa')}  >
              <Image source={require('../../img/iconDespensa.png')} style={styles.icones} />
              <Text style={styles.nomeSessao} >Despensa</Text>
              </TouchableOpacity>

{/*                        
            <TouchableOpacity style={styles.botoesSessoes} onPress={()=> this.props.navigation.navigate('Biscoitos')}  >
              <Image source={require('../../img/iconHigiene.png')} style={styles.icones} />
              <Text style={styles.nomeSessao} >Frios</Text>
              </TouchableOpacity> */}

        
          </View>

          <View style={styles.botoesMargem} >

            <TouchableOpacity style={styles.botoesSessoes} onPress={()=> this.props.navigation.navigate('Laticinios')}  >
            <Image source={require('../../img/iconLaticineos.png')} style={styles.icones} />
            <Text style={styles.nomeSessao} >Laticínios</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.botoesSessoes} onPress={()=>       this.props.navigation.navigate('Alimentos')}  >
            <Image source={require('../../img/iconAlimentos.png')} style={styles.icones} />
            <Text style={styles.nomeSessao} >Alimentos</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={styles.botoesSessoes} onPress={()=> this.props.navigation.navigate('Enlatados')}  >
              <Image source={require('../../img/iconEnlatados.png')} style={styles.icones} />
              <Text style={styles.nomeSessao} >Enlatados</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botoesSessoes} onPress={()=> this.props.navigation.navigate('Variedades')}  >
            <Image source={require('../../img/iconVar.png')} style={styles.icones} />
            <Text style={styles.nomeSessao} >Variedades</Text>
            </TouchableOpacity>

        
          </View>

          <View style={styles.botoesMargem} >

            <TouchableOpacity style={styles.botoesSessoes} onPress={()=> this.props.navigation.navigate('Higiene')}  >
            <Image source={require('../../img/iconHigiene.png')} style={styles.icones} />
            <Text style={styles.nomeSessao} >Higiene</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botoesSessoes} onPress={()=> this.props.navigation.navigate('Limpeza')}  >
            <Image source={require('../../img/iconLimpeza.png')} style={styles.icones} />
            <Text style={styles.nomeSessao} >Limpeza</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={styles.botoesSessoes} onPress={()=> this.props.navigation.navigate('Biscoitos')}  >
              <Image source={require('../../img/iconBiscoito.png')} style={styles.icones} />
              <Text style={styles.nomeSessao} >Biscoitos</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botoesSessoes} onPress={()=> this.props.navigation.navigate('HortiFruti')}  >
            <Image source={require('../../img/iconHortiFruti.png')} style={styles.icones} />
            <Text style={styles.nomeSessao} >HortiFruti</Text>
            </TouchableOpacity>


      
          </View>

                   
    

          </View>



          <View style={{ marginTop:20, alignItems:'flex-start', margin:10  }} >
            <Text style={{fontSize:22 , fontWeight:'bold',   borderBottomWidth:2, borderBottomColor:'#cccccc', color:'#1B2D4E' }} >Destaques da semana</Text>
{/*           
          <FlatList 
                // horizontal={true}
                
                data={this.state.lista}
                renderItem={({item})=> this._renderItem(item) }
                keyExtractor = {(item, index)=>index.toString()}
        
                
      /> */}
      
      
          </View>


    


          
        </ScrollView>

      </View>
    );
  }


  _renderItem(item){
    
    return(
      <View  >
        
      <TouchableOpacity style={{height:150 , width: lateral, backgroundColor:'#f5f5f5', marginVertical:8, borderRadius:5, justifyContent:'flex-start',flexDirection:'row'  }} >
        
        <Image style={{width:200, height:150 , borderRadius:100}}
        resizeMode="contain"
        source={{uri:item.cartaz}} />
        

      <View style={{flexDirection:'column', marginLeft:25 }} >
      <Text style={{margin:8, fontSize:15, fontWeight:'bold', }} >{item.nome } </Text> 
      <Text style={{margin:8, fontSize:20, fontWeight:'bold',color:'green' }} >{"R$ " + item.preco } </Text> 

      
      </View>
   

      </TouchableOpacity>
     
      </View>
      
    )
}
};



  const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      // marginTop:5,
      backgroundColor:'#fff',
      // padding:3
      
    },
    slogan:{
      fontSize:60,
      fontWeight:'bold',
      margin:10
    },
    botoesSessoes:{
      width:95,
      height:95,
      backgroundColor:'#f5f5f5',
      margin:10,
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center',
      elevation:3,
      marginRight:2,
      marginVertical:12,
   
    
      

    },
    nomeSessao:{
      fontSize:16,
      
    },
    qnice:{
      width:80,
      height:45,
      // paddingRight:20 ,
      // paddingLeft:25 ,
     
      
      // marginTop:10,
      borderRadius:200,
      // marginBottom:15

    },
    scroll:{
    
    },
    botoesMargem:{
      // flexDirection:'row',
      margin:5
      
     
    },
    icones:{
      width:50,
      height:50,
      
    }

  })

  New.navigationOptions = {
    tabBarLabel: 'Produtos',
    tabBarIcon: ({ tintColor }) => (
      // <Icon name="md-checkmark-circle" size={24} color={tintColor} />
      <Icon2 name="shopping-basket" size={24} color={tintColor} />
    )
  };
  

export default New;