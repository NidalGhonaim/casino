import * as React from "react";
import type { SVGProps } from "react";

const IconSupport = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <g stroke="#C1C9E5" clipPath="url(#a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 20h.009m3.982 0H20m3.991 0H24"
      />
      <path
        strokeWidth={1.3}
        d="M20 30c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 20 30Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M9 9h22v22H9z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconSupport;
