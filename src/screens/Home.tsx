import React from 'react';
import { StyleSheet, Text, Image, ImageBackground, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({ navigation }) => {

    return (
        <LinearGradient
            colors={['#FFFFFF', '#4CBB17']}
            style={styles.linearGradient}
            start={{ x: 0.4, y: 0.4 }}
        >
            <View style={{ flexDirection: 'row', padding: 15, marginTop: 40, justifyContent: 'space-between' }}>
                <TouchableOpacity
                    style={{ flexDirection: 'row' }}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Image source={require('../assets/img/boy1.png')} style={styles.image} />
                    <Text style={styles.text}>Hi</Text><Text style={styles.text1}>Charlie</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.getParent('RightDrawer').openDrawer()}
                    >
                        <Image source={require('../assets/img/bars.png')} style={styles.image1} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: 1, width: '100%', backgroundColor: 'rgba(0, 54, 159, 0.25)' }}></View>
            <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'space-between' }}>
                <TouchableOpacity style={styles.box}
                    onPress={() => navigation.navigate('EnglishProduct')}
                >
                    <Image source={require('../assets/img/pin1.png')} style={[styles.image2, styles.positionImage2]} />
                    <Image source={require('../assets/img/alphabets.png')} style={styles.image3} />
                    <Text style={styles.text}>Alphabets</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}
                    onPress={() => navigation.navigate('Hindi')}
                >
                    <Image source={require('../assets/img/pin1.png')} style={[styles.image2, styles.positionImage2]} />
                    <Image source={require('../assets/img/alphabets.png')} style={styles.image3} />
                    <Text style={styles.text}>क ख ग</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'space-between', marginTop: -10 }}>
                <TouchableOpacity style={styles.box}
                    onPress={() => navigation.navigate('NumberProduct')}
                >
                    <Image source={require('../assets/img/pin1.png')} style={[styles.image2, styles.positionImage2]} />
                    <Image source={require('../assets/img/numbers.png')} style={styles.image3} />
                    <Text style={styles.text}>Numbers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}
                    onPress={() => navigation.navigate('Urdu')}
                >
                    <Image source={require('../assets/img/pin1.png')} style={[styles.image2, styles.positionImage2]} />
                    <Image source={require('../assets/img/urdu.png')} style={styles.image4} />
                    <Text style={styles.text1}> ا ب پ ت</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignSelf: 'center' }}>
                <TouchableOpacity>
                    <ImageBackground
                        source={require('../assets/img/children.png')} // Change the path accordingly
                        style={styles.box1}
                        resizeMode="cover"
                    >
                        <Text style={styles.text2}>Drawing Pad</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

export default Home;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    image: {
        height: 40,
        width: 40,
        backgroundColor: 'black',
        borderRadius: 20,
        marginRight: 10
    },
    text: {
        fontSize: 20,
        color: '#000',
        fontWeight: '700',
        paddingLeft: 5,
        paddingRight: 5,
        alignSelf: 'center',
        fontFamily: 'Atma-Bold'
    },
    image1: {
        height: 30,
        width: 30,
        marginTop: 5,
        alignContent: 'flex-end'
    },
    box: {
        height: 140,
        width: 155,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 15,
        elevation: 5, // This is for Android
    },
    image2: {
        height: 35,
        width: 35,
    },
    positionImage2: {
        position: 'absolute',
        top: -15,
        left: 115,
    },
    image3: {
        height: 100,
        width: 135,
        alignSelf: 'center'
    },
    image4: {
        height: 95,
        width: 100,
        alignSelf: 'center',
        marginTop: 8,
    },
    text1: {
        fontSize: 22,
        color: '#000',
        fontWeight: '900',
        alignSelf: 'center'
    },
    box1: {
        height: 280,
        width: 280,
        borderColor: '#000',
        overflow: 'hidden',
    },
    text2: {
        fontSize: 24,
        color: '#000',
        fontWeight: '700',
        alignSelf: 'center',
        lineHeight: 280
    },
});