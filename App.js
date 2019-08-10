import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Button, Image} from 'react-native';

import Icone from './src/components/icone';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);

    this.state = { escolhaUsuario : '', 
                    escolhaComputador : '', 
                    resultado : ''
                  }
  }

  jokenpo(escolhaUsuario){

    var numAleatorio = Math.floor(Math.random() * 5);

    var escolhaComputador = '';

    switch(numAleatorio){
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
      case 3: escolhaComputador = 'spock'; break;
      case 4: escolhaComputador = 'lagarto'; break;
    }

    var resultado = '';

    if(escolhaComputador == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate';
      }
      if(escolhaUsuario == 'papel'){
        resultado = 'Você ganhou';
      }
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Você perdeu';
      }
      if(escolhaUsuario == 'spock'){
        resultado = 'Você ganhou';
      }
      if(escolhaUsuario == 'lagarto')
        resultado = 'Você perdeu';
    }

    if(escolhaComputador == 'papel'){
      if(escolhaUsuario == 'papel'){
        resultado = 'Empate';
      }
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Você ganhou';
      }
      if(escolhaUsuario == 'pedra'){
        resultado = 'Você perdeu';
      }
      if(escolhaUsuario == 'spock'){
        resultado = 'Você perdeu';
      }
      if(escolhaUsuario == 'lagarto')
        resultado = 'Você ganhou';
    }

    if(escolhaComputador == 'tesoura'){
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Empate';
      }
      if(escolhaUsuario == 'pedra'){
        resultado = 'Você ganhou';
      }
      if(escolhaUsuario == 'papel'){
        resultado = 'Você perdeu';
      }
      if(escolhaUsuario == 'spock'){
        resultado = 'Você ganhou';
      }
      if(escolhaUsuario == 'lagarto')
        resultado = 'Você perdeu';
    }

    if(escolhaComputador == 'spock'){
      if(escolhaUsuario == 'spock'){
        resultado = 'Empate';
      }
      if(escolhaUsuario == 'pedra'){
        resultado = 'Você perdeu';
      }
      if(escolhaUsuario == 'papel'){
        resultado = 'Você ganhou';
      }
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Você pedeu';
      }
      if(escolhaUsuario == 'lagarto')
        resultado = 'Você ganhou';
    }

    if(escolhaComputador == 'lagarto'){
      if(escolhaUsuario == 'lagarto'){
        resultado = 'Empate';
      }
      if(escolhaUsuario == 'pedra'){
        resultado = 'Você ganhou';
      }
      if(escolhaUsuario == 'papel'){
        resultado = 'Você perdeu';
      }
      if(escolhaUsuario == 'spock'){
        resultado = 'Você perdeu';
      }
      if(escolhaUsuario == 'tesoura')
        resultado = 'Você ganhou';
    }

    this.setState({ escolhaUsuario : escolhaUsuario, 
                    escolhaComputador : escolhaComputador,
                    resultado : resultado });
  }

  render() {
    return (
      <ScrollView style={styles.tela}>

       <View>
          <Text style={styles.topo}>JOKENPO</Text>
       </View>

       <View style={styles.painelAcoes}>

         <View style={styles.btnEscolha}> 
          <Button title='pedra' onPress={ () => { this.jokenpo('pedra')} }/>
         </View>

         <View style={styles.btnEscolha}>
          <Button title='papel' onPress={ () => { this.jokenpo('papel')} }/>
         </View>

         <View style={styles.btnEscolha}>
          <Button title='tesoura' onPress={ () => { this.jokenpo('tesoura')} }/>
         </View>

      </View>

      <View style={styles.painelAcoesDois}>

         <View style={styles.btnEscolha}>
          <Button title='spock' onPress={ () => { this.jokenpo('spock')} }/>
         </View>

         <View style={styles.btnEscolha}>
          <Button title='lagarto' onPress={ () => { this.jokenpo('lagarto')} }/>
         </View>

       </View>

       <View style={styles.palco}>

         <Text style={styles.txtResultado}>{this.state.resultado}</Text>
         <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
         <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>
         
       </View> 

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  tela: {
    backgroundColor: '#fff'
  },
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  painelAcoesDois: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    paddingTop: 10
  },
  txtResultado: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'red',
    height: 50
  },
  topo: {
    fontSize: 55,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    height: 85,
    paddingTop: 5,
    backgroundColor: 'yellow'
  }
})
