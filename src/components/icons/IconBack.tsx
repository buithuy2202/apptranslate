import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const IconBack = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.color || '#000'}
      d="m17.835 3.87-1.78-1.77-9.89 9.9 9.9 9.9 1.77-1.77L9.705 12l8.13-8.13Z"
    />
  </Svg>
);
export default IconBack;
