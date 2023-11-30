import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CheckBox } from '@rneui/themed';
import { Text } from 'react-native-elements';
import io from 'socket.io-client';

class AcuerdoN extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msj: '',
      check1: false,
      check2: false,
      check3: false,
      seleccionado: false,
    };
    this.socket = io('http://192.168.2.15:3000');
  }

  cambiar1 = () => {
    if (!this.state.seleccionado) {
      this.setState({
        check1: true,
        check2: false,
        check3: false,
        seleccionado: true,
      });

      this.socket.emit('afavor');
    }
  };

  cambiar2 = () => {
    if (!this.state.seleccionado) {
      this.setState({
        check1: false,
        check2: true,
        check3: false,
        seleccionado: true,
      });

      this.socket.emit('encontra');
    }
  };

  cambiar3 = () => {
    if (!this.state.seleccionado) {
      this.setState({
        check1: false,
        check2: false,
        check3: true,
        seleccionado: true,
      });

      this.socket.emit('abstinencia');
    }
  };

  resetearSeleccion = () => {
    this.setState({
      check1: false,
      check2: false,
      check3: false,
      seleccionado: false,
    });
  };

  componentDidMount() {
    this.socket.on('msj', (mensaje) => {
      this.setState({ msj: mensaje });
    });
    this.socket.on('res',() =>{
      this.resetearSeleccion();
    })
  }

  componentWillUnmount() {

    this.socket.disconnect();
  }

  render() {
    return (
      <LinearGradient colors={['white', '#78EAE2']} style={styles.fondo}>
        <View style={styles.fondo}>
          <Image style={styles.imagen} source={require("./Imagenes/EscudoUDG.png")} />
          <Text style={styles.acuerdo}>{this.state.msj}</Text>
          <CheckBox
            checked={this.state.check1}
            title="A favor"
            onPress={this.cambiar1}
            size={60}
            uncheckedColor='blue'
            containerStyle={{ marginTop: 15, backgroundColor: 'transparent' }}
            textStyle={{ fontSize: 25, marginLeft: 50 }}
          />
          <CheckBox
            style={styles.check}
            checked={this.state.check2}
            title="En contra"
            onPress={this.cambiar2}
            size={60}
            uncheckedColor='blue'
            containerStyle={{ marginTop: 15, backgroundColor: 'transparent' }}
            textStyle={{ fontSize: 25, marginLeft: 50 }}
          />
          <CheckBox
            style={styles.check}
            checked={this.state.check3}
            title="Abstinencia"
            onPress={this.cambiar3}
            size={60}
            uncheckedColor='blue'
            containerStyle={{ marginTop: 15, backgroundColor: 'transparent' }}
            textStyle={{ fontSize: 25, marginLeft: 50 }}
          />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  imagen: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  fondo: {
    flex: 1,
  },
  acuerdo: {
    color: 'black',
    fontSize: 35,
    textAlign: 'center',
  },
});

export default AcuerdoN;
