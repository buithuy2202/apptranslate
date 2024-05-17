import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const IconSearch = (props: SvgProps) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <G
      stroke="#CACACA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      clipPath="url(#a)">
      <Path d="M6.417 11.083a4.667 4.667 0 1 0 0-9.333 4.667 4.667 0 0 0 0 9.333ZM12.25 12.25 9.712 9.713" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default IconSearch;
