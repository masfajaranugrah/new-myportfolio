import React from "react";

function CodeBlock({ name, children }: any) {
  return (
    <div className="border rounded-xl border-zinc-800 overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b border-zinc-800 ">
        <h3 className="font-mono text-zinc-400">{name}</h3>
        {/* <p className="cursor-pointer text-zinc-500 hover:text-white transition-colors">Copy</p> */}
      </div>
      <div className="bg-zinc-900 w-full">{children}</div>
    </div>
  );
}

export default CodeBlock;
