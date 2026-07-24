import { Outlet } from "react-router";
import PageTransition from "../PageTransition";
import loginImage from "@/assets/login.webp";

export default function AuthLayout() {
  return (
    <PageTransition>
      <div className="w-full flex items-center justify-center h-dvh max-[700px]:gap-[40px] max-[700px]:flex-col-reverse">
        <div className="w-1/2 flex items-center justify-end max-[700px]:h-1/2 max-[700px]:w-full max-[700px]:items-start">
          <div className="w-[690px] flex items-center justify-center px-[20px]">
            <div className="w-full max-w-[450px] pb-[20px] max-[700px]:pb-[40px]">
              <Outlet />
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full flex max-[700px]:w-full max-[700px]:h-1/2">
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
