import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';

const Language = ({ navigation }) => {

    const handleContinue = () => {
        navigation.navigate('UserFlow');
    }

    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const language = [
        {
            value1: 'English'
        },
        {
            value1: 'हिंदी',
            value2: 'Hindi'
        },
        {
            value1: 'ગુજરાતી',
            value2: 'Gujrati'
        },
        {
            value1: 'اردو',
            value2: 'Urdu'
        },
        {
            value1: 'తెలుగు',
            value2: 'Telugu'
        },
        {
            value1: 'मराठी',
            value2: 'Marathi'
        },
        {
            value1: 'ಕನ್ನಡ',
            value2: 'Kannada'
        },
        {
            value1: 'മലയാളം',
            value2: 'Malayalam'
        },
    ]

    const renderItem = ({ item }) => {
        const isSelected = item.value1 === selectedLanguage || item.value2 === selectedLanguage;
        return (
            <View style={styles.row}>
                <TouchableOpacity style={[
                    styles.button,
                    isSelected && { backgroundColor: 'black' },
                ]}
                    onPress={() => setSelectedLanguage(item.value1 || item.value2)}>
                    <Text style={[styles.text, isSelected && { color: 'white' }]}>
                        {item.value1}
                    </Text>
                    <Text style={[styles.text, isSelected && { color: 'white' }]}>
                        {item.value2}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <LinearGradient
            colors={['#FFFFFF', '#4CBB17']}
            style={styles.linearGradient}
            start={{ x: 0.4, y: 0.4 }}
        >
            <Container>
                <Text style={styles.Heading}>Select Language</Text>
                <View style={{ marginTop: 50 }}>
                    <FlatList
                        data={language}
                        renderItem={renderItem}
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <TouchableOpacity
                        style={styles.button1}
                        onPress={handleContinue}
                    >
                        <Text style={styles.text1}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        </LinearGradient>
    )
}

export default Language;

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
        paddingTop: 70,
    },
    Heading: {
        color: '#000',
        fontSize: 22,
        fontWeight: '900',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: "rgba('0,0,0,0.1')",
    },
    button: {
        height: 80,
        width: 160,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 6,
    },
    text: {
        fontSize: 18,
        color: '#000',
        fontWeight: '700',
    },
    button1: {
        height: 40,
        // width: 300,
        backgroundColor: '#000',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100
    },
    text1: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '700',
    },
});