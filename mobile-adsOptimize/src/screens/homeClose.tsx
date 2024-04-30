import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
                                        

export default function HomeClose(){

    const [loaded] = useFonts({
        'Inria': require('../../assets/fonts/InriaSans-Bold.ttf'),
        'FredokaBold': require('../../assets/fonts/Fredoka_Expanded-Bold.ttf')
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
            <Text style={estilo.titulo}>AdOptimize</Text>
            <View style={estilo.btns}>
                <TouchableOpacity
                    style={estilo.btn}
                >
                    <Text style={estilo.txtBtn}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={estilo.btn}
                >
                    <Text style={estilo.txtBtn}>CREATE ACCOUNT</Text>
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
        width:350,
        height:350,
        left:40,
        top:80
    },
    btn:{
        backgroundColor:'#1E5A63',
        width: 230,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    txtBtn:{
        color: '#FFFFFF',
        fontFamily: 'Inria',
        fontSize: 20
    },
    btns:{
        alignItems:'center',
        justifyContent:'center',
        height:400
    },
    titulo:{
        fontSize: 40,
        textAlign:'center',
        color: '#FFFFFF',
        fontFamily:'FredokaBold',
        marginTop: 40
    }
});