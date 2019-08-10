import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image, Text} from 'react-native';

class Icone extends Component{
  render(){

    if(this.props.escolha == 'pedra'){
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('../../imgs/pedra.png')} />
        </View>
      );

    } else if(this.props.escolha == 'papel'){
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('../../imgs/papel.png')} />
        </View>
      );
    } else if(this.props.escolha == 'tesoura'){
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('../../imgs/tesoura.png')} />
        </View>
      );
    } else if(this.props.escolha == 'spock'){
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('../../imgs/spock.png')} />
        </View>
      );
    } else if(this.props.escolha == 'lagarto'){
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('../../imgs/lagarto.png')} />
        </View>
      );
    } else {
      return false;
    }

  }
}

const styles = StyleSheet.create({
  icone: {
    alignItems: 'center',
    marginBottom: 9
  },
  txtJogador: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Icone;