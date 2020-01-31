import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import firebase  from '../firebaseConnection'

const lateral = Dimensions.get('window').width;


class Sobre extends Component {
  static navigationOptions = {
   header:null,
  };

  render(){
    alert('Bem vindo ao Mercado :D')
    firebase.auth().onAuthStateChanged((user)=>{
      firebase.database().ref('ouser').child(user.uid).child('valTotal').set(0)

      firebase.database().ref('ouser').child(user.uid).child('listaCompra').set('')

      firebase.database().ref('ouser').child(user.uid).child('itemCar').set(1)
})

    return(
      
      <View style={styles.container} >
        
         
        <View>
          <Image style={styles.qnice}  source={require('../img/qnice.png')} />
        </View>
        
        <ScrollView style={styles.scroll}>
          <View>
          <View style={styles.botoesMargem} >

            <TouchableOpacity style={styles.botoesSessoes} onPress={()=> this.props.navigation.navigate('Acougue')}  >
            <Image source={require('../img/iconAcougue.png')} style={styles.icones} />
            <Text style={styles.nomeSessao} >Açougue</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botoesSessoes} onPress={()=> this.props.navigation.navigate('Bebidas')}  >
            <Image source={require('../img/iconBebidas.png')} style={styles.icones} />
            <Text style={styles.nomeSessao} >Bebidas</Text>
            </TouchableOpacity>
        
          </View>

          <View style={styles.botoesMargem} >

            <TouchableOpacity style={styles.botoesSessoes} onPress={()=> this.props.navigation.navigate('Laticineos')}  >
            <Image source={require('../img/iconLaticineos.png')} style={styles.icones} />
            <Text style={styles.nomeSessao} >Laticineos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botoesSessoes} onPress={()=> this.props.navigation.navigate('Alimentos')}  >
            <Image source={require('../img/iconAlimentos.png')} style={styles.icones} />
            <Text style={styles.nomeSessao} >Alimentos</Text>
            </TouchableOpacity>
        
          </View>

          <View style={styles.botoesMargem} >

            <TouchableOpacity style={styles.botoesSessoes} onPress={()=> this.props.navigation.navigate('Higiene')}  >
            <Image source={require('../img/iconHigiene.png')} style={styles.icones} />
            <Text style={styles.nomeSessao} >Higiene</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botoesSessoes} onPress={()=> this.props.navigation.navigate('Limpeza')}  >
            <Image source={require('../img/iconLimpeza.png')} style={styles.icones} />
            <Text style={styles.nomeSessao} >Limpeza</Text>
            </TouchableOpacity>
      
          </View>

      


 

          </View>

        </ScrollView>

      </View>
    );
  }
}
  const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      paddingTop:5,
      backgroundColor:'#FF2B',
      
    },
    slogan:{
      fontSize:60,
      fontWeight:'bold',
      margin:10
    },
    botoesSessoes:{
      width:lateral/2.5,
      height:120,
      backgroundColor:'#FFF',
      margin:10,
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center',
      elevation:2,
      

    },
    nomeSessao:{
      fontSize:20,
      fontWeight:'bold',
    },
    qnice:{
      width:300,
      height:150,
      // marginTop:10
    },
    scroll:{
      marginTop:-20
    },
    botoesMargem:{
      flexDirection:'row',
     
    },
    icones:{
      width:70,
      height:70,
      
    }

  })

export default Sobre;