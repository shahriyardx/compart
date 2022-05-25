import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavLink = ({ to, children, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={`px-4 py-3 hover:bg-zinc-400 hover:text-zinc-700 font-semibold ${
        match && "bg-zinc-500 text-white"
      }`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
