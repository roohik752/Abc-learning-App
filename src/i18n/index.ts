import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-community/async-storage';
import dayjs from 'dayjs';
import 'dayjs/locale/en';


//en
import common from './english/common.json';
import intro from './english/intro.json';
import home from './english/home.json';
import learn from './english/learn.json';
import draw from './english/draw.json';

//ben
import common_ben from './bengali/common.json';
import intro_ben from './bengali/intro.json';
import home_ben from './bengali/home.json';
import learn_ben from './bengali/learn.json';
import draw_ben from './bengali/draw.json';

//guj
import common_guj from './gujrati/common.json';
import intro_guj from './gujrati/intro.json';
import home_guj from './gujrati/home.json';
import learn_guj from './gujrati/learn.json';
import draw_guj from './gujrati/draw.json';

//hi
import common_hi from './hindi/common.json';
import intro_hi from './hindi/intro.json';
import home_hi from './hindi/home.json';
import learn_hi from './hindi/learn.json';
import draw_hi from './hindi/draw.json';

//kan
import common_kan from './kannada/common.json';
import intro_kan from './kannada/intro.json';
import home_kan from './kannada/home.json';
import learn_kan from './kannada/learn.json';
import draw_kan from './kannada/draw.json';

//ma
import common_ma from './marathi/common.json';
import intro_ma from './marathi/intro.json';
import home_ma from './marathi/home.json';
import learn_ma from './marathi/learn.json';
import draw_ma from './marathi/draw.json';

//ta
import common_ta from './tamil/common.json';
import intro_ta from './tamil/intro.json';
import home_ta from './tamil/home.json';
import learn_ta from './tamil/learn.json';
import draw_ta from './tamil/draw.json';

//tel
import common_tel from './telugu/common.json';
import intro_tel from './telugu/intro.json';
import home_tel from './telugu/home.json';
import learn_tel from './telugu/learn.json';
import draw_tel from './telugu/draw.json';

//ur
import common_ur from './urdu/common.json';
import intro_ur from './urdu/intro.json';
import home_ur from './urdu/home.json';
import learn_ur from './urdu/learn.json';
import draw_ur from './urdu/draw.json';

export const defaultNS = 'common';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      intro: typeof intro;
      home: typeof home;
      learn: typeof learn;
      draw: typeof draw;
    };
  }
}

export const resources = {
  en: {
    common: common,
    intro: intro,
    home: home,
    learn: learn,
    draw: draw,
  },
  ben: {
    common: common_ben,
    intro: intro_ben,
    home: home_ben,
    learn: learn_ben,
    draw: draw_ben,
  },
  guj: {
    common: common_guj,
    intro: intro_guj,
    home: home_guj,
    learn: learn_guj,
    draw: draw_guj,
  },
  hi: {
    common:common_hi,
    intro:intro_hi,
    home:home_hi,
    learn:learn_hi,
    draw:draw_hi,

  },
  kan: {
    common: common_kan,
    intro: intro_kan,
    home: home_kan,
    learn: learn_kan,
    draw: draw_kan,
  },
  ma: {
    common: common_ma,
    intro: intro_ma,
    home: home_ma,
    learn: learn_ma,
    draw: draw_ma,
  },
  ta: {
    common: common_ta,
    intro: intro_ta,
    home: home_ta,
    learn: learn_ta,
    draw: draw_ta,
  },
  tel: {
    common: common_tel,
    intro: intro_tel,
    home: home_tel,
    learn: learn_tel,
    draw: draw_tel,
  },
  ur: {
    common: common_ur,
    intro: intro_ur,
    home: home_ur,
    learn: learn_ur,
    draw: draw_ur,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  compatibilityJSON: 'v3',
  defaultNS,
  resources,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
});

i18n.on('languageChanged', async (lng) => {
  dayjs.locale(lng);
  await AsyncStorage.setItem('lng', lng);
});
