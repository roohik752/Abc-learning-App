import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Checkbox from './Components/Checkbox';


const Login = ({ navigation }) => {
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };

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
                <Text style={styles.Heading1}>Log In</Text>
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
                <View style={styles.box}>
                    <Image source={require('../assets/img/Key.png')} style={styles.icon} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        placeholderTextColor='#808080'
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                    <Image source={require('../assets/img/Eye.png')} style={styles.icon} />
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
                onPress={()=>navigation.navigate('Congo')}
            >
                <Text style={styles.text}>Log in</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginRight: 17 }}>
                <Text style={styles.text1}>Don't have an Account ? </Text>
                <TouchableOpacity style={{ borderBottomWidth: 1.8, borderColor: '#000' }}
                    onPress={() => navigation.navigate('Registration')}
                >
                    <Text style={styles.text2}> SignUp</Text>
                </TouchableOpacity>
            </View>
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
        marginTop: -5,
    },
    image: {
        height: 250,
        width: 250,
    },
    Heading1: {
        color: '#000',
        fontSize: 20,
        fontWeight: '900',
        marginBottom: 10
    },
    box: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#808080',
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
        color: '#818589',
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
        marginBottom: 10,
        marginTop: 30,
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '700'
    },
    text1: {
        fontSize: 16,
        color: '#808080',
    },
    text2: {
        fontSize: 16,
        color: '#000',
        fontWeight: '700',

    },
});