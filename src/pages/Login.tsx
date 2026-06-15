import { LoginForm } from "@/components/Login/LoginForm";
import PageTransition from "@/components/PageTransition";
import loginImage from "@/assets/login.webp";

function Login() {
  return (
    <PageTransition>
      <div className="w-full flex items-center justify-center gap-40 h-dvh">
        <div className="w-1/2 flex items-center justify-end">
          <LoginForm className="w-[450px]" />
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

export default Login;
