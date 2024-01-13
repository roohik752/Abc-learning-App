import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Tts from 'react-native-tts';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const NumberProductWithImage = ({ route, navigation }) => {
  const { selectedNumber } = route.params;

  useEffect(() => {
    // Initialize Tts when the component mounts
    Tts.setDefaultRate(0.5);
    Tts.setDefaultVoice('com.apple.voice.compact.hi-IN.Lekha')
    // Tts.setDefaultLanguage('');
    // Tts.setDefaultLanguage('hi');

    // Add event listener for TTS start
    const ttsStartListener = (event) => {
      if (event && event.eventName === 'tts-start') {
        console.log('TTS Engine Started');
      }
    };

    Tts.addEventListener('tts-start', ttsStartListener);

    return () => {
      // Remove event listener when the component unmounts
      Tts.removeEventListener('tts-start', ttsStartListener);
    };
  }, []);

  const handleSpeak = () => {
    if (selectedNumber) {
      Tts.speak(selectedNumber.text2)
        .then(() => console.log('Text-to-speech started'))
        .catch((error) => console.log('Error starting text-to-speech:', error));
    }
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#4CBB17']}
      style={styles.linearGradient}
      start={{ x: 0.4, y: 0.4 }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', padding: 15, marginTop: 40 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack('NumberProduct')}
            style={{ flexDirection: 'row' }}
          >
            <Image source={require('../../assets/img/Arrow.png')} style={styles.image1} />
            <Image source={require('../../assets/img/bar1.png')} style={styles.image2} />
            <Image source={require('../../assets/img/bar1.png')} style={styles.image2} />
          </TouchableOpacity>
          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.text}>Numbers</Text>
          </View>
        </View>
        <Container>
          <LottieView
            source={require('../../assets/gif/greenSparkles.json')} // Replace with the correct path
            autoPlay
            loop

            style={{ position: 'absolute', zIndex: 100, pointerEvents: 'none' }}
          />
          <View style={styles.outer}>
            <View style={styles.box1}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={{ flex: 1 }}>
                  {!selectedNumber.img2 ? null :
                    <Text style={styles.text1}>{selectedNumber.text1}</Text>}
                </View>
                <TouchableOpacity
                  style={{ alignSelf: 'flex-end' }}
                  onPress={() => navigation.goBack()}
                >
                  <Image source={require('../../assets/img/back.png')} resizeMode='contain' />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={handleSpeak} >
                {selectedNumber.img2 ?
                  <Image source={selectedNumber.img2} style={styles.image3} resizeMode='contain' />
                  : <Text style={styles.text3}>{selectedNumber.text1}</Text>}
              </TouchableOpacity>
            </View>
            <View style={styles.box2}>
              {/* <Text style={styles.text2}>{selectedAlphabet.text1} for {selectedAlphabet.textEng}</Text> */}
              <Text style={styles.text2}>{selectedNumber.text2}</Text>
              <TouchableOpacity onPress={handleSpeak} >
                <Image source={require('../../assets/img/speaker.png')} style={styles.image4} />
              </TouchableOpacity>
            </View>
          </View>
        </Container>
      </ScrollView>
    </LinearGradient>
  );
};

export default NumberProductWithImage;


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
  },
  image1: {
    height: 20,
    width: 25,
    marginRight: 1,
    marginLeft: 10,
  },
  image2: {
    height: 10,
    width: 5,
    marginRight: 1,
    marginTop: 5.3,
  },
  text: {
    fontSize: 32,
    color: '#000',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: -7.4,
    marginLeft: 70
  },
  outer: {
    width: '93%'
  },
  box1: {
    height: 500,
    width: '100%',
    backgroundColor: '#000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  box2: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#000',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 20,
    justifyContent: 'space-around',
  },
  text1: {
    fontSize: 100,
    color: '#fff',
    fontWeight: '900',
    marginLeft: 25
  },
  image3: {
    // height: '70%',
    width: 300,
    alignSelf: 'center',
    marginTop: 30
    // marginBottom: 'auto',
  },
  text2: {
    fontSize: 40,
    color: '#fff',
    fontWeight: '900',
    // marginLeft: 25,
    lineHeight: 100,
  },
  image4: {
    height: 50,
    width: 50,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  text3: {
    fontSize: 160,
    color: '#fff',
    fontWeight: '900',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 110
  },
})