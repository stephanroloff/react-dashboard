import Spacer from "../components/Spacer";
import H1 from "../components/Headings/H1";
import { useNavigate, useParams } from "react-router";
import Button from "../components/Buttons/Button";
import PageTransition from "@/components/PageTransition";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleBackToProducts() {
    navigate("/products");
  }

  return (
    <PageTransition>
      <H1>Product {id}</H1>
      <Spacer height={20} />
      <Button type="primary" onClick={handleBackToProducts}>
        Back to Products
      </Button>
    </PageTransition>
  );
}

export default Product;
