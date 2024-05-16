import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const IconCopy = (props: SvgProps) => (
  <Svg width={13} height={16} fill="none" {...props}>
    <Path
      fill="#A1A9C8"
      d="M1.272 3.135v7.698a3 3 0 0 0 2.803 2.994l.197.006h5.297a1.8 1.8 0 0 1-1.697 1.2h-4.2a3.6 3.6 0 0 1-3.6-3.6v-6.6a1.8 1.8 0 0 1 1.2-1.698Zm9-2.502a1.8 1.8 0 0 1 1.8 1.8v8.4a1.8 1.8 0 0 1-1.8 1.8h-6a1.8 1.8 0 0 1-1.8-1.8v-8.4a1.8 1.8 0 0 1 1.8-1.8h6Zm0 1.2h-6a.6.6 0 0 0-.6.6v8.4a.6.6 0 0 0 .6.6h6a.6.6 0 0 0 .6-.6v-8.4a.6.6 0 0 0-.6-.6Z"
    />
  </Svg>
);
export default IconCopy;
