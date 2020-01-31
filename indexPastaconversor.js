import React, {Component} from 'react'

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard,Image, Dimensions, Button,FlatList, AsyncStorage } from 'react-native'
import firebase from 'firebase'

import Carrinho from '../Carrinho'

const { width, height } = Dimensions.get('window')




//  >>>                convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad

class Conversor extends Component{

    constructor(props){
        super(props)
        this.state={
            valorAcumulado:0,
            totalzao:0,
            correcaoVerbal:'',
            totalAqui:[],
            y:0,
            index:0,
            codigo:0,

            sominha:0,
            preco:'',
            nome:'',
            cartaz:'',
            hahaha:'',

            qtdProd:0,
            prodClicado:'',
            totalInFirebase:'',
            aff:[],

            lista22:[],
            nome1:'',
            preco1:'',
            nomezin:'',
            frutao:0,
            vixe:0,

            tabaco:0,

            key:'',

            id:'',

         
           keyzinha:'',

           myprice:0,
           listaCompra:'',
           itemCar:0,
           itemCar2:0
           

            
        };
       
        this.maisprod = this.maisprod.bind(this) //metodo q aumenta o valor do prod(poe produto no carrinho)
        this.menprod = this.menprod.bind(this)
        this.totalprod = this.totalprod.bind(this)
        this.somaGeral = this.somaGeral.bind(this)
        this.cadastrarAcougue = this.cadastrarAcougue.bind(this)
        this.aqueleProd = this.aqueleProd.bind(this)



 

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

             firebase.auth().onAuthStateChanged((user)=>{
                if(user){


          
                  firebase.database().ref('ouser').child(user.uid).on('value', (snapshot) => {
                    let state = this.state
                    state.myprice = snapshot.val().valTotal
                    state.listaCompra = snapshot.val().listaCompra
                    state.itemCar = snapshot.val().itemCar
                    
                    
                   
                  })


          
                }
              })


                               firebase.database().ref('usuarios').on('value', (snapshot) => {
                                let state = this.state
                                state.lista22 = []
                                     
                                snapshot.forEach((childItem)=>{ 
                                    state.lista22.push({
                                    key: childItem.key,
                                    nome1: childItem.val().nome1,
                                    preco1: childItem.val().preco1,
                                       
                                    })
                    
                                } )
                                
                                this.setState(state)  
                            } );      

            }  


  
       conversaoDoFirebase = parseFloat(this.props.data.preco)

       cadastrarAcougue(){
        
          this.state.totalInFirebase = this.state.totalzao

          this.state.codigo = 5
        //   
         
          //----------------
        

         
    }

    aqueleProd(){
        let state = this.state
          
        if (state.valorAcumulado > 0) {
          state.valorAcumulado -= 1
        //   state.totalzao -= this.conversaoDoFirebase
 
        } else {
          
        }

        if (state.valorAcumulado >1) {
            state.correcaoVerbal =' Produtos'
            
        } else {
            state.correcaoVerbal =' Produto'
        }
        
        this.setState(state)
       
    }
       
