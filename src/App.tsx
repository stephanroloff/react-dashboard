import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import Products from "./pages/Products.tsx";
import Product from "./pages/Product.tsx";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar.tsx";
import { AppSidebar } from "./components/Dashboard/app-sidebar.tsx";
import Navbar from "./components/Navbar.tsx";
import BreadcrumbComponent from "./components/Breadcrumb.tsx";
import { initializeStore } from "./store/initialize.tsx";
import { AnimatePresence } from "motion/react";
import { useAuthSession } from "./supabase/useAuthSession.tsx";
import AuthLayout from "./components/Layouts/AuthLayout.tsx";
import { LoginForm } from "./components/Login/LoginForm.tsx";
import { SignUpForm } from "./components/SignUp/SignUpForm.tsx";
import { AddEmailForm } from "./components/ResetPassword/AddEmailForm.tsx";
import { ComparePasswordForm } from "./components/ResetPassword/ComparePasswordForm.tsx";

function App() {
  const { authSession, isRecovery } = useAuthSession();

  useEffect(() => {
    initializeStore();
  }, []);

  return (
    <>
      {authSession && !isRecovery && (
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />

          <main className="w-full p-16 relative max-[768px]:px-[28px]">
            <Navbar />
            <BreadcrumbComponent />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products">
                  <Route index element={<Products />} />
                  <Route path="/products/:id" element={<Product />} />
                </Route>
                <Route path="/login" element={<Navigate to="/" />} />
                <Route path="/sign-up" element={<Navigate to="/" />} />
                <Route path="/reset-password" element={<Navigate to="/" />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>
        </SidebarProvider>
      )}

      {authSession && isRecovery && (
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Navigate to="/reset-password" />} />
            <Route path="/reset-password" element={<ComparePasswordForm />} />
          </Route>
        </Routes>
      )}

      {!authSession && (
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<LoginForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/sign-in" element={<LoginForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
            <Route path="/reset-password" element={<AddEmailForm />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
