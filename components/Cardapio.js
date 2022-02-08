import React from 'react';
import {View, Text, StyleSheet, Image,ScrollView} from 'react-native';

export default function Cardapio(){
  return(
    <ScrollView>
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Cardápio Principal </Text>
      <Text style={estilo.subtitulo}> Feijoada </Text>
      <View style={{alignItems:'center'}}>
      <Image style={estilo.fotos} source={require('../assets/feijoadaveveta.jpg')}/>
      </View>
      <Text style={estilo.descritivo}>
      Feijoada é uma designação comum dada a pratos da culinária de regiões e países lusófonos como Portugal, Brasil, Angola, Moçambique, Timor-Leste e Macau. Consiste num guisado de feijão, normalmente com carne, e quase sempre acompanhado com arroz
      </Text>

            <Text style={estilo.subtitulo}> Vira à Paulista </Text>
      <View style={{alignItems:'center'}}>
      <Image style={estilo.fotos} source={require('../assets/virado.jpg')}/>
      <Text style={estilo.descritivo}>
      O Virado à Paulista é preparado com feijão cozido, refogado em cebola, alho e gordura, onde é acrescentado sal e um pouco do próprio caldo do feijão ou de água. ... Na prática, o virado em São Paulo é uma refeição completa que junta as principais comidas brasileiras.
       </Text>
       </View>

            <Text style={estilo.subtitulo}> Strogonoff </Text>
      <View style={{alignItems:'center'}}>
      <Image style={estilo.fotos} source={require('../assets/strogonof-frango.jpg')}/>
      </View>
      <Text style={estilo.descritivo}>
      Estrogonofe é um prato originário da culinária russa composto de cubos de carne bovina servidos num molho de creme de leite. Desde suas origens no século XIX, o prato popularizou-se em muitos países europeus, norte-americanos e no Brasil, sempre com variações consideráveis da receita original
      </Text>

    </View>
    </ScrollView>
  );
}


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
    width: 300,
    height: 250,
    borderRadius: 50
  },
  subtitulo:{
    textAlign: 'left',
    fontSize: 20

  },
  descritivo:{
    textAlign: 'center',
    marginHorizontal: 20,
    lineHeight: 20,
    marginVertical: 20,
  }

})