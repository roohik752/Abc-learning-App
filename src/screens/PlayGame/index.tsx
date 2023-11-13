import React, {memo, useCallback, useState} from 'react';
import ContainerImage from 'src/components/base-ui/ContainerImage';
import Container, {ContainerSafeView} from 'src/components/base-ui/Container';
import HeaderApp from 'src/components/base-ui/HeaderApp';
import {TextB} from 'src/components/base-ui/TextAtm';
import AnswerItem from 'src/screens/PlayGame/components/AnswerItem';
import {
  Content,
  ListAnswer,
  WrapButtonSpeakerWord,
} from 'src/screens/PlayGame/components/styledUI';
import {Animal, Animals} from 'src/data/animals';
import {useNavigation} from '@react-navigation/native';
import {ROUTERS} from 'src/ultis/navigations';
import Sound from 'react-native-sound';
import {InteractionManager} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Text} from 'src/components';

interface QuestionAnswer {
  answers: Array<Animal>;
  correct: Animal;
}

const randomQuestion = (_arrays: Array<Animal>): QuestionAnswer => {
  let result: Array<Animal> = [];
  let arrays = [..._arrays];
  for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * arrays.length);
    let item = arrays[index];
    result.push(item);
    arrays.splice(index, 1);
  }
  let item = result[Math.floor(Math.random() * result.length)];
  return {
    answers: result,
    correct: item,
  };
};

const PlayGame = memo(() => {
  const {t} = useTranslation();
  const {navigate} = useNavigation();
  const [{answers, correct}, setQuestion] = useState(randomQuestion(Animals));
  const [isAnswers, setIsAnswer] = useState(false);
  const [focusState, setFocusState] = useState(true);
  // const txt = correct.name;

  const onSpeaker = useCallback(async () => {
    const soundObject = await new Sound(correct.sound, (error) => {
      if (!error) {
        soundObject.play((success) => {});
      }
    });
  }, [correct]);

  const resetQuestion = useCallback(() => {
    setQuestion(randomQuestion(Animals));
    setIsAnswer(false);
    setFocusState(true);
  }, []);

  const goResult = useCallback((_isCorrect: boolean) => {
    setIsAnswer(true);
    InteractionManager.runAfterInteractions(() => {
      setTimeout(() => {
        navigate(ROUTERS.Result, {
          isCorrect: _isCorrect,
          resetQuestion: resetQuestion,
          setFocusState: setFocusState,
        });
      }, 1000);
    });
  }, []);

  return (
    <Container>
      <ContainerImage source={require('src/assets/MainBG.png')} />
      <ContainerSafeView>
        <HeaderApp title={''} />
        <Content>
          <Text category="h-24" status="body" center marginHorizontal={24}>
            {t('can_you_choose')}
          </Text>
          <ListAnswer>
            {focusState &&
              answers.map((item) => {
                return (
                  <AnswerItem
                    id={item.id}
                    lottie={item.lottie}
                    correctId={correct.id}
                    key={item.id}
                    goResult={goResult}
                    disable={isAnswers}
                  />
                );
              })}
          </ListAnswer>
          <WrapButtonSpeakerWord text={correct.name} onPress={onSpeaker} />
          {/* <WrapButtonSpeakerWord text={t(correct.name)} onPress={onSpeaker} /> */}
        </Content>
      </ContainerSafeView>
    </Container>
  );
});

export default PlayGame;
