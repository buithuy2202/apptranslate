import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const IconStop = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.color || '#000'}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Zm4-4H8V8h8v8Z"
    />
  </Svg>
);
export default IconStop;
