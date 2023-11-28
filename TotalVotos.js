import React, { Component } from 'react';
import { View, Text,StyleSheet,Image ,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import io from 'socket.io-client';



export default class TotalVotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: ['acuerdo 1','acuerdo 2','acuerdo 3','acuerdo 4','acuerdo 5',
        'acuerdo 6','acuerdo 7','acuerdo 8','acuerdo 9','acuerdo 10',],
        num:0,
        afavor:0,
        encontra:0,
        abstinencia:0,
        total:0,
    };
    this.socket = io('http://10.0.2.2:3000');

  }
  
 

  componentWillUnmount() {
    this.socket.disconnect();
  }
  componentDidMount (){
    this.socket.on('af', () => {
      //console.log('a favor desde total de votaciones')
      this.setState({ afavor: this.state.afavor + 1 ,total:this.state.total +1}, () => {
        
      });

    });
    this.socket.on('ab', () => {
      //console.log('abstinencia desde total de votaciones')
      this.setState({ abstinencia: this.state.abstinencia + 1,total:this.state.total +1 }, () => {
        
      });
    });
    this.socket.on('en', () => {
      //console.log('en contra desde total de votaciones')
      this.setState({ encontra: this.state.encontra + 1 ,total:this.state.total +1}, () => {
        
      });
    });
    
  }

  siguienteAcuerdo = () => {
    if(this.state.num < 9){
      this.setState({ num: this.state.num + 1 }, () => {
  
      });
      this.socket.emit('reset');
      this.socket.emit('mensaje',this.state.data[this.state.num + 1]);
      this.setState({ afavor: 0,
        encontra:0,
        abstinencia: 0 ,
        total: 0});
    }
    
    
  };
  render() {
    this.socket.emit('start');
    this.socket.emit('mensaje',this.state.data[this.state.num]);
    return (
      <LinearGradient colors={['white', '#78EAE2']} style={styles.fondo}>
        <View>
        <Image style={styles.imagen} source={require("./Imagenes/EscudoUDG.png")} />

          <Text style={styles.acuerdo}>
            {this.state.data[this.state.num]}
          </Text>
          <View>
            <Text style={styles.texto}>
              A favor...............................{this.state.afavor}
            </Text>
          </View>
          <View>
            <Text style={styles.texto}>
              En Contra..........................{this.state.encontra}
            </Text>
          </View>
          
          <View>
            <Text style={styles.texto}>
              Abstinencia.......................{this.state.abstinencia}
            </Text>
          </View>

          <View>
            <Text style={styles.texto}>
              Total de votos...................{this.state.total}
            </Text>
          </View>
          
          
          <TouchableOpacity style={styles.boton} onPress={this.siguienteAcuerdo} >
            <View>
              <Text style={{textAlign:'center',fontSize:30,color:'black'}}>
                siguiente
              </Text>
            </View>
          </TouchableOpacity>
         
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  acuerdo:{
    color: 'black',
    fontSize:35,
    textAlign:'center'
  },
  texto:{
    marginTop:50,
    color:'black',
    fontSize:25
  },
  imagen: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  fondo: {
    flex: 1,
  },
  boton:{
    fontSize:30,
    marginTop:90,
    alignSelf:'center',
    borderWidth:1,
    borderRadius:50,
    width:150,
    height:50,
  }
  
});
