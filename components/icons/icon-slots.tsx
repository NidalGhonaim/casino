import * as React from "react";
import type { SVGProps } from "react";

const IconSlots = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.3}
      d="M11 10.77v8.922h3c0-1.615 1.35-3 3-3h3.75l-2.1 2.616c-2.55 3.154-4.425 6.769-5.4 10.692H23c0-4.385 1.125-8.692 3.375-12.461L29 12.923 26.75 10l-.9.461a10.36 10.36 0 0 1-7.425.693c-.975-.308-1.875-.385-2.85-.385z"
    />
  </svg>
);
export default IconSlots;
