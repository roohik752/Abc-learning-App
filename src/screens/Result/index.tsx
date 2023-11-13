import React, {memo, useCallback, useEffect} from 'react';
import Container, {ContainerCenter} from 'src/components/base-ui/Container';
import ContainerImage from 'src/components/base-ui/ContainerImage';
import {useNavigation, useRoute} from '@react-navigation/native';
import CogiHappy from 'src/svgs/CogiHappy';
import {
  WrapButtonContinue,
  WrapContainerSafeView,
} from 'src/screens/Result/components/styledUi';
import CogiSad from 'src/svgs/CogiSad';
import {HeaderAppWithHome} from 'src/components/base-ui/HeaderApp';
import {InteractionManager} from 'react-native';
import {useTranslation} from 'react-i18next';
import {ButtonPrimary, Text} from 'src/components';

const Result = memo(() => {
  const {t} = useTranslation(['common', 'draw']);
  const route = useRoute();
  const {goBack} = useNavigation();

  // @ts-ignore
  const {isCorrect, resetQuestion, setFocusState} = route.params;

  const onContinue = useCallback(() => {
    resetQuestion(isCorrect);
    InteractionManager.runAfterInteractions(() => {
      goBack();
    });
  }, []);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setFocusState(false);
    });
  }, []);

  return (
    <Container>
      <ContainerImage source={require('src/assets/BG_Animal.png')} />
      <WrapContainerSafeView>
        <HeaderAppWithHome title={''} hideBack />
        <ContainerCenter>
          {isCorrect ? <CogiHappy /> : <CogiSad />}
          <Text
            category="h-24"
            status={isCorrect ? 'waring' : 'danger'}
            right
            marginBottom={12}
            marginTop={48}>
            {isCorrect ? t('common:you_are_correct') : t('common:wrong_answer')}
          </Text>
          <WrapButtonContinue>
            <ButtonPrimary
              style={{alignSelf: 'center'}}
              title={t('draw:continue')}
              status={isCorrect ? 'warning' : 'danger'}
              onPress={onContinue}
            />
          </WrapButtonContinue>
        </ContainerCenter>
      </WrapContainerSafeView>
    </Container>
  );
});

export default Result;
