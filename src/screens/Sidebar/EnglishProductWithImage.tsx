// import React, { useEffect } from 'react';
// import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Tts from 'react-native-tts';
// import styled from 'styled-components/native';
// import LottieView from 'lottie-react-native';
// import {
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';

// const EnglishProductWithImage = ({ route, navigation }) => {
//   const { selectedAlphabet } = route.params;

//   useEffect(() => {
//     // Initialize Tts when the component mounts
//     Tts.setDefaultRate(0.3);
//     // Tts.setDefaultVoice('com.apple.voice.compact.hi-IN.Lekha')
//     Tts.setDefaultLanguage('hi-IN');
//     // Tts.setDefaultLanguage('en-US');

//     // Add event listener for TTS start
//     const ttsStartListener = (event) => {
//       if (event && event.eventName === 'tts-start') {
//         console.log('TTS Engine Started');
//         console.log('tts', Tts);
//       }
//     };

//     Tts.addEventListener('tts-start', ttsStartListener);

//     return () => {
//       // Stop TTS and remove event listener when the component unmounts
//       Tts.stop();
//       Tts.removeEventListener('tts-start', ttsStartListener);
//     };
//   }, []);

//   const handleSpeak = () => {
//     if (selectedAlphabet) {
//       Tts.speak(selectedAlphabet.text2)
//         .then(() => console.log('tts', Tts.voices))
//         .catch((error) => console.log('Error starting text-to-speech:', error));
//     }
//   };

//   async function fetchAndLogVoices() {
//     try {
//       const voices = await Tts.voices();
//       const availableVoices = voices
//         .filter(v => !v.networkConnectionRequired && !v.notInstalled)
//         .map(v => {
//           return { id: v.id, name: v.name, language: v.language };
//         });

//       console.log("Available Voices:", availableVoices);
//     } catch (error) {
//       console.error("Error fetching voices:", error);
//     }
//   }

//   // Call the function
//   fetchAndLogVoices();

//   const handleBackPress = () => {
//     // Stop TTS when the back button is pressed
//     Tts.stop();
//     // Navigate back
//     navigation.goBack();
//   };

//   return (
//     <LinearGradient
//       colors={['#FFFFFF', '#4CBB17']}
//       style={styles.linearGradient}
//       start={{ x: 0.4, y: 0.4 }}
//     >
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={{ flexDirection: 'row', padding: 15, marginTop: 40 }}>
//           <TouchableOpacity
//             onPress={handleBackPress}
//             style={{ flexDirection: 'row' }}
//           >
//             <Image source={require('../../assets/img/Arrow.png')} style={styles.image1} />
//             <Image source={require('../../assets/img/bar1.png')} style={styles.image2} />
//             <Image source={require('../../assets/img/bar1.png')} style={styles.image2} />
//           </TouchableOpacity>
//           <View style={{ alignSelf: 'center' }}>
//             <Text style={styles.text}>Alphabets</Text>
//           </View>
//         </View>
//         <Container>
//           <LottieView
//             source={require('../../assets/gif/greenSparkles.json')} // Replace with the correct path
//             autoPlay
//             loop
//             style={{ position: 'absolute', zIndex: 100, pointerEvents: 'none' }}
//           />
//           <View style={styles.outer}>
//             <View style={styles.box1}>
//               <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                 <Text style={styles.text1}>{selectedAlphabet.text1}</Text>
//                 <TouchableOpacity
//                   onPress={handleBackPress}
//                 >
//                   <Image source={require('../../assets/img/back.png')} resizeMode='contain' />
//                 </TouchableOpacity>
//               </View>
//               <TouchableOpacity onPress={handleSpeak} >
//                 <Image source={selectedAlphabet.img2} style={styles.image3} resizeMode='contain' />
//               </TouchableOpacity>
//             </View>
//             <View style={styles.box2}>
//               <Text style={styles.text2}>{selectedAlphabet.text2}</Text>
//               <TouchableOpacity onPress={handleSpeak} >
//                 <Image source={require('../../assets/img/speaker.png')} style={styles.image4} />
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Container>
//       </ScrollView>
//     </LinearGradient>
//   );
// };

// export default EnglishProductWithImage;


// const Container = styled.View`

//   width:100%
//   padding-left: ${responsiveWidth(1)}px;
//   padding-right: ${responsiveWidth(1)}px;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: ${responsiveHeight(3)}px;
//   padding-top: 5px;
// `;


