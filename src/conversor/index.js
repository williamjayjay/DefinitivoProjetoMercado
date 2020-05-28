import React, {Component} from 'react'

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard,Image, Dimensions, Button,FlatList, AsyncStorage, Alert, Slider } from 'react-native'
import firebase from '../../services/firebaseConnection'



// import Carrinho from '../Carrinho'

const { width, height } = Dimensions.get('window')
const lateral = Dimensions.get('window').width;




//  >>>                convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad

class Conversor extends Component{

    static navigationOptions={
  
        header:null
      }

    constructor(props){
        super(props)
        this.state={
            valorAcumulado:0,
            totalzao: this.conversaoDoFirebase,
            totalzaoKG: this.conversaoDoFirebase,
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

         
           keyzinha:'',

           myprice:0,

           //funfa
           compraNow:'',
           qtItem:'0' ,
           xxs:'',
           leNome:'',
           meuTotal:0,

           nomeCompra:'',

           sliderValue:1000
        //    theUser:''

           

           //funfa

     
           

            
        };
       
        this.maisprod = this.maisprod.bind(this) //metodo q aumenta o valor do prod(poe produto no carrinho)
        this.menprod = this.menprod.bind(this)
        this.totalprod = this.totalprod.bind(this)
        this.somaGeral = this.somaGeral.bind(this)

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
                                    //aqui val lvindo dos carao
                                firebase.database().ref("aEntrega").child(user.uid).on('value', (snapshot) => {
                                    let state = this.state
                                    // state.lista = [],
                                    state.myCompra =  snapshot.val().myCompra
                                    // fifi = pipi
                                   
                              
                                    // snapshot.forEach((childItem)=>{
                                    //   state.lista.push({
                                    //     key: childItem.key,
                                    //     // nomeCompra: snapshot.val().nomeCompra,
                                    
                                       
                                    //   })
                              
                                    // } )
                              
                                    this.setState(state)
                                } );


          
                //   firebase.database().ref('compras').child(user.uid).child('buy').on('value', (snapshot) => {
                //     let state = this.state
                 
                //     // state.listaCompra = snapshot.val().listaCompra,
                //     // state.itemCar = snapshot.val().itemCar
                    
                    
                   
                //   })
                //   await firebase.database().ref('users').child(uid).set({
                //     saldo: 0,
                //     nome: nome,

                  firebase.database().ref('compras').child(user.uid).child('compraNow').on('value', (snapshot) => {
                    let state = this.state
                    state.xxs = snapshot.val().xxs,
                    state.meuTotal = snapshot.val().meuTotal,
                    state.notification = snapshot.val().notification
                    // state.theUser = snapshot.val().theUser
                    
                   
                  })

                  firebase.database().ref('aEntrega').child(user.uid).on('value', (snapshot) => {
                    let state = this.state
                    state.leNome = snapshot.val().nome
                    
                   
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
                                    preco1: childItem.val().preco1
                                       
                                    })
                    
                                } )
                                
                                this.setState(state)  
                            } );      

                            //asdasd
                                //aqui valor dos id vindo do fb


      

            }  


  
       conversaoDoFirebase = parseFloat(this.props.data.preco)

       aMinhaSoma(){
        let state = this.state

        //val acuulado
          //----------------
        

         
    }

    botaoComprar(){
       
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
        this.state.totalzaoKG = this.conversaoDoFirebase
        this.state.sliderValue = 1000
        let state = this.state
              
        state.valorAcumulado += 1,
        state.totalzao += this.conversaoDoFirebase

       this.state.listaCarrinho =  this.props.data.nome +' = '+ this.props.data.preco
       this.state.itemCar2 = +1

       ///funfa
        this.state.qtItem ++
        // this.state.meuTotal += this.conversaoDoFirebase

       ///

 



        

       
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
    //    alert('asdad')
        let state = this.state
      
       
        // firebase.database().ref('primeiraID').child('idTotal').child(this.state.keyzinha).child('preco1').set(0)
  

       
        if (state.valorAcumulado > 0 ) {  //funfa
            this.state.totalzaoKG = this.conversaoDoFirebase
            this.state.sliderValue = 1000
          state.valorAcumulado -= 1
          state.totalzao -= this.conversaoDoFirebase

        //   this.state.itemCar2 = +1


            ///funfa
        this.state.qtItem --

        ///

        //           firebase.auth().onAuthStateChanged((user)=>{
        //     if(user){
        //         firebase.database().ref('ouser').child(user.uid).child('valTotal').set(this.state.myprice -= this.conversaoDoFirebase)



        //         firebase.database().ref('ouser').child(user.uid).child('listaCompra').set(this.state.listaCompra += ' Registro: '+this.state.itemCar +'# '+ this.props.data.nome+' REMOVIDO!!!'+'\n'+ '--------------------------'+'\n' )

        //         firebase.database().ref('ouser').child(user.uid).child('itemCar').set(this.state.itemCar += this.state.itemCar2)

                

                
        //     }
        //   })

          
         

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
       
        // let prod
        // const { mercadoria, nomeMerca, precoMerca  } = this.props
        // // const precoMercaConv = parseFloat(precoMerca).toFixed(2)

        // // const precao = parseFloat(this.state.precoFireBase).toFixed(2)

        // var lila = 1

        

      
        return(

            this.props.data.Kilo ===true?

            
            <View style={styles.container} >
                
  <Text style={styles.titulo} >{this.props.data.nome} </Text>

                <View style={styles.marcadorias} >
                    
                    <View  >
                  
                    <TouchableOpacity style={{shadowOpacity:2}} onPress={()=> { 

                         alert(this.props.data.nome)

                      } } >
                          {/* <Text style={styles.titulo} >{this.props.data.nome} </Text> */}
                         <Image  style={styles.imagensprod} source={{uri:this.props.data.cartaz }} />
                         
                    </TouchableOpacity>
                  
                    <Text style={{fontSize:16, color:'green',textAlign:'center'}} > R$ {this.state.totalzao.toFixed(2)}</Text>
                    
                </View>
                

                    <View style={{marginTop:10, justifyContent:'space-around'}} >
             
                  
                        {/* <Text style={styles.preco} >R$ {precao} </Text> AQUI ANTES */} 
                        <Text style={styles.preco} >R$ { this.props.data.preco } </Text> 
                      
                        
                    <View style={{flexDirection:'row' }} >
                        

                                <TouchableOpacity style={styles.botao} onPress={this.maisprod} > 
                                <Text style={{color:'white', fontSize:15}} >+ Carrinho</Text> 
                                </TouchableOpacity>

                                

                                <TouchableOpacity   onPress={this.menprod} > 
                                <Image source={require('../../img/cash-remove.png')} style={{height:32, width:32,  }} /> 
                                </TouchableOpacity>

                              
                                
                    </View>

                    {/* <Text>assads{this.state.sliderValue} </Text>  */}

                    

                        <Text style={styles.valorAcumuladoStyle} > 
                        { (this.state.valorAcumulado === 0 ? '' : "+"+this.state.valorAcumulado + this.state.correcaoVerbal ) }
                        
                        </Text>
                               
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}} >

                        

                            <TouchableOpacity style={styles.botaoComprar} onPress={()=>{ 


                                if( this.state.leNome ==='' ){

                                    Alert.alert('Mercado:','Crie uma conta para poder fazer as compras em nosso App.')


                                }else if( this.state.notification ==='wait' ){
                                    Alert.alert('Mercado:','Você ja tem uma compra em andamento.')
                                }
                                
                                else{
                                        
                                    let intXXS =  parseInt(this.state.xxs)  //aqui converte 1(string) para 1(int)
                                    intXXS ++  //aqui tem sempre +1
                                   this.state.xxs =  intXXS.toString()
     
                                     let uid = firebase.auth().currentUser.uid;
     
                                     // firebase.database().ref('ouser').child(user.uid).child('valTotal').set(this.state.myprice += this.conversaoDoFirebase)
                                     

                               
                                    if(this.state.sliderValue !== 1000 ){

                                       //AQUI E VENDIDO GRAMAS
                                        Alert.alert(
                                            "Mercado",
                                            `Você realmente deseja ${this.state.sliderValue} gramas de ${this.props.data.nome}?`,
                                            [
                                              {
                                    text: "Sim",
                                    onPress: () => {

                                        Alert.alert('Mercado:','Você adicionou o item '+this.props.data.nome+' à lista de compras.')
                                      
                                        firebase.database().ref('compras').child(uid).child('compraNow').update({
                                            
                                            // nome: 0,
                                            xxs : this.state.xxs,
                                            meuTotal : this.state.meuTotal += this.state.totalzaoKG,
                                           //  notification:'free'
                                            
                                            
                                        });


                                        firebase.database().ref('compras').child(uid).child('buy').child(this.state.xxs).set({
                                            // nome: 0,
                                               
                                               nome: this.props.data.nome ,
                                               foto : this.props.data.cartaz,
                                               preco : this.props.data.preco,
                                               qtItem : this.state.qtItem,
                                               multiItem : this.state.totalzaoKG,
                                               // nomeAb: this.props.data.nomeAb ,
                                             
                                        });

                                        firebase.database().ref('aEntrega').child(uid).child('nomeCompra').child(this.state.xxs).set({
                                            // nome: 0,
                                               
                                               nome: this.props.data.nome ,
                                               foto : this.props.data.cartaz,
                                               preco : this.props.data.preco,
                                               qtItem : this.state.qtItem,
                                               multiItem : this.state.totalzao,
                                               // nomeAb: this.props.data.nomeAb ,
                                             
                                               
                                               
            
                                            
                                            
                                        });

                                        firebase.database().ref('aEntrega').child(uid).update({
                                            // nome: 0,
                                            myCompra: `${this.state.myCompra} \nItem Id# ${this.state.xxs}\n PRODUTO: ${this.props.data.nome} \nR$: ${this.props.data.preco} \n TOTAL: ${this.state.totalzaoKG.toFixed(2)}\n`
                                            // meuTotal : this.state.meuTotal += this.state.totalzao
                                            }
                                            
                                        );
    
   

                              
                                      }
                                      
                                    },
                                    { text: "Não" }
                                  ],
                                  { cancelable: false }
                                  );

                        



                                    }else{
                                        

              
                                     //AQUI E VENDIDO KILO TODO.
                                     Alert.alert('Mercado:','Você adicionou o item '+this.props.data.nome+' à lista de compras.')

                                        firebase.database().ref('compras').child(uid).child('compraNow').update({
                                            
                                            // nome: 0,
                                            xxs : this.state.xxs,
                                            meuTotal : this.state.meuTotal += this.state.totalzao,
                                           //  notification:'free'
                                            
                                            
                                        });
   
                      
   
   
                                        
   
   
                                       //  firebase.database().ref('aEntrega').child(uid).child('nomeCompra').set(
                                       //     // nome: 0,
                                       //     this.state.nomeCompra += 'Item Id#'+this.state.xxs+ ':' +this.props.data.nome+ '\nR$: '+ this.props.data.preco +'\n'
                                       //     // meuTotal : this.state.meuTotal += this.state.totalzao
                                           
                                           
                                       // );
   
                                       firebase.database().ref('aEntrega').child(uid).child('nomeCompra').child(this.state.xxs).set({
                                           // nome: 0,
                                              
                                              nome: this.props.data.nome ,
                                              foto : this.props.data.cartaz,
                                              preco : this.props.data.preco,
                                              qtItem : this.state.qtItem,
                                              multiItem : this.state.totalzao,
                                              // nomeAb: this.props.data.nomeAb ,
                                            
                                              
                                              
           
                                           
                                           
                                       });

                                       firebase.database().ref('aEntrega').child(uid).update({
                                        // nome: 0,
                                        myCompra: `${this.state.myCompra} \nItem Id# ${this.state.xxs}\n PRODUTO: ${this.props.data.nome} \nR$: ${this.props.data.preco} \n TOTAL: ${this.state.totalzao.toFixed(2)}\n`
                                        // meuTotal : this.state.meuTotal += this.state.totalzao
                                        }
                                        
                                    );
   
                                      
                                       
                                          
                                               
                                               // firebase.database().ref('compras').child(uid).child('compraNow').child('meuTotal').set( this.state.meuTotal += this.state.totalzao)
                               
                                               // firebase.database().ref('compras').child(user.uid).child('itemCar').set(this.state.itemCar += this.state.itemCar2)
                                           
                                         
   
        
                                        firebase.database().ref('compras').child(uid).child('buy').child(this.state.xxs).set({
                                            // nome: 0,
                                               
                                               nome: this.props.data.nome ,
                                               foto : this.props.data.cartaz,
                                               preco : this.props.data.preco,
                                               qtItem : this.state.qtItem,
                                               multiItem : this.state.totalzao,
                                               // nomeAb: this.props.data.nomeAb ,
                                             
                                               
                                               
            
                                            
                                            
                                        });
                                   
                                   
                                   }
                               

                                    }

                                    
                                    




                                    
                      



                                
                                } }> 
                                <Text style={{color:'white', fontWeight:'bold', fontSize:18, }} >COMPRAR</Text>  
                           
                                {/* // <Text style={{color:'white', fontWeight:'bold', fontSize:18, }} > {this.state.meuTotal} </Text>   */}
                            </TouchableOpacity>
                            
                                  
            
                        </View>
                        

                

                            
                        

                         
                    </View>
                    
                </View>

                

<View style={{alignItems:'center',backgroundColor:'#f2f2f2', borderRadius:0, flexDirection:'row', justifyContent:'center'}} >


<Text style={{fontSize:14}} > {`PESO: ${this.state.sliderValue < 1000 ?`${this.state.sliderValue} Gramas`:`${this.state.sliderValue} KG`}`} </Text>
<Text style={{fontSize:14}} > {`=  R$: ${this.state.totalzaoKG.toFixed(2)}`} </Text>
</View>


<View style={{backgroundColor:'#f2f2f2', borderRadius:0, height:30, justifyContent:'center', borderBottomWidth:2, borderBottomStartRadius:5, borderBottomEndRadius:5  }} >
<Slider maximumTrackTintColor='red' maximumValue={1000} minimumValue={100} step={50} value={this.state.sliderValue} onValueChange={valorA => this.setState({sliderValue: valorA, totalzaoKG: (valorA/1000)*parseFloat(this.props.data.preco),  })}  />  
</View>
                        
            

          
            </View>     
  

            :

            
            <View style={styles.container} >
                
  <Text style={styles.titulo} >{this.props.data.nome} </Text>

                <View style={styles.marcadorias} >
                    
                    <View  >
                  
                    <TouchableOpacity style={{shadowOpacity:2}} onPress={()=> { 

                         alert(this.props.data.nome)

                      } } >
                          {/* <Text style={styles.titulo} >{this.props.data.nome} </Text> */}
                         <Image  style={styles.imagensprod} source={{uri:this.props.data.cartaz }} />
                         
                    </TouchableOpacity>
                  
                    <Text style={{fontSize:16, color:'green',textAlign:'center'}} > R$ {this.state.totalzao.toFixed(2)}</Text>
                    
                </View>
                

                    <View style={{marginTop:10, justifyContent:'space-around'}} >
             
                  
                        {/* <Text style={styles.preco} >R$ {precao} </Text> AQUI ANTES */} 
                        <Text style={styles.preco} >R$ { this.props.data.preco } </Text> 
                      
                        
                    <View style={{flexDirection:'row' }} >
                        

                                <TouchableOpacity style={styles.botao} onPress={this.maisprod} > 
                                <Text style={{color:'white', fontSize:15}} >+ Carrinho</Text> 
                                </TouchableOpacity>

                                

                                <TouchableOpacity   onPress={this.menprod} > 
                                <Image source={require('../../img/cash-remove.png')} style={{height:32, width:32,  }} /> 
                                </TouchableOpacity>

                              
                                
                    </View>

                  

                    

                        <Text style={styles.valorAcumuladoStyle} > 
                        { (this.state.valorAcumulado === 0 ? '' : "+"+this.state.valorAcumulado + this.state.correcaoVerbal ) }
                        
                        </Text>
                               
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}} >

                        

                            <TouchableOpacity style={styles.botaoComprar} onPress={()=>{ 


                                if( this.state.leNome ==='' ){

                                    Alert.alert('Mercado:','Crie uma conta para poder fazer as compras em nosso App.')


                                }else if( this.state.notification ==='wait' ){
                                    Alert.alert('Mercado:','Você ja tem uma compra em andamento.')
                                }
                                
                                else{
                                        
                                    let intXXS =  parseInt(this.state.xxs)  //aqui converte 1(string) para 1(int)
                                    intXXS ++  //aqui tem sempre +1
                                   this.state.xxs =  intXXS.toString()
     
                                     let uid = firebase.auth().currentUser.uid;
     
                                     // firebase.database().ref('ouser').child(user.uid).child('valTotal').set(this.state.myprice += this.conversaoDoFirebase)
                                     Alert.alert('Mercado:','Você adicionou o item '+this.props.data.nome+' à lista de compras.')
                                     firebase.database().ref('compras').child(uid).child('compraNow').update({
                                         // nome: 0,
                                         xxs : this.state.xxs,
                                         meuTotal : this.state.meuTotal += this.state.totalzao,
                                        //  notification:'free'
                                         
                                         
                                     });

                   


                                     


                                     firebase.database().ref('aEntrega').child(uid).update({
                                        // nome: 0,
                                        myCompra: `${this.state.myCompra} \nItem Id# ${this.state.xxs}\n PRODUTO: ${this.props.data.nome} \nR$: ${this.props.data.preco} \n TOTAL: ${this.state.totalzao.toFixed(2)}\n`
                                        // meuTotal : this.state.meuTotal += this.state.totalzao
                                        }
                                        
                                    );

                                    firebase.database().ref('aEntrega').child(uid).child('nomeCompra').child(this.state.xxs).set({
                                        // nome: 0,
                                           
                                           nome: this.props.data.nome ,
                                           foto : this.props.data.cartaz,
                                           preco : this.props.data.preco,
                                           qtItem : this.state.qtItem,
                                           multiItem : this.state.totalzao,
                                           // nomeAb: this.props.data.nomeAb ,
                                         
                                           
                                           
        
                                        
                                        
                                    });

                                    // firebase.database().ref('laComprita').child(uid).child(this.state.xxs).set({
                                    //     // nome: 0,
                                           
                                    //        nome: this.props.data.nome ,
                                    //        foto : this.props.data.cartaz,
                                    //        preco : this.props.data.preco,
                                    //        qtItem : this.state.qtItem,
                                    //        multiItem : this.state.totalzao,
                                    //        // nomeAb: this.props.data.nomeAb ,
                                         
                                           
                                           
        
                                        
                                        
                                    // });

                                   
                                    
                                       
                                            
                                            // firebase.database().ref('compras').child(uid).child('compraNow').child('meuTotal').set( this.state.meuTotal += this.state.totalzao)
                            
                                            // firebase.database().ref('compras').child(user.uid).child('itemCar').set(this.state.itemCar += this.state.itemCar2)
                                        
                                      

     
                                     firebase.database().ref('compras').child(uid).child('buy').child(this.state.xxs).set({
                                         // nome: 0,
                                            
                                            nome: this.props.data.nome ,
                                            foto : this.props.data.cartaz,
                                            preco : this.props.data.preco,
                                            qtItem : this.state.qtItem,
                                            multiItem : this.state.totalzao,
                                            // nomeAb: this.props.data.nomeAb ,
                                          
                                            
                                            
         
                                         
                                         
                                     });
                                
                                
                                }
                            



                                
                                } }> 
                                <Text style={{color:'white', fontWeight:'bold', fontSize:18, }} >COMPRAR</Text>  
                           
                                {/* // <Text style={{color:'white', fontWeight:'bold', fontSize:18, }} > {this.state.meuTotal} </Text>   */}
                            </TouchableOpacity>
                            
                                  
            
                        </View>
                        

                

                            
                        

                         
                    </View>
                    
                </View>

                

