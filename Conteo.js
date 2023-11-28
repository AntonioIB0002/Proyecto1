import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContext } from '@react-navigation/native';


export default class Conteo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['acuerdo 1', 'acuerdo 2', 'acuerdo 3', 'acuerdo 4', 'acuerdo 5',
        'acuerdo 6', 'acuerdo 7', 'acuerdo 8', 'acuerdo 9', 'acuerdo 10'],
      adminStarted: false,
    };

    
  }

  static contextType = NavigationContext;

 
  handleStart = () => {

      this.props.navigation.navigate('total de votos');
    
  };

  
  render() {
    return (
      <LinearGradient colors={['white', '#78EAE2']} style={styles.Fondo}>
        <View>
          <Text style={styles.titulo}>Acuerdos</Text>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.list}>* {item}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />

          <View style={styles.boton}>
            <TouchableOpacity onPress={this.handleStart}>
              <Text style={styles.TextBoton}>
                Comenzar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  Fondo: {
    backgroundColor: 'black',
    flex: 1,
  },
  list: {
    color: 'black',
    marginTop: 15,
    fontSize: 30,
  },
  boton: {
    borderWidth: 1,
    borderRadius: 30,
    width: 200,
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'black',
  },
  TextBoton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
});
