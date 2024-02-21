import React, { useEffect } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Language');
        }, 6000)
    })

    return (
        <LinearGradient
            colors={['#FFFFFF', '#4CBB17']}
            style={styles.linearGradient}
            start={{ x: 0.5, y: 0.5 }}
        >
            <Container>
                <Image source={require('../assets/img/logo-removebg-preview.png')} style={styles.image} />
                <Text style={styles.Heading}>MadeInIndiaBook</Text>
                <Text style={styles.Heading}>LearningApp</Text>
            </Container>
        </LinearGradient>
    )
}

export default Splash;

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