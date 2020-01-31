import React from 'react';
import { Image } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Carrinho from './src/RotasCarro'
import Menu from './src/HomeRotas'
import Usuario from './src/Usuario'
console.disableYellowBox = true;

const AppNavigator = createBottomTabNavigator({
  Carrinho:{
    screen: Carrinho
  },
  Menu:{
    screen: Menu
  },
  Usuario:{
    screen:Usuario
  }
}, {

  initialRouteName: 'Menu',

  tabBarOptions:{
    showLabel: true,
    activeTintColor: '#fff',
    style:{
      backgroundColor: '#ff4c4c'
    },
    defaultNavigationOptions:{
      headerBackTitle: null,
      header:null
    }
  },

  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;

      if(focused && routeName === 'Menu'){
        return <Image source={require('./src/img/lista_ativa.png')} style={{width: 26, height: 26}} />
      }else if(routeName === 'Menu'){
        return <Image source={require('./src/img/lista_inativa.png')} style={{width: 26, height: 26}} />
      }

      if(focused && routeName === 'Carrinho'){
        return <Image source={require('./src/img/carrinho_ativo.png')} style={{width: 26, height: 26}} />
      }else if(routeName === 'Carrinho'){
        return <Image source={require('./src/img/carrinho_inativo.png')} style={{width: 26, height: 26}} />
      }

      if(focused && routeName === 'Usuario'){
        return <Image source={require('./src/img/usuario_ativo.png')} style={{width: 26, height: 26}} />
      }else if(routeName === 'Usuario'){
        return <Image source={require('./src/img/usuario_inativo.png')} style={{width: 26, height: 26}} />
      }

    }
  })


});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;