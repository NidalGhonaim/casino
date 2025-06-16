import * as React from "react";
import type { SVGProps } from "react";

const MenuIconBars = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M3 6h18M9.49 12H21M3 12h2.99M3 18h18"
    />
  </svg>
);
export default MenuIconBars;
