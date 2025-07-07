import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronLeft = ({ size = 24, color = 'black' }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M15 18l-6-6 6-6"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ChevronLeft;