// const styles = StyleSheet.create({
//   linearGradient: {
//     flex: 1,
//   },
//   image1: {
//     height: 20,
//     width: 25,
//     marginRight: 1,
//     marginLeft: 10,
//   },
//   image2: {
//     height: 10,
//     width: 5,
//     marginRight: 1,
//     marginTop: 5.3,
//   },
//   text: {
//     fontSize: 32,
//     color: '#000',
//     fontWeight: '700',
//     textAlign: 'center',
//     marginTop: -7.4,
//     marginLeft: 70
//   },
//   outer: {
//     width: '93%'
//   },
//   box1: {
//     height: 500,
//     backgroundColor: '#000',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   box2: {
//     flexDirection: 'row',
//     height: 100,
//     backgroundColor: '#000',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     marginTop: 20,
//     justifyContent: 'space-around',
//   },
//   text1: {
//     fontSize: 100,
//     color: '#fff',
//     fontWeight: '900',
//     marginLeft: 25
//   },
//   image3: {
//     // height: '70%',
//     width: 300,
//     alignSelf: 'center',
//     marginTop: 80,
//     // marginBottom: 20,
//   },
//   text2: {
//     fontSize: 40,
//     color: '#fff',
//     fontWeight: '900',
//     // marginLeft: 25,
//     lineHeight: 100,
//   },
//   image4: {
//     height: 50,
//     width: 50,
//     alignSelf: 'center',
//     marginTop: 'auto',
//     marginBottom: 'auto',
//   },
// })




import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Tts from 'react-native-tts';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const EnglishProductWithImage = ({ route, navigation }) => {
  const { selectedAlphabet } = route.params;

  useEffect(() => {
    // Initialize Tts when the component mounts
    Tts.setDefaultRate(0.3);
    Tts.setDefaultLanguage('hi-IN');

    // Check if language data is available and install if necessary
    if (Platform.OS === 'android') {
      checkAndInstallLanguageData();
    }

    // Add event listener for TTS start
    const ttsStartListener = (event) => {
      if (event && event.eventName === 'tts-start') {
        console.log('TTS Engine Started');
        console.log('tts', Tts);
      }
    };

    Tts.addEventListener('tts-start', ttsStartListener);

    return () => {
      // Stop TTS and remove event listener when the component unmounts
      Tts.stop();
      Tts.removeEventListener('tts-start', ttsStartListener);
    };
  }, []);

  const checkAndInstallLanguageData = async () => {
    try {
      const isLanguageAvailable = await Tts.isLanguageAvailable('hi-IN');
      if (isLanguageAvailable !== Tts.STOPPED) {
        // Language data is not available, prompt user to install it
        installLanguageData();
      }
    } catch (error) {
      console.error("Error checking language data:", error);
    }
  };

  const installLanguageData = () => {
    const installIntent = new Intent();
    installIntent.setAction(TextToSpeech.Engine.ACTION_INSTALL_TTS_DATA);
    startActivity(installIntent);
  };

  async function fetchAndLogVoices() {
    try {
      const voices = await Tts.voices();
      const availableVoices = voices
        .filter(v => !v.networkConnectionRequired && !v.notInstalled)
        .map(v => {
          return { id: v.id, name: v.name, language: v.language };
        });

      console.log("Available Voices:", availableVoices);
    } catch (error) {
      console.error("Error fetching voices:", error);
    }
  }

  // Call the function
  fetchAndLogVoices();

  const handleSpeak = () => {
    if (selectedAlphabet) {
      Tts.speak(selectedAlphabet.text2)
        .then(() => console.log('tts', Tts.voices))
        .catch((error) => console.log('Error starting text-to-speech:', error));
    }
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
      <View style={{ flexDirection: 'row', padding: 15, marginTop: 40 }}>
        <TouchableOpacity
          onPress={handleBackPress}
          style={{ flexDirection: 'row' }}
        >
          <Image source={require('../../assets/img/Arrow.png')} style={styles.image1} />
          <Image source={require('../../assets/img/bar1.png')} style={styles.image2} />
          <Image source={require('../../assets/img/bar1.png')} style={styles.image2} />
        </TouchableOpacity>
        <View style={{ alignSelf: 'center' }}>
          <Text style={styles.text}>Alphabets</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <LottieView
            source={require('../../assets/gif/greenSparkles.json')} // Replace with the correct path
            autoPlay
            loop
            style={{ position: 'absolute', zIndex: 100, pointerEvents: 'none' }}
          />
          <View style={styles.outer}>
            <View style={styles.box1}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text1}>{selectedAlphabet.text1}</Text>
                <TouchableOpacity
                  onPress={handleBackPress}
                >
                  <Image source={require('../../assets/img/back.png')} resizeMode='contain' />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={handleSpeak} >
                <Image source={selectedAlphabet.img2} style={styles.image3} resizeMode='contain' />
              </TouchableOpacity>
            </View>
            <View style={styles.box2}>
              <Text style={styles.text2}>{selectedAlphabet.text2}</Text>
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

export default EnglishProductWithImage;


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
    marginTop: 80,
    // marginBottom: 20,
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
})
