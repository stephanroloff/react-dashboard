import { Link, useLocation } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Fragment } from "react/jsx-runtime";

function BreadcrumbComponent() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const pathnamesWithId = pathnames.map((name) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    id: crypto.randomUUID(),
  }));

  return (
    <Breadcrumb className="pb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link className="cursor-pointer" to="/">
            Home
          </Link>
        </BreadcrumbItem>
        {pathnamesWithId.length > 0 && <BreadcrumbSeparator />}
        {pathnamesWithId.length > 0 &&
          pathnamesWithId.map(({ name, id }, index) => (
            <Fragment key={id}>
              <BreadcrumbItem>
                <Link
                  className="cursor-pointer"
                  to={`/${pathnamesWithId
                    .slice(0, index + 1)
                    .map(({ name }) => name.toLowerCase())
                    .join("/")}`}
                >
                  {name}
                </Link>
              </BreadcrumbItem>
              {index < pathnamesWithId.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadcrumbComponent;
