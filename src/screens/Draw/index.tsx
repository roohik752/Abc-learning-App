import React, {useCallback, useMemo, useState} from 'react';
import Container from 'src/components/base-ui/Container';
import ContainerImage from 'src/components/base-ui/ContainerImage';
import {HeaderAppWithHome} from 'src/components/base-ui/HeaderApp';
import {ButtonNext, ButtonPre, ButtonSpeak} from 'src/components/button';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Alphabet, 
  Alphabets, 
  HindiAlphabet2, 
  MarathiAlphabet2, 
  BengaliAlphabet2, 
  GujratiAlphabet2, 
  KannadaAlphabet2, 
  TamilAlphabet2, 
  TeluguAlphabet2, 
  UrduAlphabet2,
} from 'src/data/alphabets';
import {
  Control,
  ContainerSafeView,
  Block,
} from 'src/screens/Draw/components/styledUi';
import {ContainerLottie, ImageGif} from 'src/components/lottie';
import {
  InterfaceNumber, 
  Numbers,
  BengaliNumbers2,
  GujratiNumbers2,
  HindiNumbers2,
  KannadaNumbers2,
  MarathiNumbers2,
  TamilNumbers2,
  TeluguNumbers2,
  UrduNumbers2,
} from 'src/data/numbers';
import {ROUTERS} from 'src/ultis/navigations';
import Sound from 'react-native-sound';
import {useTranslation} from 'react-i18next';
import {ButtonPrimary, Text} from 'src/components';
import {View} from 'react-native';
import {TextSB} from 'src/components/base-ui/TextAtm';

const Draw = () => {
  const {t, i18n} = useTranslation('draw');
  const {navigate} = useNavigation();
  const route = useRoute();
  // @ts-ignore
  const {idAlphabet, idNumber, isAlphabet} = useMemo(() => route.params, [
    route,
  ]);

  const languageAlphabetMap = {
    en: Alphabets,
    ben: BengaliAlphabet2,
    guj: GujratiAlphabet2,
    hi: HindiAlphabet2,
    kan: KannadaAlphabet2,
    ma: MarathiAlphabet2,
    ta: TamilAlphabet2,
    tel: TeluguAlphabet2,
    ur: UrduAlphabet2,
  };
  
  const languageNumberMap = {
    en: Numbers,
    ben: BengaliNumbers2,
    guj: GujratiNumbers2,
    hi: HindiNumbers2,
    kan: KannadaNumbers2,
    ma: MarathiNumbers2,
    ta: TamilNumbers2,
    tel: TeluguNumbers2,
    ur: UrduNumbers2,
  };
  
  const selectedAlphabet = isAlphabet
    ? languageAlphabetMap[i18n.language] || Alphabets
    : languageNumberMap[i18n.language] || Numbers;
  

  let currentAlphabet = Alphabets;
  const dataDraw = useMemo<Array<Alphabet | InterfaceNumber>>(() => {
    // return isAlphabet ? Alphabets : Numbers;
    // return isAlphabet ? i18n.language === 'en' ? Alphabets : HindiAlphabets2 : Numbers;
    return selectedAlphabet;
  }, [isAlphabet]);

  // @ts-ignore
  const [idItem, setIdItem] = useState(isAlphabet ? idAlphabet : idNumber);

  const item = useMemo<Alphabet | InterfaceNumber>(() => {
    return dataDraw[idItem];
  }, [idItem, dataDraw]);

  const isEndNext = useMemo(() => {
    return idItem === dataDraw.length - 1;
  }, [idItem, dataDraw]);
  const isEndPrev = useMemo(() => idItem === 0, [idItem]);

  const onNext = useCallback(() => {
    if (isEndNext) return;
    setIdItem(idItem + 1);
  }, [idItem, isEndNext]);

  const onPrev = useCallback(() => {
    if (isEndPrev) return;
    setIdItem(idItem - 1);
  }, [idItem, isEndPrev]);

  const callbackOnNext = useCallback((idItem) => {
    setIdItem(idItem);
  }, []);

  const onContinue = useCallback(() => {
    navigate(ROUTERS.AnimalWithAlphabet, {
      callbackOnNext: callbackOnNext,
      idItem,
      isAlphabet,
      dataDraw,
    });
  }, [item]);

  const onSpeaker = useCallback(async () => {
    const soundObject = await new Sound(item.sound, (error) => {
      if (!error) {
        soundObject.play();
      }
    });
  }, [item]);

  return (
    <Container>
      <ContainerImage source={require('src/assets/MainBG.png')} />
      <ContainerSafeView>
        <HeaderAppWithHome title={t('let_write')} />
        <ContainerLottie>
          <ImageGif source={item.gif1} onPress={onSpeaker} />
          {isAlphabet && (
            <ImageGif
              // @ts-ignore
              source={item.gif2}
              onPress={onSpeaker}
            />
          )}
        </ContainerLottie>
        {/* <Control>
          {i18n.language === 'en' ? (
            <ButtonPre onPress={onPrev} isEnd={isEndPrev} />
          ) : (
            <ButtonNext onPress={onPrev} isEnd={isEndPrev} />
          )}
          <ButtonSpeak onPress={onSpeaker} />
          {i18n.language === 'en' ? (
            <ButtonNext onPress={onNext} isEnd={isEndNext} />
          ) : (
            <ButtonPre onPress={onNext} isEnd={isEndNext} />
          )}
        </Control> */}
        <Control>
        <ButtonPre onPress={onPrev} isEnd={isEndPrev} />
        <ButtonSpeak onPress={onSpeaker} />
        <ButtonNext onPress={onNext} isEnd={isEndNext} />
        </Control>
        <View
          style={[
            {
              direction: isAlphabet
                ? i18n.language === 'en'
                  ? 'rtl'
                  : 'ltr'
                : 'ltr',
            },
          ]}>
          {isAlphabet ? (
            <Text
              category="h-24"
              center
              marginBottom={12}
              marginTop={32}
              marginHorizontal={24}>
              {t('waiting_for_you')}
            </Text>
          ) : (
            <TextSB size={24} color={'#595959'} center mb={12} mt={32}>
              {item.textEng}
            </TextSB>
          )}
        </View>
        {isAlphabet ? (
          <ButtonPrimary
            style={{alignSelf: 'center', marginBottom: 60}}
            title={t('continue')}
            onPress={onContinue}
          />
        ) : (
          <Block />
        )}
      </ContainerSafeView>
    </Container>
  );
};

export default Draw;
