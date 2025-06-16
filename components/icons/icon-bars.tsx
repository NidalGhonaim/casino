import * as React from "react";
import type { SVGProps } from "react";

const IconBars = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <path
      stroke="#C1C9E5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 13h18m-18 7h18m-18 7h18"
    />
  </svg>
);
export default IconBars;
