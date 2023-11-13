import React, { useEffect } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Language');
        },6000)
    })

    return (
        <LinearGradient
            colors={['#FFFFFF', '#4CBB17']}
            style={styles.linearGradient}
            start={{ x: 0.5, y: 0.5 }}
        >
            <Image source={require('../assets/img/logo-removebg-preview.png')} style={styles.image} />
            <Text style={styles.Heading}>MadeInIndiaBook</Text>
            <Text style={styles.Heading}>LearningApp</Text>
            {/* <TouchableOpacity 
            onPress={()=>navigation.navigate('Language')}
            >
                <Text style={styles.Heading}>MadeInIndiaBook</Text>
                <Text style={styles.Heading}>LearningApp</Text>
            </TouchableOpacity> */}
        </LinearGradient>
    )
}

export default Splash;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 240,
        width: 240,
        marginBottom: 80
    },
    Heading: {
        color: '#000',
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
    }
});