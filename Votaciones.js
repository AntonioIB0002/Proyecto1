import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContext } from '@react-navigation/native';
import io from 'socket.io-client';

export default class Votaciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['acuerdo 1', 'acuerdo 2', 'acuerdo 3', 'acuerdo 4', 'acuerdo 5',
        'acuerdo 6', 'acuerdo 7', 'acuerdo 8', 'acuerdo 9', 'acuerdo 10'],

    };

    this.socket = io('http://10.0.2.2:3000');

  }

  static contextType = NavigationContext;

  componentDidMount() {
    this.socket.on('adminStarted', () => {

      navigation = this.context;
      this.socket.disconnect();
      navigation.navigate('1eracuerdo');
    });
  }

  componentWillUnmount() {

    this.socket.disconnect();
  }


  render() {
  
    return (
      <LinearGradient colors={['white', '#78EAE2']} style={styles.Fondo}>
        <View>
          <Text style={styles.titulo}>lista de Acuerdos</Text>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.list}>{item}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  Fondo: {
    backgroundColor: 'black',
    flex: 1,
  },
  TextBoton: {
    color: 'white',
    textAlign: 'center',
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
  titulo: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  list: {
    color: 'black',
    marginTop: 15,
    fontSize: 30,
    borderWidth: 1,
  },
});
