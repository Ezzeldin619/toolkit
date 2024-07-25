import { Heading } from "components/heading";
import { ReactNode } from "react";

export function Center({ children }: { children?: ReactNode }) {
  return (
    <body>
      <center className="flex flex-col">
        <Heading />
        {children}
      </center>
    </body>
  );
}
