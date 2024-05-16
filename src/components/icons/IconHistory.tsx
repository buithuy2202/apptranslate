import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const IconHistory = (props: SvgProps) => (
  <Svg width={25} height={28} fill="none" {...props}>
    <Path
      fill={props.color || '#6073BC'}
      d="M24.32 8.751A8.122 8.122 0 0 0 16.198.63H8.442A8.122 8.122 0 0 0 .32 8.751v19.143c0 .038.031.069.069.069l8.817-5.742a5.708 5.708 0 0 1 6.229 0l8.817 5.741c.038 0 .068-.03.068-.068V8.751Z"
    />
  </Svg>
);
export default IconHistory;
