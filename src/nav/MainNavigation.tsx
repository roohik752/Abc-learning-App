// // import React, {memo} from 'react';
// // import {StackNavigationOptions} from '@react-navigation/stack';
// // import {
// //   ActivityIndicator,
// //   Platform,
// //   UIManager,
// //   StatusBar,
// //   I18nManager,
// // } from 'react-native';
// // import useAsyncStorage from 'src/hooks/useAsyncStorage';
// // import KEY_ASYNC_STORAGE from 'src/ultis/keyAsyncStorage';
// // import {
// //   NavigationContainer,
// //   Navigator,
// //   Screen,
// //   ROUTERS,
// // } from 'src/ultis/navigations';
// // import Home from 'src/screens/Home';
// // import Intro from 'src/screens/Intro';
// // import PlayGame from 'src/screens/PlayGame';
// // import Learn from 'src/screens/Learn';
// // import LearnAlphabet from 'src/screens/LearnAlphabet';
// // import LearnNumber from 'src/screens/LearnNumber';
// // import Draw from 'src/screens/Draw';
// // import AnimalWithAlphabet from 'src/screens/AnimalWithAlphabet';
// // import Result from 'src/screens/Result';
// // import {ContainerCenter} from 'src/components/base-ui/Container';
// // import Sound from 'react-native-sound';
// // import {useTranslation} from 'react-i18next';
// // import {ApplicationProvider} from '@ui-kitten/components';
// // import * as eva from '@eva-design/eva';
// // import AsyncStorage from '@react-native-community/async-storage';
// // import Splash from 'src/screens/Splash';
// // import Language from 'src/screens/Language';
// // import UserFlow from 'src/screens/UserFlow';

// // const optionNavigator: StackNavigationOptions = {
// //   headerShown: false,
// // };

// // if (
// //   Platform.OS === 'android' &&
// //   UIManager.setLayoutAnimationEnabledExperimental
// // ) {
// //   UIManager.setLayoutAnimationEnabledExperimental(true);
// // }
// // Sound.setCategory('Playback');
// // const MainNavigation = memo(() => {
// //   const [isIntro, setValue, isLoading] = useAsyncStorage(
// //     KEY_ASYNC_STORAGE.IS_INTRO,
// //   );

// //   const {i18n} = useTranslation();

// //   React.useEffect(() => {
// //     (async () => {
// //       const code = await AsyncStorage.getItem('lng');

// //       if (code) {
// //         i18n.changeLanguage(code);
// //       }
// //       if (code === 'sa') {
// //         I18nManager.forceRTL(true);
// //       } else {
// //         I18nManager.forceRTL(false);
// //       }
// //     })();
// //   }, []);

// //   if (isLoading) {
// //     return (
// //       <ContainerCenter>
// //         <StatusBar backgroundColor="transparent" translucent />
// //         <ActivityIndicator />
// //       </ContainerCenter>
// //     );
// //   }

// //   return (
// //     <ApplicationProvider {...eva} theme={eva.light}>
// //       <NavigationContainer>
// //         <StatusBar
// //           backgroundColor="transparent"
// //           translucent
// //           barStyle={'dark-content'}
// //         />
// //         <Navigator
// //           screenOptions={optionNavigator}
// //           //initialRouteName={isIntro ? 'Home' : 'Intro'}
// //           initialRouteName={'Splash'}
// //           >
// //           {/* <Screen name={ROUTERS.Intro} component={Intro} />
// //           <Screen name={ROUTERS.Home} component={Home} />
// //           <Screen name={ROUTERS.PlayGame} component={PlayGame} />
// //           <Screen name={ROUTERS.Learn} component={Learn} />
// //           <Screen name={ROUTERS.LearnAlphabet} component={LearnAlphabet} />
// //           <Screen name={ROUTERS.LearnNumber} component={LearnNumber} />
// //           <Screen name={ROUTERS.Draw} component={Draw} />
// //           <Screen
// //             name={ROUTERS.AnimalWithAlphabet}
// //             component={AnimalWithAlphabet}
// //           />
// //           <Screen name={ROUTERS.Result} component={Result} /> */}
// //           <Screen name={ROUTERS.Splash} component={Splash} />
// //           <Screen name={ROUTERS.Language} component={Language} />
// //           <Screen name={ROUTERS.UserFlow} component={UserFlow} />
// //         </Navigator>
// //       </NavigationContainer>
// //     </ApplicationProvider>
// //   );
// // });

