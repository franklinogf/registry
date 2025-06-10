"use client";
import { OpenInV0Button } from "./open-in-v0-button";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
export function ShowcaseComponent({
  children,
  name,
  title,
  codeBlock,
}: {
  children?: React.ReactNode;
  name: string;
  title: string;
  codeBlock?: string;
}) {
  return (
    <div className='flex flex-col gap-4 border rounded-lg p-4 min-h-[150px] relative'>
      <div className='flex items-center justify-between'>
        <h2 className='text-sm text-muted-foreground sm:pl-3'>{title}</h2>
        <OpenInV0Button
          name={name}
          className='w-fit'
        />
      </div>
      <div className='min-h-[100px] w-[400px] mx-auto'>{children}</div>
      {codeBlock && (
        <SyntaxHighlighter
          style={darcula}
          language='javascript'
          wrapLines
          showLineNumbers
        >
          {codeBlock}
        </SyntaxHighlighter>
      )}
    </div>
  );
}
