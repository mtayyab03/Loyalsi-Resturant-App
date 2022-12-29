import React from 'react'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

//components
import Screen from '../components/Screen'
import Navbar from '../components/common/Navbar'

//config
import Colors from '../config/Colors'

export default function BuildingScreen(props) {
    const courseData = [
        {
            id: '1',
            title: 'Padova'
        },
        {
            id: '2',
            title: 'Trieste'
        },
        {
            id: '3',
            title: 'Venezia'
        },
        {
            id: '4',
            title: 'Udine'
        },

    ]
    return (
        <Screen style={styles.screen}>

            {/* navbar */}
            <Navbar />

            <View style={styles.maincontainer} >

                <View style={styles.textcontainer}>
                    <Text style={styles.seltext}>
                        Seleziona la tua città
                    </Text>
                    <Text style={{ color: '#9B9B9C' }}>
                        così puoi incominciare a giocare
                    </Text>
                </View>

                <FlatList
                    style={{ flexGrow: 0 }}
                    data={courseData}
                    keyExtractor={courseData => courseData.id.toString()}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    numColumns={2}
                    renderItem={({ item }) =>

                        <TouchableOpacity activeOpacity={0.9} onPress={() => { props.navigation.navigate('HomeScreen') }} style={styles.countrycontainer} >
                            <Image style={styles.img} source={require('../../assests/building.png')} />
                            <Text style={styles.texttitle}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>

                    }
                />

            </View>

        </Screen >
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.lightgrey
    },

    textcontainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    seltext: {
        fontSize: RFPercentage(3),
        color: Colors.black
    },

    countrycontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: RFPercentage(15),
        height: RFPercentage(15),
        borderRadius: RFPercentage(3),
        backgroundColor: Colors.white,
        marginTop: RFPercentage(2),
        marginLeft: RFPercentage(1.5)
    },

    img: {
        width: RFPercentage(8),
        height: RFPercentage(8)
    },

    maincontainer: {
        marginTop: RFPercentage(17)
    },

    texttitle: {
        marginTop: RFPercentage(1)
    },

})