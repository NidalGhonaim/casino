import * as React from "react";
import type { SVGProps } from "react";

const IconLanguage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <g stroke="#C1C9E5" strokeWidth={1.1} clipPath="url(#a)">
      <path
        strokeLinecap="square"
        d="M19.997 29.09a9.09 9.09 0 1 0 0-18.182 9.09 9.09 0 0 0 0 18.182Z"
      />
      <path
        strokeLinecap="round"
        d="M19.996 29.09q3.636-3.306 3.636-9.09 0-5.786-3.636-9.092Q16.36 14.214 16.359 20t3.637 9.091ZM11.36 17.272h17.272M11.36 22.726h17.273"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M10 10h20v20H10z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconLanguage;
