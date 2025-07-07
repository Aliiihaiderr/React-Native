import React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const ClockIcon = () => (
  <Svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
  >
    <G clipPath="url(#clip0)">
      <Path
        d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
        stroke="#292929"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.00006 3.00098V6.00098L8.00006 7.00098"
        stroke="#292929"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect width={12} height={12} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ClockIcon;
