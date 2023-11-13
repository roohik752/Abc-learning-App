import React, {useCallback} from 'react';
import ButtonApp from 'src/components/base-ui/ButtonApp';
import {useNavigation} from '@react-navigation/native';
import {ROUTERS} from 'src/ultis/navigations';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {useTranslation} from 'react-i18next';

const ButtonWords = () => {
  const { t } = useTranslation('learn');
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    navigation.navigate(ROUTERS.LearnAlphabet);
  }, []);

  return (
    <ButtonApp
      source={require('src/assets/ABC_Block.png')}
      title={t(`learn_words`)}
      numberLeft={`11 ${t('words_left')}`}
      btnColor={'#FE6230'}
      onPress={onPress}
      backgroundColor={'#E85151'}
      mb={responsiveHeight(6)}
      imgMt={23}
      imgHeight={responsiveHeight(15.6)}
      imgWidth={(responsiveHeight(15.6) / 106) * 204}
    />
  );
};

const ButtonNumber = () => {
  const {t} = useTranslation('learn');
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.navigate(ROUTERS.LearnNumber);
  }, []);

  return (
    <ButtonApp
      source={require('src/assets/BlockNumber.png')}
      title={t('learn_numbers')}
      numberLeft={`5 ${t('numbers_left')}`}
      btnColor={'#009BFE'}
      onPress={onPress}
      backgroundColor={'#7979E0'}
      mb={responsiveHeight(6)}
      imgMt={23}
      imgHeight={responsiveHeight(15.6)}
      imgWidth={(responsiveHeight(15.6) / 106) * 204}
    />
  );
};

export {ButtonWords, ButtonNumber};
