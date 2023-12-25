import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;

const ROUTERS = {
  // Home: 'Home',
  // Intro: 'Intro',
  // Learn: 'Learn',
  // PlayGame: 'PlayGame',
  // Result: 'Result',
  // LearnAlphabet: 'LearnAlphabet',
  // LearnNumber: 'LearnNumber',
  // AnimalWithAlphabet: 'AnimalWithAlphabet',
  // Draw: 'Draw',
  Splash: 'Splash',
  Language: 'Language',
  UserFlow: 'UserFlow',
  Registration: 'Registration',
  Login: 'Login',
  ForgotPassword: 'ForgotPassword',
  OTP: 'OTP',
  OTP2: 'OTP2',
  Congo: 'Congo',
  Home: 'Home',
  Profile: 'Profile',
  MenuScreen: 'MenuScreen',
  EnglishProduct: 'EnglishProduct',
  EnglishProductWithImage: 'EnglishProductWithImage',
  Hindi: 'Hindi',
  HindiConsonants: 'HindiConsonants',
  HindiVowels: 'HindiVowels',
  HindiProductWithImage: 'HindiProductWithImage',
  NumberProduct: 'NumberProduct',
  NumberProductWithImage: 'NumberProductWithImage',
  Urdu: 'Urdu',
  UrduNumbers: 'UrduNumbers',
  UrduAlphabets: 'UrduAlphabets',
  UrduProductWithImage: 'UrduProductWithImage',
  AnimalsName: 'AnimalsName',
  AnimalsNameWithImage: 'AnimalsNameWithImage',
  FruitsName: 'FruitsName',
  FruitsNameWithImage: 'FruitsNameWithImage',
  ColoursName: 'ColoursName',
  ColoursNameWithImage: 'ColoursNameWithImage',
  ShapesName: 'ShapesName',
  ShapesNameWithImage: 'ShapesNameWithImage',
};

export { Stack, NavigationContainer, Navigator, Screen, ROUTERS };
