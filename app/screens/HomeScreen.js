import React, { useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

//components
import Screen from '../components/Screen'

//config
import Colors from '../config/Colors'

export default function HomeScreen(props) {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [activeButton, setactiveButton] = useState(false);

    const courseData = [
        {
            id: '1',
            imageSource: require('../../assests/fidericon.png'),
            titleimage: require('../../assests/hall.png'),
            title: 'Barcollo',
            subtitle: 'Via Mercatovecchio 41, Udine',
            width: '3',
            height: '3'
        },
        {
            id: '2',
            imageSource: require('../../assests/chai.png'),
            titleimage: require('../../assests/bottlecab.png'),
            title: 'La Cantinetta del Borgo',
            subtitle: 'Vicolo Sillio 6, Udine',
            width: '3',
            height: '3'
        },
        {
            id: '3',
            imageSource: require('../../assests/glass.png'),
            titleimage: require('../../assests/pizza.png'),
            title: 'Assaje',
            subtitle: 'Ciao Mandi 29, Udine',
            width: '2.5',
            height: '3.4'
        },

    ]

    const categoryData = [
        {
            id: '1',
            imageSource: require('../../assests/fidericon.png'),
            title: 'bar',
            width: '4',
            height: '4'
        },
        {
            id: '2',
            imageSource: require('../../assests/chai.png'),
            title: 'food',
            width: '4',
            height: '4'
        },
        {
            id: '3',
            imageSource: require('../../assests/glass.png'),
            title: 'pasticceria',
            width: '3',
            height: '4.4'
        },
        {
            id: '4',
            imageSource: require('../../assests/cupicon.png'),
            title: 'beauty',
            width: '3.5',
            height: '4'
        },
        {
            id: '5',
            imageSource: require('../../assests/fidericon.png'),
            title: 'bar',
            width: '4',
            height: '4'
        },
        {
            id: '6',
            imageSource: require('../../assests/chai.png'),
            title: 'food',
            width: '4',
            height: '4'
        },

    ]

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource and update FilteredDataSource
            const newData = courseData.filter(function (item) {
                // Applying filter for the inserted text in search bar
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(courseData);
            setSearch(text);

        }

    }

    return (
        <Screen style={styles.screen}>

            {/* navbar */}
            <View style={styles.navcontainer}>

                {activeButton == false ?

                    // LogoArea
                    <View style={styles.logocontainer}>

                        {/* LogoImage */}
                        <View >
                            <Image style={styles.logo} source={require('../../assests/logoword.png')} />
                        </View>

                        {/* icons  search profile*/}
                        <View style={styles.navicon}>

                            <TouchableOpacity activeOpacity={0.7} onPress={() => setactiveButton(true)} style={styles.iconbgsearch}>
                                <Image style={styles.search} source={require('../../assests/searchicon.png')} />

                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.7} style={styles.iconbgaccount}>

                                <Image style={styles.account} source={require('../../assests/accounticon.png')} />

                            </TouchableOpacity>

                        </View>

                    </View>

                    :

                    // searchArea
                    <View style={styles.searchareacnt}>

                        {/* inputfield */}
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => searchFilterFunction(text)}
                            value={search}
                            placeholder='Search'
                            placeholderTextColor={Colors.grey}
                        />

                        {/* icon cancel */}
                        <TouchableOpacity activeOpacity={0.7} onPress={() => setactiveButton(false)} style={styles.cancelbg}>
                            <Image style={styles.cancel} source={require('../../assests/cancelicon.png')} />

                        </TouchableOpacity>
                    </View>
                }
            </View>

            {/* categorytext */}
            <View style={styles.catgorycnt}>
                <Text>
                    Filter per categoria
                </Text>
                <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate('BuildingScreen') }} style={styles.udipos}>
                    <Text style={styles.uditext}>
                        Udiline
                    </Text>
                </TouchableOpacity>

            </View>

            {/* categorybox */}
            <View style={styles.categoryboxcnt}>

                {/* flatlist */}
                <FlatList
                    style={styles.catboxflatlist}
                    data={categoryData}
                    keyExtractor={categoryData => categoryData.id.toString()}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({ item }) =>
                        <TouchableOpacity activeOpacity={0.7} style={styles.catcntbg}>
                            <Image style={{ width: RFPercentage(item.width), height: RFPercentage(item.height) }} source={item.imageSource} />
                            <Text style={styles.boxtitle}>
                                {item.title}
                            </Text>

                        </TouchableOpacity>
                    } />
            </View>

            {/* card */}
            <FlatList
                style={{ flexGrow: 0, marginTop: RFPercentage(3) }}
                data={activeButton == false ? courseData : filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>

                    <View style={styles.cardmaincontainer}>

                        {/* Card Image */}
                        <TouchableOpacity activeOpacity={0.9}>
                            <Image style={styles.cardimg} source={item.titleimage} />
                        </TouchableOpacity>

                        <View style={styles.titlecontainer}>
                            {/* title Icon */}
                            <View style={styles.titleiconcnt}>
                                <Image style={{ width: RFPercentage(item.width), height: RFPercentage(item.height) }} source={item.imageSource} />
                            </View>

                            {/* title Text */}
                            <View>
                                <Text style={styles.titl}>
                                    {item.title}
                                </Text>
                                <Text style={styles.subtitle}>
                                    {item.subtitle}
                                </Text>
                            </View>
                        </View>

                    </View>
                }
            />

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

    navcontainer: {
        width: '100%',
        height: RFPercentage(15),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderBottomRightRadius: RFPercentage(3),
        borderBottomLeftRadius: RFPercentage(3)
    },

    logocontainer: {
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

    navicon: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0
    },

    iconbgsearch: {
        width: RFPercentage(4),
        height: RFPercentage(4),
        borderRadius: RFPercentage(4),
        backgroundColor: Colors.grey,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: RFPercentage(1.5)
    },

    iconbgaccount: {
        width: RFPercentage(4),
        height: RFPercentage(4),
        borderRadius: RFPercentage(4),
        backgroundColor: Colors.grey,
        alignItems: 'center',
        justifyContent: 'center'
    },

    search: {
        width: RFPercentage(2),
        height: RFPercentage(2)
    },

    account: {
        width: RFPercentage(1.5),
        height: RFPercentage(2)
    },

    searchareacnt: {
        width: '80%',
        flexDirection: 'row',
        marginTop: RFPercentage(4),
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    catcntbg: {
        width: RFPercentage(13),
        height: RFPercentage(13),
        borderRadius: RFPercentage(2),
        backgroundColor: Colors.white,
        marginRight: RFPercentage(1.5),
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        height: RFPercentage(4),
        borderBottomWidth: 1,
        width: RFPercentage(35),
        color: Colors.black,
        borderColor: Colors.black,
    },

    cancelbg: {
        width: RFPercentage(4),
        height: RFPercentage(4),
        borderRadius: RFPercentage(2),
        backgroundColor: Colors.grey,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: RFPercentage(1.5),
        position: 'absolute',
        right: 0
    },

    cancel: {
        width: RFPercentage(2),
        height: RFPercentage(2)
    },

    catgorycnt: {
        width: '85%',
        flexDirection: 'row',
        marginTop: RFPercentage(3)
    },

    udipos: {
        position: 'absolute',
        right: 0,
    },

    uditext: {
        color: '#969696',
        textDecorationLine: 'underline'
    },

    categoryboxcnt: {
        marginTop: RFPercentage(2),
        marginBottom: RFPercentage(4),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    catboxflatlist: {
        flexGrow: 0,
        marginLeft: RFPercentage(2)
    },

    boxtitle: {
        marginTop: RFPercentage(1),
        color: '#7476A5',
        fontSize: RFPercentage(1.5)
    },

    cardmaincontainer: {
        marginBottom: RFPercentage(2),
        width: RFPercentage(45),
        height: RFPercentage(30),
        backgroundColor: Colors.lightgrey,
        borderRadius: RFPercentage(2)
    },

    cardimg: {
        width: RFPercentage(45),
        height: RFPercentage(24),
        opacity: 0.9,
        borderRadius: RFPercentage(2)
    },

    titlecontainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: RFPercentage(1)
    },

    titleiconcnt: {
        width: RFPercentage(6),
        height: RFPercentage(5),
        justifyContent: 'center',
        alignItems: 'center'
    },

    titl: {
        color: Colors.black
    },

    subtitle: {
        color: '#C3C3C4',
        fontSize: RFPercentage(1.5)
    },
})