// // export default MainNavigation;

import React from 'react';
import Splash from 'src/screens/Splash';
import Language from 'src/screens/Language';
import UserFlow from 'src/screens/UserFlow';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {
  NavigationContainer,
  Navigator,
  Screen,
  ROUTERS,
} from 'src/ultis/navigations';
import { StatusBar, Text, View } from 'react-native';
import Registration from 'src/screens/Registration';
import Login from 'src/screens/Login';
import ForgotPassword from 'src/screens/ForgotPassword';
import OTP from 'src/screens/OTP';
import Congo from 'src/screens/Congo';
import OTP2 from 'src/screens/OTP2';
import MenuScreen from 'src/screens/MenuScreen';
import EnglishProduct from 'src/screens/Sidebar/EnglishProduct';
import EnglishProductWithImage from 'src/screens/Sidebar/EnglishProductWithImage';
import Hindi from 'src/screens/Sidebar/Hindi';
import HindiProductWithImage from 'src/screens/Sidebar/HindiProductWithImage';
import HindiConsonants from 'src/screens/Sidebar/HindiConsonants';
import HindiVowels from 'src/screens/Sidebar/HindiVowels';
import Urdu from 'src/screens/Sidebar/Urdu';
import UrduAlphabets from 'src/screens/Sidebar/UrduAlphabets';
import UrduNumbers from 'src/screens/Sidebar/UrduNumbers';
import UrduProductWithImage from 'src/screens/Sidebar/UrduProductWithImage';
import NumberProduct from 'src/screens/Sidebar/NumberProduct';
import NumberProductWithImage from 'src/screens/Sidebar/NumberProductWithImage';
import AnimalsName from 'src/screens/Sidebar/AnimalsName';
import AnimalsNameWithImage from 'src/screens/Sidebar/AnimalsNameWithImage';
import FruitsName from 'src/screens/Sidebar/FruitsName';
import FruitsNameWithImage from 'src/screens/Sidebar/FruitsNameWithImage';
import ColoursName from 'src/screens/Sidebar/ColoursName';
import ColoursNameWithImage from 'src/screens/Sidebar/ColoursNameWithImage';
import ShapesName from 'src/screens/Sidebar/ShapesName';
import ShapesNameWithImage from 'src/screens/Sidebar/ShapesNameWithImage';
import TableList from 'src/screens/Sidebar/TableList';
import TableWithSound from 'src/screens/Sidebar/TableWithSound';
import BodyParts from 'src/screens/Sidebar/BodyParts';
import MaleBodyParts from 'src/screens/Sidebar/MaleBodyParts';
import FemaleBodyParts from 'src/screens/Sidebar/FemaleBodyParts';
import MaleBodyPartsWithImage from 'src/screens/Sidebar/MaleBodyPartsWithImage';
import FemaleBodyPartsWithImage from 'src/screens/Sidebar/FemaleBodyPartsWithImage';
import QuestionAnswer from 'src/screens/Sidebar/QuestionAnswer';
import VehicleQuestionAnswer from 'src/screens/Sidebar/VehicleQuestionAnswer';
import AnimalQuestionAnswer from 'src/screens/Sidebar/AnimalQuestionAnswer';
import FruitQuestionAnswer from 'src/screens/Sidebar/FruitQuestionAnswer';
import ColourQuestionAnswer from 'src/screens/Sidebar/ColourQuestionAnswer';
import VegetableQuestionAnswer from 'src/screens/Sidebar/VegetableQuestionAnswer';
import ShapeQuestionAnswer from 'src/screens/Sidebar/ShapeQuestionAnswer';


