import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'


//config
import Colors from '../../config/Colors'

export default function HomeScreen() {
    return (
        <View style={styles.navbarcontainer}>

            {/* //logo */}
            <View style={styles.navlogocnt}>
                <View >
                    <Image style={styles.logo} source={require('../../../assests/logoword.png')} />
                </View>

                {/* icons */}
                <View style={styles.iconspos}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.searchbg}>
                        <Image style={styles.search} source={require('../../../assests/searchicon.png')} />

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.accountbg}>

                        <Image style={styles.account} source={require('../../../assests/accounticon.png')} />

                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    navbarcontainer: {
        width: '100%',
        height: RFPercentage(15),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderBottomRightRadius: RFPercentage(3),
        borderBottomLeftRadius: RFPercentage(3)
    },

    navlogocnt: {
        width: '90%',
        flexDirection: 'row',
        marginTop: RFPercentage(4),
        justifyContent: "flex-start",
        alignItems: 'center'
    },

    logo: {
        width: RFPercentage(19),
        height: RFPercentage(4.5)
    },

    iconspos: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0
    },

    searchbg: {
        width: RFPercentage(4),
        height: RFPercentage(4),
        borderRadius: RFPercentage(4),
        backgroundColor: Colors.grey,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: RFPercentage(1.5)
    },

    search: {
        width: RFPercentage(2),
        height: RFPercentage(2)
    },

    accountbg: {
        width: RFPercentage(4),
        height: RFPercentage(4),
        borderRadius: RFPercentage(4),
        backgroundColor: Colors.grey,
        alignItems: 'center',
        justifyContent: 'center'
    },

    account: {
        width: RFPercentage(1.5),
        height: RFPercentage(2)
    },

})