import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native'; 
export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static contextType = NavigationContext; 

  
  render() {
    const navigation = this.context;
    const ir_a_inicio_consejero = () => {
        navigation.navigate('consejero');
      };
    const ir_a_inicio_contador = () => {
        navigation.navigate('contador');
      };
  
    return (
    <LinearGradient colors={['black', 'red','black']} style = {styles.Fondo}>
        <View style = {styles.cuadro1}>
            <TouchableOpacity onPress={ir_a_inicio_consejero}>
                <Icon name="person-circle-outline" color="black" size = {80} style = {styles.mono} />
                <Text style = {styles.texto}>Consejero</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.cuadro2}>
            <TouchableOpacity onPress={ir_a_inicio_contador}>
                <Icon name="person-circle-outline" color="black" size = {80} style = {styles.mono} />
                <Text style = {styles.texto}>Contador</Text>
                
            </TouchableOpacity>
        </View>
    </LinearGradient>
    
    );
  }
}
const styles = StyleSheet.create({
    mono:{
        alignSelf:'center',
        marginTop:15,
    },
    Fondo:{ 
        borderWidth:4,
        backgroundColor: 'black',
        fontSize: 40,
        flex: 1,
           
    },
    cuadro1:{
        
        alignSelf:'center',
        marginTop: 180,
        height:150,
        width:150,
        borderWidth:3,
        backgroundColor:'#F9D0D0',
        borderRadius:30,
    },
    cuadro2:{
        marginTop:50,
        alignSelf:'center',
        height:150,
        width:150,
        borderWidth:3,
        backgroundColor:'#F9D0D0',
        borderRadius:30,
    },
    texto:{
        textAlign:'center',
        
        fontSize:20,
        fontWeight:'bold',
        color:'black'
        
    },
    
});