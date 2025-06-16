import * as React from "react";
import type { SVGProps } from "react";

const IconUser = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M20.11 21a1 1 0 0 0-.22 0A2.99 2.99 0 0 1 17 18.005 3 3 0 0 1 20 15c1.655 0 3 1.347 3 3.005A3 3 0 0 1 20.11 21M26 26.606C24.415 28.096 22.314 29 20 29s-4.416-.904-6-2.394c.089-.86.623-1.7 1.575-2.358 2.44-1.664 6.428-1.664 8.849 0 .953.658 1.487 1.499 1.576 2.358"
    />
    <path
      stroke="#C1C9E5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 29a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
    />
  </svg>
);
export default IconUser;
