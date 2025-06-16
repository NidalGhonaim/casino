import * as React from "react";
import type { SVGProps } from "react";

const IconMoney = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M24.4 28.8h-9.6c-2.88 0-4.8-1.482-4.8-4.941V16.94C10 13.482 11.92 12 14.8 12h9.6c2.88 0 4.8 1.482 4.8 4.941v6.918c0 3.459-1.92 4.941-4.8 4.941"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M19.6 23.067a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334M13.6 18v5.333M25.6 18v5.333"
    />
  </svg>
);
export default IconMoney;
