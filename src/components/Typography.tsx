import React, {FC, useMemo} from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {Colors, TColorVariant} from 'utils/colors';

const textStyles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: Colors.Black,
  },
  center: {
    textAlign: 'center',
  },
  Regular10: {
    fontSize: 10,
    fontWeight: '400',
  },
  Regular12: {
    fontSize: 12,
    fontWeight: '400',
  },
  Regular14: {
    fontSize: 14,
    fontWeight: '400',
  },
  Regular15: {
    fontSize: 15,
    fontWeight: '400',
  },
  Regular16: {
    fontSize: 16,
    fontWeight: '400',
  },
  Regular17: {
    fontSize: 17,
    fontWeight: '400',
  },
  Regular18: {
    fontSize: 18,
    fontWeight: '400',
  },
  Regular20: {
    fontSize: 20,
    fontWeight: '400',
  },
  Regular24: {
    fontSize: 24,
    fontWeight: '400',
  },
  Bold12: {
    fontSize: 12,
    fontWeight: '700',
  },
  Bold14: {
    fontSize: 14,
    fontWeight: '700',
  },
  Bold15: {
    fontSize: 15,
    fontWeight: '700',
  },
  Bold16: {
    fontSize: 16,
    fontWeight: '700',
  },
  Bold17: {
    fontSize: 17,
    fontWeight: '700',
  },
  Bold18: {
    fontSize: 18,
    fontWeight: '700',
  },
  Bold20: {
    fontSize: 20,
    fontWeight: '700',
  },
  Bold24: {
    fontSize: 24,
    fontWeight: '700',
  },
  Bold32: {
    fontSize: 32,
    fontWeight: '700',
  },
  Bold36: {
    fontSize: 36,
    fontWeight: '700',
  },
  Semibold16: {
    fontSize: 16,
    fontWeight: '600',
  },
  Semibold14: {
    fontSize: 14,
    fontWeight: '600',
  },
  Semibold18: {
    fontSize: 18,
    fontWeight: '600',
  },
  Semibold20: {
    fontSize: 20,
    fontWeight: '600',
  },
  Semibold24: {
    fontSize: 24,
    fontWeight: '600',
  },
});

type TStyle = keyof typeof textStyles;
type TVariant = Exclude<TStyle, 'text' | 'center'>;

interface Props extends TextProps {
  /**
   * Text variant
   * @default 14px black
   * @type 'Regular12' 12px Regular
   * @type 'Regular14' 14px Regular
   * @type 'Regular16' 16px Regular
   * @type 'Bold12' 12px Bold
   * @type 'Bold14' 14px Bold
   * @type 'Bold16' 16px Bold
   * @type 'Bold18' 18px Bold
   * @type 'Bold20' 20px Bold
   * @type 'Bold24' 24px Bold
   * @type 'Bold32' 32px Bold
   * @type 'Bold36' 36px Bold
   * @type 'Semibold16' 16px Semibold
   * @type 'Semibold14' 14px Semibold
   * @type 'Semibold18' 18px Semibold
   * @type 'Semibold20' 20px Semibold
   * @type 'Semibold24' 24px Semibold
   */
  variant?: TVariant;
  color?: TColorVariant;
  center?: boolean;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  lineHeight?: number;
}

export const Typography: FC<Props> = props => {
  const {
    children,
    style,
    color,
    center,
    variant,
    numberOfLines,
    lineHeight,
    ...rest
  } = props;

  const variantStyle = useMemo(
    () => (variant ? textStyles[variant] : {}),
    [variant],
  );

  return (
    <Text
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      style={[
        textStyles.text,
        center && textStyles.center,
        !!color && {color: Colors[color]},
        lineHeight && {lineHeight},
        variantStyle,
        style,
      ]}
      {...rest}>
      {children}
    </Text>
  );
};
