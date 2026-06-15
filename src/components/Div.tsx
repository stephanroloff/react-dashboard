import React from "react";

function Div({
  children,
  className,
  type,
}: {
  children: React.ReactNode;
  className?: string;
  type: "content" | "wide" | "full";
}) {
  let typeClass: string = "";
  if (type === "content") {
    typeClass = "max-w-[var(--content-width)] mx-auto";
  } else if (type === "wide") {
    typeClass = "max-w-[var(--wide-width)] mx-auto";
  } else if (type === "full") {
    typeClass = "w-full";
  }
  return (
    <div className="w-full px-5">
      <div className={`${className} ${typeClass}`}>{children}</div>
    </div>
  );
}

export default Div;
