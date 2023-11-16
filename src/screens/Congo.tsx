import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ROUTERS } from 'src/ultis/navigations';

const Congo = ({navigation}) => {
    return (
        <LinearGradient
            colors={['#FFFFFF', '#4CBB17']}
            style={styles.linearGradient}
            start={{ x: 0.4, y: 0.4 }}
        >
            <Text style={styles.Heading}>MadeInIndiaBook</Text>
            <Text style={styles.Heading}>LearningApp</Text>
            <Image source={require('../assets/img/logo-removebg-preview.png')} style={styles.image} />
            <View style={{ marginTop: 10 }}>
            <Text style={styles.Heading1}>You have successfully logged in</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>navigation.navigate(ROUTERS.MenuScreen)}
            >
                <Text style={styles.text}>Continue</Text>
            </TouchableOpacity>
            <Image source={require('../assets/img/Welcome.png')} style={styles.image1} />
        </LinearGradient>
    )
}

export default Congo;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 80,
    },
    Heading: {
        color: '#000',
        fontSize: 22,
        fontWeight: '900',
        marginTop: -5,
    },
    image: {
        height: 240,
        width: 240,
    },
    Heading1: {
        color: '#000',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 50
    },
    button: {
        height: 40,
        width: 340,
        backgroundColor: '#000',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 50,
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '700'
    },
    image1: {
        height: 140,
        width: 250,
        marginTop: -10
    },
});