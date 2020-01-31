import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Sobre from '../Sobre';
import Acougue from '../Acougue'
import Bebidas from '../Bebidas'
import Laticineos from '../Laticineos'
import Alimentos from '../Alimentos'
import Higiene from '../Higiene'
import Limpeza from '../Limpeza'




const HomeHotas = createStackNavigator({

  

  Sobre:{
    screen: Sobre
  },
  Acougue:{
    screen: Acougue
  },
  Alimentos:{
    screen: Alimentos
  },
  Laticineos:{
    screen: Laticineos
  },
  Bebidas:{
    screen:Bebidas
  },
  Limpeza:{
    screen: Limpeza
  },
  Higiene:{
    screen:Higiene
  },
 
  

},{
  defaultNavigationOptions:{
    headerBackTitle: null,
    
  }
}

);

export default HomeHotas;