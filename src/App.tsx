import { Routes, Route } from "react-router";
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
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";

function App() {
  initializeStore();
  const loggedIn = false;

  return (
    <>
      {loggedIn ? (
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />

          <main className="w-full p-16">
            <Navbar />
            <BreadcrumbComponent />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products">
                  <Route index element={<Products />} />
                  <Route path="/products/:id" element={<Product />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>
        </SidebarProvider>
      ) : (
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;
