import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const ForgotPassword = ({ navigation }) => {

    const [number, setNumber] = useState('');

    return (
        <LinearGradient
            colors={['#FFFFFF', '#4CBB17']}
            style={styles.linearGradient}
            start={{ x: 0.4, y: 0.4 }}
        >
            <ScrollView>
                <Text style={styles.Heading}>MadeInIndiaBook</Text>
                <Text style={styles.Heading}>LearningApp</Text>
                <Image source={require('../assets/img/logo-removebg-preview.png')} style={styles.image} />
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.Heading1}>Enter the phone number on which OTP will be</Text>
                    <Text style={styles.Heading1}>shared to reset your password</Text>
                    <View style={styles.box}>
                        <Image source={require('../assets/img/Phone.png')} style={styles.icon} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Number"
                            placeholderTextColor='#808080'
                            onChangeText={(text) => setNumber(text)}
                            value={number}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('OTP')}
                >
                    <Text style={styles.text}>Send OTP</Text>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    )
}

export default ForgotPassword;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 70,
        height: '100%'
    },
    Heading: {
        color: '#000',
        fontSize: 22,
        fontWeight: '900',
        textAlign: 'center'
    },
    image: {
        height: 160,
        width: 160,
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center'
    },
    Heading1: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500',
        // marginBottom: 10,
        textAlign: 'center'
    },
    box: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 10,
        marginBottom: 10,
        marginTop: 30
    },
    icon: {
        height: 19,
        width: 19,
        marginTop: 9,
    },
    textInput: {
        height: 40,
        width: 280,
        color: '#818589',
        fontSize: 18,
        paddingLeft: 10,
    },
    button: {
        height: 40,
        width: 340,
        backgroundColor: '#000',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 30,
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '700'
    },
});