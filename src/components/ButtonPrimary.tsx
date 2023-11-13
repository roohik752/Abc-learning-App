import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import Svg, {Circle, Ellipse, G, Rect} from 'react-native-svg';

interface ButtonPrimaryProps extends TouchableOpacityProps {
  title: string;
  status?: 'primary' | 'warning' | 'danger';
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  title,
  status = 'primary',
  ...rest
}) => {
  const backgroundColor =
    status === 'warning'
      ? '#FFC62A'
      : status === 'danger'
      ? '#F2564C'
      : '#8871FF';

  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 0,
          right: 0,
          top: 2,
          bottom: 0,
          height: 64,
          borderRadius: 32,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Atma-Bold',
            fontWeight: '700',
            fontSize: 20,
            lineHeight: 32,
            color: 'white',
          }}>
          {title}
        </Text>
      </View>
      <Svg width={262} height={78} fill="none">
        <G>
          <Rect
            x={7}
            y={3}
            width={248}
            height={64}
            rx={32}
            fill={backgroundColor}></Rect>
        </G>

        <Ellipse
          cx={28.577}
          cy={14.053}
          rx={6}
          ry={3}
          transform="rotate(-26.796 28.577 14.053)"
          fill="#fff"
          fillOpacity={0.69}
        />
        <Circle cx={18} cy={22} r={3} fill="#fff" fillOpacity={0.69} />
      </Svg>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
