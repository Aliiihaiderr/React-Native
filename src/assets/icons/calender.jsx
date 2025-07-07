import React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const CalendarIcon = () => (
  <Svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
  >
    <G clipPath="url(#clip0)">
      <Path
        d="M11 9.9157C11 10.374 10.625 10.749 10.1666 10.749H1.83326C1.37492 10.749 0.999939 10.374 0.999939 9.9157V1.58233C0.999939 1.12399 1.37492 0.748989 1.83326 0.748989H10.1666C10.625 0.748989 11 1.12399 11 1.58233V9.9157Z"
        stroke="#292929"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 10.749V0.748989"
        stroke="#292929"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.33337 6.74966V8.08301"
        stroke="#292929"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.66663 6.74966V8.08301"
        stroke="#292929"
        strokeMiterlimit={10}
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

export default CalendarIcon;
