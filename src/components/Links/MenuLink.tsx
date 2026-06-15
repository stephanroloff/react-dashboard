import { NavLink } from "react-router";

function MenuLink({ children, to }: { children: string; to: string }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "text-tertiary font-bold" : "text-secondary"
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default MenuLink;
