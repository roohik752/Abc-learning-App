import React, {useCallback, useMemo, useState} from 'react';
import Container, {ContainerSafeView} from 'src/components/base-ui/Container';
import ContainerImage from 'src/components/base-ui/ContainerImage';
import {HeaderAppWithHome} from 'src/components/base-ui/HeaderApp';
import {ButtonNext, ButtonPre, ButtonSmallSpeak} from 'src/components/button';
import styled from 'styled-components/native';
import {TextB} from 'src/components/base-ui/TextAtm';
import ItemLottie from 'src/components/lottie';
import {useRoute} from '@react-navigation/native';
import {Animal, Animals} from 'src/data/animals';
import {ROUTERS} from 'src/ultis/navigations';
import {Alphabets} from 'src/data/alphabets';
import Sound from 'react-native-sound';
import {useTranslation} from 'react-i18next';
import {ButtonPrimary} from 'src/components';
// import {Audio} from "expo-av";

const AnimalWithAlphabet = () => {
  const {t, i18n} = useTranslation('common');
  const route = useRoute();
  // @ts-ignore
  const [idItem, setIdItem] = useState(route.params.idItem || 0);

  // @ts-ignore
  const animals = useMemo<Animal | []>(() => {
    if (Alphabets[idItem].animals) return Alphabets[idItem].animals;
    return Alphabets[0].animals;
  }, [idItem]);

  const [index, setIndex] = useState(0);

  const animal = useMemo(() => animals[index], [index, animals]);

  const onNext = useCallback(() => {
    //@ts-ignore
    if (index === animals.length - 1) return;
    setIndex(index + 1);
  }, [index]);

  const onPrev = useCallback(() => {
    if (index === 0) return;
    setIndex(index - 1);
  }, [index]);

  const onNextLetter = useCallback(() => {
    if (idItem === Alphabets.length - 1) return;
    // @ts-ignore
    route.params.callbackOnNext(idItem + 1);
    setIdItem(idItem + 1);
    setIndex(0);
  }, [route, idItem]);

  const onSpeaker = useCallback(async () => {
    let source = Animals[animal.id].sound;
    const soundObject = await new Sound(source, (error) => {
      if (!error) {
        soundObject.play();
      }
    });
  }, [animal]);

  return (
    <Container>
      <ContainerImage source={require('src/assets/BG_Animal.png')} />
      <ContainerSafeView>
        <HeaderAppWithHome title={''} keyPressHome={ROUTERS.LearnAlphabet} />
        <ItemLottie source={animal.lottie} />
        <ButtonSmallSpeak onPress={onSpeaker} />
        {/* <Control>
          {i18n.language === 'en' ? (
            <ButtonPre onPress={onPrev} />
          ) : (
            <ButtonNext onPress={onPrev} />
          )}
          <TextB size={40} color={'#595959'}>
            {animal.name}
          </TextB>
          {i18n.language === 'en' ? (
            <ButtonNext onPress={onNext} />
          ) : (
            <ButtonPre onPress={onNext} />
          )}
        </Control> */}
        <Control>
          <ButtonPre onPress={onPrev} />
          <TextB size={40} color={'#595959'}>
            {animal.name}
          </TextB>
          <ButtonNext onPress={onNext} />
        </Control>
        <ButtonPrimary
          style={{
            marginBottom: 65,
            marginTop: 35,
            alignSelf: 'center',
          }}
          title={t('next_letter')}
          onPress={onNextLetter}
        />
      </ContainerSafeView>
    </Container>
  );
};

export default AnimalWithAlphabet;

const Control = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
`;
