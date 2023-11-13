import React, {memo, useRef} from 'react';
import {Animated, I18nManager, Platform, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout, useAsyncStorage} from 'src/hooks';
import {useTranslation} from 'react-i18next';

import Page from './components/Page';
import Dots from 'src/screens/Intro/components/Dots';
import Container from 'src/components/base-ui/Container';
import ContainerImage from 'src/components/base-ui/ContainerImage';

import SvgIntroOne from 'src/svgs/SvgIntroOne';
import SvgIntroTwo from 'src/svgs/SvgIntroTwo';
import SvgIntroThree from 'src/svgs/SvgIntroThree';
import {ROUTERS} from 'src/ultis/navigations';
import {IPage} from 'src/constants/types';
import KEY_ASYNC_STORAGE from 'src/ultis/keyAsyncStorage';
import {IndexPath, Select, SelectItem} from '@ui-kitten/components';
import {languages} from 'src/constants/data';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';

const Intro = memo(() => {
  const {width, top} = useLayout();

  const refSelect = React.useRef<Select>(null);

  const scrollX = useRef(new Animated.Value(0)).current;
  const refScroll = useRef<any>(null);

  const {t, i18n} = useTranslation('intro');
  const navigation = useNavigation();

  const [_, setIsIntro] = useAsyncStorage(KEY_ASYNC_STORAGE.IS_INTRO);
  const [index, setIndex] = React.useState<IndexPath | IndexPath[]>(
    new IndexPath(0),
  );

  React.useEffect(() => {
    (async () => {
      const code = await AsyncStorage.getItem('lng');

      if (code) {
        i18n.changeLanguage(code);
      }

      if (code === 'en') {
        setIndex(new IndexPath(0));
      } else if (code === 'ben') {
        setIndex(new IndexPath(1));
      } else if (code === 'guj') {
        setIndex(new IndexPath(2));
      } else if (code === 'hi') {
        setIndex(new IndexPath(3));
      } else if (code === 'kan') {
        setIndex(new IndexPath(4));
      } else if (code === 'ma') {
        setIndex(new IndexPath(5));
      } else if (code === 'ta') {
        setIndex(new IndexPath(6));
      } else if (code === 'tel') {
        setIndex(new IndexPath(7));
      } else if (code === 'ur') {
        setIndex(new IndexPath(8));
      } 
    })();
  }, []);

  const pages: IPage[] = [
    {
      image: <SvgIntroOne />,
      title: t('title_1'),
      description: t('description_1'),
      button: t('button_1'),
    },
    {
      image: <SvgIntroTwo />,
      title: t('title_2'),
      description: t('description_2'),
      button: t('button_2'),
    },
    {
      image: <SvgIntroThree />,
      title: t('title_3'),
      description: t('description_3'),
      button: t('button_3'),
    },
  ];

  const handleSignIn = React.useCallback(
    (index: number) => {
      navigation.navigate(ROUTERS.Home);

      // if (index === 2) {
      //   setIsIntro(true);
      // } else {
      //   let _refScroll = refScroll.current.getNode();

      //   if (i18n.language === 'sa' && Platform.OS === 'android') {
      //     _refScroll &&
      //       _refScroll.scrollTo({
      //         x: index === 1 ? 0 : width * (index + 1),
      //         y: 0,
      //         animated: true,
      //       });
      //   } else {
      //     _refScroll &&
      //       _refScroll.scrollTo({
      //         x: width * (index + 1),
      //         y: 0,
      //         animated: true,
      //       });
      //   }
      // }
    },
    [width],
  );

  return (
    <Container>
      <ContainerImage source={require('src/assets/MainBG.png')} />
      <Animated.ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        scrollEventThrottle={16}
        //@ts-ignore
        ref={refScroll}
        // onScroll={Animated.event([
        //   {nativeEvent: {contentOffset: {x: scrollX}}},
        // ])}
        >
        {pages.map((item, index) => {
          return (
            <Page item={item} key={index} onPress={() => handleSignIn(index)} />
          );
        })}
      </Animated.ScrollView>
      <Dots scrollX={scrollX} />
      <Select
        ref={refSelect}
        style={[styles.select, {top: top + 16}]}
        size="large"
        //@ts-ignore
        value={languages[index.row].language}
        accessoryRight={() => <View />}
        onSelect={async i => {
          setIndex(i);
          //@ts-ignore
          i18n.changeLanguage(languages[i.row].code);
          RNRestart.Restart();
          refSelect.current?.blur();
          //@ts-ignore
          if (languages[i.row].code === 'sa') {
            I18nManager.forceRTL(true);
          } else {
            I18nManager.forceRTL(false);
          }
        }}>
        {languages.map((item, index) => {
          return <SelectItem key={index} title={item.language} />;
        })}
      </Select>
    </Container>
  );
});

