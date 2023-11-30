import React, { Component } from 'react';
import { View, Text,Alert,StyleSheet,TextInput, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContext } from '@react-navigation/native';

export default class Inicio_consejero extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static contextType = NavigationContext; 
  render() {
    const inicio_consejero = () => {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {

      navigation.navigate('vista del consejero');
      if (this.readyState == 4 && this.status == 200) {
       console.log(xhttp.responseText);
       
       if(xhttp.responseText == "3"){
        Alert.alert("username no reconocido");
       }else{
        if(xhttp.responseText == "0"){
          Alert.alert("contraseña erronea, intentalo de nuevo");
        }else{
          navigation.navigate('vista del consejero');
        }
       }
    }
    };
      xhttp.open("GET", "https://proyecto1vots.000webhostapp.com/verifica.php?username="+this.state.username+"&password="+this.state.password, true);
      
      xhttp.send();
    };

    const navigation = this.context;
    //const inicio_consejero = () => {
     // navigation.navigate('vista del consejero');
    //};
    return (
        <LinearGradient colors={['white', '#F8DDCC','black']} style = {styles.Fondo}>
             <View>
                <Text style = {styles.titulo}>
                  Inicio de sesion de consejero
                </Text>
                <Image style = {styles.imagen} source={require("./Imagenes/EscudoUDG.png")}></Image>
                <Text style = {styles.texto}>
                  Username
                </Text>
                <TextInput style = {styles.txtinput} onChangeText={(username)=> this.setState({username})}></TextInput>
                <Text style = {styles.texto}>
                  Password
                </Text>
                <TextInput style = {styles.txtinput} onChangeText={(password)=> this.setState({password})}></TextInput>
                <TouchableOpacity style = {styles.boton} onPress={inicio_consejero}>
                  <Text style = {{textAlign:'center',color:'black',fontSize:20,marginTop:5}}>Login</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
     
    );
  }
}
const styles = StyleSheet.create({
    imagen:{
      width:300,
      height:300,
      alignSelf:'center',
      
    },
    boton:{
      height:50,
      width:150,
      alignSelf:'center',
      borderRadius:20,
      borderWidth:3,
      backgroundColor:'#AEA2A2',
      marginTop:40,
    
    },
    Fondo:{ 
      backgroundColor: 'black',
      flex: 1,
           
    },
    texto:{
      fontSize:15,
      color:'white',
      marginTop:40,
      marginLeft:10,

    },
    titulo:{
      fontSize:35,
      fontWeight:'bold',
      color:'#6B6B5F',
      textAlign:'center'
    },
    txtinput:{
      borderWidth:3,
      borderRadius:15,
      backgroundColor:'white',
      marginTop:10
    },
    
});