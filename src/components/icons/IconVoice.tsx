import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const IconVoice = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.color || '#000'}
      d="M12 14.5c1.66 0 3-1.34 3-3v-6c0-1.66-1.34-3-3-3s-3 1.34-3 3v6c0 1.66 1.34 3 3 3Zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1v-6Zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92v3.08h2v-3.08c3.39-.49 6-3.39 6-6.92h-2Z"
    />
  </Svg>
);
export default IconVoice;