const MainNavigation = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
      <StatusBar
          backgroundColor="transparent"
         translucent
          barStyle={'dark-content'}
        />
        <Navigator>
          <Screen name={ROUTERS.Splash} component={Splash} options={{ headerShown: false }} />
          <Screen name={ROUTERS.Language} component={Language} options={{ headerShown: false }} />
          <Screen name={ROUTERS.UserFlow} component={UserFlow} options={{ headerShown: false }} />
          <Screen name={ROUTERS.Registration} component={Registration} options={{ headerShown: false }} />
          <Screen name={ROUTERS.Login} component={Login} options={{ headerShown: false }} />
          <Screen name={ROUTERS.ForgotPassword} component={ForgotPassword} options={{ headerShown: false }} />
          <Screen name={ROUTERS.OTP} component={OTP} options={{ headerShown: false }} />
          <Screen name={ROUTERS.OTP2} component={OTP2} options={{ headerShown: false }} />
          <Screen name={ROUTERS.Congo} component={Congo} options={{ headerShown: false }} />
          <Screen name={ROUTERS.MenuScreen} component={MenuScreen} options={{ headerShown: false }} />
          <Screen name={ROUTERS.EnglishProduct} component={EnglishProduct} options={{ headerShown: false }} />
          <Screen name={ROUTERS.EnglishProductWithImage} component={EnglishProductWithImage} options={{ headerShown: false }} />
          <Screen name={ROUTERS.Hindi} component={Hindi} options={{ headerShown: false }} />
          <Screen name={ROUTERS.HindiConsonants} component={HindiConsonants} options={{ headerShown: false }} />
          <Screen name={ROUTERS.HindiVowels} component={HindiVowels} options={{ headerShown: false }} />
          <Screen name={ROUTERS.HindiProductWithImage} component={HindiProductWithImage} options={{ headerShown: false }} />
          <Screen name={ROUTERS.NumberProduct} component={NumberProduct} options={{ headerShown: false }} />
          <Screen name={ROUTERS.NumberProductWithImage} component={NumberProductWithImage} options={{ headerShown: false }} />
          <Screen name={ROUTERS.Urdu} component={Urdu} options={{ headerShown: false }} />
          <Screen name={ROUTERS.UrduAlphabets} component={UrduAlphabets} options={{ headerShown: false }} />
          <Screen name={ROUTERS.UrduNumbers} component={UrduNumbers} options={{ headerShown: false }} />
          <Screen name={ROUTERS.UrduProductWithImage} component={UrduProductWithImage} options={{ headerShown: false }} />
          <Screen name={ROUTERS.AnimalsName} component={AnimalsName} options={{ headerShown: false }} />
          <Screen name={ROUTERS.AnimalsNameWithImage} component={AnimalsNameWithImage} options={{ headerShown: false }} />
          <Screen name={ROUTERS.FruitsName} component={FruitsName} options={{ headerShown: false }} />
          <Screen name={ROUTERS.FruitsNameWithImage} component={FruitsNameWithImage} options={{ headerShown: false }} />
          <Screen name={ROUTERS.ColoursName} component={ColoursName} options={{ headerShown: false }} />
          <Screen name={ROUTERS.ColoursNameWithImage} component={ColoursNameWithImage} options={{ headerShown: false }} />
          <Screen name={ROUTERS.ShapesName} component={ShapesName} options={{ headerShown: false }} />
          <Screen name={ROUTERS.ShapesNameWithImage} component={ShapesNameWithImage} options={{ headerShown: false }} />
          <Screen name={ROUTERS.TableList} component={TableList} options={{ headerShown: false }} />
          <Screen name={ROUTERS.TableWithSound} component={TableWithSound} options={{ headerShown: false }} />
          <Screen name={ROUTERS.BodyParts} component={BodyParts} options={{ headerShown: false }} />
          <Screen name={ROUTERS.MaleBodyParts} component={MaleBodyParts} options={{ headerShown: false }} />
          <Screen name={ROUTERS.MaleBodyPartsWithImage} component={MaleBodyPartsWithImage} options={{ headerShown: false }} />
          <Screen name={ROUTERS.FemaleBodyParts} component={FemaleBodyParts} options={{ headerShown: false }} />
          <Screen name={ROUTERS.FemaleBodyPartsWithImage} component={FemaleBodyPartsWithImage} options={{ headerShown: false }} />
          <Screen name={ROUTERS.QuestionAnswer} component={QuestionAnswer} options={{ headerShown: false }} />
          <Screen name={ROUTERS.VehicleQuestionAnswer} component={VehicleQuestionAnswer} options={{ headerShown: false }} />
          <Screen name={ROUTERS.AnimalQuestionAnswer} component={AnimalQuestionAnswer} options={{ headerShown: false }} />
          <Screen name={ROUTERS.FruitQuestionAnswer} component={FruitQuestionAnswer} options={{ headerShown: false }} />
          <Screen name={ROUTERS.ColourQuestionAnswer} component={ColourQuestionAnswer} options={{ headerShown: false }} />
          <Screen name={ROUTERS.VegetableQuestionAnswer} component={VegetableQuestionAnswer} options={{ headerShown: false }} />
          <Screen name={ROUTERS.ShapeQuestionAnswer} component={ShapeQuestionAnswer} options={{ headerShown: false }} />
        </Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default MainNavigation;
