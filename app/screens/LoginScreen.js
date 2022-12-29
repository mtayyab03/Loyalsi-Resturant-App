import React, { useState } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

//components
import Screen from '../components/Screen'

//config
import Colors from '../config/Colors'

export default function LoginScreen(props) {
    const [text, onChangeText] = useState('');
    return (
        <Screen style={styles.screen}>

            {/* Imagebackground */}
            <ImageBackground style={styles.imgbg} source={require("../../assests/topbg.png")}>


                {/* logo */}
                <View style={styles.logo}>
                    <Image style={{ width: RFPercentage(8), height: RFPercentage(7) }} source={require('../../assests/logow.png')} />
                </View>

                {/* Text */}
                <View style={styles.textcontainer}>

                    <Text style={styles.text}>
                        Per registrarti
                    </Text>
                    <Text style={styles.text}>
                        ti chiediamo
                    </Text>
                    <Text style={styles.text}>
                        solo una cosa :)
                    </Text>

                </View>

                {/* //Inputfield */}
                <View style={{ marginTop: RFPercentage(3), alignItems: 'center', justifyContent: 'center', width: '100%', height: RFPercentage(10) }}>
                    <TextInput
                        style={styles.textinput}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder='Username'
                        placeholderTextColor={Colors.white}
                    />
                </View>


                {/* Button */}
                <View style={styles.buttoncontainer}>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => { props.navigation.navigate('SignupScreen') }} style={styles.btncontainer}>

                        <Text style={styles.partotext}>
                            PARTIAMO!
                        </Text>

                    </TouchableOpacity>

                    {/* Text */}
                    <Text style={styles.prostext}>
                        proseguendo accetti il regolamento
                    </Text>

                </View>

            </ImageBackground>


            {/* //Below background image */}
            <View style={styles.btnmaincnt}>

                {/* Text */}
                <Text style={styles.seitext}>
                    Sei già dei nostri?
                </Text>

                {/* //Login button */}
                <TouchableOpacity activeOpacity={0.8} style={styles.logincontainer}>

                    <Text style={styles.logintext}>
                        LOGIN
                    </Text>

                </TouchableOpacity>

            </View>

        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.white
    },

    imgbg: {
        width: '100%',
        height: RFPercentage(75)
    },

    logo: {
        marginTop: RFPercentage(6),
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: RFPercentage(12)
    },

    textcontainer: {
        marginTop: RFPercentage(3),
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: RFPercentage(10),
    },

    text: {
        color: Colors.white,
        fontSize: RFPercentage(3)
    },

    textinput: {
        height: RFPercentage(5),
        marginTop: RFPercentage(4),
        borderBottomWidth: 1,
        width: RFPercentage(27),
        color: Colors.white,
        borderColor: Colors.white,
        textAlign: 'center'
    },

    buttoncontainer: {
        marginTop: RFPercentage(8),
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: RFPercentage(10)
    },

    btncontainer: {
        width: RFPercentage(25),
        marginTop: RFPercentage(2),
        height: RFPercentage(8),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: RFPercentage(2),
        backgroundColor: Colors.white
    },

    partotext: {
        color: Colors.primary,
        fontSize: RFPercentage(2)
    },

    prostext: {
        marginTop: RFPercentage(3),
        color: Colors.white,
        fontSize: RFPercentage(1.5)
    },

    btnmaincnt: {
        width: '100%',
        marginTop: RFPercentage(5),
        justifyContent: 'center',
        alignItems: 'center'
    },

    seitext: {
        color: Colors.black,
        fontSize: RFPercentage(1.5)
    },

    logincontainer: {
        width: RFPercentage(25),
        marginTop: RFPercentage(2),
        height: RFPercentage(8),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: RFPercentage(2),
        backgroundColor: Colors.grey
    },

    logintext: {
        color: '#707070',
        fontSize: RFPercentage(2.2)
    },
});