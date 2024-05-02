import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import { useFonts } from 'expo-font';
                                        

export default function NovaSenha(){

    const [loaded] = useFonts({
        'Inria': require('../../assets/fonts/InriaSans-Bold.ttf'),
        'Inter': require('../../assets/fonts/Inter-SemiBold.ttf')
      });
    if (!loaded) {
    return null;
    }
    return(
        <ImageBackground
            source={require('../../assets/tec-fundo.png')}
            style={estilo.container}
        >
            <Image
                source={require('../../assets/sóLogo-semFundo.png')}
                style={estilo.logo}
            />


            
            <View style={estilo.conteudo}>
                <Text style={estilo.titulo}>Insira a nova senha:</Text>
                <TextInput
                    placeholder="New Password"
                    placeholderTextColor={'#FFFFFF'}
                    style={estilo.boxInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Text style={estilo.titulo}>Confirme a senha:</Text>
                <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor={'#FFFFFF'}
                    style={estilo.boxInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TouchableOpacity
                    style={estilo.btn}
                >
                    <Text style={estilo.txtBtn}>ENVIAR</Text>
                </TouchableOpacity>
            </View>

            

        </ImageBackground>
    )
};

const estilo = StyleSheet.create({
    container:{
        height: 900,
        maxWidth: 450
    },
    logo:{
        width:320,
        height:320,
        left:40,
        top:80,
        marginBottom: 100
    },
    btn:{
        backgroundColor:'#1E5A63',
        width: 230,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 55,
        marginBottom:15
    },
    txtBtn:{
        color: '#FFFFFF',
        fontFamily: 'Inria',
        fontSize: 20
    },
    boxInput:{
        backgroundColor:'#0E2D33',
        borderWidth: 2,
        borderColor: '#FFFFFF',
        width: 250,
        height: 45,
        borderRadius: 10,
        paddingLeft: 8,
        marginTop: 5,
        color: '#FFF'
    },
    conteudo:{
        alignItems:'center'
    },
    titulo:{
        color:'#FFFFFF',
        marginTop:15,
        fontFamily: 'Inter',
    }
});