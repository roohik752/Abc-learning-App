import React, {memo, useCallback} from 'react';
import ButtonApp from 'src/components/base-ui/ButtonApp';
import {useNavigation} from '@react-navigation/native';
import {ROUTERS} from 'src/ultis/navigations';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {useTranslation} from 'react-i18next';

const ButtonLearn = memo(() => {
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    navigation.navigate(ROUTERS.Learn);
  }, []);

  const {t} = useTranslation(['common', 'home']);

  return (
    <ButtonApp
      source={require('src/assets/ABC_Block.png')}
      title={t('common:the_alphabet')}
      numberLeft={`11 ${t('home:words_left')}`}
      mb={responsiveHeight(6)}
      imgMt={23}
      backgroundColor={'#D3BA50'}
      imgHeight={responsiveHeight(15.6)}
      imgWidth={(responsiveHeight(15.6) / 106) * 160}
      btnColor={'#00A100'}
      onPress={onPress}
    />
  );
});

const ButtonPlay = memo(() => {
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    navigation.navigate(ROUTERS.PlayGame);
  }, []);
  const {t} = useTranslation('home');
  return (
    <ButtonApp
      source={require('src/assets/Animals_head.png')}
      title={t('play_game')}
      numberLeft={`7 ${t('puzzles')}`}
      mb={responsiveHeight(11)}
      backgroundColor={'#B4C0FF'}
      imgHeight={responsiveHeight(15.6)}
      imgWidth={(responsiveHeight(15.6) / 127) * 200}
      btnColor={'#0D8CDD'}
      onPress={onPress}
      imgMt={13}
    />
  );
});

export {ButtonLearn, ButtonPlay};
