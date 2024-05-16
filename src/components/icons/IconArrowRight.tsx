import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const IconArrowRight = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.color || '#fff'}
      d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z"
    />
  </Svg>
);
export default IconArrowRight;
