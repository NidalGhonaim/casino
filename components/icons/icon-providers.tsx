import * as React from "react";
import type { SVGProps } from "react";

const IconProviders = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.2}
      d="M12.979 17.685C10.993 16.891 10 16.494 10 16s.993-.89 2.979-1.685l2.808-1.123C17.773 12.397 18.767 12 20 12s2.227.397 4.213 1.191l2.808 1.124C29.007 15.109 30 15.506 30 16s-.993.89-2.979 1.685l-2.808 1.124C22.227 19.603 21.233 20 20 20s-2.227-.397-4.213-1.192z"
    />
    <path
      stroke="#C1C9E5"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="M30 20s-.993.89-2.979 1.685l-2.808 1.124C22.227 23.603 21.233 24 20 24s-2.227-.397-4.213-1.192l-2.808-1.123C10.993 20.891 10 20 10 20M30 24s-.993.89-2.979 1.685l-2.808 1.124C22.227 27.603 21.233 28 20 28s-2.227-.397-4.213-1.192l-2.808-1.123C10.993 24.891 10 24 10 24"
    />
  </svg>
);
export default IconProviders;
