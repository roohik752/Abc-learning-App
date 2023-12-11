import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import OTPTextInput from 'react-native-otp-textinput';

const OTP = ({navigation}) => {

    const [otp, setOtp] = useState('');
    
    return (
        <LinearGradient
            colors={['#FFFFFF', '#4CBB17']}
            style={styles.linearGradient}
            start={{ x: 0.4, y: 0.4 }}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={require('../assets/img/logo-removebg-preview.png')} style={styles.image} />
                <Text style={styles.Heading}>MadeInIndiaBook</Text>
                <Text style={styles.Heading}>LearningApp</Text>
                <View style={{ marginTop: 50 }}>
                    <Text style={styles.Heading1}>Please check your phone inbox and</Text>
                    <Text style={styles.Heading1}>enter the OTP below</Text>
                </View>
                <View style={{flexDirection: 'row', marginLeft:50, marginRight:50, marginTop: 20,}}>
                <OTPTextInput
                    style={styles.otpBox}
                    tintColor="gray"
                    offTintColor="lightgray"
                    autoFocus={true}
                    handleTextChange={(text) => setOtp(text)}
                />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.text}>Verify</Text>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    )
}

export default OTP;

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
        fontWeight: '700',
        textAlign: 'center'
    },
    otpBox: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 12,
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
        justifyContent: 'space-evenly',
        margin:10,
    },
    button: {
        height: 40,
        width: 340,
        backgroundColor: '#000',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 30,
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '700'
    },
});