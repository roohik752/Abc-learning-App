import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ROUTERS } from 'src/ultis/navigations';
import styled from 'styled-components/native';
import {
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';

const Congo = ({ navigation }) => {
    return (
        <LinearGradient
            colors={['#FFFFFF', '#4CBB17']}
            style={styles.linearGradient}
            start={{ x: 0.4, y: 0.4 }}
        >
            <Container>
                <Image source={require('../assets/img/logo-removebg-preview.png')} style={styles.image} />
                <Text style={styles.Heading}>MadeInIndiaBook</Text>
                <Text style={styles.Heading}>LearningApp</Text>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.Heading1}>You have successfully logged in</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate(ROUTERS.MenuScreen)}
                >
                    <Text style={styles.text}>Continue</Text>
                </TouchableOpacity>
                <Image source={require('../assets/img/Welcome2.png')} style={styles.image1} />
            </Container>
        </LinearGradient>
    )
}

export default Congo;

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
        alignItems: 'center',
        paddingTop: 80,
    },
    Heading: {
        color: '#000',
        fontSize: 22,
        fontWeight: '900',
        // marginTop: -5,
    },
    image: {
        height: 240,
        width: 240,
        marginBottom: 20
    },
    Heading1: {
        color: '#000',
        fontSize: 20,
        fontWeight: '900',
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