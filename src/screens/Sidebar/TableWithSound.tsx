import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Tts from 'react-native-tts';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const TableWithSound = ({ route, navigation }) => {
  const { selectedTable } = route.params;

  useEffect(() => {
    Tts.setDefaultRate(0.5);
    Tts.setDefaultVoice('com.apple.voice.compact.hi-IN.Lekha');

    const ttsStartListener = (event) => {
      if (event && event.eventName === 'tts-start') {
        console.log('TTS Engine Started');
      }
    };

    Tts.addEventListener('tts-start', ttsStartListener);

    return () => {
      Tts.stop();
      Tts.removeEventListener('tts-start', ttsStartListener);
    };
  }, []);

  const handleSpeak = (index) => {
    const soundKey = `sound${index + 1}`;
    const sound = selectedTable[soundKey];

    if (sound) {
      Tts.speak(sound)
        .then(() => console.log('Text-to-speech started'))
        .catch((error) => console.log('Error starting text-to-speech:', error));
    }
  };

  const handleBackPress = () => {
    // Stop TTS when the back button is pressed
    Tts.stop();
    // Navigate back
    navigation.goBack();
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={{ flexDirection: 'row', justifyContent: 'space-around' }}
      onPress={() => handleSpeak(index)}
    >
      <Text style={styles.text1}>{item}</Text>
      <Image source={require('../../assets/img/speaker.png')} style={styles.image4} />
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={['#FFFFFF', '#4CBB17']}
      style={styles.linearGradient}
      start={{ x: 0.4, y: 0.4 }}
    >
      <View style={{ flexDirection: 'row', padding: 15, marginTop: 40 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ flexDirection: 'row' }}
        >
          <Image source={require('../../assets/img/Arrow.png')} style={styles.image1} />
          <Image source={require('../../assets/img/bar1.png')} style={styles.image2} />
          <Image source={require('../../assets/img/bar1.png')} style={styles.image2} />
        </TouchableOpacity>
        <View style={{ alignSelf: 'center' }}>
          <Text style={styles.text}>Math's Tables</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <LottieView
            source={require('../../assets/gif/greenSparkles.json')}
            autoPlay
            loop
            style={{ position: 'absolute', zIndex: 100, pointerEvents: 'none' }}
          />
          <View style={styles.outer}>
            <View style={styles.box1}>
              <TouchableOpacity
                style={{ alignSelf: 'flex-end' }}
                onPress={handleBackPress}
              >
                <Image source={require('../../assets/img/back.png')} resizeMode='contain' />
              </TouchableOpacity>
              <FlatList
                data={[
                  selectedTable.line1,
                  selectedTable.line2,
                  selectedTable.line3,
                  selectedTable.line4,
                  selectedTable.line5,
                  selectedTable.line6,
                  selectedTable.line7,
                  selectedTable.line8,
                  selectedTable.line9,
                  selectedTable.line10,
                ]}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </Container>
      </ScrollView>
    </LinearGradient>
  );
};

export default TableWithSound;

const Container = styled.View`
  width: 100%;
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
    height: 650,
    backgroundColor: '#000',
    borderRadius: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // paddingBottom: 50
  },
  boxContainer: {
    // justifyContent: 'space-around',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -15,
    padding: 15,
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
  image3: {
    width: 300,
    alignSelf: 'center',
    marginTop: 30,
    // marginBottom: 20,
  },
  text1: {
    fontSize: 40,
    color: '#fff',
    fontWeight: '900',
    // lineHeight: 100,
  },
  image4: {
    height: 50,
    width: 50,
    // alignSelf: 'center',
    // marginTop: 'auto',
    // marginBottom: 'auto',
  },
});
