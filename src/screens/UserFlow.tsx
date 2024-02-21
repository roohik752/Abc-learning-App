import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';

const UserFlow = ({ navigation }) => {


    return (
        <LinearGradient
            colors={['#FFFFFF', '#4CBB17']}
            style={styles.linearGradient}
            start={{ x: 0.4, y: 0.4 }}
        >
            <Container>
                <View>
                    <Image source={require('../assets/img/logo-removebg-preview.png')} style={styles.image} />
                    <Text style={styles.Heading}>MadeInIndiaBook</Text>
                    <Text style={styles.Heading}>LearningApp</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 50, }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.text}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Registration')}
                    >
                        <Text style={styles.text}>Registration</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        </LinearGradient>
    )
}

export default UserFlow;

const Container = styled.View`

  width:100%
  padding-left: ${responsiveWidth(1)}px;
  padding-right: ${responsiveWidth(1)}px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${responsiveHeight(3)}px;
  padding-top: 5px;
`;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 250,
        width: 250,
        marginBottom: 90,
    },
    Heading: {
        color: '#000',
        fontSize: 22,
        fontWeight: '900',
        textAlign: 'center',
    },
    button: {
        height: 40,
        width: 160,
        backgroundColor: '#000000',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 7
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '700',
    },
});
