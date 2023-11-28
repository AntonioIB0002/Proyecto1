import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import INICIO from './Inicio';
import Inicio_consejero from './Inicio_consejero';
import Inicio_contador from './Inicio_contador';
import CONTEO from './Conteo';
import Votaciones from './Votaciones';
import TotalVotos from './TotalVotos';
import AcuerdoN from './AcuerdoN';


export default class Navegacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Stack = createNativeStackNavigator(); 
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="inicio" component={INICIO} options={{ headerShown: false }} />
                <Stack.Screen name="consejero" component={Inicio_consejero}  options={{ headerShown: false }}/>
                <Stack.Screen name="contador" component={Inicio_contador} options={{ headerShown: false }} />
                <Stack.Screen name="vista del contador" component={CONTEO} options={{ headerShown: false }} />
                <Stack.Screen name="vista del consejero" component={Votaciones} options={{ headerShown: false }} />
                <Stack.Screen name="total de votos" component={TotalVotos} options={{ headerShown: false }} />
                <Stack.Screen name="1eracuerdo" component={AcuerdoN} options={{ headerShown: false }} />
                
            </Stack.Navigator>
        </NavigationContainer>
      
    );
  }
}
