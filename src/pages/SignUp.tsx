import PageTransition from "@/components/PageTransition";
import loginImage from "@/assets/login.webp";
import { SignUpForm } from "@/components/SignUp/SignUpForm";

function SignUp() {
  return (
    <PageTransition>
      <div className="w-full flex items-center justify-center h-dvh max-h-[100vh] overflow-hidden">
        <div className="w-1/2 flex items-center justify-end pr-30">
          <SignUpForm className="w-[450px]" />
        </div>
        <div className="w-1/2 flex items-center justify-start">
          <img
            src={loginImage}
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </PageTransition>
  );
}

export default SignUp;
