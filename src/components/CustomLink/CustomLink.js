import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, className, activeClassName, ...props }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      to={to}
      className={`${className} ${match ? activeClassName : ""}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
