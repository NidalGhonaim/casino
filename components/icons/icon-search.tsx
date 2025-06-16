import * as React from "react";
import type { SVGProps } from "react";

const IconSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.083 14.5a4.583 4.583 0 0 1 4.584 4.583m.604 5.184 3.979 3.983m-1.833-9.167a7.333 7.333 0 1 1-14.667 0 7.333 7.333 0 0 1 14.667 0"
    />
  </svg>
);
export default IconSearch;
