import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const IconShare = (props: SvgProps) => (
  <Svg width={13} height={14} fill="none" {...props}>
    <Path
      fill="#A1A9C8"
      d="M10.441.554a2.401 2.401 0 1 1-1.78 4.011L5.535 6.351a2.4 2.4 0 0 1 0 1.435L8.66 9.573a2.401 2.401 0 1 1-.511.892L5.025 8.678a2.401 2.401 0 1 1 0-3.221L8.149 3.67A2.401 2.401 0 0 1 10.441.554Zm0 9.256a1.373 1.373 0 1 0 0 2.745 1.373 1.373 0 0 0 0-2.745ZM3.243 5.696a1.373 1.373 0 1 0 0 2.745 1.373 1.373 0 0 0 0-2.745Zm7.198-4.114a1.373 1.373 0 1 0 0 2.746 1.373 1.373 0 0 0 0-2.746Z"
    />
  </Svg>
);
export default IconShare;
