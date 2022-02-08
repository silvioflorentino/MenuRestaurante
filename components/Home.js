import React from 'react';
import {View, Text, StyleSheet, Image,ScrollView, ImageBackground} from 'react-native';

export default function Home(){
  return(
<View style={estilo.container}>

<ImageBackground style={estilo.imagem} resizeMode="cover" source={require("../assets/home.gif")}>

<Text style={estilo.titulo}> Restaurante </Text>
<Text style={estilo.subTitulo}> Viver Bem - Comer sempre </Text>

</ImageBackground>

</View>
  );
}

const estilo = StyleSheet.create({
container:{
flex: 1,
  },
imagem:{
flex: 1,
},
titulo:{
  marginTop: 80,
  fontSize: 50,
  textAlign: "center",
},
subTitulo:{
  textAlign: "center",
  fontSize: 20
}
})