export default Intro;

const styles = StyleSheet.create({
  contentContainerStyle: {
    width: '300%',
    height: '100%',
  },
  select: {
    position: 'absolute',
    right: 16,
    width: 120,
    overflow: 'hidden',
  },
});


// import React, { memo, useRef, useEffect } from 'react';
// import { Animated, I18nManager, Platform, StyleSheet, View } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useLayout, useAsyncStorage } from 'src/hooks';
// import { useTranslation } from 'react-i18next';

// import Page from './components/Page';
// import Dots from 'src/screens/Intro/components/Dots';
// import Container from 'src/components/base-ui/Container';
// import ContainerImage from 'src/components/base-ui/ContainerImage';

// import SvgIntroOne from 'src/svgs/SvgIntroOne';
// import SvgIntroTwo from 'src/svgs/SvgIntroTwo';
// import SvgIntroThree from 'src/svgs/SvgIntroThree';
// import { ROUTERS } from 'src/ultis/navigations';
// import { IPage } from 'src/constants/types';
// import KEY_ASYNC_STORAGE from 'src/ultis/keyAsyncStorage';
// import { IndexPath, Select, SelectItem } from '@ui-kitten/components';
// import { languages } from 'src/constants/data';
// import AsyncStorage from '@react-native-community/async-storage';
// import RNRestart from 'react-native-restart';

// const Intro = memo(() => {
//   const { width, top } = useLayout();

//   const refSelect = useRef<Select>(null);
//   const refScroll = useRef<Animated.ScrollView>(null);

//   const { t, i18n } = useTranslation('intro');
//   const navigation = useNavigation();

//   const [_, setIsIntro] = useAsyncStorage(KEY_ASYNC_STORAGE.IS_INTRO);
//   const [index, setIndex] = React.useState<IndexPath | IndexPath>(
//     getLanguageIndex('en') // Set English as the default language
//   );

//   useEffect(() => {
//     const loadLanguage = async () => {
//       const code = await AsyncStorage.getItem('lng');

//       if (code) {
//         i18n.changeLanguage(code);
//         setIndex(getLanguageIndex(code));
//       }
//     };

//     loadLanguage();
//   }, [i18n]);

//   const getLanguageIndex = (code: string) => {
//     const indexMap: Record<string, number> = {
//       en: 0,
//       ben: 1,
//       guj: 2,
//       hi: 3,
//       kan: 4,
//       ma: 5,
//       ta: 6,
//       tel: 7,
//     };
//     return new IndexPath(indexMap[code] || 0); // Default to English if not found
//   };

//   const pages: IPage[] = [
//     {
//       image: <SvgIntroOne />,
//       title: t('title_1'),
//       description: t('description_1'),
//       button: t('button_1'),
//     },
//     {
//       image: <SvgIntroTwo />,
//       title: t('title_2'),
//       description: t('description_2'),
//       button: t('button_2'),
//     },
//     {
//       image: <SvgIntroThree />,
//       title: t('title_3'),
//       description: t('description_3'),
//       button: t('button_3'),
//     },
//   ];

//   const handleSignIn = (index: number) => {
//     navigation.navigate(ROUTERS.Home);
//   };

//   return (
//     <Container>
//       <ContainerImage source={require('src/assets/MainBG.png')} />
//       <Animated.ScrollView
//         horizontal={true}
//         pagingEnabled={true}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.contentContainerStyle}
//         scrollEventThrottle={16}
//         ref={refScroll}>
//         {pages.map((item, index) => {
//           return (
//             <Page item={item} key={index} onPress={() => handleSignIn(index)} />
//           );
//         })}
//       </Animated.ScrollView>
      
//       <Dots scrollX={scrollX} />
//       <Select
//         ref={refSelect}
//         style={[styles.select, { top: top + 16 }]}
//         size="large"
//         value={languages[index.row].language}
//         accessoryRight={() => <View />}
//         onSelect={async (i) => {
//           setIndex(i);
//           const selectedLanguage = languages[i.row].code;
//           i18n.changeLanguage(selectedLanguage);
//           RNRestart.Restart();
//           refSelect.current?.blur();
//           if (selectedLanguage === 'en') {
//             I18nManager.forceRTL(true);
//           } else {
//             I18nManager.forceRTL(false);
//           }
//         }}>
//         {languages.map((item, index) => {
//           return <SelectItem key={index} title={item.language} />;
//         })}
//       </Select>
//     </Container>
//   );
// });

// export default Intro;

// const styles = StyleSheet.create({
//   contentContainerStyle: {
//     width: '300%',
//     height: '100%',
//   },
//   select: {
//     position: 'absolute',
//     right: 16,
//     width: 120,
//     overflow: 'hidden',
//   },
// });
