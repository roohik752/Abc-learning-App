import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

export interface MyTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
  category?: 'h-96' | 'h-56' | 'h-40' | 'h-32' | 'h-24' | 'h-16' | 'h-14';
  status?: 'basic' | 'body' | 'white' | 'waring' | 'danger';
  children?: any;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  opacity?: number;
  maxWidth?: number;
  lineHeight?: number;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  none?: boolean;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  underline?: boolean;
  bold?: boolean;
  italic?: boolean;
}
const getLineHeight = (
  category: 'h-96' | 'h-56' | 'h-40' | 'h-32' | 'h-24' | 'h-16' | 'h-14',
): number => {
  switch (category) {
    case 'h-96':
      return 98;
    case 'h-56':
      return 58;
    case 'h-40':
      return 42;
    case 'h-32':
      return 34;
    case 'h-24':
      return 26;
    case 'h-16':
      return 18;
    case 'h-14':
      return 14;
    default:
      return 24;
  }
};

const getFontSize = (
  category: 'h-96' | 'h-56' | 'h-40' | 'h-32' | 'h-24' | 'h-16' | 'h-14',
): number => {
  switch (category) {
    case 'h-96':
      return 96;
    case 'h-56':
      return 56;
    case 'h-40':
      return 40;
    case 'h-32':
      return 32;
    case 'h-24':
      return 24;
    case 'h-16':
      return 16;
    case 'h-14':
      return 14;
    default:
      return 24;
  }
};

const getFontFamily = (
  category: 'h-96' | 'h-56' | 'h-40' | 'h-32' | 'h-24' | 'h-16' | 'h-14',
): 'Atma-SemiBold' | 'Atma-Regular' | 'Atma-Bold' => {
  switch (category) {
    case 'h-96':
      return 'Atma-Bold';
    case 'h-56':
      return 'Atma-Bold';
    case 'h-40':
      return 'Atma-Bold';
    case 'h-32':
      return 'Atma-Bold';
    case 'h-24':
      return 'Atma-Bold';
    case 'h-16':
      return 'Atma-Regular';
    case 'h-14':
      return 'Atma-Regular';
    default:
      return 'Atma-Regular';
  }
};

const getFontWeight = (
  category: 'h-96' | 'h-56' | 'h-40' | 'h-32' | 'h-24' | 'h-16' | 'h-14',
): '700' | '400' | '600' => {
  switch (category) {
    case 'h-96':
      return '700';
    case 'h-56':
      return '700';
    case 'h-40':
      return '700';
    case 'h-32':
      return '700';
    case 'h-24':
      return '700';
    case 'h-16':
      return '400';
    case 'h-14':
      return '400';
    default:
      return '400';
  }
};

export default memo(
  ({
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    marginVertical,
    marginHorizontal,
    opacity,
    uppercase,
    lowercase,
    capitalize,
    none,
    left,
    right,
    center,
    underline,
    bold,
    italic,
    category = 'h-16',
    status = 'basic',
    children,
    maxWidth,
    style,
    ...rest
  }: MyTextProps) => {
    const {i18n} = useTranslation();

    let textAlign: 'left' | 'center' | 'right' | 'auto' | 'justify' | 'left';

    i18n.language === 'sa'
      ? (textAlign = 'left')
      : left
      ? (textAlign = 'left')
      : right
      ? (textAlign = 'right')
      : center
      ? (textAlign = 'center')
      : (textAlign = 'left');

    let textTransform: 'uppercase' | 'lowercase' | 'capitalize' | 'none';

    uppercase
      ? (textTransform = 'uppercase')
      : lowercase
      ? (textTransform = 'lowercase')
      : capitalize
      ? (textTransform = 'capitalize')
      : none
      ? (textTransform = 'none')
      : (textTransform = 'none');

    let textDecorationLine:
      | 'none'
      | 'underline'
      | 'line-through'
      | 'underline line-through';
    underline
      ? (textDecorationLine = 'underline')
      : (textDecorationLine = 'none');

    let fontStyle: 'normal' | 'italic';
    italic ? (fontStyle = 'italic') : (fontStyle = 'normal');

    const getColor = (
      status: 'basic' | 'body' | 'white' | 'waring' | 'danger',
    ): string => {
      switch (status) {
        case 'basic':
          return '#595959';
        case 'body':
          return '#959595';
        case 'white':
          return '#FFFFFF';
        case 'waring':
          return '#FFC62B';
        case 'danger':
          return '#F2564C';
        default:
          return '#FFFFFF';
      }
    };

    return (
      <Text
        style={[
          {
            color: getColor(status),
            fontFamily: getFontFamily(category),
            fontSize: getFontSize(category),
            fontWeight: getFontWeight(category),
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginVertical: marginVertical,
            marginHorizontal: marginHorizontal,
            opacity: opacity,
            textAlign: textAlign,
            maxWidth: maxWidth,
            textTransform: textTransform,
            textDecorationLine: textDecorationLine,
            fontStyle: fontStyle,
          },
          style,
        ]}
        {...rest}>
        {children}
      </Text>
    );
  },
);
