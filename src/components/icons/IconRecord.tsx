import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const IconRecord = (props: SvgProps) => (
  <Svg width={32} height={31} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M4.8 11.2 3.28 7.92 0 6.4l3.28-1.52L4.8 1.6l1.52 3.28L9.6 6.4 6.32 7.92 4.8 11.2Zm20.8-4.8-1-2.2-2.2-1 2.2-1 1-2.2 1 2.2 2.2 1-2.2 1-1 2.2Zm3.2 6.4-1-2.2-2.2-1 2.2-1 1-2.2 1 2.2 2.2 1-2.2 1-1 2.2ZM16 19.2c-1.333 0-2.467-.467-3.4-1.4-.933-.933-1.4-2.067-1.4-3.4V4.8c0-1.333.467-2.467 1.4-3.4C13.533.467 14.667 0 16 0c1.333 0 2.467.467 3.4 1.4.933.933 1.4 2.067 1.4 3.4v9.6c0 1.333-.467 2.467-1.4 3.4-.933.933-2.067 1.4-3.4 1.4Zm0 11.2a1.6 1.6 0 0 1-1.6-1.6v-3.32c-2.773-.373-5.067-1.613-6.88-3.72-1.46-1.697-2.333-3.618-2.617-5.764-.116-.876.613-1.596 1.497-1.596.884 0 1.58.723 1.745 1.591.291 1.54 1.023 2.897 2.195 4.069 1.56 1.56 3.447 2.34 5.66 2.34s4.1-.78 5.66-2.34c1.172-1.172 1.904-2.528 2.195-4.069.165-.868.861-1.591 1.745-1.591.884 0 1.613.72 1.497 1.596-.284 2.146-1.157 4.067-2.617 5.764-1.813 2.107-4.107 3.347-6.88 3.72v3.32a1.6 1.6 0 0 1-1.6 1.6ZM16 16c.453 0 .833-.153 1.14-.46.307-.307.46-.687.46-1.14V4.8c0-.453-.153-.833-.46-1.14A1.548 1.548 0 0 0 16 3.2c-.453 0-.833.153-1.14.46-.307.307-.46.687-.46 1.14v9.6c0 .453.153.833.46 1.14.307.307.687.46 1.14.46Z"
    />
  </Svg>
);
export default IconRecord;
