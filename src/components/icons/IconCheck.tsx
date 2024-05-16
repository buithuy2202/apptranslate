import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const IconCheck = (props: SvgProps) => (
  <Svg width={18} height={14} fill="none" {...props}>
    <Path
      fill="#000"
      d="M5.8 10.9 1.6 6.7.2 8.1l5.6 5.6 12-12L16.4.3 5.8 10.9Z"
    />
  </Svg>
);
export default IconCheck;
