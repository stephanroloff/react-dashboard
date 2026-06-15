import Div from "../components/Div";
import H1 from "../components/Headings/H1";
import P from "../components/Headings/P";
import Spacer from "../components/Spacer";
import PageTransition from "@/components/PageTransition";

function NotFound() {
  return (
    <PageTransition>
      <Div type="content">
        <Spacer height={50} />
        <H1>404 Page Not Found</H1>
        <P>The page you are looking for does not exist.</P>
      </Div>
    </PageTransition>
  );
}

export default NotFound;
