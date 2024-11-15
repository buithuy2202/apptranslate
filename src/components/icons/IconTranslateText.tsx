import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const IconTranslateText = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      fill={props.color || '#6073BC'}
      d="M4.377 2.708c-1.035 0-1.875.84-1.875 1.875v2.25a1.125 1.125 0 1 1-2.25 0v-2.25A4.125 4.125 0 0 1 4.377.458h2.25a1.125 1.125 0 1 1 0 2.25h-2.25Zm0 19.5a1.876 1.876 0 0 1-1.875-1.874v-2.25a1.125 1.125 0 1 0-2.25 0v2.25a4.125 4.125 0 0 0 4.125 4.125h2.25a1.125 1.125 0 1 0 0-2.25h-2.25ZM22.002 4.585c0-1.035-.84-1.875-1.875-1.875h-2.25a1.125 1.125 0 0 1 0-2.25h2.25a4.125 4.125 0 0 1 4.125 4.124v2.25a1.125 1.125 0 1 1-2.25 0v-2.25Zm-1.875 17.625c1.035 0 1.875-.84 1.875-1.875v-2.25a1.125 1.125 0 0 1 2.25 0v2.25a4.125 4.125 0 0 1-4.125 4.125h-2.25a1.125 1.125 0 0 1 0-2.25h2.25ZM7.002 4.959a1.125 1.125 0 0 0-1.125 1.125v1.5a1.125 1.125 0 0 0 2.25 0v-.375h3v10.5h-.375a1.125 1.125 0 1 0 0 2.25h3a1.125 1.125 0 1 0 0-2.25h-.375v-10.5h3v.375a1.125 1.125 0 0 0 2.25 0v-1.5a1.125 1.125 0 0 0-1.125-1.125h-10.5Z"
    />
  </Svg>
);
export default IconTranslateText;
