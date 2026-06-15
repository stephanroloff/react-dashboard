import Spacer from "../components/Spacer";
import H1 from "../components/Headings/H1";
import AppLink from "../components/Links/AppLink";
import PageTransition from "@/components/PageTransition";

function Products() {
  return (
    <PageTransition>
      <H1>Products</H1>
      <Spacer height={20} />
      <ul>
        <li>
          <AppLink to="/products/1" type="primary">
            Product 1
          </AppLink>
        </li>
        <li>
          <AppLink to="/products/2" type="primary">
            Product 2
          </AppLink>
        </li>
        <li>
          <AppLink to="/products/3" type="primary">
            Product 3
          </AppLink>
        </li>
      </ul>
    </PageTransition>
  );
}

export default Products;
