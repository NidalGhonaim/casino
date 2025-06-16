import * as React from "react";
import type { SVGProps } from "react";

const IconVIP = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24.307 26.4h-8.616c-.385 0-.816-.303-.945-.67l-3.795-10.615c-.54-1.522.092-1.99 1.394-1.054l3.575 2.557c.596.413 1.274.202 1.53-.467l1.614-4.3c.513-1.374 1.366-1.374 1.88 0l1.613 4.3c.256.669.934.88 1.521.467l3.355-2.392c1.43-1.027 2.118-.504 1.531 1.155l-3.703 10.367c-.138.349-.569.651-.954.651M14.96 29.164h10.084M17.71 21.836h4.584"
    />
  </svg>
);
export default IconVIP;
