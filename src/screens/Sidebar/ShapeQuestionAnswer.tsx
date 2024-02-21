import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RadioButton } from 'react-native-paper';
import Tts from 'react-native-tts';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { ShapeQuiz, QuestionsAnswers } from '../../data/ques-ans1';

const ShapeQuestionAnswer = ({ route, navigation }) => {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  // const getCurrentQuestion = (): QuestionsAnswers => {
  //   return ShapeQuiz.find((question) => question.id === currentQuestionId);
  // };

  // const goToNextQuestion = () => {
  //   setCurrentQuestionId((prevId) => prevId + 1);
  //   setSelectedOption(null);
  // };

  // const goToPreviousQuestion = () => {
  //   setCurrentQuestionId((prevId) => prevId - 1);
  //   setSelectedOption(null);
  // };

  const minQuestionId = 0;
  const maxQuestionId = ShapeQuiz.length - 1;

  const getCurrentQuestion = (): QuestionsAnswers => {
    return ShapeQuiz.find((question) => question.id === currentQuestionId);
  };

  const goToNextQuestion = () => {
    if (currentQuestionId < maxQuestionId) {
      setCurrentQuestionId((prevId) => prevId + 1);
      setSelectedOption(null);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionId > minQuestionId) {
      setCurrentQuestionId((prevId) => prevId - 1);
      setSelectedOption(null);
    }
  };

  const handleOptionSelect = (option) => {
    handleSpeak(option);
    setSelectedOption(option);
  };

  const currentQuestion = getCurrentQuestion();

  const isAnswerCorrect = selectedOption === currentQuestion.ans;

  useEffect(() => {
    // Initialize Tts when the component mounts
    Tts.setDefaultRate(0.3);
    Tts.setDefaultPitch(1.0);
    // Tts.setDefaultLanguage('');
    // Tts.setDefaultVoice('com.apple.voice.compact.hi-IN.Lekha')
    Tts.setDefaultLanguage('hi-IN');

    // Add event listener for TTS start
    const ttsStartListener = (event) => {
      if (event && event.eventName === 'tts-start') {
        console.log('TTS Engine Started');
      }
    };

    Tts.addEventListener('tts-start', ttsStartListener);

    return () => {
      // Remove event listener when the component unmounts
      Tts.stop();
      Tts.removeEventListener('tts-start', ttsStartListener);
    };
  }, []);

  // const handleSpeak = () => {
  //   if (selectedOption) {
  //     Tts.speak(selectedOption)
  //       .then(() => console.log('Text-to-speech started'))
  //       .catch((error) => console.log('Error starting text-to-speech:', error));
  //   }
  // };

  const handleSpeak = (option) => {
    Tts.speak(option)
      .then(() => console.log('Text-to-speech started'))
      .catch((error) => console.log('Error starting text-to-speech:', error));
  };

  const handleBackPress = () => {
    // Stop TTS when the back button is pressed
    Tts.stop();
    // Navigate back
    navigation.goBack();
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
            onPress={() => navigation.goBack()}
            style={{ flexDirection: 'row' }}
          >
            <Image source={require('../../assets/img/Arrow.png')} style={styles.image1} />
            <Image source={require('../../assets/img/bar1.png')} style={styles.image2} />
            <Image source={require('../../assets/img/bar1.png')} style={styles.image2} />
          </TouchableOpacity>
          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.text}>Question & Answer</Text>
          </View>
        </View>
        <Container>
          <LottieView
            source={require('../../assets/gif/greenSparkles.json')}
            autoPlay
            loop
            style={{ position: 'absolute', zIndex: 100, pointerEvents: 'none' }}
          />
          <View style={styles.outer}>
            <View style={styles.box1}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text1}>{`Question ${currentQuestion.id + 1} / 15`}</Text>
                <TouchableOpacity
                  style={{ alignSelf: 'flex-end' }}
                  onPress={handleBackPress}
                >
                  <Image source={require('../../assets/img/back.png')} resizeMode='contain' />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Image source={currentQuestion.img1} style={{alignSelf: 'center'}} resizeMode='contain' />
              </TouchableOpacity>
              <View>
                <View style={{ flexDirection: 'row' }} >
                <Text style={styles.text2}>{`Q${currentQuestion.id + 1} : ${currentQuestion.ques}?`}</Text>
                  <TouchableOpacity onPress={() => handleSpeak(currentQuestion.ques)} >
                    <Image source={require('../../assets/img/speaker.png')} style={styles.image5} resizeMode='contain'/>
                  </TouchableOpacity>
                </View>
                <View style={styles.radioButtonContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <RadioButton
                      value={currentQuestion.opt1}
                      status={selectedOption === currentQuestion.opt1 ? 'checked' : 'unchecked'}
                      onPress={() => handleOptionSelect(currentQuestion.opt1)}
                      color="#FFF"
                    />
                    <Text style={styles.textOption} onPress={() => handleSpeak(currentQuestion.opt1)}>{`${currentQuestion.opt1}`}</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 15 }}>
                      {selectedOption === currentQuestion.opt1 && (
                        <Image
                          source={isAnswerCorrect ? require('../../assets/ques-ans/tick.png') : require('../../assets/ques-ans/cross.png')}
                          style={styles.answerIcon}
                        />
                      )}
                    </View>
                    <View>
                      <TouchableOpacity onPress={() => handleSpeak(currentQuestion.opt1)} >
                        <Image source={require('../../assets/img/speaker.png')} style={styles.image4} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.radioButtonContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <RadioButton
                      value={currentQuestion.opt2}
                      status={selectedOption === currentQuestion.opt2 ? 'checked' : 'unchecked'}
                      onPress={() => handleOptionSelect(currentQuestion.opt2)}
                      color="#FFF"
                    />
                    <Text style={styles.textOption} onPress={() => handleSpeak(currentQuestion.opt2)}>{`${currentQuestion.opt2}`}</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 15 }}>
                      {selectedOption === currentQuestion.opt2 && (
                        <Image
                          source={isAnswerCorrect ? require('../../assets/ques-ans/tick.png') : require('../../assets/ques-ans/cross.png')}
                          style={styles.answerIcon}
                        />
                      )}
                    </View>
                    <View>
                      <TouchableOpacity onPress={() => handleSpeak(currentQuestion.opt2)} >
                        <Image source={require('../../assets/img/speaker.png')} style={styles.image4} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.radioButtonContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <RadioButton
                      value={currentQuestion.opt3}
                      status={selectedOption === currentQuestion.opt3 ? 'checked' : 'unchecked'}
                      onPress={() => handleOptionSelect(currentQuestion.opt3)}
                      color="#FFF"
                    />
                    <Text style={styles.textOption} onPress={() => handleSpeak(currentQuestion.opt3)}>{`${currentQuestion.opt3}`}</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 15 }}>
                      {selectedOption === currentQuestion.opt3 && (
                        <Image
                          source={isAnswerCorrect ? require('../../assets/ques-ans/tick.png') : require('../../assets/ques-ans/cross.png')}
                          style={styles.answerIcon}
                        />
                      )}
                    </View>
                    <View>
                      <TouchableOpacity onPress={() => handleSpeak(currentQuestion.opt3)} >
                        <Image source={require('../../assets/img/speaker.png')} style={styles.image4} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.radioButtonContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <RadioButton
                      value={currentQuestion.opt4}
                      status={selectedOption === currentQuestion.opt4 ? 'checked' : 'unchecked'}
                      onPress={() => handleOptionSelect(currentQuestion.opt4)}
                      color="#FFF"
                    />
                    <Text style={styles.textOption} onPress={() => handleSpeak(currentQuestion.opt4)}>{`${currentQuestion.opt4}`}</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 15 }}>
                      {selectedOption === currentQuestion.opt4 && (
                        <Image
                          source={isAnswerCorrect ? require('../../assets/ques-ans/tick.png') : require('../../assets/ques-ans/cross.png')}
                          style={styles.answerIcon}
                        />
                      )}
                    </View>
                    <View>
                      <TouchableOpacity onPress={() => handleSpeak(currentQuestion.opt4)} >
                        <Image source={require('../../assets/img/speaker.png')} style={styles.image4} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }} >
                <TouchableOpacity onPress={goToPreviousQuestion}>
                  <Image source={require('../../assets/ques-ans/left.png')} resizeMode='contain' />
                </TouchableOpacity>
                <TouchableOpacity onPress={goToNextQuestion}>
                  <Image source={require('../../assets/ques-ans/right.png')} resizeMode='contain' />
                </TouchableOpacity>
              </View> */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }} >
                <TouchableOpacity onPress={goToPreviousQuestion} disabled={currentQuestionId === minQuestionId}>
                  <Image source={require('../../assets/ques-ans/left.png')} resizeMode='contain' />
                </TouchableOpacity>
                <TouchableOpacity onPress={goToNextQuestion} disabled={currentQuestionId === maxQuestionId}>
                  <Image source={require('../../assets/ques-ans/right.png')} resizeMode='contain' />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Container>
      </ScrollView>
    </LinearGradient>
  );
};

export default ShapeQuestionAnswer;

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
    fontSize: 28,
    color: '#000',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: -7.4,
    marginLeft: 30
  },
  outer: {
    width: '93%'
  },
  box1: {
    minHeight: 650,
    backgroundColor: '#000',
    borderRadius: 20,
    paddingHorizontal: 5,
  },
  text1: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '700',
    marginLeft: 15,
    marginTop: 30
  },
  text2: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
    marginLeft: 20,
    marginTop: 10
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    // marginLeft: 15,
    justifyContent: 'space-between',
    marginHorizontal: 15
  },
  textOption: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
    marginLeft: 10,
  },
  answerIcon: {
    height: 25,
    width: 25,
    // marginLeft: 20,
    marginTop: 5,
  },
  image4: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    marginTop: 5,
    // marginBottom: 'auto',
  },
  image5: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    marginTop: 13,
    marginLeft: 10
    // marginBottom: 'auto',
  },
});
