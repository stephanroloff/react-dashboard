import React from "react";

function Button(props: {
  children: React.ReactNode;
  type: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}) {
  const { children, type, className, onClick } = props;

  let typeClass: string | undefined;
  const buttonBaseClass = "cursor-pointer px-4 py-2 rounded-md";

  switch (type) {
    case "primary":
      typeClass = "bg-blue-500 text-white hover:bg-blue-600";
      break;
    case "secondary":
      typeClass =
        "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white";
      break;
  }

  return (
    <button
      className={`${buttonBaseClass} ${typeClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
