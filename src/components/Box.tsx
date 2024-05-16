import React, {FC, useMemo} from 'react';
import {StyleProp, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import {Colors, TColorVariant} from 'utils/colors';

const styles = StyleSheet.create({
  block: {},
  fullWidth: {width: '100%'},
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  card: {
    borderRadius: 6,
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  top: {
    justifyContent: 'flex-start',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2,
  },
  wrap: {flexWrap: 'wrap'},
});

interface IBoxProps extends ViewProps {
  m?: number;
  mt?: number;
  ml?: number;
  mb?: number;
  mr?: number;
  mx?: number;
  my?: number;
  p?: number;
  pt?: number;
  pl?: number;
  pb?: number;
  pr?: number;
  px?: number;
  py?: number;
  flex?: number;
  row?: boolean;
  column?: boolean;
  /**
   * Align items to center
   */
  center?: boolean;
  /**
   * Justify content to center
   */
  middle?: boolean;
  /**
   * Align items to flex-start
   */
  left?: boolean;
  /**
   * Align items to flex-end
   */
  right?: boolean;
  /**
   * Justify content to flex-start
   */
  top?: boolean;
  /**
   * Justify content to flex-end
   */
  bottom?: boolean;
  card?: boolean;
  shadow?: boolean;
  color?: TColorVariant;
  space?: 'between' | 'around' | 'evenly';
  wrap?: boolean;
  style?: StyleProp<ViewStyle>;
  fullWidth?: boolean;
}

export const Box: FC<IBoxProps> = props => {
  const {
    flex,
    row,
    column,
    center,
    middle,
    left,
    right,
    top,
    bottom,
    card,
    shadow,
    color,
    space,
    m,
    mt,
    ml,
    mr,
    mb,
    mx,
    my,
    p,
    pt,
    pl,
    pr,
    pb,
    px,
    py,
    wrap,
    style,
    fullWidth,
    children,
    ...rest
  } = props;

  const blockStyles: StyleProp<ViewStyle> = useMemo(
    () => [
      styles.block,
      flex && {flex},
      row && styles.row,
      column && styles.column,
      center && styles.center,
      middle && styles.middle,
      left && styles.left,
      right && styles.right,
      top && styles.top,
      bottom && styles.bottom,
      card && styles.card,
      shadow && styles.shadow,
      fullWidth && styles.fullWidth,
      space && {
        justifyContent: `space-${space}`,
      },
      wrap && styles.wrap,
      m ? {margin: m} : {},
      mt ? {marginTop: mt} : {},
      mb ? {marginBottom: mb} : {},
      ml ? {marginLeft: ml} : {},
      mr ? {marginRight: mr} : {},
      mx ? {marginHorizontal: mx} : {},
      my ? {marginVertical: my} : {},
      p ? {padding: p} : {},
      pt ? {paddingTop: pt} : {},
      pb ? {paddingBottom: pb} : {},
      pl ? {paddingLeft: pl} : {},
      pr ? {paddingRight: pr} : {},
      px ? {paddingHorizontal: px} : {},
      py ? {paddingVertical: py} : {},
      color && {backgroundColor: Colors[color]},
      style && style, // rewrite predefined styles
    ],
    [
      bottom,
      card,
      center,
      color,
      column,
      flex,
      fullWidth,
      left,
      m,
      mb,
      middle,
      ml,
      mr,
      mt,
      mx,
      my,
      p,
      pb,
      pl,
      pr,
      pt,
      px,
      py,
      right,
      row,
      shadow,
      space,
      style,
      top,
      wrap,
    ],
  );

  return (
    <View style={blockStyles} {...rest}>
      {children}
    </View>
  );
};
