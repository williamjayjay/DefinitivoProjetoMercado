
import { createAppContainer } from  'react-navigation';
import  { createStackNavigator } from 'react-navigation-stack'

import Login from './src/Login'

import Usuario from './src/Usuario'
import CriarConta from './CriarConta'
import Home from './src/HomeRotas'
import RotasCarro from './src/RotasCarro'

import NavegaTab from './NavegaTab'

  const Navegador = createStackNavigator  ({
    Login:{
      screen: Login
    },
    NavegaTab:{
      screen: NavegaTab,
    },
    Usuario:{
      screen: Usuario,
    },
    CriarConta:{
      screen: CriarConta,
    },
    Home:{
      screen:Home
    },
    RotasCarro:{
      screen:RotasCarro
    }
    
  }, {


      defaultNavigationOptions:{
        headerBackTitle: null,
        header:null
      }
    }) 

  const AppContainer = createAppContainer(Navegador);

  export default AppContainer;
  

