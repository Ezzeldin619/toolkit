import { AiFillMacCommand } from "react-icons/ai";

export function Heading() {
  return (
    <section>
      <header className="text-4xl flex items-center">
        <AiFillMacCommand className="size-6" />
        <span className="font-bold pl-2">Toolkit</span>
      </header>
    </section>
  );
}