{/* <View style={{alignItems:'center',backgroundColor:'#f2f2f2', borderRadius:0, flexDirection:'row', justifyContent:'center'}} >


<Text style={{fontSize:14}} > {`PESO: ${this.state.sliderValue < 1 ?`${this.state.sliderValue} Gramas`:`${this.state.sliderValue} KG`}`} </Text>
<Text style={{fontSize:14}} > {`=  R$: ${this.state.totalzaoKG.toFixed(2)}`} </Text>
</View>


<View style={{backgroundColor:'#f2f2f2', borderRadius:0, height:30, justifyContent:'center', borderBottomWidth:2, borderBottomStartRadius:5, borderBottomEndRadius:5  }} >
<Slider maximumTrackTintColor='red' maximumValue={1000} minimumValue={0} step={50} value={this.state.sliderValue} onValueChange={valorA => this.setState({sliderValue: valorA, totalzaoKG: (valorA/1000)*parseFloat(this.props.data.preco) })}  />  
</View>
                         */}
            

          
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
          // position:"absolute"
    },
    marcadorias:{
        // marginTop:0,
        height:height/3 ,
        width:width-20,
        backgroundColor:'#FFF',
        flexDirection:'row',
        // justifyContent:'flex-start',
      borderRadius:10,
      elevation:3,
        // position:"absolute"

        
    },
    titulo:{
        fontSize:16,
        fontWeight:'bold',
        color:'#115',
 
    paddingLeft:10,
    // margin:5
        
        
       
      
    },
    imagensprod:{
        width:150,
        height:150,
        // marginTop:10
        margin:5,
        borderRadius:25,
        backgroundColor:'#f2f2f2',
        // marginRight:15,
        // marginLeft:10
        // elevation:3
       
       
        
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
        borderBottomEndRadius:35,
       marginRight:15,
         // position:"absolute"
     

        
    },
    botaoComprar:{
        width:150,
        height:50,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        borderBottomStartRadius:100,
        borderTopEndRadius:100,
        marginBottom:20,
        marginRight:5,
        // position:"absolute"
    },
    preco:{
        fontSize:28,
        fontWeight:'bold'
    },
    valorAcumuladoStyle:{
        fontWeight:'bold'
    }
})

export default Conversor