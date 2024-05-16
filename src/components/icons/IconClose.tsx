import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const IconClose = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <Path
      d="m8.925 8 4.688-5.587a.142.142 0 0 0-.11-.234H12.08a.291.291 0 0 0-.22.102L7.993 6.888 4.127 2.28a.285.285 0 0 0-.22-.101H2.482a.142.142 0 0 0-.109.234L7.061 8l-4.688 5.588a.142.142 0 0 0 .11.234h1.424a.29.29 0 0 0 .22-.102l3.866-4.61 3.866 4.61a.286.286 0 0 0 .22.102h1.425a.142.142 0 0 0 .109-.234L8.925 8Z"
      fill={props.color || '#fff'}
    />
  </Svg>
);

export default IconClose;
