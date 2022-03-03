import React from 'react';
import {View, Text, StyleSheet, Image,ScrollView,Dimensions} from 'react-native';

export default function Sobremesa(){
  return(
    <ScrollView>
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Sobremesas Deliciosas </Text>
      <Text style={estilo.subtitulo}> Gelada com Chocolate</Text>
      <View style={{alignItems:'center'}}>
      <Image style={estilo.fotos} source={require('../assets/geladachocolate.jpg')}/>
      </View>
     

            <Text style={estilo.subtitulo}> Torta de Morando </Text>
      <View style={{alignItems:'center'}}>
      <Image style={estilo.fotos} source={require('../assets/tortamorango.jpg')}/>

       </View>

            <Text style={estilo.subtitulo}> Manjar tradicional </Text>
      <View style={{alignItems:'center'}}>
      <Image style={estilo.fotos} source={require('../assets/manjar.jpg')}/>
      </View>
    

    </View>
    </ScrollView>
  );
}

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  container:{
flex: 1,
backgroundColor: '#f0e68c',

  },
  titulo:{
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 40,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  fotos:{
    width: largura,
    height: 250,
    borderRadius: 50,
    marginBottom: 40,
    paddingHorizontal: 20
  },
  subtitulo:{
    textAlign: 'left',
    fontSize: 20

  }

})