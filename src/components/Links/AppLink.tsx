import React from "react";
import { Link } from "react-router";

function AppLink(props: {
  to: string;
  children: React.ReactNode;
  className?: string;
  type: "primary" | "secondary";
}) {
  const { to, children, type, className } = props;

  let typeClass: string | undefined;

  switch (type) {
    case "primary":
      typeClass = "text-blue-500 hover:text-blue-700 hover:underline";
      break;
    case "secondary":
      typeClass = "text-gray-500 hover:text-gray-700 hover:underline";
      break;
  }
  return (
    <Link to={to} className={`${typeClass} ${className}`}>
      {children}
    </Link>
  );
}

export default AppLink;
