import React, { useState } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

//components
import Screen from '../components/Screen'

//config
import Colors from '../config/Colors'

export default function SignupScreen(props) {

    const [text, onChangeText] = useState('');
    const [Password, onChangePassword] = useState('');

    return (
        <Screen style={styles.screen}>

            {/* logo */}
            <Image style={styles.logo} source={require('../../assests/logoo.png')} />

            {/* Text */}
            <Text style={styles.stvmotext}>
                ti stavamo
            </Text>
            <Text style={styles.asptext}>
                aspettando :)
            </Text>


            {/* //Inputfield Username Password */}
            <View style={{ marginTop: RFPercentage(2) }}>
                <TextInput
                    style={styles.inputtext}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='Username'
                    placeholderTextColor='#BEBEBE'
                />
                <TextInput
                    style={styles.inputtext}
                    onChangeText={onChangePassword}
                    value={Password}
                    placeholder='Password'
                    placeholderTextColor='#BEBEBE'
                    secureTextEntry
                />
            </View>


            {/* Button */}
            <TouchableOpacity onPress={() => { props.navigation.navigate('HomeScreen') }} style={styles.vaibtncontainer}>

                <Text style={styles.vaitext}>
                    VAI!
                </Text>
            </TouchableOpacity>


            {/* //Bottombg */}
            <ImageBackground style={styles.imgbg} source={require('../../assests/bottombg.png')} >

                {/* //Buttons */}
                <View style={styles.btncontainerd}>

                    {/* Text */}
                    <Text style={styles.bgtext}>
                        Non sei ancora dei nostri?
                    </Text>

                    {/* //Register button */}
                    <TouchableOpacity activeOpacity={0.8} style={styles.buttoncontainer}>
                        <Text style={styles.bgbuttontext}>
                            REGISTRATI
                        </Text>

                    </TouchableOpacity>

                    {/* Button2 */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(3) }}>
                        <Text style={styles.bgtext}>
                            Non riesci ad entrare?
                        </Text>

                        {/* //AIUTO button */}
                        <TouchableOpacity activeOpacity={0.8} style={styles.buttoncontainer}>
                            <Text style={styles.bgbuttontext}>
                                AIUTO
                            </Text>

                        </TouchableOpacity>
                    </View>

                </View>

            </ImageBackground>




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

    logo: {
        width: RFPercentage(8),
        height: RFPercentage(7),
        marginTop: RFPercentage(8)
    },

    stvmotext: {
        marginTop: RFPercentage(4),
        color: Colors.primary,
        fontSize: RFPercentage(3)
    },

    asptext: {
        color: Colors.primary,
        fontSize: RFPercentage(3)
    },

    inputtext: {
        height: RFPercentage(5),
        marginTop: RFPercentage(4),
        borderBottomWidth: 1,
        width: RFPercentage(30),
        color: Colors.black,
        borderColor: '#B7B7B8',
        textAlign: 'center',
    },

    vaibtncontainer: {
        width: RFPercentage(25),
        marginTop: RFPercentage(6),
        height: RFPercentage(8),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: RFPercentage(2),
        backgroundColor: Colors.primary
    },

    vaitext: {
        color: Colors.white,
        fontSize: RFPercentage(2)
    },

    imgbg: {
        width: '100%',
        height: RFPercentage(34),
        position: 'absolute',
        bottom: 0,
        alignItems: 'center'
    },

    btncontainerd: {
        marginTop: RFPercentage(5),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    bgtext: {
        color: Colors.white,
        fontSize: RFPercentage(1.5)
    },

    buttoncontainer: {
        width: RFPercentage(25),
        marginTop: RFPercentage(2),
        height: RFPercentage(8),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: RFPercentage(2),
        backgroundColor: Colors.white
    },

    bgbuttontext: {
        color: Colors.primary,
        fontSize: RFPercentage(2.2)
    }

})