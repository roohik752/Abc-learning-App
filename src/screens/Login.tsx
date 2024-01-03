import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Checkbox from './Components/Checkbox';


const Login = ({ navigation }) => {
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // Added state for password visibility

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };

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
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.Heading1}>Log In</Text>
                    <View style={styles.box}>
                        <Image source={require('../assets/img/Phone.png')} style={styles.icon} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Mobile Number"
                            // placeholderTextColor='#000'
                            placeholderTextColor='rgba(0,0,0,0.5)'
                            onChangeText={(text) => setNumber(text)}
                            value={number}
                            keyboardType="numeric"
                            maxLength={10}
                        />
                    </View>
                    <View style={styles.box}>
                        <Image source={require('../assets/img/Key.png')} style={styles.icon} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Password"
                            // placeholderTextColor='#000'
                            placeholderTextColor='rgba(0,0,0,0.5)'
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                            secureTextEntry={!isVisible}
                        />
                        <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                            <Image source={isVisible ? require('../assets/img/hide.png') : require('../assets/img/Eye.png')} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Checkbox
                            label="Always Login"
                            checked={isChecked}
                            onToggle={handleCheckboxToggle}
                        />
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ForgotPassword')}
                        >
                            <Text style={styles.text1}>Forgot Password ?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Congo')}
                >
                    <Text style={styles.text}>Log in</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginRight: 17 }}>
                    <Text style={styles.text3}>Don't have an Account ? </Text>
                    <TouchableOpacity style={{ borderBottomWidth: 1.8, borderColor: '#000' }}
                        onPress={() => navigation.navigate('Registration')}
                    >
                        <Text style={styles.text2}> SignUp</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

export default Login;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 70,
    },
    Heading: {
        color: '#000',
        fontSize: 22,
        fontWeight: '900',
        textAlign: 'center'
    },
    image: {
        height: 250,
        width: 250,
        alignSelf: 'center',
        marginBottom: 20
    },
    Heading1: {
        color: '#000',
        fontSize: 20,
        fontWeight: '900',
        marginBottom: 10,
        marginTop: 20
    },
    box: {
        flexDirection: 'row',
        borderWidth: 1,
        // borderColor: '#000',
        borderColor: 'rgba(0,0,0,0.5)',
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 10,
        marginBottom: 10
    },
    icon: {
        height: 19,
        width: 19,
        marginTop: 9,
    },
    textInput: {
        height: 40,
        width: 260,
        color: '#000',
        fontSize: 18,
        paddingLeft: 10,
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
    },
    button: {
        height: 40,
        width: 300,
        backgroundColor: '#000',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        marginTop: 35,
        alignSelf: 'center'
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '700'
    },
    text1: {
        fontSize: 16,
        // color: '#818589',
        // color: '#1F1C17',
        color: 'rgba(0,0,0,0.5)',
        fontWeight: '700'
    },
    text3: {
        fontSize: 16,
        // color: '#818589',
        // color: '#1F1C17',
        color: 'rgba(0,0,0,0.75)',
        fontWeight: '700'
    },
    text2: {
        fontSize: 16,
        color: '#000',
        fontWeight: '700',

    },
});