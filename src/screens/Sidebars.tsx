import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const Sidebar = ({ navigation }) => {

    return (
        <LinearGradient
            colors={['#FFFFFF', '#4CBB17']}
            style={styles.linearGradient}
            start={{ x: 0.4, y: 0.4 }}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.9, borderBottomColor: 'rgba(0, 54, 159, 0.25)', paddingHorizontal: 15, paddingBottom: 11, paddingTop: 20 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#000', textAlign: 'center', }}>Menu</Text>
                    <TouchableOpacity onPress={() => navigation.closeDrawer()}>
                        <Image source={require('../assets/img/close.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: 'space-between' }}>
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('EnglishProduct')}
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>Alphabets A B C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Hindi')}
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>Alphabets क ख ग</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Urdu')}
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>Alphabets ا ب پ ت</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('NumberProduct')}
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>Alphabets 1 2 3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>Math's Tables</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>Family Relations</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ColoursName')}
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>Colours</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('FruitsName')}
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>Fruits</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AnimalsName')}
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>Animals</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>Body Parts
                                <Image source={require('../assets/img/nav.png')} style={styles.img2} />
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>Questions & Answers
                                <Image source={require('../assets/img/nav.png')} style={styles.img2} />
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>Drawing Pad</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>Poem</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>Stories</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>Music Plate <Text style={{ fontWeight: '900' }}>/</Text> Sound Plate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>Balloon Blast</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ShapesName')}
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>Shapes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>City Wise Total User</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.row}
                        >
                            <Image source={require('../assets/img/pin2.png')} style={styles.img1} />
                            <Text style={styles.text}>State Wise Total User</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box}></View>
                </View>
                <View style={{ marginTop: 15, marginBottom: 15, paddingHorizontal: 15 }}>
                    <TouchableOpacity style={styles.row}>
                        <Image source={require('../assets/img/logout1.png')} style={styles.img3} resizeMode='contain' />
                        <Text style={styles.text1}>Log out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Sidebar;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        // alignItems: 'center',
        paddingTop: 50,
    },
    icon: {
        height: 19,
        width: 19,
    },
    row: {
        flexDirection: 'row',
        marginLeft: 8,
    },
    text: {
        fontSize: 18,
        color: '#000',
        fontWeight: '700',
    },
    img1: {
        height: 33,
        width: 27,
        marginRight: 5,
        position: 'relative',
        bottom: 10
    },
    img2: {
        height: 15,
        width: 8.7,
    },
    img3: {
        height: 30,
        width: 30,
    },
    text1: {
        fontSize: 20,
        fontFamily: 'Quicksand',
        color: '#FF0000',
        fontWeight: '700',
        marginLeft: 10
    },
    box: {
        height: 610, 
        width: 157, 
        backgroundColor: 'rgba(217, 217, 217, 1)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        shadowOpacity: 0.25, // Set the shadow opacity here
        elevation: 5, // Required for Android
    }
})