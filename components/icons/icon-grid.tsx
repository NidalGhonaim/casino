import * as React from "react";
import type { SVGProps } from "react";

const IconGrid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M11 21.75h7a.25.25 0 0 1 .25.25v7a.25.25 0 0 1-.25.25h-7a.25.25 0 0 1-.25-.25v-7a.25.25 0 0 1 .25-.25Zm11 0h7a.25.25 0 0 1 .25.25v7a.25.25 0 0 1-.25.25h-7a.25.25 0 0 1-.25-.25v-7a.25.25 0 0 1 .25-.25Zm-11-11h7a.25.25 0 0 1 .25.25v7a.25.25 0 0 1-.25.25h-7a.25.25 0 0 1-.25-.25v-7a.25.25 0 0 1 .25-.25Zm11 0h7a.25.25 0 0 1 .25.25v7a.25.25 0 0 1-.25.25h-7a.25.25 0 0 1-.25-.25v-7a.25.25 0 0 1 .25-.25Z"
    />
  </svg>
);
export default IconGrid;