    maisprod(){
        let state = this.state
              
        state.valorAcumulado += 1,
        state.totalzao += this.conversaoDoFirebase

       this.state.listaCarrinho =  this.props.data.nome +' = '+ this.props.data.preco
       this.state.itemCar2 = +1


        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                firebase.database().ref('ouser').child(user.uid).child('valTotal').set(this.state.myprice += this.conversaoDoFirebase)

                firebase.database().ref('ouser').child(user.uid).child('listaCompra').set(this.state.listaCompra += 'Registro: '+this.state.itemCar +'# '+this.props.data.nome + ' = '+ this.props.data.preco + '\n'+ '--------------------------'+'\n' )

                firebase.database().ref('ouser').child(user.uid).child('itemCar').set(this.state.itemCar += this.state.itemCar2)
            }
          })



        

       
        // firebase.database().ref('primeiraID').child('idTotal').child(this.props.data.id).set(this.state.totalzao)

        // const usuario2 = firebase.database().ref('primeiraID').child('idTotal')
        // const chaves2 = usuario2.push().key
  
        // usuario2.child(chaves2).set({
        //   preco1: this.state.totalzao
          
        // })
      

     


        if (state.totalzao > 0) {
           this.state.aff.push(this.props.data.key)

          
           
            if (state.valorAcumulado >1) {
                state.correcaoVerbal =' Produtos'
                
            } else {
                state.correcaoVerbal =' Produto'
            }


        } else {
            
        }

        this.setState(state)
       
       }
       
       menprod(){
       
        let state = this.state
       
        // firebase.database().ref('primeiraID').child('idTotal').child(this.state.keyzinha).child('preco1').set(0)
  

       
        if (state.valorAcumulado > 0 && this.state.myprice > 0) {
          state.valorAcumulado -= 1
          state.totalzao -= this.conversaoDoFirebase

          this.state.itemCar2 = +1

                  firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                firebase.database().ref('ouser').child(user.uid).child('valTotal').set(this.state.myprice -= this.conversaoDoFirebase)



                firebase.database().ref('ouser').child(user.uid).child('listaCompra').set(this.state.listaCompra += ' Registro: '+this.state.itemCar +'# '+ this.props.data.nome+' REMOVIDO!!!'+'\n'+ '--------------------------'+'\n' )

                firebase.database().ref('ouser').child(user.uid).child('itemCar').set(this.state.itemCar += this.state.itemCar2)

                

                
            }
          })

          
         

                // const usuario2 = firebase.database().ref('verdura/precin')
        // const chaves2 = usuario2.push().key
  
        // usuario2.child(chaves2).set({
        //   nome1: this.props.data.nome,
        //   preco1: this.state.totalzao
        // })

         
        } else {
          
        }

        if (state.valorAcumulado >1) {
            state.correcaoVerbal =' Produtos'
            
        } else {
            state.correcaoVerbal =' Produto'
        }
        
        this.setState(state)
       
       }

    //    totalrod(){

       totalprod(){
        
        this.state.totalInFirebase = this.state.totalzao

        let usuario = firebase.database().ref('usuarios')
        let chaves = usuario.push().key
  
        usuario.child(chaves).set({
          nome1: this.props.data.nome,
          preco1: this.state.totalInFirebase

    })
  }

       somaGeral(){
        let state = this.state 

        state.sominha = this.state.totalAqui[1] + this.state.totalAqui[2]

       }

    render(){
       
        let prod
        const { mercadoria, nomeMerca, precoMerca  } = this.props
        // const precoMercaConv = parseFloat(precoMerca).toFixed(2)

        // const precao = parseFloat(this.state.precoFireBase).toFixed(2)
      
        return(
            <View style={styles.container} >


                <View style={styles.marcadorias} >
                    <View>
                  
                    <Image  style={styles.imagensprod} source={{uri:this.props.data.cartaz }} />
                    
                </View>

                    <View style={{marginTop:0, justifyContent:'space-around'}} >
                        <Text style={styles.titulo} >{this.props.data.nome   } </Text>

                        {/* <Text style={styles.preco} >R$ {precao} </Text> AQUI ANTES */} 
                        <Text style={styles.preco} >R$ { this.props.data.preco } </Text> 
                        
                    <View style={{flexDirection:'row', }} >

                                <TouchableOpacity style={styles.botao} onPress={this.maisprod} > 
                                <Text style={{color:'white', fontSize:15}} >+ Carrinho</Text> 
                                </TouchableOpacity>

                                <TouchableOpacity onPress={this.menprod} > 
                                <Image source={require('../img/cash-remove.png')} style={{height:30, width:30,}} /> 
                                </TouchableOpacity>
                    </View>
                                                               
                        <Text style={styles.valorAcumuladoStyle} > 
                        { (this.state.valorAcumulado === 0 ? '' : this.state.valorAcumulado + this.state.correcaoVerbal ) }
                        
                        </Text>
                               
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}} >
                            <TouchableOpacity style={styles.botaoComprar} onPress={''} > 
                                <Text style={{color:'white', fontWeight:'bold', fontSize:18, }} >COMPRAR</Text>  
                            </TouchableOpacity>
                                   <Text style={{fontSize:15}} > R$ {this.state.totalzao.toFixed(2)}</Text>
            
                        </View>

                

                            
                        

                         
                    </View>
                </View>
               

            </View>     
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        // alignItems:'center',
        flexDirection:'column',
        margin:10,
    },
    marcadorias:{
        marginTop:3,
        height:height/3 ,
        width:width-25,
        backgroundColor:'#FFF',
        flexDirection:'row',
        // justifyContent:'flex-start',
      borderRadius:10,
      elevation:3

        
    },
    titulo:{
        fontSize:20,
       
      
    },
    imagensprod:{
        width:150,
        height:200,
        // marginTop:10
        margin:10,
        borderRadius:50
        
    },
    botao:{
        width:100,
        height:30,
        backgroundColor:'#115',
        // borderRadius:10,
        // marginTop:20,
        // marginHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        borderTopStartRadius:35,
        borderBottomEndRadius:35

        
    },
    botaoComprar:{
        width:100,
        height:50,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        borderBottomStartRadius:35,
        borderTopEndRadius:35,
        marginBottom:15
    },
    preco:{
        fontSize:30,
        fontWeight:'bold'
    },
    valorAcumuladoStyle:{
        fontWeight:'bold'
    }
})

export default Conversor